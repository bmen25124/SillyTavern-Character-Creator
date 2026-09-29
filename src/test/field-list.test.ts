import { describe, expect, test } from 'vitest';
import { buildFieldList, getFieldLabel, selectSentFields } from '../field-list.js';
import { protectMacros, renderPrompt } from '../prompt-render.js';

const render = (template: string, data: Record<string, any>) =>
  renderPrompt(template, data, (content) => content.replace(/\{\{([\s\S]*?)\}\}/g, '[EVALUATED:$1]'));

const field = (label: string, value: string) => ({ label, value, prompt: '' });

// Insertion order deliberately differs from the expected output order.
const fields = {
  alternate_greetings_10: field('Alternate Greeting 10', 'g10'),
  first_mes: field('First Message', 'hello {{user}}'),
  alternate_greetings_2: field('Alternate Greeting 2', 'g2 {{random::a::b}}'),
  name: field('Name', 'Kaelen'),
  description: field('Description', '{{char}} is a scout'),
  alternate_greetings_1: field('Alternate Greeting 1', 'g1'),
};
const draftFields = {
  speechNotes: field('Speech Notes', 'talks {{getvar::mood}}'),
  backstory: field('Backstory {{time}}', ''),
};

describe('buildFieldList', () => {
  test('lists core fields, then greetings by number, then drafts, with ID, label, value and group', () => {
    expect(buildFieldList(fields, draftFields)).toEqual([
      { id: 'name', label: 'Name', value: 'Kaelen', group: 'core' },
      { id: 'description', label: 'Description', value: '{{char}} is a scout', group: 'core' },
      { id: 'first_mes', label: 'First Message', value: 'hello {{user}}', group: 'core' },
      { id: 'alternate_greetings_1', label: 'Alternate Greeting 1', value: 'g1', group: 'alternate_greetings' },
      {
        id: 'alternate_greetings_2',
        label: 'Alternate Greeting 2',
        value: 'g2 {{random::a::b}}',
        group: 'alternate_greetings',
      },
      { id: 'alternate_greetings_10', label: 'Alternate Greeting 10', value: 'g10', group: 'alternate_greetings' },
      { id: 'speechNotes', label: 'Speech Notes', value: 'talks {{getvar::mood}}', group: 'draft' },
      { id: 'backstory', label: 'Backstory {{time}}', value: '', group: 'draft' },
    ]);
  });

  test('handles empty input', () => {
    expect(buildFieldList({}, {})).toEqual([]);
    expect(buildFieldList({ name: field('Name', 'A') })).toEqual([
      { id: 'name', label: 'Name', value: 'A', group: 'core' },
    ]);
  });

  test('renders with IDs and labels, keeping user content verbatim', () => {
    const output = render('{{#each fieldList}}{{id}}: {{label}} = {{value}}\n{{/each}}', {
      fieldList: protectMacros(buildFieldList(fields, draftFields)),
    });

    expect(output).toBe(
      'name: Name = Kaelen\n' +
        'description: Description = {{char}} is a scout\n' +
        'first_mes: First Message = hello {{user}}\n' +
        'alternate_greetings_1: Alternate Greeting 1 = g1\n' +
        'alternate_greetings_2: Alternate Greeting 2 = g2 {{random::a::b}}\n' +
        'alternate_greetings_10: Alternate Greeting 10 = g10\n' +
        'speechNotes: Speech Notes = talks {{getvar::mood}}\n' +
        'backstory: Backstory {{time}} = \n',
    );
  });

  test('does not change how existing `fields` templates render', () => {
    const template =
      '{{#each fields.core as |value key|}}{{key}}={{value}};{{/each}}|' +
      '{{#each fields.alternate_greetings as |value key|}}{{key}}={{value}};{{/each}}|' +
      '{{#each fields.draft as |value key|}}{{key}}={{value}};{{/each}}';
    const fieldsData = protectMacros({
      core: { Name: 'Kaelen', Description: '{{char}} is a scout' },
      alternate_greetings: { alternate_greetings_1: 'g1', alternate_greetings_2: 'g2 {{random::a::b}}' },
      draft: { 'Speech Notes': 'talks {{getvar::mood}}' },
    });
    const expected =
      'Name=Kaelen;Description={{char}} is a scout;|' +
      'alternate_greetings_1=g1;alternate_greetings_2=g2 {{random::a::b}};|' +
      'Speech Notes=talks {{getvar::mood}};';

    expect(render(template, { fields: fieldsData })).toBe(expected);
    expect(
      render(template, { fields: fieldsData, fieldList: protectMacros(buildFieldList(fields, draftFields)) }),
    ).toBe(expected);
  });
});

describe('getFieldLabel', () => {
  test('returns the label of core, greeting and draft fields', () => {
    expect(getFieldLabel('first_mes', fields, draftFields)).toBe('First Message');
    expect(getFieldLabel('alternate_greetings_2', fields, draftFields)).toBe('Alternate Greeting 2');
    expect(getFieldLabel('speechNotes', fields, draftFields)).toBe('Speech Notes');
  });

  test('falls back to the ID for unknown fields', () => {
    expect(getFieldLabel('unknown_field', fields, draftFields)).toBe('unknown_field');
    expect(getFieldLabel('name', {}, {})).toBe('name');
  });

  test('renders a draft label verbatim when protected', () => {
    expect(
      render('{{targetLabel}}', { targetLabel: protectMacros(getFieldLabel('backstory', fields, draftFields)) }),
    ).toBe('Backstory {{time}}');
  });
});

describe('selectSentFields', () => {
  const ids = (record: Record<string, unknown>) => Object.keys(record);

  test('sends every field when dontSendOtherGreetings is off', () => {
    expect(selectSentFields(fields, 'description', false)).toBe(fields);
    expect(selectSentFields(fields, 'alternate_greetings_2', false)).toBe(fields);
  });

  test('skips all alternate greetings for a non-greeting target', () => {
    expect(ids(selectSentFields(fields, 'description', true))).toEqual(['first_mes', 'name', 'description']);
  });

  test('keeps only the target greeting and skips the first message for a greeting target', () => {
    expect(ids(selectSentFields(fields, 'alternate_greetings_2', true))).toEqual([
      'alternate_greetings_2',
      'name',
      'description',
    ]);
  });

  test('fieldList follows the same inclusion rules as fields', () => {
    const sent = selectSentFields(fields, 'alternate_greetings_2', true);
    expect(buildFieldList(sent, draftFields).map((item) => item.id)).toEqual([
      'name',
      'description',
      'alternate_greetings_2',
      'speechNotes',
      'backstory',
    ]);
  });
});
