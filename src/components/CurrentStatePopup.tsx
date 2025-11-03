import { FC, useMemo, useState } from 'react';
import { CharacterState } from '../revise-types.js';
import { CHARACTER_FIELDS } from '../generate.js';
import { DiffView } from './CompareStatePopup.js';

interface CurrentStatePopupProps {
  currentState: CharacterState;
  initialState: CharacterState;
}

export const CurrentStatePopup: FC<CurrentStatePopupProps> = ({ currentState, initialState }) => {
  const [showDiff, setShowDiff] = useState(false);

  const { coreFields, alternateGreetings } = useMemo(() => {
    const core: { label: string; value: string }[] = [];
    const greetings: string[] = [];

    CHARACTER_FIELDS.forEach((fieldId) => {
      if (currentState.fields[fieldId]) {
        core.push({ label: currentState.fields[fieldId].label, value: currentState.fields[fieldId].value });
      }
    });

    Object.entries(currentState.fields)
      .filter(([key]) => key.startsWith('alternate_greetings_'))
      .sort((a, b) => parseInt(a[0].split('_')[2]) - parseInt(b[0].split('_')[2]))
      .forEach(([, field]) => greetings.push(field.value));

    return { coreFields: core, alternateGreetings: greetings };
  }, [currentState]);

  const changedFields = useMemo(() => {
    const changes: { label: string; before: string; after: string }[] = [];
    const allFieldKeys = new Set([...Object.keys(initialState.fields), ...Object.keys(currentState.fields)]);

    allFieldKeys.forEach((key) => {
      const beforeField = initialState.fields[key];
      const afterField = currentState.fields[key];

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
  }, [initialState, currentState]);

  return (
    <div className="current-state-popup">
      <div className="popup_header">
        <h3>{showDiff ? 'Comparing with Original State' : 'Current Character State'}</h3>
        <div className="popup_header_buttons">
          <label className="checkbox_label">
            <input type="checkbox" checked={showDiff} onChange={(e) => setShowDiff(e.target.checked)} />
            Compare with Original
          </label>
        </div>
      </div>

      <div className="current-state-content">
        {showDiff ? (
          <div className="compare-state-list">
            {changedFields.length === 0 ? (
              <p className="subtle" style={{ textAlign: 'center' }}>
                No changes from the original state.
              </p>
            ) : (
              changedFields.map(({ label, before, after }) => (
                <div key={label} className="compare-state-item">
                  <h4>{label}</h4>
                  <div className="compare-state-header">
                    <span>Original</span>
                    <span>Current</span>
                  </div>
                  <DiffView originalContent={before} newContent={after} />
                </div>
              ))
            )}
          </div>
        ) : (
          <>
            <h4>Core Fields</h4>
            {coreFields.map(({ label, value }) => (
              <div key={label} className="state-field">
                <label>{label}</label>
                <div className="state-value">{value || <span className="subtle-text">empty</span>}</div>
              </div>
            ))}
            {alternateGreetings.length > 0 && (
              <>
                <h4 style={{ marginTop: '20px' }}>Alternate Greetings</h4>
                {alternateGreetings.map((value, index) => (
                  <div key={index} className="state-field">
                    <label>Greeting {index + 1}</label>
                    <div className="state-value">{value || <span className="subtle-text">empty</span>}</div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
