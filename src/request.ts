import { Generator, Message } from 'sillytavern-utils-lib';
import { ExtractedData, StreamResponse } from 'sillytavern-utils-lib/types';
import { z } from 'zod';
import { st_echo } from 'sillytavern-utils-lib/config';
import { PromptEngineeringMode, settingsManager } from './settings.js';
import * as Handlebars from 'handlebars';
import { schemaToExample } from './schema-to-example.js';
import { parseResponse } from './parsers.js';

const generator = new Generator();

async function makeRequest(
  profileId: string,
  prompt: Message[],
  maxTokens: number,
  overridePayload: any,
  streamCallbacks?: {
    onStream: (data: { chunk: string; fullText: string }) => Promise<void> | void;
  },
  signal?: AbortSignal,
): Promise<ExtractedData | undefined> {
  const stream = !overridePayload.json_schema && !!streamCallbacks;
  let previousText = '';

  // Sanitize messages to only include role and content fields that the API expects
  const sanitizedPrompt: Message[] = prompt.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  return new Promise((resolve, reject) => {
    const abortController = new AbortController();

    const combinedSignal = signal ?? abortController.signal;
    if (signal) {
      signal.addEventListener('abort', () => abortController.abort(), { once: true });
    }

    generator.generateRequest(
      {
        profileId,
        prompt: sanitizedPrompt,
        maxTokens,
        custom: { stream, signal: combinedSignal },
        overridePayload,
      },
      {
        abortController,
        onEntry: stream
          ? async (_requestId, streamData) => {
              const text = (streamData as StreamResponse).text;
              if (text && streamCallbacks) {
                await streamCallbacks.onStream({ chunk: text.slice(previousText.length), fullText: text });
                previousText = text;
              }
            }
          : undefined,
        onFinish: (_requestId, data, error) => {
          if (combinedSignal.aborted) {
            return reject(new DOMException('Request aborted by user', 'AbortError'));
          }
          if (error) return reject(error);

          if (data === undefined && error === undefined) {
            if (stream) {
              return resolve({ content: previousText });
            }
            return reject(new DOMException('Request aborted by user', 'AbortError'));
          }
          if (!data) reject(new Error('No data received from LLM'));
          if (error) return reject(error);
          return streamCallbacks ? resolve({ content: previousText }) : resolve(data as ExtractedData);
        },
      },
    );
  });
}

export async function makePlainRequest(
  profileId: string,
  prompt: Message[],
  maxTokens: number,
  signal?: AbortSignal,
): Promise<string> {
  const response = await makeRequest(profileId, prompt, maxTokens, {}, undefined, signal);

  if (!response?.content) {
    throw new Error('Plain request failed to return content.');
  }

  return response.content as string;
}

export async function makeStructuredRequest<T extends z.ZodType<any, any, any>>(
  profileId: string,
  baseMessages: Message[],
  schema: T,
  schemaName: string,
  promptEngineeringMode: PromptEngineeringMode,
  maxResponseToken: number,
  signal?: AbortSignal,
): Promise<z.infer<T>> {
  const settings = settingsManager.getSettings();
  let response: ExtractedData | undefined;
  let parsedContent: any;

  const jsonSchema = z.toJSONSchema(schema);

  if (promptEngineeringMode === 'native') {
    response = await makeRequest(
      profileId,
      baseMessages,
      maxResponseToken,
      {
        json_schema: { name: schemaName, strict: true, value: jsonSchema },
      },
      undefined,
      signal,
    );
    if (!response?.content) {
      throw new Error(`Structured request for ${schemaName} failed to return content.`);
    }
    parsedContent = typeof response.content === 'string' ? JSON.parse(response.content) : response.content;
  } else {
    // Manual prompt engineering for JSON or XML
    const format = promptEngineeringMode as 'json' | 'xml';
    const example = schemaToExample(jsonSchema, format);
    const schemaString = JSON.stringify(jsonSchema, null, 2);
    const promptTemplateKey = format === 'json' ? 'reviseJsonPrompt' : 'reviseXmlPrompt';
    const promptTemplate = settings.prompts[promptTemplateKey]?.content;

    if (!promptTemplate) {
      throw new Error(`Prompt template for mode "${format}" not found.`);
    }

    const templateContext = {
      example_response: example,
      schema: schemaString,
    };

    const resolvedPrompt = Handlebars.compile(promptTemplate, { noEscape: true, strict: true })(templateContext);
    const instructionMessage: Message = { role: 'system', content: resolvedPrompt };

    response = await makeRequest(
      profileId,
      [...baseMessages, instructionMessage],
      maxResponseToken,
      {},
      undefined,
      signal,
    );

    if (!response?.content) {
      throw new Error(`Structured request for ${schemaName} failed to return content.`);
    }

    parsedContent = parseResponse(response.content as string, format, { schema: jsonSchema });
  }

  const validationResult = schema.safeParse(parsedContent);
  if (!validationResult.success) {
    const errorMessage = `Model response failed schema validation for ${schemaName}. Check console for details.`;
    console.error('Zod validation failed:', validationResult.error.issues);
    console.error('Raw content parsed:', parsedContent);
    await st_echo('error', errorMessage);
    throw new Error(errorMessage);
  }

  return validationResult.data;
}
