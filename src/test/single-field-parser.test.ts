import { describe, test, expect } from 'vitest';
import { getPrefilled, mergeContinuation, parseResponse } from '../parsers.js';

describe('single-field XML responses', () => {
  test('keeps markup inside <response> verbatim', () => {
    const inner = '<START>\n{{user}}: "Hi."\n{{char}}: She nodded.\n<START>\n{{user}}: "Bye."\n{{char}}: "Later."';
    expect(parseResponse(`<response>${inner}</response>`, 'xml')).toBe(inner);

    const inner2 = 'She wrote <3 and <b>bold</b> text, then left.';
    expect(parseResponse(`<response>${inner2}</response>`, 'xml')).toBe(inner2);
  });

  test('unwraps CDATA verbatim', () => {
    const input = '<response><![CDATA[<START>\nA & B <b>x</b>]]></response>';
    expect(parseResponse(input, 'xml')).toBe('<START>\nA & B <b>x</b>');

    const input2 = '<response><![CDATA[&amp; stays]]></response>';
    expect(parseResponse(input2, 'xml')).toBe('&amp; stays');
  });

  test('decodes the standard XML entities outside CDATA', () => {
    const input = '<response>&lt;START&gt; A &amp; B &quot;x&quot; &apos;y&apos; &amp;lt;</response>';
    expect(parseResponse(input, 'xml')).toBe('<START> A & B "x" \'y\' &lt;');
  });

  test('handles plain and <root>-wrapped responses', () => {
    expect(parseResponse('<response>text</response>', 'xml')).toBe('text');
    expect(parseResponse('<root><response>plain</response></root>', 'xml')).toBe('plain');
    expect(parseResponse('  <response>\n  padded  \n</response>  ', 'xml')).toBe('padded');
  });

  test('uses the last closing tag', () => {
    const input = '<response>Mentions </response> literally, then more.</response>';
    expect(parseResponse(input, 'xml')).toBe('Mentions </response> literally, then more.');
  });

  test('tolerates a missing closing tag', () => {
    expect(parseResponse('<response>Text with <i>tag</i> and more', 'xml')).toBe('Text with <i>tag</i> and more');
    expect(parseResponse('<response><![CDATA[<START> unfinished', 'xml')).toBe('<START> unfinished');
  });

  test('tolerates a stray CDATA terminator', () => {
    expect(parseResponse('<response>First half. Second half.]]></response>', 'xml')).toBe('First half. Second half.');
  });

  test('keeps code blocks inside <response>', () => {
    const inner = 'Intro\n```\ncode\n```\nOutro';
    expect(parseResponse(`<response>${inner}</response>`, 'xml')).toBe(inner);
    expect(parseResponse(`\`\`\`xml\n<response>${inner}</response>\n\`\`\``, 'xml')).toBe(inner);
  });
});

describe('single-field JSON responses', () => {
  test('keeps code blocks inside the response value', () => {
    const inner = 'Intro\n```\ncode\n```\nOutro';
    expect(parseResponse(JSON.stringify({ response: inner }), 'json')).toBe(inner);
    expect(parseResponse(`Sure:\n${JSON.stringify({ response: inner })}\nDone.`, 'json')).toBe(inner);
  });

  test('handles a fenced response', () => {
    expect(parseResponse('```json\n{"response": "fenced"}\n```', 'json')).toBe('fenced');
  });

  test('decodes escapes in a truncated response', () => {
    const input = '{"response": "Line \\"one\\"\\nLine two';
    expect(parseResponse(input, 'json')).toBe('Line "one"\nLine two');
  });

  test('handles a closing quote without a closing brace', () => {
    expect(parseResponse('{"response": "Done \\"quoted\\""', 'json')).toBe('Done "quoted"');
  });

  test('handles raw newlines in a fenced response', () => {
    const input = '```json\n{"response": "Line one.\nLine \\"two\\"."}\n```';
    expect(parseResponse(input, 'json')).toBe('Line one.\nLine "two".');
  });

  test('handles a truncated escape sequence', () => {
    expect(parseResponse('{"response": "Ends with a \\', 'json')).toBe('Ends with a');
    expect(parseResponse('{"response": "Ends with \\u00', 'json')).toBe('Ends with');
    expect(parseResponse('{"response": "Keeps \\\\', 'json')).toBe('Keeps \\');
  });
});

describe('single-field plaintext responses', () => {
  test('keeps text around code blocks', () => {
    const input = 'Intro text\n```\nsnippet\n```\nOutro text';
    expect(parseResponse(input, 'none')).toBe(input);
  });

  test('does not unwrap several code blocks', () => {
    const input = '```\none\n```\nmiddle\n```\ntwo\n```';
    expect(parseResponse(input, 'none')).toBe(input);
  });
});

describe('getPrefilled round trip', () => {
  const content = 'Line one.\nLine "two" with a \\ backslash.';

  test('JSON prefill is a valid JSON prefix', () => {
    expect(parseResponse(getPrefilled(content, 'json') + ' More."\n}', 'json')).toBe(`${content} More.`);
  });

  test('XML prefill keeps markup verbatim', () => {
    const markup = '<START>\n{{user}}: "Hi" & <b>bye</b>';
    const prefilled = getPrefilled(markup, 'xml');
    expect(prefilled).toBe(`<response><![CDATA[${markup}`);
    expect(parseResponse(prefilled + ' More.]]></response>', 'xml')).toBe(`${markup} More.`);
    expect(parseResponse(prefilled + ' More.</response>', 'xml')).toBe(`${markup} More.`);
    expect(parseResponse(prefilled + ' More.', 'xml')).toBe(`${markup} More.`);
  });

  test('XML prefill survives a CDATA terminator in the content', () => {
    const tricky = 'A ]]> B & <i>c</i>';
    expect(parseResponse(getPrefilled(tricky, 'xml') + ' D]]></response>', 'xml')).toBe(`${tricky} D`);
    expect(parseResponse(getPrefilled(tricky, 'xml') + ' D</response>', 'xml')).toBe(`${tricky} D`);
  });
});

describe('structured (schema) responses', () => {
  const schema = {
    type: 'object',
    properties: { name: { type: 'string' }, tags: { type: 'array', items: { type: 'string' } } },
  };

  test('parses fenced XML with a schema', () => {
    const input = 'Here you go:\n```xml\n<root><name>Ann</name><tags>a</tags></root>\n```';
    expect(parseResponse(input, 'xml', { schema })).toEqual({ name: 'Ann', tags: ['a'] });
  });

  test('parses fenced JSON with a schema', () => {
    const input = 'Here you go:\n```json\n{"name": "Ann", "tags": ["a"]}\n```';
    expect(parseResponse(input, 'json', { schema })).toEqual({ name: 'Ann', tags: ['a'] });
  });
});

describe('mergeContinuation', () => {
  const existing = 'She said "hi" from C:\\temp';
  const ended = 'She said "hi" & <b>left</b>.';

  test('JSON: appends a continuation of the prefill', () => {
    expect(mergeContinuation(existing, ' and left.\\n\\nMore."\n}', 'json')).toBe(`${existing} and left.\n\nMore.`);
  });

  test('JSON: an immediately closed prefill keeps the text unchanged', () => {
    expect(mergeContinuation(existing, '"\n}', 'json')).toBe(existing);
  });

  test('JSON: appends a fresh response that ignored the prefill', () => {
    expect(mergeContinuation(existing, '{"response": "Brand new paragraph."}', 'json')).toBe(
      `${existing} Brand new paragraph.`,
    );
    expect(mergeContinuation(ended, '```json\n{"response": "Brand new paragraph."}\n```', 'json')).toBe(
      `${ended}\n\nBrand new paragraph.`,
    );
    expect(mergeContinuation(ended, '{\n  "response": "Raw\nnewline."\n}', 'json')).toBe(`${ended}\n\nRaw\nnewline.`);
  });

  test('JSON: does not duplicate a fresh response that repeats the text', () => {
    const reply = JSON.stringify({ response: `${existing} plus more.` });
    expect(mergeContinuation(existing, reply, 'json')).toBe(`${existing} plus more.`);
  });

  test('closing-only replies add no text', () => {
    const text = 'The toys folded into games.';
    for (const reply of ['}', '"}', '"\n}', ' }', '" }', '"}\n```', '', '  ']) {
      expect(mergeContinuation(text, reply, 'json'), JSON.stringify(reply)).toBe(text);
    }
    for (const reply of [']]></response>', '</response>', ']]>', ' ]]>\n</response>\n```']) {
      expect(mergeContinuation(text, reply, 'xml'), JSON.stringify(reply)).toBe(text);
    }
  });

  test('JSON: text ending with braces is not closing-only', () => {
    expect(mergeContinuation('She waves.', ' And greets {{user}}', 'json')).toBe('She waves. And greets {{user}}');
    expect(mergeContinuation('She waves.', ' And greets {{user}}"}', 'json')).toBe('She waves. And greets {{user}}');
    expect(mergeContinuation('She greets {{user}}', '"}', 'json')).toBe('She greets {{user}}');
    expect(mergeContinuation('She greets {{user}}', '}', 'json')).toBe('She greets {{user}}');
  });

  test('JSON: keeps a trailing backslash', () => {
    const withBackslash = 'Path C:\\temp\\';
    expect(mergeContinuation(withBackslash, '"\n}', 'json')).toBe(withBackslash);
    expect(mergeContinuation(withBackslash, ' done."}', 'json')).toBe(`${withBackslash} done.`);
    expect(mergeContinuation(withBackslash, '', 'json')).toBe(withBackslash);
  });

  test('XML: appends a continuation of the prefill', () => {
    expect(mergeContinuation(ended, ' Then <i>more</i>.]]></response>', 'xml')).toBe(`${ended} Then <i>more</i>.`);
    expect(mergeContinuation(ended, ' Then more.</response>', 'xml')).toBe(`${ended} Then more.`);
    expect(mergeContinuation(ended, ']]></response>', 'xml')).toBe(ended);
  });

  test('XML: appends a fresh response that ignored the prefill', () => {
    expect(mergeContinuation(ended, '<response><![CDATA[Brand <b>new</b>.]]></response>', 'xml')).toBe(
      `${ended}\n\nBrand <b>new</b>.`,
    );
    expect(mergeContinuation(existing, '<response>Brand new.</response>', 'xml')).toBe(`${existing} Brand new.`);
    expect(mergeContinuation(ended, `<response><![CDATA[${ended} More.]]></response>`, 'xml')).toBe(`${ended} More.`);
  });

  test('plain text: appends the reply without duplicating repeated text', () => {
    expect(mergeContinuation(existing, ' and left.', 'none')).toBe(`${existing} and left.`);
    expect(mergeContinuation(existing, '', 'none')).toBe(existing);
    expect(mergeContinuation(existing, `${existing} and left.`, 'none')).toBe(`${existing} and left.`);
  });

  test('always keeps the existing text', () => {
    const cases: [string, 'xml' | 'json' | 'none'][] = [
      ['{"response": "New."}', 'json'],
      ['```json\n{"response": "New."}\n```', 'json'],
      ['{"response": ""}', 'json'],
      [' more."}\n{"response": "Other."}', 'json'],
      [' more.", "response": "Other."}', 'json'],
      ['"\n}', 'json'],
      ['', 'json'],
      ['<response>New.</response>', 'xml'],
      ['<response></response>', 'xml'],
      ['', 'xml'],
      ['New.', 'none'],
      ['\nmore\n```', 'none'],
      ['```\nNew.\n```', 'none'],
    ];
    for (const text of [existing, ended, '```\ncode', 'Ends with \\', 'Ends with ]]']) {
      for (const [reply, format] of cases) {
        expect(mergeContinuation(`  ${text}\n`, reply, format).startsWith(text), `${format}: ${reply}`).toBe(true);
      }
    }
  });
});
