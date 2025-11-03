import { describe, test, expect } from 'vitest';
import { parseResponse } from '../parsers.js';

describe('parseResponse with JSON format', () => {
  test('detailed code block', () => {
    const input = '{"response": "test message"}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('parses valid JSON with object response', () => {
    const input = '{"response": {"message": "test message"}}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('extracts content from code blocks', () => {
    const input = '```\n{"response": "test message"}\n```';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('throws error on invalid JSON', () => {
    const input = '{"response": invalid}';
    expect(() => parseResponse(input, 'json')).toThrow('Model response is not valid JSON');
  });

  test('parse half-valid JSON', () => {
    const input = '{"message": "test"}';
    expect(parseResponse(input, 'json')).toBe('test');

    const input2 = '{"response": 123}';
    expect(parseResponse(input2, 'json')).toBe('123');
  });

  test('trims whitespace from response', () => {
    const input = '{"response": "  test message  "}';
    expect(parseResponse(input, 'json')).toBe('test message');
  });

  test('detailed code block', () => {
    const input = `\`\`\`json\n{\n  \"response\": \"*Nolan crashes through the front door, the wood frame splintering around him. Debbie is frozen, halfway to the door, her eyes wide with fear. Nolan’s face is a mask of cold fury as he stalks towards her.* \\\"Debbie,\\\" *he growls, his voice dangerously low.* \\\"Where is he?\\\" *He strides closer, his shadow engulfing her.* \\\"Don't lie to me, Deborah. You know exactly who I'm asking about.\\\"\\n\\n*Debbie shrinks back, clutching her chest.* \\\"Nolan… please. You can't just barge in here like this! Mark isn't here.\\\"\\n\\n*Nolan scoffs, grabbing her arm with brutal force.* \\\"Don't play coy with me. Is he with that… human? Are they conspiring against me?\\\" *He squeezes her arm tighter, his grip threatening to break bone.* \\\"Tell me the truth, or you'll regret it.\\\"\\n\\n*Debbie winces in pain, tears welling in her eyes.* \\\"He's… he's out. On patrol. Please, Nolan, you're hurting me!\\\" *Nolan releases her arm abruptly, but his gaze remains fixed and menacing.* \\\"Patrol? Or is he building a pathetic little life with humans?\\\" *He pauses, his expression shifting slightly, a flicker of something unreadable in his eyes.* \\\"I need to see what he has with {{user}}, I can not allow him to grow attached to the human. She is a distraction Debbie!\\\" *He grabs Debbie's shoulders with a strength that belies her fragility.*\"\n}\n\`\`\``;

    expect(parseResponse(input, 'json')).toContain(
      'Nolan crashes through the front door, the wood frame splintering around him.',
    );
  });
});

describe('parseResponse with XML format', () => {
  test('parses basic XML response', () => {
    const input = '<response>test message</response>';
    expect(parseResponse(input, 'xml')).toBe('test message');
  });

  test('parses XML with #text content', () => {
    const input = '<response text="123">#text content</response>';
    expect(parseResponse(input, 'xml')).toBe('#text content');
  });

  test('parses XML with different root structures', () => {
    const input = '<root><response>nested message</response></root>';
    expect(parseResponse(input, 'xml')).toBe('nested message');
  });

  test('extracts content from code blocks', () => {
    const input = '```xml\n<response>test message</response>\n```';
    expect(parseResponse(input, 'xml')).toBe('test message');

    const input2 = '```\n<response>test message</response>\n```';
    expect(parseResponse(input2, 'xml')).toBe('test message');
  });

  test('Parse half-valid XML', () => {
    const input = '<response>test</wrongtag>';
    expect(parseResponse(input, 'xml')).toBe('test');

    const input2 = '<data>test</data>';
    expect(parseResponse(input2, 'xml')).toBe('test');
  });
});

describe('parseResponse with plaintext (none) format', () => {
  test('returns basic plaintext', () => {
    const input = 'This is a test message.';
    expect(parseResponse(input, 'none')).toBe('This is a test message.');
  });

  test('trims whitespace from plaintext', () => {
    const input = '  This has whitespace.  ';
    expect(parseResponse(input, 'none')).toBe('This has whitespace.');
  });

  test('extracts content from code blocks', () => {
    const input = '```\nThis is inside a code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a code block.');
  });

  test('extracts content from code blocks with language identifier', () => {
    const input = '```text\nThis is inside a text code block.\n```';
    expect(parseResponse(input, 'none')).toBe('This is inside a text code block.');
  });

  test('handles empty input', () => {
    const input = '';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only whitespace', () => {
    const input = '   ';
    expect(parseResponse(input, 'none')).toBe('');
  });

  test('handles input with only code block markers', () => {
    const input = '```\n```';
    expect(parseResponse(input, 'none')).toBe('');
  });
});
