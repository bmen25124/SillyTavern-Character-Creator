import { describe, expect, test } from 'vitest';
import * as Handlebars from 'handlebars';
import { z } from 'zod';
import {
  DEFAULT_CHAR_CARD_DESCRIPTION,
  DEFAULT_JSON_FORMAT_DESC,
  DEFAULT_NONE_FORMAT_DESC,
  DEFAULT_REVISE_XML_PROMPT,
  DEFAULT_XML_FORMAT_DESC,
} from '../constants.js';
import { parseResponse } from '../parsers.js';
import { schemaToExample } from '../schema-to-example.js';

describe('default prompts', () => {
  test('output format instructions do not ask for code blocks', () => {
    for (const prompt of [DEFAULT_XML_FORMAT_DESC, DEFAULT_JSON_FORMAT_DESC, DEFAULT_NONE_FORMAT_DESC]) {
      expect(prompt).not.toContain('```');
      expect(prompt).not.toContain('triple backticks');
    }
  });

  test('XML output format asks for CDATA', () => {
    expect(DEFAULT_XML_FORMAT_DESC).toContain(
      '<response><![CDATA[Generated content for the field goes here.]]></response>',
    );
    expect(parseResponse('<response><![CDATA[Generated content for the field goes here.]]></response>', 'xml')).toBe(
      'Generated content for the field goes here.',
    );
  });

  test('example dialogue format starts each example with <START>', () => {
    const section = DEFAULT_CHAR_CARD_DESCRIPTION.split('#### 6. Example Dialogue')[1].split('#### 7.')[0];
    const exampleLines = section.split('\n').map((line) => line.trim());
    const userLines = exampleLines.filter((line) => line.startsWith('{{user}}:'));

    expect(userLines).toHaveLength(2);
    for (const userLine of userLines) {
      expect(exampleLines[exampleLines.indexOf(userLine) - 1]).toBe('<START>');
    }
  });

  test('revise XML example is wrapped in <root> and parses back', () => {
    const schema = z.object({
      justification: z.string().describe('Why the changes were made.'),
      response: z.string().describe('The new content & more.'),
    });
    const jsonSchema = z.toJSONSchema(schema);
    const prompt = Handlebars.compile(DEFAULT_REVISE_XML_PROMPT, { noEscape: true, strict: true })({
      schema: JSON.stringify(jsonSchema, null, 2),
      example_response: schemaToExample(jsonSchema, 'xml'),
    });

    const example = prompt.split('**EXAMPLE OF A PERFECT RESPONSE:**')[1];
    expect(example).toMatch(/^\s*```xml\n<root>\n<justification>/);
    expect(example).toMatch(/<\/response>\n<\/root>\n```$/);

    const parsed = parseResponse(example, 'xml', { schema: jsonSchema });
    expect(schema.parse(parsed)).toEqual({
      justification: 'Why the changes were made.',
      response: 'The new content & more.',
    });
  });

  test('revise XML values in CDATA are kept verbatim', () => {
    const schema = z.object({ justification: z.string(), response: z.string() });
    const reply =
      '```xml\n<root>\n<justification><![CDATA[Added "quotes" & tags]]></justification>\n' +
      '<response><![CDATA[<START>\n{{user}}: "Hi & bye"]]></response>\n</root>\n```';

    expect(parseResponse(reply, 'xml', { schema: z.toJSONSchema(schema) })).toEqual({
      justification: 'Added "quotes" & tags',
      response: '<START>\n{{user}}: "Hi & bye"',
    });
  });
});
