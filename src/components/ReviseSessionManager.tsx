import { FC, useState, useEffect, useMemo } from 'react';
import { CharacterState, ReviseSession, ReviseSessionType } from '../revise-types.js';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { ReviseSessionChat } from './ReviseSessionChat.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { buildInitialReviseMessages } from '../revise-prompt-builder.js';
import { selected_group, st_echo, this_chid } from 'sillytavern-utils-lib/config';
import { BuildPromptOptions } from 'sillytavern-utils-lib';
import { Session } from '../generate.js';

const globalContext = SillyTavern.getContext();
const REVISE_SESSIONS_KEY = 'charCreator_reviseSessions';

interface ReviseSessionManagerProps {
  target: { type: ReviseSessionType; fieldId?: string };
  onClose: () => void;
  onApply: (newState: CharacterState) => void;
  initialState: CharacterState;
  contextToSend: ExtensionSettings['contextToSend'];
  sessionForContext: Pick<Session, 'selectedCharacterIndexes' | 'selectedWorldNames'>;
}

export const ReviseSessionManager: FC<ReviseSessionManagerProps> = ({
  target,
  onClose,
  onApply,
  initialState,
  contextToSend,
  sessionForContext,
}) => {
  const [allSessions, setAllSessions] = useState<ReviseSession[]>([]);
  const [activeSession, setActiveSession] = useState<ReviseSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionsFromStorage: ReviseSession[] = JSON.parse(localStorage.getItem(REVISE_SESSIONS_KEY) || '[]');
    setAllSessions(sessionsFromStorage);
    setIsLoading(false);
  }, []);

  const filteredSessions = useMemo(() => {
    return allSessions
      .filter((s) => s.type === target.type && (s.type === 'global' || s.targetFieldId === target.fieldId))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [allSessions, target]);

  const saveAllSessions = (updatedSessions: ReviseSession[]) => {
    localStorage.setItem(REVISE_SESSIONS_KEY, JSON.stringify(updatedSessions));
    setAllSessions(updatedSessions);
  };

  const handleCreateNewSession = async () => {
    const targetLabel =
      target.type === 'field'
        ? initialState.fields[target.fieldId!]?.label || initialState.draftFields[target.fieldId!]?.label
        : 'Global';
    const name = await globalContext.Popup.show.input(
      'New Session Name',
      `Session for ${targetLabel} - ${new Date().toLocaleDateString()}`,
    );
    if (!name) return;

    try {
      const currentSettings = settingsManager.getSettings();
      if (!currentSettings.profileId) {
        st_echo('warning', 'Please select a connection profile in the main popup first.');
        return;
      }
      const newSession: ReviseSession = {
        id: `rs-${Date.now()}`,
        name,
        type: target.type,
        targetFieldId: target.fieldId,
        createdAt: new Date().toISOString(),
        messages: [], // Will be populated next
        context: {
          mainContextTemplatePreset: currentSettings.mainContextTemplatePreset,
        },
        profileId: currentSettings.profileId,
        promptEngineeringMode: currentSettings.defaultPromptEngineeringMode,
      };

      const initialMsgs = await buildInitialReviseMessages(
        initialState,
        newSession.targetFieldId,
        newSession.context.mainContextTemplatePreset,
        contextToSend,
        sessionForContext,
      );
      newSession.messages = initialMsgs;

      setActiveSession(newSession);
    } catch (error: any) {
      console.error('Failed to create session:', error);
      st_echo('error', `Failed to create session: ${error.message}`);
    }
  };

  const handleSelectSession = (session: ReviseSession) => {
    setActiveSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      const updatedSessions = allSessions.filter((s) => s.id !== sessionId);
      saveAllSessions(updatedSessions);
    }
  };

  const handleSessionUpdate = (updatedSession: ReviseSession) => {
    const index = allSessions.findIndex((s) => s.id === updatedSession.id);
    const newAllSessions = [...allSessions];
    if (index !== -1) {
      newAllSessions[index] = updatedSession;
    } else {
      newAllSessions.push(updatedSession);
    }
    saveAllSessions(newAllSessions);
    setActiveSession(updatedSession);
  };

  if (activeSession) {
    const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
      (p: any) => p.id === activeSession.profileId,
    );
    const chatContextOptions: BuildPromptOptions = {
      targetCharacterId: this_chid,
      ignoreCharacterFields: true,
      ignoreWorldInfo: true,
      ignoreAuthorNote: true,
      includeNames: !!selected_group,
      presetName: profile?.preset,
      contextName: profile?.context,
      instructName: profile?.instruct,
    };

    const msgContext = contextToSend.messages;
    switch (msgContext.type) {
      case 'none':
        chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case 'first':
        chatContextOptions.messageIndexesBetween = { start: 0, end: msgContext.first ?? 10 };
        break;
      case 'last':
        const chatLength = globalContext.chat?.length ?? 0;
        const lastCount = msgContext.last ?? 10;
        chatContextOptions.messageIndexesBetween = {
          end: Math.max(0, chatLength - 1),
          start: Math.max(0, chatLength - lastCount),
        };
        break;
      case 'range':
        chatContextOptions.messageIndexesBetween = {
          start: msgContext.range?.start ?? 0,
          end: msgContext.range?.end ?? 10,
        };
        break;
      case 'all':
      default:
        break;
    }
    if (this_chid === undefined && !selected_group) {
      chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
    }
    return (
      <ReviseSessionChat
        session={activeSession}
        onBack={() => setActiveSession(null)}
        onApply={onApply}
        onSessionUpdate={handleSessionUpdate}
        initialState={initialState}
        chatContextOptions={chatContextOptions}
      />
    );
  }

  const targetLabel =
    target.type === 'field'
      ? initialState.fields[target.fieldId!]?.label || initialState.draftFields[target.fieldId!]?.label
      : 'Global';

  return (
    <div className="revise-session-manager">
      <div className="popup_header">
        <h2>Revise Sessions for "{targetLabel}"</h2>
      </div>
      <div className="session-list">
        {isLoading ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            Loading sessions...
          </p>
        ) : filteredSessions.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No sessions found. Create a new one to get started.
          </p>
        ) : (
          filteredSessions.map((session) => (
            <div key={session.id} className="session-item">
              <div className="session-info" onClick={() => handleSelectSession(session)}>
                <span className="session-name">{session.name}</span>
                <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
              </div>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </STButton>
            </div>
          ))
        )}
      </div>
      <div className="session-actions">
        <STButton onClick={handleCreateNewSession} className="menu_button">
          <i className="fa-solid fa-plus"></i> New Session
        </STButton>
      </div>
    </div>
  );
};
