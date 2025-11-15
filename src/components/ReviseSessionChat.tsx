import { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { STButton, STTextarea, Popup, STConnectionProfileSelect } from 'sillytavern-utils-lib/components/react';
import {
  CharacterState,
  FieldSpecificResponse,
  FieldSpecificResponseSchema,
  GlobalResponse,
  createGlobalResponseSchema,
  ReviseMessage,
  ReviseSession,
  REVISE_SCHEMA_NAME,
  CHAT_HISTORY_PLACEHOLDER_ID,
} from '../revise-types.js';
import { makePlainRequest, makeStructuredRequest } from '../request.js';
import { settingsManager, PromptEngineeringMode } from '../settings.js';
import { selected_group, st_echo, this_chid } from 'sillytavern-utils-lib/config';
import { CompareStatePopup } from './CompareStatePopup.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CurrentStatePopup } from './CurrentStatePopup.js';
import { CHARACTER_FIELDS } from '../generate.js';
import { BuildPromptOptions, buildPrompt } from 'sillytavern-utils-lib';
import * as Handlebars from 'handlebars';

const globalContext = SillyTavern.getContext();

const getGreetings = (state: CharacterState): string[] => {
  return Object.entries(state.fields)
    .filter(([key]) => key.startsWith('alternate_greetings_'))
    .sort((a, b) => {
      const indexA = parseInt(a[0].split('_')[2]);
      const indexB = parseInt(b[0].split('_')[2]);
      return indexA - indexB;
    })
    .map(([, field]) => field.value);
};

const calculateNewState = (
  prevState: CharacterState,
  response: FieldSpecificResponse | GlobalResponse,
  sessionType: 'field' | 'global',
  targetFieldId?: string,
): CharacterState => {
  const newState = structuredClone(prevState);

  if (sessionType === 'field' && targetFieldId) {
    const res = response as FieldSpecificResponse;
    if (newState.fields[targetFieldId]) {
      newState.fields[targetFieldId].value = res.response;
    }
    // No draft field support for field-specific sessions for now.
    return newState;
  }

  if (sessionType === 'global') {
    const res = response as GlobalResponse;
    let currentGreetings = getGreetings(newState);
    let greetingsModified = false;

    if (res.fields_to_change?.length) {
      for (const change of res.fields_to_change) {
        if (newState.fields[change.field]) {
          // Handles core and greeting fields
          newState.fields[change.field].value = change.value;
        } else if (newState.draftFields[change.field]) {
          // Handles draft fields
          newState.draftFields[change.field].value = change.value;
        }
      }
    }

    if (res.draft_fields_to_remove?.length) {
      for (const fieldId of res.draft_fields_to_remove) {
        if (newState.draftFields[fieldId]) {
          delete newState.draftFields[fieldId];
        }
      }
    }

    if (res.greetings_to_change?.length) {
      greetingsModified = true;
      for (const change of res.greetings_to_change) {
        // The AI provides a 1-based index.
        if (change.index > 0 && change.index <= currentGreetings.length) {
          currentGreetings[change.index - 1] = change.value;
        }
      }
    }

    if (res.greetings_to_remove?.length) {
      greetingsModified = true;
      const indicesToRemove = new Set(res.greetings_to_remove.map((i) => i - 1)); // convert to 0-based
      currentGreetings = currentGreetings.filter((_, index) => !indicesToRemove.has(index));
    }

    if (res.greetings_to_add?.length) {
      greetingsModified = true;
      currentGreetings.push(...res.greetings_to_add);
    }

    if (greetingsModified) {
      // After all operations, rebuild the greeting fields in the state.
      Object.keys(newState.fields).forEach((key) => {
        if (key.startsWith('alternate_greetings_')) {
          delete newState.fields[key];
        }
      });

      currentGreetings.forEach((greeting, index) => {
        const fieldName = `alternate_greetings_${index + 1}`;
        newState.fields[fieldName] = {
          value: greeting,
          prompt: '', // Prompts are not managed in revise sessions.
          label: `Alternate Greeting ${index + 1}`,
        };
      });
    }
  }
  return newState;
};

// This local component encapsulates the state editing UI. While putting it in a separate file would be ideal,
// keeping it here avoids adding new files to the repository structure, which can simplify reviews and small-scale changes.
interface EditStatePopupProps {
  initialState: CharacterState;
  onSave: (newState: CharacterState) => void;
  onClose: () => void;
}
const EditStatePopup: FC<EditStatePopupProps> = ({ initialState, onSave, onClose }) => {
  const [editedState, setEditedState] = useState(() => structuredClone(initialState));

  const handleFieldChange = (fieldId: string, value: string, isDraft: boolean) => {
    const newState = structuredClone(editedState);
    const fieldGroup = isDraft ? 'draftFields' : 'fields';
    if (newState[fieldGroup][fieldId]) {
      newState[fieldGroup][fieldId].value = value;
    }
    setEditedState(newState);
  };

  const handleGreetingChange = (index: number, value: string) => {
    const newState = structuredClone(editedState);
    const key = `alternate_greetings_${index + 1}`;
    if (newState.fields[key]) {
      newState.fields[key].value = value;
    }
    setEditedState(newState);
  };

  const { coreFields, alternateGreetings, draftFields } = useMemo(() => {
    const core: { id: string; label: string; value: string }[] = [];
    const greetings: string[] = [];
    const drafts: { id: string; label: string; value: string }[] = [];

    CHARACTER_FIELDS.forEach((fieldId) => {
      if (editedState.fields[fieldId]) {
        core.push({ id: fieldId, label: editedState.fields[fieldId].label, value: editedState.fields[fieldId].value });
      }
    });

    Object.entries(editedState.fields)
      .filter(([key]) => key.startsWith('alternate_greetings_'))
      .sort((a, b) => parseInt(a[0].split('_')[2]) - parseInt(b[0].split('_')[2]))
      .forEach(([, field]) => greetings.push(field.value));

    Object.entries(editedState.draftFields).forEach(([fieldId, field]) => {
      drafts.push({ id: fieldId, label: field.label, value: field.value });
    });

    return { coreFields: core, alternateGreetings: greetings, draftFields: drafts };
  }, [editedState]);

  const handleSave = () => {
    if (JSON.stringify(initialState) !== JSON.stringify(editedState)) {
      onSave(editedState);
    }
    onClose();
  };

  return (
    <div className="current-state-popup">
      <div className="popup_header">
        <h3>Editing Character State</h3>
        <div className="popup_header_buttons">
          <STButton onClick={handleSave}>
            <i className="fa-solid fa-check"></i> Save Changes
          </STButton>
          <STButton onClick={onClose} className="danger_button">
            <i className="fa-solid fa-times"></i> Cancel
          </STButton>
        </div>
      </div>

      <div className="current-state-content">
        <h4>Core Fields</h4>
        {coreFields.map(({ id, label, value }) => (
          <div key={id} className="state-field">
            <label>{label}</label>
            <STTextarea value={value} onChange={(e) => handleFieldChange(id, e.target.value, false)} rows={4} />
          </div>
        ))}

        {draftFields.length > 0 && (
          <>
            <h4 style={{ marginTop: '20px' }}>Draft Fields</h4>
            {draftFields.map(({ id, label, value }) => (
              <div key={id} className="state-field">
                <label>{label}</label>
                <STTextarea value={value} onChange={(e) => handleFieldChange(id, e.target.value, true)} rows={4} />
              </div>
            ))}
          </>
        )}

        {alternateGreetings.length > 0 && (
          <>
            <h4 style={{ marginTop: '20px' }}>Alternate Greetings</h4>
            {alternateGreetings.map((value, index) => (
              <div key={index} className="state-field">
                <label>Greeting {index + 1}</label>
                <STTextarea value={value} onChange={(e) => handleGreetingChange(index, e.target.value)} rows={4} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

interface ReviseSessionChatProps {
  session: ReviseSession;
  onBack: () => void;
  onApply: (newState: CharacterState) => void;
  onSessionUpdate: (updatedSession: ReviseSession) => void;
  initialState: CharacterState;
  chatContextOptions: BuildPromptOptions;
}

export const ReviseSessionChat: FC<ReviseSessionChatProps> = ({
  session,
  onBack,
  onApply,
  onSessionUpdate,
  initialState,
  chatContextOptions,
}) => {
  const [messages, setMessages] = useState<ReviseMessage[]>(session.messages);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [diffData, setDiffData] = useState<{ before: CharacterState; after: CharacterState } | null>(null);
  const [isCurrentStateOpen, setIsCurrentStateOpen] = useState(false);
  const [isEditingState, setIsEditingState] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const createAndAddStateUpdateMessage = useCallback(
    (currentMessages: ReviseMessage[], newState: CharacterState, lastState: CharacterState): ReviseMessage[] => {
      if (JSON.stringify(lastState) === JSON.stringify(newState)) {
        return currentMessages;
      }

      const settings = settingsManager.getSettings();
      const existingFieldsTemplate = settings.prompts.existingFieldDefinitions;
      if (!existingFieldsTemplate) return currentMessages;

      // Calculate the difference between the two states
      const changedFieldsData: {
        core: Record<string, string>;
        alternate_greetings: Record<string, string>;
        draft: Record<string, string>;
      } = { core: {}, alternate_greetings: {}, draft: {} };

      const allFieldKeys = new Set([...Object.keys(lastState.fields), ...Object.keys(newState.fields)]);
      allFieldKeys.forEach((key) => {
        const oldValue = lastState.fields[key]?.value ?? '';
        const newValue = newState.fields[key]?.value ?? '';
        if (oldValue !== newValue) {
          const field = newState.fields[key];
          if (field) {
            if (key.startsWith('alternate_greetings_')) {
              changedFieldsData.alternate_greetings[field.label] = field.value;
            } else if (CHARACTER_FIELDS.includes(key as any)) {
              changedFieldsData.core[field.label] = field.value;
            }
          }
        }
      });

      const allDraftFieldKeys = new Set([...Object.keys(lastState.draftFields), ...Object.keys(newState.draftFields)]);
      allDraftFieldKeys.forEach((key) => {
        const oldValue = lastState.draftFields[key]?.value ?? '';
        const newValue = newState.draftFields[key]?.value ?? '';
        if (oldValue !== newValue) {
          if (newState.draftFields[key]) {
            const field = newState.draftFields[key];
            changedFieldsData.draft[field.label] = field.value;
          }
        }
      });

      // If no reportable changes are found, don't add a message
      if (
        Object.keys(changedFieldsData.core).length === 0 &&
        Object.keys(changedFieldsData.alternate_greetings).length === 0 &&
        Object.keys(changedFieldsData.draft).length === 0
      ) {
        return currentMessages;
      }

      const templateData = { fields: changedFieldsData };
      let content = Handlebars.compile(existingFieldsTemplate.content, { noEscape: true })(templateData);
      content = globalContext.substituteParams(content);

      if (content.trim()) {
        const stateUpdateMessage: ReviseMessage = {
          id: `msg-${Date.now()}-state`,
          role: 'system',
          content: content.trim(),
          isStateUpdate: true,
        };
        return [...currentMessages, stateUpdateMessage];
      }

      return currentMessages;
    },
    [],
  );

  const sendRequest = useCallback(
    async (
      messagesToSend: ReviseMessage[],
      isRegeneration: boolean,
      optimisticUpdate: () => void,
      revertUpdate: () => void,
    ) => {
      const settings = settingsManager.getSettings();
      if (!session.profileId) {
        st_echo('warning', 'Please select a connection profile for this session.');
        return;
      }
      abortControllerRef.current = new AbortController();

      optimisticUpdate();
      setIsLoading(true);

      try {
        const finalMessagesForRequest: ReviseMessage[] = [];
        const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
          (p: any) => p.id === session.profileId,
        );
        const selectedApi = profile?.api ? globalContext.CONNECT_API_MAP[profile.api].selected : undefined;
        if (!selectedApi) {
          st_echo('warning', 'No API selected for this session.');
          return;
        }

        for (const message of messagesToSend) {
          if (message.id === CHAT_HISTORY_PLACEHOLDER_ID) {
            if (this_chid === undefined && !selected_group) continue;
            const prompt = await buildPrompt(selectedApi, chatContextOptions);
            if (prompt.warnings?.length) {
              prompt.warnings.forEach((w) => st_echo('warning', w));
            }
            finalMessagesForRequest.push(...(prompt.result as ReviseMessage[]));
          } else {
            finalMessagesForRequest.push(message);
          }
        }

        const lastState =
          messagesToSend
            .slice(0, messagesToSend.length - (isRegeneration ? 0 : 1)) // Don't exclude last message if regenerating
            .reverse()
            .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

        const existingFieldsTemplate = settings.prompts.existingFieldDefinitions;
        if (existingFieldsTemplate) {
          const templateData = {
            fields: {
              core: Object.fromEntries(
                Object.entries(lastState.fields)
                  .filter(([k]) => !k.startsWith('alternate_greetings_'))
                  .map(([, v]) => [v.label, v.value]),
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(lastState.fields)
                  .filter(([k]) => k.startsWith('alternate_greetings_'))
                  .map(([, v]) => [v.label, v.value]),
              ),
              draft: Object.fromEntries(Object.entries(lastState.draftFields).map(([, v]) => [v.label, v.value])),
            },
          };

          let content = Handlebars.compile(existingFieldsTemplate.content, { noEscape: true })(templateData);
          content = globalContext.substituteParams(content);

          if (content.trim()) {
            const stateMessage: ReviseMessage = {
              id: `temp-state-${Date.now()}`,
              role: 'system',
              content: content.trim(),
            };

            // Inject the state message before the last message in the request.
            const lastMessage = finalMessagesForRequest.pop();
            finalMessagesForRequest.push(stateMessage);
            if (lastMessage) {
              finalMessagesForRequest.push(lastMessage);
            }
          }
        }

        if (session.isReadonly) {
          const responseContent = await makePlainRequest(
            session.profileId,
            finalMessagesForRequest,
            settings.maxResponseToken,
            abortControllerRef.current.signal,
          );

          const assistantMessage: ReviseMessage = {
            id: `msg-${Date.now()}-ai`,
            role: 'assistant',
            content: responseContent,
          };

          const finalMessages = [...messagesToSend, assistantMessage];
          setMessages(finalMessages);
          onSessionUpdate({ ...session, messages: finalMessages });
        } else {
          const schema =
            session.type === 'field'
              ? FieldSpecificResponseSchema
              : (() => {
                  const allFieldIds = [...Object.keys(lastState.fields), ...Object.keys(lastState.draftFields)];
                  const draftFieldIds = Object.keys(lastState.draftFields);
                  return createGlobalResponseSchema(allFieldIds, draftFieldIds);
                })();

          const response = await makeStructuredRequest(
            session.profileId,
            finalMessagesForRequest,
            schema,
            session.type === 'field' ? REVISE_SCHEMA_NAME.FIELD : REVISE_SCHEMA_NAME.GLOBAL,
            session.promptEngineeringMode,
            settings.maxResponseToken,
            abortControllerRef.current.signal,
          );

          const typedResponse = response as FieldSpecificResponse | GlobalResponse;

          const newSnapshot = calculateNewState(lastState, typedResponse, session.type, session.targetFieldId);

          const assistantMessage: ReviseMessage = {
            id: `msg-${Date.now()}-ai`,
            role: 'assistant',
            content: typedResponse.justification,
            stateSnapshot: newSnapshot,
          };

          let finalMessages = [...messagesToSend, assistantMessage];
          finalMessages = createAndAddStateUpdateMessage(finalMessages, newSnapshot, lastState);

          setMessages(finalMessages);
          onSessionUpdate({ ...session, messages: finalMessages });
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          st_echo('info', 'Request was cancelled.');
        } else {
          console.error('Revise request failed:', error);
          st_echo('error', `Request failed: ${error.message}`);
        }
        revertUpdate();
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [session, onSessionUpdate, initialState, chatContextOptions, createAndAddStateUpdateMessage],
  );

  const handleSendMessage = useCallback(async () => {
    if (!userInput.trim() || isLoading) return;
    const userMessage: ReviseMessage = { id: `msg-${Date.now()}`, role: 'user', content: userInput.trim() };
    const previousMessages = messages;
    sendRequest(
      [...messages, userMessage],
      false,
      () => {
        setMessages([...messages, userMessage]);
        setUserInput('');
      },
      () => setMessages(previousMessages),
    );
  }, [userInput, isLoading, messages, sendRequest]);

  const handleRegenerate = useCallback(async () => {
    if (isLoading || messages.length === 0) return;

    const previousMessages = messages;
    let messagesForRequest = [...messages];

    // Find the last message that is visible to the user.
    const lastVisibleMessageIndex = messages.findLastIndex((m) => !m.isStateUpdate);

    if (lastVisibleMessageIndex > -1) {
      const lastVisibleMessage = messages[lastVisibleMessageIndex];

      // If the last visible message is from the assistant, we are regenerating it.
      // We need to remove it and any hidden state updates that came after it.
      if (lastVisibleMessage.role === 'assistant') {
        messagesForRequest = messages.slice(0, lastVisibleMessageIndex);
      }
    }
    await sendRequest(
      messagesForRequest,
      true,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  }, [isLoading, messages, sendRequest]);

  const handleApply = () => {
    const lastState =
      messages
        .slice()
        .reverse()
        .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

    onApply(lastState);
    onBack();
  };

  const handleShowDiff = (messageId: string) => {
    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1 || !messages[messageIndex].stateSnapshot) return;

    const afterState = messages[messageIndex].stateSnapshot!;
    let beforeState = initialState;
    for (let i = messageIndex - 1; i >= 0; i--) {
      if (messages[i].stateSnapshot) {
        beforeState = messages[i].stateSnapshot!;
        break;
      }
    }
    setDiffData({ before: beforeState, after: afterState });
  };

  const handleOpenCurrentState = () => {
    setIsCurrentStateOpen(true);
  };

  const handleStartEdit = (msg: ReviseMessage) => {
    setEditingMessageId(msg.id);
    setEditingContent(msg.content);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingContent('');
  };

  const handleSaveEdit = async () => {
    if (!editingMessageId) return;

    const messageIndex = messages.findIndex((m) => m.id === editingMessageId);
    if (messageIndex === -1) return;

    const confirm = await globalContext.Popup.show.confirm(
      'Edit Message',
      'This will fork the conversation from this point, removing all subsequent messages. Continue?',
    );
    if (!confirm) return;

    const previousMessages = messages;
    const truncatedMessages = messages.slice(0, messageIndex);
    const editedMessage = { ...messages[messageIndex], content: editingContent };
    const messagesForRequest = [...truncatedMessages, editedMessage];

    handleCancelEdit();

    sendRequest(
      messagesForRequest,
      false,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  };

  const handleDeleteMessage = async (messageId: string) => {
    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) return;

    const messageToDelete = messages[messageIndex];
    const isInitial = !!messageToDelete.isInitial;

    const confirm = await globalContext.Popup.show.confirm(
      'Delete Message',
      isInitial
        ? 'Deleting part of the initial context will clear the entire chat history. Are you sure?'
        : 'This will delete this message and all subsequent messages. Are you sure?',
    );
    if (!confirm) return;

    let newMessages: ReviseMessage[];
    if (isInitial) {
      newMessages = messages.filter((m) => m.isInitial && m.id !== messageId);
    } else {
      newMessages = messages.slice(0, messageIndex);
    }

    setMessages(newMessages);
    onSessionUpdate({ ...session, messages: newMessages });
    st_echo('info', 'Message history has been updated.');
  };

  const visibleMessages = messages.filter((m) => !m.isStateUpdate);
  const initialMsgs = visibleMessages.filter((m) => m.isInitial);
  const chatMsgs = visibleMessages.filter((m) => !m.isInitial);

  const currentState =
    messages
      .slice()
      .reverse()
      .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

  const handleOpenEditState = () => {
    setIsEditingState(true);
  };

  const handleSaveStateEdit = (newState: CharacterState) => {
    const lastState =
      messages
        .slice()
        .reverse()
        .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

    const userEditMessage: ReviseMessage = {
      id: `msg-${Date.now()}-user-edit`,
      role: 'user',
      content: 'I made a change.', // Default justification for manual edits
      stateSnapshot: newState,
    };

    let finalMessages = [...messages, userEditMessage];
    finalMessages = createAndAddStateUpdateMessage(finalMessages, newState, lastState);

    setMessages(finalMessages);
    onSessionUpdate({ ...session, messages: finalMessages });
    setIsEditingState(false);
  };

  const handleCancelRequest = () => {
    abortControllerRef.current?.abort();
  };

  return (
    <div className="revise-session-chat">
      <div className="popup_header">
        <h2>{session.name}</h2>
        <div className="popup_header_buttons">
          <label className="checkbox_label">
            <input
              type="checkbox"
              checked={session.isReadonly ?? false}
              onChange={(e) => onSessionUpdate({ ...session, isReadonly: e.target.checked })}
            />
            Readonly Mode
          </label>
          <div style={{ maxWidth: '200px' }}>
            <STConnectionProfileSelect
              initialSelectedProfileId={session.profileId}
              onChange={(p) => onSessionUpdate({ ...session, profileId: p?.id ?? '' })}
            />
          </div>
          <select
            className="text_pole"
            value={session.promptEngineeringMode}
            onChange={(e) =>
              onSessionUpdate({ ...session, promptEngineeringMode: e.target.value as PromptEngineeringMode })
            }
            title="Prompt Engineering Mode"
            disabled={session.isReadonly}
            style={{ minWidth: 'fit-content', width: 'unset' }}
          >
            <option value="native">Native</option>
            <option value="json">JSON</option>
            <option value="xml">XML</option>
          </select>
          <STButton onClick={handleOpenCurrentState} title="View current character state">
            View State
          </STButton>
          <STButton onClick={handleOpenEditState} title="Manually edit the current state">
            Edit State
          </STButton>
          <STButton onClick={onBack} title="Back to sessions">
            <i className="fa-solid fa-arrow-left"></i>
          </STButton>
          <STButton onClick={handleApply} title="Apply Changes and Close">
            <i className="fa-solid fa-check"></i> Apply
          </STButton>
        </div>
      </div>
      <div className="chat-messages">
        {initialMsgs.length > 0 && (
          <details className="initial-messages-container">
            <summary>View Initial Context</summary>
            <div className="initial-messages-content">
              {initialMsgs.map((msg) =>
                editingMessageId === msg.id ? (
                  <div key={msg.id} className="message-editor">
                    <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={5} />
                    <div className="editor-buttons">
                      <STButton onClick={handleSaveEdit}>
                        <i className="fa-solid fa-check"></i> Save & Fork
                      </STButton>
                      <STButton onClick={handleCancelEdit}>
                        <i className="fa-solid fa-times"></i> Cancel
                      </STButton>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className={`message-bubble-wrapper initial-context ${msg.role}`}>
                    <div className={`message-bubble ${msg.role} initial`}>
                      <div className="message-content">{msg.content}</div>
                    </div>
                    {!isLoading && msg.id !== CHAT_HISTORY_PLACEHOLDER_ID && (
                      <div className="message-actions">
                        <STButton
                          className="message-action-button"
                          onClick={() => handleStartEdit(msg)}
                          title="Edit Context"
                        >
                          {' '}
                          <i className="fa-solid fa-pencil"></i>{' '}
                        </STButton>
                        <STButton
                          className="message-action-button danger_button"
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="Delete Context"
                        >
                          {' '}
                          <i className="fa-solid fa-trash-can"></i>{' '}
                        </STButton>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </details>
        )}
        {chatMsgs.map((msg) =>
          editingMessageId === msg.id ? (
            <div key={msg.id} className="message-editor">
              <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={3} />
              <div className="editor-buttons">
                <STButton onClick={handleSaveEdit}>
                  <i className="fa-solid fa-check"></i> Save & Fork
                </STButton>
                <STButton onClick={handleCancelEdit}>
                  <i className="fa-solid fa-times"></i> Cancel
                </STButton>
              </div>
            </div>
          ) : (
            <div key={msg.id} className={`message-bubble-wrapper ${msg.role}`}>
              <div className="message-actions">
                {/* Edit button is only for user-typed messages (which don't have a state snapshot). */}
                {msg.role === 'user' && !msg.stateSnapshot && !isLoading && (
                  <STButton
                    className="message-action-button"
                    onClick={() => handleStartEdit(msg)}
                    title="Edit and Fork"
                  >
                    {' '}
                    <i className="fa-solid fa-pencil"></i>{' '}
                  </STButton>
                )}
                {/* Compare button appears on ANY message that has a state snapshot. */}
                {msg.stateSnapshot && !isLoading && (
                  <STButton
                    className="message-action-button"
                    onClick={() => handleShowDiff(msg.id)}
                    title="Compare changes"
                  >
                    {' '}
                    <i className="fa-solid fa-code-compare"></i>{' '}
                  </STButton>
                )}
                {/* Delete button appears for all non-initial messages when not loading. */}
                {!isLoading && (
                  <STButton
                    className="message-action-button danger_button"
                    onClick={() => handleDeleteMessage(msg.id)}
                    title="Delete Message"
                  >
                    {' '}
                    <i className="fa-solid fa-trash-can"></i>{' '}
                  </STButton>
                )}
              </div>
              <div className={`message-bubble ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            </div>
          ),
        )}
        {chatMsgs.length > 0 && !isLoading && (
          <div className="regenerate-button-wrapper">
            <STButton onClick={handleRegenerate} title="Regenerate response">
              {' '}
              <i className="fa-solid fa-rotate-right"></i> Regenerate{' '}
            </STButton>
          </div>
        )}
        {isLoading && (
          <div className="message-bubble-wrapper assistant">
            <div className="message-bubble assistant loading">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
            <STButton onClick={handleCancelRequest} className="danger_button" title="Cancel Request">
              <i className="fa-solid fa-stop"></i>
            </STButton>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>
      <div className="chat-input-area">
        <STTextarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your revision instructions..."
          rows={3}
          disabled={isLoading || !!editingMessageId}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <STButton onClick={handleSendMessage} disabled={isLoading || !userInput.trim() || !!editingMessageId}>
          {' '}
          <i className="fa-solid fa-paper-plane"></i>{' '}
        </STButton>
      </div>

      {diffData && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CompareStatePopup before={diffData.before} after={diffData.after} />}
          onComplete={() => setDiffData(null)}
          options={{ wide: true, large: true }}
        />
      )}
      {isCurrentStateOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CurrentStatePopup currentState={currentState} initialState={initialState} />}
          onComplete={() => setIsCurrentStateOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
      {isEditingState && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <EditStatePopup
              initialState={currentState}
              onSave={handleSaveStateEdit}
              onClose={() => setIsEditingState(false)}
            />
          }
          onComplete={() => setIsEditingState(false)}
          options={{ wide: true, large: true }}
        />
      )}
    </div>
  );
};
