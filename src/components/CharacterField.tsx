import { FC } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components';

export interface CharacterFieldProps {
  fieldId: string;
  label: string;
  value: string;
  prompt: string;
  isLarge?: boolean;
  isDraft?: boolean;
  isGenerating?: boolean;
  onValueChange: (fieldId: string, newValue: string) => void;
  onPromptChange: (fieldId: string, newPrompt: string) => void;
  onGenerate: (fieldId: string) => void;
  onContinue: (fieldId: string) => void;
  onClear: (fieldId: string) => void;
  onCompare?: (fieldId: string) => void;
  onDelete?: (fieldId: string) => void;
}

export const CharacterField: FC<CharacterFieldProps> = ({
  fieldId,
  label,
  value,
  prompt,
  isLarge = false,
  isDraft = false,
  isGenerating = false,
  onValueChange,
  onPromptChange,
  onGenerate,
  onContinue,
  onClear,
  onCompare,
  onDelete,
}) => {
  return (
    <div className={`character-field ${isDraft ? 'draft-field' : 'core-field'}`}>
      <label>{label}</label>
      <div className={`field-container ${isLarge ? 'large-field' : ''}`}>
        <STTextarea value={value} onChange={(e) => onValueChange(fieldId, e.target.value)} rows={isLarge ? 6 : 3} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <STButton onClick={() => onGenerate(fieldId)} disabled={isGenerating} title="Generate field content">
            {isGenerating ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            )}
          </STButton>
          <STButton onClick={() => onContinue(fieldId)} disabled={isGenerating} title="Continue from current content">
            <i className="fa-solid fa-arrow-right"></i>
          </STButton>
          <STButton onClick={() => onClear(fieldId)} title="Clear field content">
            <i className="fa-solid fa-eraser"></i>
          </STButton>
          {!isDraft && onCompare && (
            <STButton onClick={() => onCompare(fieldId)} title="Compare with loaded character">
              <i className="fa-solid fa-code-compare"></i>
            </STButton>
          )}
          {isDraft && onDelete && (
            <STButton onClick={() => onDelete(fieldId)} title="Delete Draft Field" className="danger_button">
              <i className="fa-solid fa-trash-can"></i>
            </STButton>
          )}
        </div>
      </div>
      <div className="field-prompt-container">
        <STTextarea
          value={prompt}
          onChange={(e) => onPromptChange(fieldId, e.target.value)}
          placeholder={`Enter additional prompt for ${label.toLowerCase()}...`}
          rows={3}
        />
      </div>
    </div>
  );
};
