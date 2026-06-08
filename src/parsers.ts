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

function extractLastCodeBlock(content: string): string | null {
  const codeBlockRegex = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let match: RegExpExecArray | null;
  let lastMatch: string | null = null;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    lastMatch = match[1].trim();
  }

  return lastMatch;
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
        const parsedJson = JSON.parse(cleanedContent);
        return options.schema ? parsedJson : extractStringValue(parsedJson);

      case 'none':
        return cleanedContent;

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    // If parsing fails, it might be because the AI is streaming an incomplete structure.
    // For single-field generation, we can often just return the cleaned text.
    if (format !== 'none' && !options.schema) {
      const responseMatch = cleanedContent.match(/<response>([\s\S]*)/);
      if (responseMatch) return responseMatch[1].replace(/<\/[\s\S]*$/, '').trim();
      const jsonMatch = cleanedContent.match(/"response":\s*"([\s\S]*)/);
      if (jsonMatch) return jsonMatch[1].replace(/"\s*}\s*$/, '');
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
      return `<response>${trimmedContent}`;
    case 'json':
      return `{\n  "response": "${trimmedContent.replace(/"/g, '\\"')}`; // Basic escaping
    case 'none':
      return trimmedContent;
    default:
      throw new Error(`Unsupported format specified: ${format}`);
  }
}
