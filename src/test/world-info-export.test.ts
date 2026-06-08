import { describe, expect, test } from 'vitest';
import * as Handlebars from 'handlebars';
import '../handlebars-helpers.js';
import { DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE, DEFAULT_WORLD_INFO_CHARACTER_DEFINITION } from '../constants.js';
import { buildWorldInfoCharacter } from '../world-info-export.js';

describe('world info character export', () => {
  test('renders field values instead of field objects', () => {
    const character = buildWorldInfoCharacter(
      {
        name: { label: 'Name', value: 'Ari', prompt: '' },
        description: { label: 'Description', value: 'A careful scout.', prompt: '' },
        personality: { label: 'Personality', value: 'Patient and precise.', prompt: '' },
        scenario: { label: 'Scenario', value: 'Lost in the archive.', prompt: '' },
        first_mes: { label: 'First Message', value: 'Stay quiet.', prompt: '' },
        mes_example: { label: 'Example Dialogue', value: '{{char}} whispers.', prompt: '' },
      },
      [{ value: 'Alternate hello.' }],
    );

    const content = Handlebars.compile(DEFAULT_WORLD_INFO_CHARACTER_DEFINITION, { noEscape: true })({ character });

    expect(content).toContain('### Ari');
    expect(content).toContain('- **Description:** A careful scout.');
    expect(content).toContain('**1:** Alternate hello.');
    expect(content).not.toContain('[object Object]');
  });

  test('selected character template includes card alternate greetings', () => {
    const content = Handlebars.compile(DEFAULT_CHAR_CARD_DEFINITION_TEMPLATE, { noEscape: true })({
      characters: [
        {
          name: 'Ari',
          data: {
            alternate_greetings: ['First alternate.', 'Second alternate.'],
          },
        },
      ],
    });

    expect(content).toContain('#### Alternate Greetings');
    expect(content).toContain('### 1');
    expect(content).toContain('First alternate.');
    expect(content).toContain('### 2');
    expect(content).toContain('Second alternate.');
  });
});
