import { describe, expect, test } from 'vitest';
import * as Handlebars from 'handlebars';
import '../handlebars-helpers.js';

describe('prompt handlebars helpers', () => {
  test('indents multiline content after newlines', () => {
    const template = Handlebars.compile('content: |\n  {{indent 2 text}}', { noEscape: true });

    expect(template({ text: 'first\nsecond\nthird' })).toBe('content: |\n  first\n  second\n  third');
  });

  test('serializes values as JSON', () => {
    const template = Handlebars.compile('{{json value}}', { noEscape: true });

    expect(template({ value: { name: 'Alice', tags: ['mage', 'healer'] } })).toBe(
      '{"name":"Alice","tags":["mage","healer"]}',
    );
  });

  test('escapes XML-special characters', () => {
    const template = Handlebars.compile('{{xmlEscape value}}', { noEscape: true });

    expect(template({ value: `<tag name="A&B">'text'</tag>` })).toBe(
      '&lt;tag name=&quot;A&amp;B&quot;&gt;&apos;text&apos;&lt;/tag&gt;',
    );
  });

  test('keeps existing shared helpers available', () => {
    const template = Handlebars.compile('{{add 2 3}} {{join items " | "}}', { noEscape: true });

    expect(template({ items: ['a', 'b', 'c'] })).toBe('5 a | b | c');
  });
});
