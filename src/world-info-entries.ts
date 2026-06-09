import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

interface WorldInfoLike {
  entries?: Record<string | number, WIEntry> | WIEntry[] | null;
}

export function getWorldInfoEntries(
  worldInfo: WorldInfoLike | null | undefined,
  options: { includeDisabled?: boolean } = {},
): WIEntry[] {
  const entries = worldInfo?.entries;
  if (!entries) {
    return [];
  }

  const values = Array.isArray(entries) ? entries : Object.values(entries);
  return options.includeDisabled ? values : values.filter((entry) => !entry.disable);
}
