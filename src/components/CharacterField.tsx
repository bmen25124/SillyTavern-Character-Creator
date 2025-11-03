import { FC } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';

export interface CharacterFieldProps {
  fieldId: string;
  label: string;
  value: string;
  prompt: string;
  large?: boolean;
  rows?: number;
  promptEnabled?: boolean;
  isDraft?: boolean;
  isGenerating?: boolean;
  onValueChange: (fieldId: string, newValue: string) => void;
  onPromptChange: (fieldId: string, newPrompt: string) => void;
  onGenerate: (fieldId: string) => void;
  onContinue: (fieldId: string) => void;
  onClear: (fieldId: string) => void;
  onCompare?: (fieldId: string) => void;
  onDelete?: (fieldId: string) => void;
  onOpenReviseSessions?: (fieldId: string) => void;
}

export const CharacterField: FC<CharacterFieldProps> = ({
  fieldId,
  label,
  value,
  prompt,
  large = false,
  rows = 3,
  promptEnabled = true,
  isDraft = false,
  isGenerating = false,
  onValueChange,
  onPromptChange,
  onGenerate,
  onContinue,
  onClear,
  onCompare,
  onDelete,
  onOpenReviseSessions,
}) => {
  return (
    <div className={`character-field ${isDraft ? 'draft-field' : 'core-field'}`}>
      <label>{label}</label>
      <div className={`field-container ${large ? 'large-field' : ''}`}>
        <STTextarea value={value} onChange={(e) => onValueChange(fieldId, e.target.value)} rows={rows} />
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
          {onOpenReviseSessions &&
            !isDraft && ( // Disabling for draft fields initially for simplicity
              <STButton onClick={() => onOpenReviseSessions(fieldId)} title="Revise with AI chat">
                <i className="fa-solid fa-comments"></i>
              </STButton>
            )}
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
      {promptEnabled && (
        <div className="field-prompt-container">
          <STTextarea
            value={prompt}
            onChange={(e) => onPromptChange(fieldId, e.target.value)}
            placeholder={`Enter additional prompt for ${label.toLowerCase()}...`}
            rows={3}
          />
        </div>
      )}
    </div>
  );
};
