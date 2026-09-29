export interface SettingsMigration {
  /** Format version to migrate from, or `'*'` to migrate from any older version. */
  from: string;
  to: string;
  action(previous: any): any;
}

/**
 * Compares format versions like `F_1.9` and `F_1.10` by their numeric parts, so `F_1.10` is newer than `F_1.9`.
 * Returns a negative number if `a` is older than `b`, a positive number if newer, 0 if equal.
 */
export function compareFormatVersions(a: string, b: string): number {
  const partsA = a.match(/\d+/g)?.map(Number) ?? [];
  const partsB = b.match(/\d+/g)?.map(Number) ?? [];
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const diff = (partsA[i] ?? 0) - (partsB[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/**
 * Runs migrations starting from `settings.formatVersion`, like the strategy loop of `ExtensionSettingsManager`,
 * but compares versions numerically (the manager compares them as strings, so `'F_1.10' > 'F_1.9'` is false).
 *
 * A migration whose `from` matches the current version wins; otherwise the first `'*'` migration newer than the
 * current version runs. Returns the migrated copy, or `undefined` if no migration applied.
 */
export async function migrateSettings<T extends { formatVersion: string }>(
  settings: T,
  migrations: SettingsMigration[],
): Promise<T | undefined> {
  let result: T | undefined;
  let current = settings.formatVersion;
  while (true) {
    const isNewer = (migration: SettingsMigration) => compareFormatVersions(migration.to, current) > 0;
    const migration =
      migrations.find((m) => m.from === current && isNewer(m)) ?? migrations.find((m) => m.from === '*' && isNewer(m));
    if (!migration) return result;

    result = await migration.action(result ?? structuredClone(settings));
    result!.formatVersion = migration.to;
    current = migration.to;
  }
}
