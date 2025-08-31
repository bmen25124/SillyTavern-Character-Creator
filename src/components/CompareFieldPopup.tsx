import { FC, useMemo } from 'react';
import { diffWords } from 'diff';

interface CompareFieldPopupProps {
  originalContent: string;
  newContent: string;
  fieldName: string;
}

export const CompareFieldPopup: FC<CompareFieldPopupProps> = ({ originalContent, newContent, fieldName }) => {
  const diffResult = useMemo(() => {
    const diff = diffWords(originalContent, newContent);
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${part.value}</span>`;

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
    <div className="compare-popup" style={{ padding: '10px' }}>
      <h3>Compare Changes for: {fieldName}</h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {/* Original Content Column */}
        <div style={{ flex: '1' }}>
          <h4>Loaded Character Content</h4>
          <div
            className="content"
            style={{ maxHeight: '400px', overflowY: 'auto' }}
            dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }}
          />
        </div>

        {/* New Content Column */}
        <div style={{ flex: '1' }}>
          <h4>Current Content</h4>
          <div
            className="content"
            style={{ maxHeight: '400px', overflowY: 'auto' }}
            dangerouslySetInnerHTML={{ __html: diffResult.newHtml }}
          />
        </div>
      </div>
    </div>
  );
};
