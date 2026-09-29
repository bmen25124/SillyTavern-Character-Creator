import { describe, expect, test } from 'vitest';
import { protectMacros, renderPrompt } from '../prompt-render.js';

/**
 * Mimics SillyTavern's macro substitution closely enough to catch leaks:
 * known macros resolve to recognizable values, anything else is marked.
 */
function fakeSubstituteParams(content: string): string {
  return content.replace(/\{\{([\s\S]*?)\}\}/g, (_match, body: string) => {
    const macro = body.trim();
    if (macro === 'char') return 'ActiveChatChar';
    if (macro === 'user') return 'PersonaName';
    if (macro === 'persona') return 'Persona text';
    if (macro.startsWith('//')) return '';
    if (macro === 'random::a::b') return 'a';
    return `[EVALUATED:${macro}]`;
  });
}

const render = (template: string, data: Record<string, any>) => renderPrompt(template, data, fakeSubstituteParams);

const MACROS = [
  '{{char}}',
  '{{user}}',
  '{{random::red::blue}}',
  '{{roll:1d20}}',
  '{{getvar::mood}}',
  '{{setvar::x::1}}',
  '{{time}}',
  '{{pick::a::b}}',
  '{{newline}}',
  '{{// author note}}',
  '{{random:a,b}}',
];
const MACRO_TEXT = MACROS.join(' ');

const FIELDS_TEMPLATE = `{{#is_not_empty fields.core}}{{#each fields.core as |value key|}}<field name="{{key}}">{{#if value}}{{value}}{{else}}(empty){{/if}}</field>
{{/each}}{{/is_not_empty}}{{#each fields.draft as |value key|}}<draft name="{{key}}">{{value}}</draft>
{{/each}}`;

describe('protectMacros', () => {
  test('round-trips strings through rendering unchanged', () => {
    const samples = [
      MACRO_TEXT,
      '{{{triple}}}',
      'a}}b{{c',
      '{{',
      '}}',
      '\uFDD0\uFDD1\uFDD2 {{x}} \uFDD1\uFDD0',
      'plain text',
      '',
    ];
    for (const sample of samples) {
      expect(render('{{value}}', { value: protectMacros(sample) })).toBe(sample);
    }
  });

  test('deep-maps arrays, objects and keys without mutating the input', () => {
    const input = { '{{key}}': ['{{a}}', 1, true, null, { nested: '{{b}}' }] };
    const protectedValue = protectMacros(input);

    expect(input).toEqual({ '{{key}}': ['{{a}}', 1, true, null, { nested: '{{b}}' }] });
    expect(JSON.stringify(protectedValue)).not.toContain('{{');
    expect(JSON.stringify(protectedValue)).not.toContain('}}');
    expect(render('{{json value}}', { value: protectedValue })).toBe(JSON.stringify(input));
  });

  test('leaves non-string values alone', () => {
    expect(protectMacros(42)).toBe(42);
    expect(protectMacros(undefined)).toBeUndefined();
    expect(protectMacros(null)).toBeNull();
  });
});

describe('renderPrompt', () => {
  test('keeps macros in card field and draft values verbatim (B6)', () => {
    const output = render(FIELDS_TEMPLATE, {
      fields: protectMacros({
        core: { Description: MACRO_TEXT, Scenario: '' },
        draft: { 'Notes {{time}}': `draft ${MACRO_TEXT}` },
      }),
    });

    expect(output).toBe(
      `<field name="Description">${MACRO_TEXT}</field>\n<field name="Scenario">(empty)</field>\n` +
        `<draft name="Notes {{time}}">draft ${MACRO_TEXT}</draft>\n`,
    );
  });

  test('keeps macros in user and field instructions verbatim (B6)', () => {
    const output = render(
      '{{#if userInstructions}}<user>{{userInstructions}}</user>{{/if}}<field>{{fieldSpecificInstructions}}</field>',
      {
        userInstructions: protectMacros(`Use ${MACRO_TEXT}`),
        fieldSpecificInstructions: protectMacros('{{// keep this}} {{random:a,b}}'),
      },
    );

    expect(output).toBe(`<user>Use ${MACRO_TEXT}</user><field>{{// keep this}} {{random:a,b}}</field>`);
  });

  test('keeps macros in reference characters and lorebooks verbatim (B6)', () => {
    const template = `{{#each characters}}[{{this.name}}] {{this.description}} {{#each this.data.alternate_greetings}}({{this}}){{/each}}
{{/each}}{{#each lorebooks}}<lorebook name="{{@key}}">{{#each this as |entry|}}<entry keys="{{join entry.key ', '}}">{{entry.content}}</entry>{{/each}}</lorebook>{{/each}}`;

    const output = render(template, {
      characters: protectMacros([
        { name: 'Ref', description: '{{char}} hates {{user}}', data: { alternate_greetings: ['{{random::a::b}}'] } },
      ]),
      lorebooks: protectMacros({ 'World {{x}}': [{ key: ['{{char}}', 'castle'], content: '{{getvar::lore}}' }] }),
    });

    expect(output).toBe(
      '[Ref] {{char}} hates {{user}} ({{random::a::b}})\n' +
        '<lorebook name="World {{x}}"><entry keys="{{char}}, castle">{{getvar::lore}}</entry></lorebook>',
    );
  });

  test('keeps protected content intact through the json and xmlEscape helpers', () => {
    const value = `<b>"{{char}}"</b> & '{{user}}' {{random::a::b}}`;
    const data = { value: protectMacros(value), list: protectMacros({ core: { Description: value } }) };

    expect(render('{{xmlEscape value}}', data)).toBe(
      '&lt;b&gt;&quot;{{char}}&quot;&lt;/b&gt; &amp; &apos;{{user}}&apos; {{random::a::b}}',
    );
    expect(JSON.parse(render('{{json list}}', data))).toEqual({ core: { Description: value } });
  });

  test('does not substitute names into user content, only into template variables (B7)', () => {
    const output = render('Write for {{char}}.\n{{#each fields.core as |value key|}}{{key}}: {{value}}{{/each}}', {
      char: 'Marta',
      user: 'Helton',
      fields: protectMacros({ core: { 'First Message': "{{char}} didn't look up when {{user}} came in." } }),
    });

    expect(output).toBe("Write for Marta.\nFirst Message: {{char}} didn't look up when {{user}} came in.");
  });

  test('keeps a literal {{char}} fallback for an empty name (B8)', () => {
    const output = render('Write the field{{#if char}} for {{char}}{{/if}}, facing {{user}}.', {
      char: '{{char}}',
      user: '{{user}}',
    });

    expect(output).toBe('Write the field for {{char}}, facing {{user}}.');
  });

  test('substitutes ST macros that come from the template', () => {
    const output = render('{{persona}} | \\{{random::a::b}} | \\{{persona}} | \\{{// comment}}', {
      persona: '{{persona}}',
    });

    expect(output).toBe('Persona text | a | Persona text | ');
  });

  test('keeps escaped \\{{char}} and \\{{user}} literal', () => {
    const output = render('Use \\{{char}} and \\{{user}}, never names like {{char}} or {{user}}.', {
      char: 'Marta',
      user: 'Helton',
    });

    expect(output).toBe('Use {{char}} and {{user}}, never names like Marta or Helton.');
  });

  test("renders the user's custom template style", () => {
    const template = `<task>
Write the "{{targetField}}" field of the character card{{#if char}} for {{char}}{{/if}}.
{{#if userInstructions}}
<user_instructions>
{{userInstructions}}
</user_instructions>
{{/if}}
Placeholders: ({{#if char}}the character as "{{char}}", {{/if}}the user as "{{user}}"). Always use \\{{char}} and \\{{user}}.
</task>
<user_persona name="{{user}}">
{{persona}}
</user_persona>
{{#is_not_empty fields}}
<current_card>
{{#is_not_empty fields.core}}
{{#each fields.core as |value key|}}
<field name="{{key}}">
{{#if value}}{{value}}{{else}}(empty){{/if}}
</field>
{{/each}}
{{/is_not_empty}}
{{#is_not_empty fields.alternate_greetings}}
{{#each fields.alternate_greetings as |value key|}}
<field name="{{key}}">{{value}}</field>
{{/each}}
{{/is_not_empty}}
</current_card>
{{/is_not_empty}}`;

    const output = render(template, {
      char: 'Marta',
      user: 'Helton',
      persona: '{{persona}}',
      targetField: 'first_mes',
      userInstructions: protectMacros('Mention {{user}} and roll {{roll:1d20}}.'),
      fields: protectMacros({
        core: { Name: 'Marta', Description: '{{char}} runs the inn. {{// todo}}', Scenario: '' },
        alternate_greetings: { alternate_greetings_1: '{{char}} waves at {{user}}.' },
      }),
    });

    expect(output).toBe(`<task>
Write the "first_mes" field of the character card for Marta.
<user_instructions>
Mention {{user}} and roll {{roll:1d20}}.
</user_instructions>
Placeholders: (the character as "Marta", the user as "Helton"). Always use {{char}} and {{user}}.
</task>
<user_persona name="Helton">
Persona text
</user_persona>
<current_card>
<field name="Name">
Marta
</field>
<field name="Description">
{{char}} runs the inn. {{// todo}}
</field>
<field name="Scenario">
(empty)
</field>
<field name="alternate_greetings_1">{{char}} waves at {{user}}.</field>
</current_card>
`);
  });

  test('renders revise task descriptions with the shared variables (B9)', () => {
    const output = render(
      '{{#if isFieldSession}}Scope: "{{targetLabel}}" of {{char}}.{{else}}Whole card of {{char}}.{{/if}} Write \\{{char}}, not {{char}}.',
      { char: 'Marta', user: 'Helton', isFieldSession: true, targetLabel: protectMacros('Notes {{x}}') },
    );

    expect(output).toBe('Scope: "Notes {{x}}" of Marta. Write {{char}}, not Marta.');
  });
});
