import { describe, expect, test, vi } from 'vitest';
import { z } from 'zod';
import { parseResponse } from '../parsers.js';
import { schemaToExample } from '../schema-to-example.js';
import { createGlobalResponseSchema, FieldSpecificResponseSchema } from '../revise-types.js';

// `makeStructuredRequest` pulls in SillyTavern runtime modules, so replace them with minimal stubs.
const mockSettings = vi.hoisted(() => ({ prompts: {} as Record<string, { label: string; content: string }> }));
vi.mock('sillytavern-utils-lib', () => ({ Generator: class {} }));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: vi.fn() }));
vi.mock('../settings.js', () => ({ settingsManager: { getSettings: () => mockSettings } }));

const { makeStructuredRequest } = await import('../request.js');

const globalSchema = createGlobalResponseSchema(['description', 'personality', 'draft_1'], ['draft_1']);
const globalJsonSchema = z.toJSONSchema(globalSchema);

function parseGlobalXml(xml: string) {
  const parsed = parseResponse(xml, 'xml', { schema: globalJsonSchema });
  const result = globalSchema.safeParse(parsed);
  expect(result.success, JSON.stringify(result.error?.issues)).toBe(true);
  return result.data;
}

describe('revise XML parsing with schema', () => {
  test('parses repeated elements as arrays', () => {
    const xml = [
      '```xml',
      '<root>',
      '<justification><![CDATA[Updated two fields.]]></justification>',
      '<fields_to_change><field>description</field><value><![CDATA[New description]]></value></fields_to_change>',
      '<fields_to_change><field>personality</field><value><![CDATA[New personality]]></value></fields_to_change>',
      '<greetings_to_add><![CDATA[Hello]]></greetings_to_add>',
      '<greetings_to_add><![CDATA[Hi]]></greetings_to_add>',
      '<greetings_to_remove>2</greetings_to_remove>',
      '<greetings_to_remove>3</greetings_to_remove>',
      '</root>',
      '```',
    ].join('\n');

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'Updated two fields.',
      fields_to_change: [
        { field: 'description', value: 'New description' },
        { field: 'personality', value: 'New personality' },
      ],
      greetings_to_add: ['Hello', 'Hi'],
      greetings_to_remove: [2, 3],
    });
  });

  test('parses a single repeated element as an array', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change><field>description</field><value>y</value></fields_to_change>' +
      '<greetings_to_add>Hello</greetings_to_add>' +
      '<greetings_to_remove>2</greetings_to_remove>' +
      '<greetings_to_change><index>1</index><value>Changed</value></greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [{ field: 'description', value: 'y' }],
      greetings_to_add: ['Hello'],
      greetings_to_remove: [2],
      greetings_to_change: [{ index: 1, value: 'Changed' }],
    });
  });

  test('unwraps a single <item> in arrays', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change><item><field>description</field><value>y</value></item></fields_to_change>' +
      '<greetings_to_add><item>Hello</item></greetings_to_add>' +
      '<greetings_to_remove><item>2</item></greetings_to_remove>' +
      '<draft_fields_to_remove><item>draft_1</item></draft_fields_to_remove>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [{ field: 'description', value: 'y' }],
      greetings_to_add: ['Hello'],
      greetings_to_remove: [2],
      draft_fields_to_remove: ['draft_1'],
    });
  });

  test('unwraps multiple <item> elements in arrays', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change>' +
      '<item><field>description</field><value><![CDATA[a]]></value></item>' +
      '<item><field>personality</field><value><![CDATA[b]]></value></item>' +
      '</fields_to_change>' +
      '<greetings_to_add><item>Hello</item><item>Hi</item></greetings_to_add>' +
      '<greetings_to_remove><item>1</item><item>3</item></greetings_to_remove>' +
      '<greetings_to_change><item><index>2</index><value>Changed</value></item></greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [
        { field: 'description', value: 'a' },
        { field: 'personality', value: 'b' },
      ],
      greetings_to_add: ['Hello', 'Hi'],
      greetings_to_remove: [1, 3],
      greetings_to_change: [{ index: 2, value: 'Changed' }],
    });
  });

  test('accepts bare ampersands in text', () => {
    const xml =
      '<root><justification>ok &amp; done</justification>' +
      '<fields_to_change><field>description</field><value>Tom & Jerry &#38; friends</value></fields_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'ok & done',
      fields_to_change: [{ field: 'description', value: 'Tom & Jerry & friends' }],
    });
  });

  test('keeps CDATA content verbatim', () => {
    const xml =
      '<root><justification>ok</justification>' +
      '<fields_to_change><field>description</field><value><![CDATA[Tom & Jerry &amp; <b>friends</b>]]></value></fields_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'ok',
      fields_to_change: [{ field: 'description', value: 'Tom & Jerry &amp; <b>friends</b>' }],
    });
  });

  test('still rejects malformed XML', () => {
    const xml = '<root><justification>ok</justification><fields_to_change><field>description</field></root>';
    expect(() => parseResponse(xml, 'xml', { schema: globalJsonSchema })).toThrow('Model response is not valid XML');
  });

  test('keeps number-like strings verbatim', () => {
    const xml =
      '<root><justification>007</justification>' +
      '<fields_to_change><field>description</field><value>1.50</value></fields_to_change>' +
      '<fields_to_change><field>personality</field><value><![CDATA[ 1e3 ]]></value></fields_to_change>' +
      '<greetings_to_add>  0012  </greetings_to_add>' +
      '<greetings_to_change><index> 2 </index><value>1e3</value></greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: '007',
      fields_to_change: [
        { field: 'description', value: '1.50' },
        { field: 'personality', value: ' 1e3 ' },
      ],
      greetings_to_add: ['0012'],
      greetings_to_change: [{ index: 2, value: '1e3' }],
    });
  });

  test('coerces numbers and booleans per schema', () => {
    const schema = {
      type: 'object',
      properties: {
        count: { type: 'integer' },
        ratio: { type: 'number' },
        flag: { type: 'boolean' },
        ids: { type: 'array', items: { type: 'integer' } },
        bad: { type: 'integer' },
      },
    };
    const xml =
      '<root><count><![CDATA[2]]></count><ratio>1e3</ratio><flag>true</flag>' +
      '<ids><item>1</item><item>02</item></ids><bad>two</bad></root>';

    expect(parseResponse(xml, 'xml', { schema })).toEqual({
      count: 2,
      ratio: 1000,
      flag: true,
      ids: [1, 2],
      bad: 'two',
    });
  });

  test('treats empty list tags as empty lists', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change></fields_to_change>' +
      '<draft_fields_to_remove><item/></draft_fields_to_remove>' +
      '<greetings_to_add/>' +
      '<greetings_to_remove></greetings_to_remove>' +
      '<greetings_to_change>\n  </greetings_to_change>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [],
      draft_fields_to_remove: [],
      greetings_to_add: [],
      greetings_to_remove: [],
      greetings_to_change: [],
    });
  });

  test('drops empty repeated list elements but keeps empty values inside items', () => {
    const xml =
      '<root><justification>x</justification>' +
      '<fields_to_change><field>description</field><value></value></fields_to_change>' +
      '<fields_to_change></fields_to_change>' +
      '<greetings_to_add></greetings_to_add>' +
      '<greetings_to_add>Hi</greetings_to_add>' +
      '</root>';

    expect(parseGlobalXml(xml)).toEqual({
      justification: 'x',
      fields_to_change: [{ field: 'description', value: '' }],
      greetings_to_add: ['Hi'],
    });
  });
});

describe('revise schema examples', () => {
  test('JSON example for the global schema passes validation', () => {
    const example = JSON.parse(schemaToExample(globalJsonSchema, 'json'));
    expect(example.greetings_to_change[0].index).toBe(1);
    expect(example.greetings_to_remove).toEqual([1]);
    expect(globalSchema.safeParse(example).success).toBe(true);
  });

  test('XML example for the global schema parses and passes validation', () => {
    const example = schemaToExample(globalJsonSchema, 'xml');
    parseGlobalXml(`<root>\n${example}\n</root>`);
  });

  test('examples for the field schema pass validation', () => {
    const jsonSchema = z.toJSONSchema(FieldSpecificResponseSchema);
    expect(FieldSpecificResponseSchema.safeParse(JSON.parse(schemaToExample(jsonSchema, 'json'))).success).toBe(true);
    const xml = `<root>\n${schemaToExample(jsonSchema, 'xml')}\n</root>`;
    expect(FieldSpecificResponseSchema.safeParse(parseResponse(xml, 'xml', { schema: jsonSchema })).success).toBe(true);
  });

  test('honors numeric bounds', () => {
    expect(schemaToExample({ type: 'integer', minimum: 3 }, 'json')).toBe('3');
    expect(schemaToExample({ type: 'integer', exclusiveMinimum: 0 }, 'json')).toBe('1');
    expect(schemaToExample({ type: 'integer', exclusiveMinimum: 0.5 }, 'json')).toBe('1');
    expect(schemaToExample({ type: 'number', exclusiveMinimum: 0 }, 'json')).toBe('1');
    expect(schemaToExample({ type: 'integer', maximum: -2 }, 'json')).toBe('-2');
    expect(schemaToExample({ type: 'integer', minimum: -5, maximum: 5 }, 'json')).toBe('0');
  });
});

describe('revise prompt template rendering', () => {
  test('names the template when it uses an unknown variable', async () => {
    mockSettings.prompts.reviseXmlPrompt = {
      label: 'Revise Session (XML Mode)',
      content: 'Hello {{char}}\n{{example_response}}',
    };

    const request = makeStructuredRequest('profile', [], globalSchema, 'GlobalRevision', 'xml', 100);
    await expect(request).rejects.toThrow('Revise Session (XML Mode)');
    await expect(request).rejects.toThrow('"char" not defined');
    await expect(request).rejects.toThrow('example_response, schema');
  });
});
