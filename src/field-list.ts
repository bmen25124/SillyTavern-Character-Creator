// Field helpers shared by generation and revise sessions. Kept free of the SillyTavern global so they can be unit tested.

export type CharacterFieldName = 'name' | 'description' | 'personality' | 'scenario' | 'first_mes' | 'mes_example';

export const CHARACTER_FIELDS: CharacterFieldName[] = [
  'name',
  'description',
  'personality',
  'scenario',
  'first_mes',
  'mes_example',
];

const GREETING_PREFIX = 'alternate_greetings_';

interface LabeledField {
  label: string;
  value: string;
}

export type FieldGroup = 'core' | 'alternate_greetings' | 'draft';

/**
 * An entry of the `fieldList` template variable. Unlike `fields` (keyed by label, or by ID for alternate greetings in
 * generation), it gives templates both the ID and the label of every field that is sent:
 * `{{#each fieldList}}<field id="{{id}}" label="{{label}}" group="{{group}}">{{value}}</field>{{/each}}`
 */
export interface FieldListItem {
  id: string; // e.g. 'first_mes', 'alternate_greetings_2', or a draft field ID
  label: string; // e.g. 'First Message', 'Alternate Greeting 2', or the draft field name
  value: string;
  group: FieldGroup;
}

/**
 * Lists fields in a stable order: core fields in CHARACTER_FIELDS order, then alternate greetings by number, then
 * draft fields. Pass only the fields that are sent (the same ones as in `fields`) and wrap the result with
 * `protectMacros`.
 */
export function buildFieldList(
  fields: Record<string, LabeledField>,
  draftFields: Record<string, LabeledField> = {},
): FieldListItem[] {
  const toItem = (id: string, field: LabeledField, group: FieldGroup): FieldListItem => ({
    id,
    label: field.label,
    value: field.value,
    group,
  });

  const core = CHARACTER_FIELDS.filter((id) => fields[id]).map((id) => toItem(id, fields[id], 'core'));
  const greetings = Object.keys(fields)
    .filter((id) => id.startsWith(GREETING_PREFIX))
    .sort((a, b) => parseInt(a.slice(GREETING_PREFIX.length)) - parseInt(b.slice(GREETING_PREFIX.length)))
    .map((id) => toItem(id, fields[id], 'alternate_greetings'));
  const drafts = Object.entries(draftFields).map(([id, field]) => toItem(id, field, 'draft'));

  return [...core, ...greetings, ...drafts];
}

/** Returns the label of a core, alternate greeting or draft field, falling back to its ID. */
export function getFieldLabel(
  id: string,
  fields: Record<string, LabeledField>,
  draftFields: Record<string, LabeledField> = {},
): string {
  return draftFields[id]?.label || fields[id]?.label || id;
}

/**
 * Returns the fields that are sent when generating `targetField`. With `dontSendOtherGreetings`:
 * 1. If the target is not an alternate greeting, all alternate greetings are skipped.
 * 2. If the target is an alternate greeting, all other alternate greetings and the first message are skipped.
 */
export function selectSentFields<T>(
  fields: Record<string, T>,
  targetField: string,
  dontSendOtherGreetings: boolean,
): Record<string, T> {
  if (!dontSendOtherGreetings) {
    return fields;
  }
  const isTargetAlternateGreeting = targetField.startsWith(GREETING_PREFIX);
  return Object.fromEntries(
    Object.entries(fields).filter(([fieldName]) => {
      const isAlternateGreeting = fieldName.startsWith(GREETING_PREFIX);
      if (isTargetAlternateGreeting) {
        return !((isAlternateGreeting && fieldName !== targetField) || fieldName === 'first_mes');
      }
      return !isAlternateGreeting;
    }),
  );
}
