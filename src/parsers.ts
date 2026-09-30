import { XMLParser, XMLValidator } from 'fast-xml-parser';

const xmlParser = new XMLParser({
  ignoreAttributes: true,
  textNodeName: '#text',
  trimValues: true,
  allowBooleanAttributes: true,
});

export interface ParseOptions {
  schema?: any;
}

function ensureArray(data: any, schema: any) {
  if (!schema || !data || !schema.properties) {
    return;
  }

  for (const key in schema.properties) {
    if (!data.hasOwnProperty(key)) continue;

    const propSchema = schema.properties[key];
    let propData = data[key];

    // Ensure the property is an array if the schema requires it and it's not one already.
    if (propSchema.type === 'array' && !Array.isArray(propData)) {
      propData = [propData];
      data[key] = propData;
    }

    // Recurse into objects or arrays of objects.
    if (propSchema.type === 'object' && typeof propData === 'object' && propData !== null) {
      ensureArray(propData, propSchema);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'object' && Array.isArray(propData)) {
      propData.forEach((item) => ensureArray(item, propSchema.items));
    }

    // Coerce types to match schema, for both single properties and items within an array.
    if (propSchema.type === 'string' && typeof propData !== 'string') {
      data[key] = String(propData);
    } else if (propSchema.type === 'array' && propSchema.items?.type === 'string' && Array.isArray(propData)) {
      data[key] = propData.map(String);
    }
  }
}

const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
const responseOpenTagRegex = /<response(?:\s[^>]*)?>/;
const xmlEntities: Record<string, string> = { '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&apos;': "'" };

function extractLastCodeBlock(content: string): string | null {
  let lastMatch: string | null = null;

  for (const match of content.matchAll(codeBlockRegex)) {
    lastMatch = match[1].trim();
  }

  return lastMatch;
}

/**
 * Unwraps the response only if it is a single code block, so text around or between code blocks is kept.
 */
function unwrapCodeBlock(content: string): string {
  const match = content.match(/^```(?:\w+\n|\n)?([\s\S]*?)```$/);
  return match && !match[1].includes('```') ? match[1].trim() : content;
}

/**
 * Decodes XML text content: CDATA sections are kept verbatim, everything else only gets the standard entities decoded.
 * An unterminated CDATA section runs to the end, and a stray trailing `]]>` is dropped.
 */
function decodeXmlText(text: string): string {
  const decodeEntities = (value: string) =>
    value.replace(/&(?:lt|gt|amp|quot|apos);/g, (entity) => xmlEntities[entity]);
  let rest = text.trim().replace(/]]>$/, '');
  let result = '';

  while (true) {
    const start = rest.indexOf('<![CDATA[');
    if (start === -1) {
      return result + decodeEntities(rest);
    }
    result += decodeEntities(rest.slice(0, start));
    rest = rest.slice(start + '<![CDATA['.length);
    const end = rest.indexOf(']]>');
    if (end === -1) {
      return result + rest;
    }
    result += rest.slice(0, end);
    rest = rest.slice(end + ']]>'.length);
  }
}

/**
 * Extracts the text of a single-field `<response>` element without parsing it as XML, since fields often contain
 * markup like `<START>` or `<b>`. Takes everything between the first `<response>` and the last `</response>`.
 * @returns The response text, or null if there is no `<response>` tag.
 */
function extractXmlResponse(content: string): string | null {
  let start = content.search(responseOpenTagRegex);
  if (start === -1) {
    return null;
  }

  // If the response itself is inside a code block (```xml), use the last code block with a response,
  // so example responses given before the real one (e.g. while thinking) are skipped.
  let isFenced = false;
  let lastFencedStart = -1;
  for (const match of content.matchAll(codeBlockRegex)) {
    if (match.index < start && start < match.index + match[0].length) {
      isFenced = true;
    }
    if (responseOpenTagRegex.test(match[1])) {
      lastFencedStart = match.index;
    }
  }
  if (isFenced && lastFencedStart !== -1) {
    start = lastFencedStart + content.slice(lastFencedStart).search(responseOpenTagRegex);
  }

  const innerStart = start + content.slice(start).match(responseOpenTagRegex)![0].length;
  const end = content.lastIndexOf('</response>');
  let inner: string;
  if (end >= innerStart) {
    inner = content.slice(innerStart, end);
  } else {
    // Missing closing tag (incomplete response). Drop a trailing closing tag that isn't opened inside, like </root>.
    inner = content.slice(innerStart).trimEnd();
    const strayTag = inner.match(/<\/([\w:.-]+)\s*>$/);
    if (strayTag && !inner.includes(`<${strayTag[1]}`)) {
      inner = inner.slice(0, strayTag.index);
    }
  }

  return decodeXmlText(inner).trim();
}

/**
 * Decodes the (possibly truncated) contents of a JSON string value, e.g. from an incomplete `"response": "...`.
 */
function decodeJsonStringFragment(fragment: string): string {
  let text = fragment.trimEnd();
  // Drop the closing quote (and brace, code block end) unless the quote is escaped
  const closing = text.match(/(\\*)"\s*}?\s*(?:```)?$/);
  if (closing && closing[1].length % 2 === 0) {
    text = text.slice(0, closing.index! + closing[1].length);
  }
  // Drop a dangling escape sequence cut off by truncation
  text = text.replace(/(^|[^\\])((?:\\\\)*)\\(?:u[0-9a-fA-F]{0,3})?$/, '$1$2');

  try {
    const escaped = text.replace(/[\u0000-\u001f]/g, (char) => JSON.stringify(char).slice(1, -1));
    return JSON.parse(`"${escaped}"`).trim();
  } catch {
    return text.trim();
  }
}

function extractStringValue(data: any): string {
  if (data === null || data === undefined) {
    return '';
  }
  if (typeof data !== 'object') {
    return String(data).trim();
  }
  if ('#text' in data) {
    return extractStringValue(data['#text']);
  }
  if ('response' in data) {
    return extractStringValue(data.response);
  }
  if ('message' in data) {
    return extractStringValue(data.message);
  }

  const firstValue = Object.values(data)[0];
  return extractStringValue(firstValue);
}

export function parseResponse(
  content: string,
  format: 'xml' | 'json' | 'none',
  options: ParseOptions = {},
): object | string {
  // Extract content from inside code blocks, handling language identifiers
  const codeBlockContent = extractLastCodeBlock(content);
  let cleanedContent = codeBlockContent ?? content.trim();

  try {
    switch (format) {
      case 'xml':
        if (!options.schema) {
          // Single-field output is taken verbatim, it may contain markup or code blocks.
          const xmlResponse = extractXmlResponse(content);
          if (xmlResponse !== null) return xmlResponse;
        }
        // For 'continue' functionality, the XML might be incomplete. We parse what we can.
        // The validator is too strict for partial content, so we bypass it in those cases.
        // A simple heuristic: if it doesn't end with the closing root tag, it's likely partial.
        if (options.schema) {
          const validationResult = XMLValidator.validate(cleanedContent);
          if (validationResult !== true) {
            throw new Error(`Model response is not valid XML: ${validationResult.err.msg}`);
          }
        }
        let parsedXml = xmlParser.parse(cleanedContent);
        if (parsedXml.root) {
          parsedXml = parsedXml.root;
        } else if (parsedXml.response) {
          // Handle simple <response> tag for single-field generation
          return extractStringValue(parsedXml.response);
        }
        if (options.schema) {
          ensureArray(parsedXml, options.schema);
          return parsedXml;
        }
        return extractStringValue(parsedXml);

      case 'json':
        if (!options.schema) {
          // Look for the JSON object first, the response value may contain code blocks.
          const trimmedContent = content.trim();
          const objectStart = trimmedContent.indexOf('{');
          const objectEnd = trimmedContent.lastIndexOf('}');
          if (objectStart !== -1 && objectEnd > objectStart) {
            try {
              return extractStringValue(JSON.parse(trimmedContent.slice(objectStart, objectEnd + 1)));
            } catch {
              // Fall back to code block extraction
            }
          }
        }
        const parsedJson = JSON.parse(cleanedContent);
        return options.schema ? parsedJson : extractStringValue(parsedJson);

      case 'none':
        return unwrapCodeBlock(content.trim());

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    // If parsing fails, it might be because the AI is streaming an incomplete structure.
    // For single-field generation, we can often just return the cleaned text.
    if (format !== 'none' && !options.schema) {
      const xmlResponse = extractXmlResponse(content);
      if (xmlResponse !== null) return xmlResponse;
      // Use the last "response" key, earlier ones may be examples
      const jsonMatch = content.match(/[\s\S]*"response":\s*"([\s\S]*)/);
      if (jsonMatch) return decodeJsonStringFragment(jsonMatch[1]);
    }

    console.error(`Error parsing response in format '${format}':`, error);
    console.error('Raw content received:', content);

    if (format === 'xml') {
      if (error.message.startsWith('Model response is not valid XML:')) {
        throw error;
      }
      throw new Error(`Model response is not valid XML: ${error.message}`);
    }
    if (format === 'json') {
      throw new Error('Model response is not valid JSON.');
    }
    throw new Error(`Failed to parse response as ${format}: ${error.message}`);
  }
}

/**
 * Gets the prefilled incomplete message for continuing generation
 * @param content The current content to continue from
 * @param format The expected format ('xml', 'json', 'none')
 * @returns Prefilled incomplete message in the specified format
 */
export function getPrefilled(content: string, format: 'xml' | 'json' | 'none'): string {
  const trimmedContent = content.trim();
  switch (format) {
    case 'xml':
      // CDATA keeps markup verbatim; an existing `]]>` is split across two sections so it survives the round trip.
      return `<response><![CDATA[${trimmedContent.replaceAll(']]>', ']]]]><![CDATA[>')}`;
    case 'json':
      return `{\n  "response": ${JSON.stringify(trimmedContent).slice(0, -1)}`;
    case 'none':
      return trimmedContent;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}

const jsonResponseStartRegex = /^\{\s*"response"\s*:/;
// Replies that only close the prefilled structure, i.e. add no text
const closingOnlyRegex: Record<'xml' | 'json', RegExp> = {
  json: /^[\s"}]*(?:```\s*)?$/,
  xml: /^\s*(?:]]>)?\s*(?:<\/response>)?\s*(?:```\s*)?$/,
};

/**
 * Checks if a reply to a continue request is a complete response of its own, i.e. the model ignored the prefill.
 */
function isCompleteResponse(reply: string, existing: string, format: 'xml' | 'json' | 'none'): boolean {
  switch (format) {
    case 'xml':
      return responseOpenTagRegex.test(reply);
    case 'json':
      return (
        jsonResponseStartRegex.test(reply.trim()) ||
        Array.from(reply.matchAll(codeBlockRegex)).some((match) => jsonResponseStartRegex.test(match[1].trim()))
      );
    case 'none':
      // No structure to detect, only a reply that repeats the existing text.
      return reply.trim().startsWith(existing);
    default:
      return false;
  }
}

/**
 * Separator between the existing text and a separately written continuation (both trimmed):
 * a blank line after the end of a sentence (`.`, `!`, `?`, `…`, a closing quote or bracket, or `*` closing an action),
 * otherwise a single space.
 */
function getContinuationJoiner(existing: string, addition: string): string {
  if (!existing || !addition) {
    return '';
  }
  return /[.!?…"'”’»)\]*]$/.test(existing) ? '\n\n' : ' ';
}

/**
 * Merges the model's reply to a continue request (sent with the `getPrefilled` prefill) into the existing text.
 * The result always starts with the existing text.
 * @param existing The text that was continued
 * @param reply The model's reply
 * @param format The expected format ('xml', 'json', 'none')
 * @returns The continued text
 */
export function mergeContinuation(existing: string, reply: string, format: 'xml' | 'json' | 'none'): string {
  const trimmedExisting = existing.trim();

  if (format !== 'none' && closingOnlyRegex[format].test(reply)) {
    return trimmedExisting;
  }

  if (!isCompleteResponse(reply, trimmedExisting, format)) {
    // The model continued the prefill
    const continued = String(parseResponse(getPrefilled(existing, format) + reply, format));
    if (continued.startsWith(trimmedExisting)) {
      return continued;
    }
  }

  // The model wrote a response of its own. Keep it as is if it repeats the existing text, otherwise append it.
  const newText = String(parseResponse(reply, format));
  if (newText.startsWith(trimmedExisting)) {
    return newText;
  }
  return trimmedExisting + getContinuationJoiner(trimmedExisting, newText) + newText;
}
