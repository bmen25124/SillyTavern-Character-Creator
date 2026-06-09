import { DropdownItem } from 'sillytavern-utils-lib/components/react';

export function buildWorldInfoDropdownItems(
  worldNames: string[],
  selectedWorldNames: string[] = [],
): DropdownItem[] {
  const existingNames = new Set(worldNames);
  const missingSelectedNames = selectedWorldNames.filter((name) => name && !existingNames.has(name));

  return [
    ...worldNames.map((name) => ({ value: name, label: name })),
    ...missingSelectedNames.map((name) => ({ value: name, label: `${name} (missing)` })),
  ];
}
