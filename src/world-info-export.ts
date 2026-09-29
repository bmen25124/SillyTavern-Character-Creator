import * as Handlebars from 'handlebars';
import './handlebars-helpers.js';
import { CharacterField } from './generate.js';

export interface GreetingValue {
  value: string;
}

export function buildWorldInfoCharacter(
  fields: Record<string, CharacterField>,
  greetings: GreetingValue[],
): Record<string, string | string[]> {
  return {
    name: fields.name?.value ?? '',
    description: fields.description?.value ?? '',
    personality: fields.personality?.value ?? '',
    scenario: fields.scenario?.value ?? '',
    first_mes: fields.first_mes?.value ?? '',
    mes_example: fields.mes_example?.value ?? '',
    alternate_greetings: greetings.map((greeting) => greeting.value).filter(Boolean),
  };
}

export function renderWorldInfoCharacterEntry(
  template: string,
  fields: Record<string, CharacterField>,
  greetings: GreetingValue[],
): string {
  return Handlebars.compile(template, { noEscape: true })({
    character: buildWorldInfoCharacter(fields, greetings),
    // The entry describes this card, so {{char}} is its name. {{user}} is left for ST to resolve when the entry is used.
    char: fields.name?.value || '{{char}}',
    user: '{{user}}',
  });
}
