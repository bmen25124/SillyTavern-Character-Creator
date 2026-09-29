import { describe, expect, test } from 'vitest';
import {
  DEFAULT_CHAR_CARD_DESCRIPTION,
  DEFAULT_JSON_FORMAT_DESC,
  DEFAULT_NONE_FORMAT_DESC,
  DEFAULT_REVISE_XML_PROMPT,
  DEFAULT_XML_FORMAT_DESC,
} from '../constants.js';
import {
  compareFormatVersions,
  migrateSettings,
  SettingsMigration,
  updateDefaultPrompts,
} from '../settings-migration.js';

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

describe('updating default prompts (F_1.10 -> F_1.11)', () => {
  const newDefaults = {
    stDescription: DEFAULT_CHAR_CARD_DESCRIPTION,
    xmlFormat: DEFAULT_XML_FORMAT_DESC,
    jsonFormat: DEFAULT_JSON_FORMAT_DESC,
    noneFormat: DEFAULT_NONE_FORMAT_DESC,
    reviseXmlPrompt: DEFAULT_REVISE_XML_PROMPT,
  };
  const f1_11: SettingsMigration = {
    from: 'F_1.10',
    to: 'F_1.11',
    action: (previous) => updateDefaultPrompts(previous, newDefaults),
  };
  const f1_10: SettingsMigration = {
    from: 'F_1.9',
    to: 'F_1.10',
    action: (previous) => ({ ...previous, steps: [...(previous.steps ?? []), 'F_1.9 -> F_1.10'] }),
  };

  const makeSettings = (formatVersion: string) => ({
    formatVersion,
    prompts: {
      stDescription: { label: 'ST', content: 'old default', isDefault: true },
      xmlFormat: { label: 'XML', content: 'old default', isDefault: true },
      jsonFormat: { label: 'JSON', content: 'my custom JSON format', isDefault: false },
      noneFormat: { label: 'None', content: 'old default', isDefault: true },
      reviseXmlPrompt: { label: 'Revise XML', content: 'my custom revise prompt', isDefault: false },
      taskDescription: { label: 'Task', content: 'task', isDefault: true },
    },
  });

  test('updates default prompts and keeps edited ones', () => {
    const settings = makeSettings('F_1.10');
    const result = updateDefaultPrompts(settings, newDefaults);

    expect(result.prompts.stDescription).toEqual({
      label: 'ST',
      content: DEFAULT_CHAR_CARD_DESCRIPTION,
      isDefault: true,
    });
    expect(result.prompts.xmlFormat.content).toBe(DEFAULT_XML_FORMAT_DESC);
    expect(result.prompts.noneFormat.content).toBe(DEFAULT_NONE_FORMAT_DESC);
    expect(result.prompts.jsonFormat).toEqual(settings.prompts.jsonFormat);
    expect(result.prompts.reviseXmlPrompt).toEqual(settings.prompts.reviseXmlPrompt);
    expect(result.prompts.taskDescription).toEqual(settings.prompts.taskDescription);
    // The input is not modified
    expect(settings).toEqual(makeSettings('F_1.10'));
  });

  test('skips prompts that are missing', () => {
    const result = updateDefaultPrompts({ prompts: {} as Record<string, any> }, newDefaults);
    expect(result.prompts).toEqual({});
  });

  test('migrates from F_1.10 to F_1.11', async () => {
    const result = await migrateSettings(makeSettings('F_1.10'), [f1_10, f1_11]);

    expect(result?.formatVersion).toBe('F_1.11');
    expect(result?.prompts.xmlFormat.content).toBe(DEFAULT_XML_FORMAT_DESC);
    expect(result?.prompts.jsonFormat.content).toBe('my custom JSON format');
    expect((result as any).steps).toBeUndefined();
  });

  test('migrates from F_1.9 through F_1.10 to F_1.11', async () => {
    const result = await migrateSettings(makeSettings('F_1.9'), [f1_10, f1_11]);

    expect(result?.formatVersion).toBe('F_1.11');
    expect((result as any).steps).toEqual(['F_1.9 -> F_1.10']);
    expect(result?.prompts.stDescription.content).toBe(DEFAULT_CHAR_CARD_DESCRIPTION);
    expect(result?.prompts.reviseXmlPrompt.content).toBe('my custom revise prompt');
  });

  test('does nothing at F_1.11', async () => {
    expect(await migrateSettings(makeSettings('F_1.11'), [f1_10, f1_11])).toBeUndefined();
  });
});
