import { describe, expect, test } from 'vitest';
import { compareFormatVersions, migrateSettings, SettingsMigration } from '../settings-migration.js';

const migrations: SettingsMigration[] = [
  { from: '*', to: 'F_1.4', action: (previous) => ({ ...previous, steps: ['* -> F_1.4'] }) },
  { from: 'F_1.4', to: 'F_1.9', action: (previous) => ({ ...previous, steps: [...previous.steps, 'F_1.4 -> F_1.9'] }) },
  {
    from: 'F_1.9',
    to: 'F_1.10',
    action: async (previous) => ({ ...previous, steps: [...(previous.steps ?? []), 'F_1.9 -> F_1.10'] }),
  },
];

describe('settings migration', () => {
  test('compares format versions numerically', () => {
    expect(compareFormatVersions('F_1.10', 'F_1.9')).toBeGreaterThan(0);
    expect(compareFormatVersions('F_1.4', 'F_1.10')).toBeLessThan(0);
    expect(compareFormatVersions('F_1.10', 'F_1.10')).toBe(0);
    expect(compareFormatVersions('F_2', 'F_1.10')).toBeGreaterThan(0);
  });

  test('does nothing for settings at the latest format version', async () => {
    expect(await migrateSettings({ formatVersion: 'F_1.10' }, migrations)).toBeUndefined();
  });

  test('migrates from F_1.9 to F_1.10', async () => {
    const settings = { formatVersion: 'F_1.9', value: 1 };

    expect(await migrateSettings(settings, migrations)).toEqual({
      formatVersion: 'F_1.10',
      value: 1,
      steps: ['F_1.9 -> F_1.10'],
    });
    expect(settings).toEqual({ formatVersion: 'F_1.9', value: 1 });
  });

  test('runs the wildcard migration for older versions, then the chain', async () => {
    expect(await migrateSettings({ formatVersion: 'F_1.2' }, migrations)).toEqual({
      formatVersion: 'F_1.10',
      steps: ['* -> F_1.4', 'F_1.4 -> F_1.9', 'F_1.9 -> F_1.10'],
    });
  });
});
