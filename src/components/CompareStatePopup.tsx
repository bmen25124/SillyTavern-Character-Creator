import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { CharacterState } from '../revise-types.js';

interface CompareStatePopupProps {
  before: CharacterState;
  after: CharacterState;
}

export const DiffView: FC<{ originalContent: string; newContent: string }> = ({ originalContent, newContent }) => {
  const diffResult = useMemo(() => {
    const diff = diffWords(originalContent, newContent);
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      // Sanitize the text by replacing HTML special characters before wrapping in spans
      const sanitizedValue = part.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');

      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${sanitizedValue}</span>`;

      if (!part.added) {
        originalHtml += span;
      }
      if (!part.removed) {
        newHtml += span;
      }
    });

    return { originalHtml, newHtml };
  }, [originalContent, newContent]);

  return (
    <div className="compare-state-diff-grid">
      <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }} />
      <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.newHtml }} />
    </div>
  );
};

export const CompareStatePopup: FC<CompareStatePopupProps> = ({ before, after }) => {
  const changedFields = useMemo(() => {
    const changes: { label: string; before: string; after: string }[] = [];
    const allFieldKeys = new Set([...Object.keys(before.fields), ...Object.keys(after.fields)]);

    allFieldKeys.forEach((key) => {
      const beforeField = before.fields[key];
      const afterField = after.fields[key];

      const beforeValue = beforeField?.value ?? '';
      const afterValue = afterField?.value ?? '';

      if (beforeValue !== afterValue) {
        changes.push({
          label: afterField?.label ?? beforeField?.label ?? key,
          before: beforeValue,
          after: afterValue,
        });
      }
    });

    return changes;
  }, [before, after]);

  return (
    <div className="compare-state-popup">
      <h3>Changes in this step</h3>
      {changedFields.length === 0 ? (
        <p className="subtle" style={{ textAlign: 'center' }}>
          No changes were detected in the character state for this step.
        </p>
      ) : (
        <div className="compare-state-list">
          {changedFields.map(({ label, before, after }) => (
            <div key={label} className="compare-state-item">
              <h4>{label}</h4>
              <div className="compare-state-header">
                <span>Before</span>
                <span>After</span>
              </div>
              <DiffView originalContent={before} newContent={after} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
