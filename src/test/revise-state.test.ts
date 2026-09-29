import { describe, expect, test } from 'vitest';
import { applyReviseState, calculateNewState } from '../revise-state.js';
import type { CharacterState, GlobalResponse } from '../revise-types.js';

const makeState = (greetings: string[]): CharacterState => {
  const fields: CharacterState['fields'] = {
    name: { label: 'Name', value: 'Ari', prompt: 'name prompt' },
    description: { label: 'Description', value: 'A careful scout.', prompt: '' },
  };
  greetings.forEach((value, index) => {
    fields[`alternate_greetings_${index + 1}`] = { label: `Alternate Greeting ${index + 1}`, value, prompt: '' };
  });
  return {
    fields,
    draftFields: {
      backstory: { label: 'Backstory', value: 'Grew up in the archive.', prompt: '' },
      goals: { label: 'Goals', value: 'Find the lost map.', prompt: '' },
    },
  };
};

const getGreetingFields = (state: CharacterState) =>
  Object.keys(state.fields)
    .filter((key) => key.startsWith('alternate_greetings_'))
    .sort((a, b) => parseInt(a.split('_')[2]) - parseInt(b.split('_')[2]))
    .map((key) => ({ key, label: state.fields[key].label, value: state.fields[key].value }));

const global = (response: Omit<GlobalResponse, 'justification'>): GlobalResponse => ({
  justification: 'Done.',
  ...response,
});

describe('calculateNewState', () => {
  test('keeps greeting edits from fields_to_change when greetings are also added or removed', () => {
    const state = makeState(['Hello.', 'Hi there.', 'Greetings.']);

    const newState = calculateNewState(
      state,
      global({
        fields_to_change: [{ field: 'alternate_greetings_2', value: 'Hi there, edited.' }],
        greetings_to_remove: [1],
        greetings_to_add: ['New'],
      }),
      'global',
    );

    expect(getGreetingFields(newState)).toEqual([
      { key: 'alternate_greetings_1', label: 'Alternate Greeting 1', value: 'Hi there, edited.' },
      { key: 'alternate_greetings_2', label: 'Alternate Greeting 2', value: 'Greetings.' },
      { key: 'alternate_greetings_3', label: 'Alternate Greeting 3', value: 'New' },
    ]);
  });

  test('applies greeting change, remove and add using the original numbering', () => {
    const state = makeState(['One.', 'Two.', 'Three.', 'Four.']);

    const newState = calculateNewState(
      state,
      global({
        greetings_to_change: [{ index: 3, value: 'Three, changed.' }],
        greetings_to_remove: [1, 2],
        greetings_to_add: ['Five.'],
      }),
      'global',
    );

    expect(getGreetingFields(newState)).toEqual([
      { key: 'alternate_greetings_1', label: 'Alternate Greeting 1', value: 'Three, changed.' },
      { key: 'alternate_greetings_2', label: 'Alternate Greeting 2', value: 'Four.' },
      { key: 'alternate_greetings_3', label: 'Alternate Greeting 3', value: 'Five.' },
    ]);
  });

  test('changes core and draft fields', () => {
    const state = makeState(['Hello.']);

    const newState = calculateNewState(
      state,
      global({
        fields_to_change: [
          { field: 'description', value: 'A reckless scout.' },
          { field: 'backstory', value: 'Grew up on the road.' },
          { field: 'unknown_field', value: 'Ignored.' },
        ],
      }),
      'global',
    );

    expect(newState.fields.description).toEqual({ label: 'Description', value: 'A reckless scout.', prompt: '' });
    expect(newState.draftFields.backstory.value).toBe('Grew up on the road.');
    expect(newState.fields.unknown_field).toBeUndefined();
    expect(newState.draftFields.unknown_field).toBeUndefined();
  });

  test('removes draft fields', () => {
    const state = makeState([]);

    const newState = calculateNewState(state, global({ draft_fields_to_remove: ['goals', 'missing'] }), 'global');

    expect(Object.keys(newState.draftFields)).toEqual(['backstory']);
  });

  test('sets the target field in field sessions', () => {
    const state = makeState(['Hello.']);

    const newState = calculateNewState(
      state,
      { justification: 'Done.', response: 'Hello, revised.' },
      'field',
      'alternate_greetings_1',
    );

    expect(newState.fields.alternate_greetings_1).toEqual({
      label: 'Alternate Greeting 1',
      value: 'Hello, revised.',
      prompt: '',
    });
    expect(newState.fields.description.value).toBe('A careful scout.');
  });

  test('leaves greetings untouched without greeting operations', () => {
    const state = makeState(['Hello.', 'Hi there.']);
    state.fields.alternate_greetings_2.prompt = 'greeting prompt';

    const newState = calculateNewState(
      state,
      global({ fields_to_change: [{ field: 'name', value: 'Bea' }] }),
      'global',
    );

    expect(newState.fields.name.value).toBe('Bea');
    expect(newState.fields.alternate_greetings_1).toEqual(state.fields.alternate_greetings_1);
    expect(newState.fields.alternate_greetings_2).toEqual(state.fields.alternate_greetings_2);
  });

  test('keeps greeting prompts through change, remove and add', () => {
    const state = makeState(['One.', 'Two.', 'Three.']);
    state.fields.alternate_greetings_1.prompt = 'prompt 1';
    state.fields.alternate_greetings_2.prompt = 'prompt 2';
    state.fields.alternate_greetings_3.prompt = 'prompt 3';

    const newState = calculateNewState(
      state,
      global({
        greetings_to_change: [{ index: 3, value: 'Three, changed.' }],
        greetings_to_remove: [1],
        greetings_to_add: ['Four.'],
      }),
      'global',
    );

    expect(newState.fields.alternate_greetings_1).toEqual({
      label: 'Alternate Greeting 1',
      value: 'Two.',
      prompt: 'prompt 2',
    });
    expect(newState.fields.alternate_greetings_2).toEqual({
      label: 'Alternate Greeting 2',
      value: 'Three, changed.',
      prompt: 'prompt 3',
    });
    expect(newState.fields.alternate_greetings_3).toEqual({
      label: 'Alternate Greeting 3',
      value: 'Four.',
      prompt: '',
    });
    expect(newState.fields.alternate_greetings_4).toBeUndefined();
  });

  test('does not mutate the input state', () => {
    const state = makeState(['Hello.', 'Hi there.']);
    const original = structuredClone(state);

    calculateNewState(
      state,
      global({
        fields_to_change: [
          { field: 'description', value: 'Changed.' },
          { field: 'alternate_greetings_1', value: 'Changed.' },
        ],
        draft_fields_to_remove: ['goals'],
        greetings_to_change: [{ index: 2, value: 'Changed.' }],
        greetings_to_remove: [1],
        greetings_to_add: ['Added.'],
      }),
      'global',
    );

    expect(state).toEqual(original);
  });
});

describe('applyReviseState', () => {
  const makeSession = (greetings: string[]) => ({
    ...makeState(greetings),
    selectedCharacterIndexes: ['3'],
    selectedWorldNames: ['World'],
    lastLoadedCharacterId: '3',
  });

  test('drops greetings removed by the revise session without leaving stale keys', () => {
    const prev = makeSession(['One.', 'Two.', 'Three.']);
    const newState = calculateNewState(prev, global({ greetings_to_remove: [1] }), 'global');

    const applied = applyReviseState(prev, newState);

    expect(getGreetingFields(applied)).toEqual([
      { key: 'alternate_greetings_1', label: 'Alternate Greeting 1', value: 'Two.' },
      { key: 'alternate_greetings_2', label: 'Alternate Greeting 2', value: 'Three.' },
    ]);
  });

  test('drops draft fields removed by the revise session', () => {
    const prev = makeSession([]);
    const newState = calculateNewState(prev, global({ draft_fields_to_remove: ['goals'] }), 'global');

    const applied = applyReviseState(prev, newState);

    expect(applied.draftFields).toEqual({ backstory: prev.draftFields.backstory });
  });

  test('merges core fields and keeps other session properties', () => {
    const prev = makeSession(['Hello.']);
    const newState = structuredClone({ fields: prev.fields, draftFields: prev.draftFields });
    newState.fields.description.value = 'A reckless scout.';
    delete newState.fields.name;

    const applied = applyReviseState(prev, newState);

    expect(applied.fields.description.value).toBe('A reckless scout.');
    expect(applied.fields.name).toEqual(prev.fields.name);
    expect(applied.fields.alternate_greetings_1).toEqual(prev.fields.alternate_greetings_1);
    expect(applied.selectedCharacterIndexes).toEqual(['3']);
    expect(applied.selectedWorldNames).toEqual(['World']);
    expect(applied.lastLoadedCharacterId).toBe('3');
    expect(prev.fields.description.value).toBe('A careful scout.');
  });
});
