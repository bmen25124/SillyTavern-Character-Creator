import { XMLParser } from 'fast-xml-parser';

const xmlParser = new XMLParser({
  ignoreAttributes: false, // Keep attributes if needed in the future
  allowBooleanAttributes: true,
});

/**
 * Parses the AI response based on the expected format.
 * @param content The raw response string from the AI.
 * @param format The expected format ('xml', 'json', 'none').
 * @returns The extracted content string.
 * @throws Error if parsing fails or the format is invalid.
 */
export function parseResponse(content: string, format: 'xml' | 'json' | 'none'): string {
  // Remove potential markdown code blocks
  const cleanedContent = content
    .replace(/```(xml|json)?/g, '')
    .replace(/```/g, '')
    .trim();

  try {
    switch (format) {
      case 'xml':
        const parsedXml = xmlParser.parse(cleanedContent);
        // Check multiple possible structures due to AI variability
        const responseValueXml = parsedXml?.response ?? parsedXml?.root?.response ?? parsedXml?.data?.response;
        if (typeof responseValueXml === 'string') {
          return responseValueXml.trim();
        } else if (responseValueXml && typeof responseValueXml['#text'] === 'string') {
          // Handle cases where parser puts content in #text
          return responseValueXml['#text'].trim();
        }
        throw new Error('Invalid XML format: <response> tag content not found or not a string.');

      case 'json':
        const parsedJson = JSON.parse(cleanedContent);
        if (parsedJson && typeof parsedJson.response === 'string') {
          return parsedJson.response.trim();
        }
        throw new Error('Invalid JSON format: "response" key not found or its value is not a string.');

      case 'none':
        return cleanedContent;

      default:
        throw new Error(`Unsupported format specified: ${format}`);
    }
  } catch (error: any) {
    console.error(`Error parsing response in format '${format}':`, error);
    console.error('Raw content received:', content);

    if (format === 'xml' && error.message.includes('Invalid XML')) {
      throw new Error('Model response is not valid XML or does not contain the <response> tag.');
    } else if (format === 'json' && error instanceof SyntaxError) {
      throw new Error('Model response is not valid JSON or does not follow the {"response": "..."} structure.');
    } else {
      throw new Error(`Failed to parse response as ${format}: ${error.message}`);
    }
  }
}
