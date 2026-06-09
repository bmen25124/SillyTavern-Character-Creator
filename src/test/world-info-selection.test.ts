import { describe, expect, test } from 'vitest';
import { buildWorldInfoDropdownItems } from '../world-info-selection.js';

describe('world info selection', () => {
  test('keeps missing selected lorebooks removable after they are renamed', () => {
    const items = buildWorldInfoDropdownItems(['Current Lorebook'], ['Old Lorebook', 'Current Lorebook']);

    expect(items).toEqual([
      { value: 'Current Lorebook', label: 'Current Lorebook' },
      { value: 'Old Lorebook', label: 'Old Lorebook (missing)' },
    ]);
  });
});
