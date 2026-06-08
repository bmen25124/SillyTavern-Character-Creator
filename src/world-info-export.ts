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
