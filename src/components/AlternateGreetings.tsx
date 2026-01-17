import { FC, useState, useEffect } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';

const globalContext = SillyTavern.getContext();

export interface Greeting {
  value: string;
  prompt: string;
}

interface AlternateGreetingsProps {
  greetings: Greeting[];
  onGreetingsChange: (newGreetings: Greeting[]) => void;
  onGenerate: (greetingIndex: number) => void;
  onContinue: (greetingIndex: number) => void;
  onCompare: (greetingIndex: number) => void;
  onOpenReviseSessions?: (fieldId: string) => void;
  isGenerating: boolean;
}

export const AlternateGreetings: FC<AlternateGreetingsProps> = ({
  greetings,
  onGreetingsChange,
  onGenerate,
  onContinue,
  onCompare,
  onOpenReviseSessions,
  isGenerating,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    // Reset to the first tab if the active tab becomes invalid (e.g., after deletion)
    if (activeTabIndex >= greetings.length && greetings.length > 0) {
      setActiveTabIndex(greetings.length - 1);
    } else if (greetings.length === 0) {
      setActiveTabIndex(0);
    }
  }, [greetings, activeTabIndex]);

  const handleAddGreeting = () => {
    const newGreetings = [...greetings, { value: '', prompt: '' }];
    onGreetingsChange(newGreetings);
    setActiveTabIndex(newGreetings.length - 1);
  };

  const handleDeleteGreeting = async () => {
    if (greetings.length === 0) return;
    const confirm = await globalContext.Popup.show.confirm('Delete Greeting', 'Are you sure?');
    if (confirm) {
      const newGreetings = greetings.filter((_, index) => index !== activeTabIndex);
      onGreetingsChange(newGreetings);
    }
  };

  const handleGreetingChange = (index: number, field: 'value' | 'prompt', newContent: string) => {
    const newGreetings = [...greetings];
    newGreetings[index][field] = newContent;
    onGreetingsChange(newGreetings);
  };

  const activeGreeting = greetings[activeTabIndex];

  return (
    <div className="character-field alternate-greetings-field">
      <label>Alternate Greetings</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <div
          className="alternate-greetings-tabs"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', flexGrow: 1 }}
        >
          {greetings.map((_, index) => (
            <STButton
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className={`menu_button ${index === activeTabIndex ? 'active' : ''}`}
            >
              Greeting {index + 1}
            </STButton>
          ))}
        </div>
        <STButton onClick={handleAddGreeting} title="Add a new alternate greeting">
          <i className="fa-solid fa-plus"></i> Add
        </STButton>
      </div>

      {greetings.length === 0 ? (
        <p className="subtle">No alternate greetings defined. Click "Add" to create one.</p>
      ) : (
        <div className="field-container">
          <div style={{ flexGrow: 1 }}>
            <STTextarea
              value={activeGreeting?.value ?? ''}
              onChange={(e) => handleGreetingChange(activeTabIndex, 'value', e.target.value)}
              rows={8}
              placeholder="Enter greeting content..."
            />
            <div className="field-prompt-container" style={{ marginTop: '5px' }}>
              <STTextarea
                value={activeGreeting?.prompt ?? ''}
                onChange={(e) => handleGreetingChange(activeTabIndex, 'prompt', e.target.value)}
                rows={2}
                placeholder="Enter specific prompt for this greeting..."
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <STButton onClick={() => onGenerate(activeTabIndex)} disabled={isGenerating} title="Generate greeting">
              {isGenerating ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              )}
            </STButton>
            <STButton onClick={() => onContinue(activeTabIndex)} disabled={isGenerating} title="Continue greeting">
              <i className="fa-solid fa-arrow-right"></i>
            </STButton>
            <STButton
              onClick={() => handleGreetingChange(activeTabIndex, 'value', '')}
              disabled={isGenerating}
              title="Clear greeting"
            >
              <i className="fa-solid fa-eraser"></i>
            </STButton>
            <STButton onClick={() => onCompare(activeTabIndex)} disabled={isGenerating} title="Compare greeting">
              <i className="fa-solid fa-code-compare"></i>
            </STButton>
            {onOpenReviseSessions && (
              <STButton
                onClick={() => onOpenReviseSessions(`alternate_greetings_${activeTabIndex + 1}`)}
                disabled={isGenerating}
                title="Revise with AI chat"
              >
                <i className="fa-solid fa-comments"></i>
              </STButton>
            )}
            <STButton
              onClick={handleDeleteGreeting}
              disabled={isGenerating}
              title="Delete greeting"
              className="danger_button"
            >
              <i className="fa-solid fa-trash-can"></i>
            </STButton>
          </div>
        </div>
      )}
    </div>
  );
};
