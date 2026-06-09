import { describe, expect, test } from 'vitest';
import { getWorldInfoEntries } from '../world-info-entries.js';

describe('world info entries', () => {
  test('returns an empty list when a world info file has no entries object', () => {
    expect(getWorldInfoEntries({ entries: null })).toEqual([]);
    expect(getWorldInfoEntries({})).toEqual([]);
  });

  test('filters disabled entries by default', () => {
    const enabled = { uid: 1, key: ['enabled'], disable: false };
    const disabled = { uid: 2, key: ['disabled'], disable: true };

    expect(getWorldInfoEntries({ entries: { 1: enabled, 2: disabled } } as any)).toEqual([enabled]);
    expect(getWorldInfoEntries({ entries: [enabled, disabled] } as any, { includeDisabled: true })).toEqual([
      enabled,
      disabled,
    ]);
  });
});
