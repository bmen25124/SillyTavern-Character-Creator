import type { CharacterState, FieldSpecificResponse, GlobalResponse } from './revise-types.js';

const getGreetings = (state: CharacterState): { value: string; prompt: string }[] => {
  return Object.entries(state.fields)
    .filter(([key]) => key.startsWith('alternate_greetings_'))
    .sort((a, b) => {
      const indexA = parseInt(a[0].split('_')[2]);
      const indexB = parseInt(b[0].split('_')[2]);
      return indexA - indexB;
    })
    .map(([, field]) => ({ value: field.value, prompt: field.prompt }));
};

export const calculateNewState = (
  prevState: CharacterState,
  response: FieldSpecificResponse | GlobalResponse,
  sessionType: 'field' | 'global',
  targetFieldId?: string,
): CharacterState => {
  const newState = structuredClone(prevState);

  if (sessionType === 'field' && targetFieldId) {
    const res = response as FieldSpecificResponse;
    if (newState.fields[targetFieldId]) {
      newState.fields[targetFieldId].value = res.response;
    }
    // No draft field support for field-specific sessions for now.
    return newState;
  }

  if (sessionType === 'global') {
    const res = response as GlobalResponse;

    if (res.fields_to_change?.length) {
      for (const change of res.fields_to_change) {
        if (newState.fields[change.field]) {
          // Handles core and greeting fields
          newState.fields[change.field].value = change.value;
        } else if (newState.draftFields[change.field]) {
          // Handles draft fields
          newState.draftFields[change.field].value = change.value;
        }
      }
    }

    if (res.draft_fields_to_remove?.length) {
      for (const fieldId of res.draft_fields_to_remove) {
        if (newState.draftFields[fieldId]) {
          delete newState.draftFields[fieldId];
        }
      }
    }

    // Snapshot the greetings after `fields_to_change`, so edits to `alternate_greetings_N` fields are kept.
    // Indices in the greeting operations refer to the numbering the AI saw; change runs first, then remove, then add.
    // Each greeting keeps its prompt through these operations; new greetings start with an empty prompt.
    let currentGreetings = getGreetings(newState);
    let greetingsModified = false;

    if (res.greetings_to_change?.length) {
      greetingsModified = true;
      for (const change of res.greetings_to_change) {
        // The AI provides a 1-based index.
        if (change.index > 0 && change.index <= currentGreetings.length) {
          currentGreetings[change.index - 1].value = change.value;
        }
      }
    }

    if (res.greetings_to_remove?.length) {
      greetingsModified = true;
      const indicesToRemove = new Set(res.greetings_to_remove.map((i) => i - 1)); // convert to 0-based
      currentGreetings = currentGreetings.filter((_, index) => !indicesToRemove.has(index));
    }

    if (res.greetings_to_add?.length) {
      greetingsModified = true;
      currentGreetings.push(...res.greetings_to_add.map((value) => ({ value, prompt: '' })));
    }

    if (greetingsModified) {
      // After all operations, rebuild the greeting fields in the state.
      Object.keys(newState.fields).forEach((key) => {
        if (key.startsWith('alternate_greetings_')) {
          delete newState.fields[key];
        }
      });

      currentGreetings.forEach((greeting, index) => {
        const fieldName = `alternate_greetings_${index + 1}`;
        newState.fields[fieldName] = {
          ...greeting,
          label: `Alternate Greeting ${index + 1}`,
        };
      });
    }
  }
  return newState;
};

/**
 * Applies the final state of a revise session to the main session. Core fields are merged, while alternate greetings
 * and draft fields are taken exactly as the revise session left them, so ones it removed don't come back.
 */
export const applyReviseState = <T extends CharacterState>(prev: T, newState: CharacterState): T => {
  const fields = Object.fromEntries(
    Object.entries(prev.fields).filter(([key]) => !key.startsWith('alternate_greetings_')),
  );
  return {
    ...prev,
    fields: { ...fields, ...newState.fields },
    draftFields: { ...newState.draftFields },
  };
};
