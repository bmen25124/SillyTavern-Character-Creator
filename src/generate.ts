import { buildPrompt, BuildPromptOptions, ExtensionSettingsManager, Message } from 'sillytavern-utils-lib';
import { parseResponse, getPrefilled } from './parsers.js';
import { ExtractedData } from 'sillytavern-utils-lib/types';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { name1, st_echo } from 'sillytavern-utils-lib/config';
import { ExtensionSettings, MessageRole, OutputFormat, settingsManager } from './settings.js';

import * as Handlebars from 'handlebars';

export const globalContext = SillyTavern.getContext();

export type CharacterFieldName = 'name' | 'description' | 'personality' | 'scenario' | 'first_mes' | 'mes_example';

export const CHARACTER_FIELDS: CharacterFieldName[] = [
  'name',
  'description',
  'personality',
  'scenario',
  'first_mes',
  'mes_example',
];

export const CHARACTER_LABELS: Record<CharacterFieldName, string> = {
  name: 'Name',
  description: 'Description',
  personality: 'Personality',
  scenario: 'Scenario',
  first_mes: 'First Message',
  mes_example: 'Example Dialogue',
};

export interface CharacterField {
  prompt: string;
  value: string;
  label: string;
}

export interface Session {
  selectedCharacterIndexes: string[];
  selectedWorldNames: string[];
  fields: Record<string, CharacterField>;
  draftFields: Record<string, CharacterField>;
  lastLoadedCharacterId: string;
}

// @ts-ignore
const dumbSettings = new ExtensionSettingsManager<ExtensionSettings>('dumb', {}).getSettings();

export interface RunCharacterFieldGenerationParams {
  profileId: string;
  userPrompt: string;
  buildPromptOptions: BuildPromptOptions;
  continueFrom?: string;
  session: Session;
  allCharacters: Character[];
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  promptSettings: typeof dumbSettings.prompts;
  formatDescription: {
    content: string;
  };
  mainContextList: {
    promptName: string;
    role: MessageRole;
  }[];
  includeUserMacro: boolean;
  maxResponseToken: number;
  targetField: CharacterFieldName | string;
  outputFormat: OutputFormat;
}

export async function runCharacterFieldGeneration({
  profileId,
  userPrompt,
  buildPromptOptions,
  continueFrom,
  session,
  allCharacters,
  entriesGroupByWorldName,
  promptSettings,
  formatDescription,
  mainContextList,
  includeUserMacro,
  maxResponseToken,
  targetField,
  outputFormat,
}: RunCharacterFieldGenerationParams): Promise<string> {
  if (!profileId) {
    throw new Error('No connection profile selected.');
  }
  const profile = globalContext.extensionSettings.connectionManager?.profiles?.find((p: any) => p.id === profileId);
  if (!profile) {
    throw new Error(`Connection profile with ID "${profileId}" not found.`);
  }

  const selectedApi = profile.api ? globalContext.CONNECT_API_MAP?.[profile.api]?.selected : undefined;
  if (!selectedApi) {
    throw new Error(`Could not determine API for profile "${profile.name}".`);
  }

  const templateData: Record<string, any> = {};

  templateData['char'] = session.fields.name.value ?? '{{char}}';
  templateData['user'] = includeUserMacro && name1 ? name1 : '{{user}}';
  templateData['persona'] = '{{persona}}'; // ST going to replace this with the actual persona description

  templateData['targetField'] = targetField;
  templateData['userInstructions'] = Handlebars.compile(userPrompt.trim(), { noEscape: true })(templateData);
  templateData['fieldSpecificInstructions'] = Handlebars.compile(
    session.draftFields[targetField]?.prompt ?? session.fields[targetField as CharacterFieldName]?.prompt,
    { noEscape: true },
  )({
    ...templateData,
    char: targetField === 'mes_example' ? '{{char}}' : templateData.char,
    user: targetField === 'mes_example' ? '{{user}}' : templateData.user,
  });
  templateData['activeFormatInstructions'] = Handlebars.compile(formatDescription.content, { noEscape: true })(
    templateData,
  );

  // Add Definitions of Selected Characters (if enabled and characters selected)
  {
    const charactersData: Array<Character> = [];
    session.selectedCharacterIndexes.forEach((charIndex) => {
      const charIndexNumber = parseInt(charIndex);
      const char = allCharacters[charIndexNumber];
      if (char) {
        charactersData.push(char);
      }
    });

    templateData['characters'] = charactersData;
  }

  // Add Definitions of Selected Lorebooks (World Info)
  {
    const lorebooksData: Record<string, WIEntry[]> = {};
    Object.entries(entriesGroupByWorldName)
      .filter(
        ([worldName, entries]) =>
          entries.length > 0 &&
          session.selectedWorldNames.includes(worldName) &&
          entries.some((entry) => !entry.disable),
      )
      .forEach(([worldName, entries]) => {
        lorebooksData[worldName] = entries.filter((entry) => !entry.disable);
      });

    templateData['lorebooks'] = lorebooksData;
  }

  // Add Current Field Values (if enabled)
  {
    // Separate core fields, alternate greetings, and draft fields for template context
    const coreFields: Record<string, string> = {};
    const alternateGreetingsFields: Record<string, string> = {};
    const draftFields: Record<string, string> = {};

    const isTargetAlternateGreeting = targetField.startsWith('alternate_greetings_');
    const dontSendOtherGreetings = settingsManager.getSettings().contextToSend.dontSendOtherGreetings;

    Object.entries(session.fields).forEach(([fieldName, field]) => {
      // There are 2 case.
      // 1. If the target is non-alternate greeting, we send all fields except alternate greetings.
      // 2. If the target is alternate greeting, we send only the target field and skip all other alternate greetings. We also skip the first message field in this case.
      let shouldSkip = false;
      if (dontSendOtherGreetings) {
        const isAlternateGreeting = fieldName.startsWith('alternate_greetings_');
        if (isTargetAlternateGreeting) {
          // If the target is an alternate greeting, skip all other alternate greetings and first message
          shouldSkip = (isAlternateGreeting && fieldName !== targetField) || fieldName === 'first_mes';
        } else {
          // If the target is not an alternate greeting, skip all alternate greetings and first message
          shouldSkip = isAlternateGreeting;
        }
      }

      if (!shouldSkip) {
        const compiledValue = Handlebars.compile(field.value, { noEscape: true })({
          ...templateData,

          char: fieldName === 'mes_example' ? '{{char}}' : templateData.char,
          user: fieldName === 'mes_example' ? '{{user}}' : templateData.user,
        });

        if (CHARACTER_FIELDS.includes(fieldName as CharacterFieldName)) {
          coreFields[field.label] = compiledValue;
        } else if (fieldName.startsWith('alternate_greetings_')) {
          alternateGreetingsFields[fieldName] = compiledValue;
        }
      }
    });

    Object.entries(session.draftFields || {}).forEach(([_fieldName, field]) => {
      draftFields[field.label] = Handlebars.compile(field.value, { noEscape: true })(templateData);
    });

    const allFields: Record<string, any> = {};
    if (Object.keys(coreFields).length > 0) {
      allFields.core = coreFields;
    }
    if (Object.keys(alternateGreetingsFields).length > 0) {
      allFields.alternate_greetings = alternateGreetingsFields;
    }
    if (Object.keys(draftFields).length > 0) {
      allFields.draft = draftFields;
    }

    templateData['fields'] = allFields;
  }

  const messages: Message[] = [];
  {
    for (const mainContext of mainContextList) {
      // Chat history is exception, since it is not a template
      if (mainContext.promptName === 'chatHistory') {
        const prompt = await buildPrompt(selectedApi, buildPromptOptions);
        if (prompt.warnings && prompt.warnings.length > 0) {
          for (const warning of prompt.warnings) {
            st_echo('warning', warning);
          }
        }
        messages.push(...prompt.result);
        continue;
      }

      let newTemplateData = structuredClone(templateData);
      if (mainContext.promptName === 'stDescription') {
        newTemplateData['char'] = '{{char}}';
        newTemplateData['user'] = '{{user}}';
      }

      const prompt = promptSettings[mainContext.promptName];
      if (!prompt) {
        continue;
      }
      const message: Message = {
        role: mainContext.role,
        content: Handlebars.compile(prompt.content, { noEscape: true })(newTemplateData),
      };
      message.content = message.content.replaceAll('{{user}}', '[[[crec_veryUniqueUserPlaceHolder]]]');
      message.content = message.content.replaceAll('{{char}}', '[[[crec_veryUniqueCharPlaceHolder]]]');
      message.content = globalContext.substituteParams(message.content);
      message.content = message.content.replaceAll('[[[crec_veryUniqueUserPlaceHolder]]]', '{{user}}');
      message.content = message.content.replaceAll('[[[crec_veryUniqueCharPlaceHolder]]]', '{{char}}');
      if (message.content) {
        messages.push(message);
      }
    }

    // If we're continuing from previous content, add it as an assistant message
    if (continueFrom) {
      messages.push({
        role: 'assistant',
        content: getPrefilled(continueFrom, outputFormat),
      });
    }
  }

  // Sanitize messages to only include role and content fields that the API expects
  const sanitizedMessages: Message[] = messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const response = (await globalContext.ConnectionManagerRequestService.sendRequest(
    profileId,
    sanitizedMessages,
    maxResponseToken,
  )) as ExtractedData;

  // For "continue" requests, the model only returns the new part.
  // We must combine the start of the structure with the model's completion to parse it correctly.
  const contentToParse = continueFrom ? getPrefilled(continueFrom, outputFormat) + response.content : response.content;

  const result = parseResponse(contentToParse, outputFormat);

  let finalContent: string;
  if (typeof result === 'string') {
    finalContent = result;
  } else if (typeof result === 'object' && result !== null) {
    // For single-field generation, extract the string from the object.
    if ('response' in result && typeof result.response === 'string') {
      finalContent = result.response;
    } else {
      const firstValue = Object.values(result)[0];
      finalContent = firstValue ? String(firstValue) : '';
    }
  } else {
    finalContent = '';
  }

  return finalContent;
}
