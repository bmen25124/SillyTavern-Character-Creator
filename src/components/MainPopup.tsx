import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import {
  STButton,
  STConnectionProfileSelect,
  STFancyDropdown,
  STPresetSelect,
  STTextarea,
  Popup,
  DropdownItem,
  PresetItem,
} from 'sillytavern-utils-lib/components';
import { applyWorldInfoEntry, createCharacter, saveCharacter, BuildPromptOptions } from 'sillytavern-utils-lib';
import { selected_group, st_echo, this_chid, world_names } from 'sillytavern-utils-lib/config';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { Character, FullExportData } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import * as Handlebars from 'handlebars';

import { runCharacterFieldGeneration, Session, CHARACTER_FIELDS, CHARACTER_LABELS } from '../generate.js';
import { ExtensionSettings, settingsManager, convertToVariableName, VERSION } from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';
import { CharacterField } from './CharacterField.js';
import { AlternateGreetings, Greeting } from './AlternateGreetings.js';
import { CompareFieldPopup } from './CompareFieldPopup.js';

if (!Handlebars.helpers['join']) {
  Handlebars.registerHelper('join', function (array: any, separator: any) {
    if (Array.isArray(array)) {
      return array.join(typeof separator === 'string' ? separator : ', ');
    }
    return '';
  });
}

const globalContext = SillyTavern.getContext();
const SESSION_KEY = 'charCreator';

// A default, empty session structure
const createDefaultSession = (): Session => ({
  selectedCharacterIndexes: this_chid ? [String(this_chid)] : [],
  selectedWorldNames: [],
  fields: CHARACTER_FIELDS.reduce(
    (acc, field) => {
      acc[field] = { value: '', prompt: '', label: CHARACTER_LABELS[field] };
      return acc;
    },
    {} as Session['fields'],
  ),
  draftFields: {},
  lastLoadedCharacterId: '',
});

const fieldConfigs = {
  name: { label: CHARACTER_LABELS.name, rows: 1, large: false, promptEnabled: false },
  description: { label: CHARACTER_LABELS.description, rows: 5, large: true, promptEnabled: true },
  personality: { label: CHARACTER_LABELS.personality, rows: 4, large: true, promptEnabled: true },
  scenario: { label: CHARACTER_LABELS.scenario, rows: 3, large: true, promptEnabled: true },
  first_mes: { label: CHARACTER_LABELS.first_mes, rows: 3, large: true, promptEnabled: true },
  mes_example: { label: CHARACTER_LABELS.mes_example, rows: 6, large: true, promptEnabled: true },
};

export const MainPopup: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [session, setSession] = useState<Session>(createDefaultSession());
  const [isGenerating, setIsGenerating] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'core' | 'draft'>('core');

  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [allWorldNames, setAllWorldNames] = useState<string[]>([]);
  const [loadedCharacter, setLoadedCharacter] = useState<Character | null>(null);
  const [compareData, setCompareData] = useState<{ original: string; current: string; fieldName: string } | null>(null);

  // --- Effects for Data Loading and Session Management ---
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setAllCharacters(globalContext.characters);
      setAllWorldNames(world_names);
      const savedSession: Partial<Session> = JSON.parse(localStorage.getItem(SESSION_KEY) ?? '{}');
      const initialSession = createDefaultSession();
      if (savedSession.fields) initialSession.fields = { ...initialSession.fields, ...savedSession.fields };
      if (savedSession.draftFields) initialSession.draftFields = savedSession.draftFields;
      if (savedSession.selectedCharacterIndexes)
        initialSession.selectedCharacterIndexes = savedSession.selectedCharacterIndexes;
      if (savedSession.selectedWorldNames) initialSession.selectedWorldNames = savedSession.selectedWorldNames;
      if (savedSession.lastLoadedCharacterId) {
        initialSession.lastLoadedCharacterId = savedSession.lastLoadedCharacterId;
        const char = globalContext.characters.find((c: Character) => c.avatar === savedSession.lastLoadedCharacterId);
        if (char) setLoadedCharacter(char);
      }
      setSession(initialSession);
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!isLoading) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }, [session, isLoading]);

  // --- Generic Setting Handlers ---
  const updateSetting = <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) => {
    settingsManager.getSettings()[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };
  const updateContextToSend = <K extends keyof ExtensionSettings['contextToSend']>(
    key: K,
    value: ExtensionSettings['contextToSend'][K],
  ) => {
    settingsManager.getSettings().contextToSend[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  // --- Field and Greeting State Handlers ---
  const handleFieldChange = useCallback(
    (fieldId: string, value: string, type: 'value' | 'prompt', isDraft: boolean) => {
      setSession((prev) => {
        const fieldGroup = isDraft ? 'draftFields' : 'fields';
        const newGroup = { ...prev[fieldGroup] };
        if (!newGroup[fieldId]) newGroup[fieldId] = { value: '', prompt: '', label: fieldId };
        newGroup[fieldId][type] = value;
        return { ...prev, [fieldGroup]: newGroup };
      });
    },
    [],
  );

  const greetings = useMemo(
    (): Greeting[] =>
      Object.keys(session.fields)
        .filter((k) => k.startsWith('alternate_greetings_'))
        .sort((a, b) => parseInt(a.split('_')[2]) - parseInt(b.split('_')[2]))
        .map((k) => session.fields[k]),
    [session.fields],
  );

  const handleGreetingsChange = useCallback((newGreetings: Greeting[]) => {
    setSession((prev) => {
      const newFields = { ...prev.fields };
      Object.keys(newFields).forEach((key) => {
        if (key.startsWith('alternate_greetings_')) delete newFields[key];
      });
      newGreetings.forEach((greeting, index) => {
        const fieldName = `alternate_greetings_${index + 1}`;
        newFields[fieldName] = { ...greeting, label: `Alternate Greeting ${index + 1}` };
      });
      return { ...prev, fields: newFields };
    });
  }, []);

  const handleClearField = useCallback(
    (fieldId: string, isDraft: boolean) => {
      handleFieldChange(fieldId, '', 'value', isDraft);
    },
    [handleFieldChange],
  );

  const handleDeleteDraftField = useCallback(
    async (fieldId: string) => {
      const confirm = await globalContext.Popup.show.confirm(
        'Delete Draft Field',
        `Are you sure you want to delete "${session.draftFields[fieldId].label}"?`,
      );
      if (confirm)
        setSession((prev) => {
          const newDrafts = { ...prev.draftFields };
          delete newDrafts[fieldId];
          return { ...prev, draftFields: newDrafts };
        });
    },
    [session.draftFields],
  );

  const handleAddDraftField = useCallback(async () => {
    const name = await globalContext.Popup.show.input('Enter Draft Field Name', '');
    if (!name?.trim()) return;
    const id = convertToVariableName(name.trim());
    if (!id) return st_echo('error', 'Invalid field name.');
    if (session.draftFields[id] || CHARACTER_FIELDS.includes(id as any))
      return st_echo('warning', 'Field name already exists.');
    setSession((prev) => ({
      ...prev,
      draftFields: { ...prev.draftFields, [id]: { value: '', prompt: '', label: name } },
    }));
    setActiveTab('draft');
  }, [session.draftFields]);

  // --- Core Generation Logic ---
  const handleGenerate = useCallback(
    async (targetField: string, continueFrom?: string) => {
      if (!settings.profileId) return st_echo('warning', 'Please select a connection profile.');
      setIsGenerating((prev) => [...prev, targetField]);
      try {
        const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
          (p) => p.id === settings.profileId,
        );
        if (!profile) throw new Error('Connection profile not found.');

        // This logic is complex and directly adapted from your vanilla implementation
        const buildPromptOptions: BuildPromptOptions = {
          presetName: profile?.preset,
          contextName: profile?.context,
          instructName: profile?.instruct,
          targetCharacterId: this_chid,
          ignoreCharacterFields: true,
          ignoreWorldInfo: true,
          ignoreAuthorNote: true,
          maxContext:
            settings.maxContextType === 'custom'
              ? settings.maxContextValue
              : settings.maxContextType === 'profile'
                ? 'preset'
                : 'active',
          includeNames: !!selected_group,
        };

        // Add message range options
        const msgContext = settings.contextToSend.messages;
        switch (msgContext.type) {
          case 'none':
            buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case 'first':
            buildPromptOptions.messageIndexesBetween = { start: 0, end: msgContext.first ?? 10 };
            break;
          case 'last':
            const chatLength = globalContext.chat?.length ?? 0;
            const lastCount = msgContext.last ?? 10;
            buildPromptOptions.messageIndexesBetween = {
              end: Math.max(0, chatLength - 1),
              start: Math.max(0, chatLength - lastCount),
            };
            break;
          case 'range':
            buildPromptOptions.messageIndexesBetween = {
              start: msgContext.range?.start ?? 0,
              end: msgContext.range?.end ?? 10,
            };
            break;
          case 'all':
          default:
            break;
        }
        if (this_chid === undefined && !selected_group) {
          buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
        }
        const entriesGroupByWorldName: Record<string, WIEntry[]> = {};
        await Promise.all(
          world_names
            .filter((name: string) => !entriesGroupByWorldName[name])
            .map(async (name: string) => {
              const worldInfo = await globalContext.loadWorldInfo(name);
              if (worldInfo) {
                entriesGroupByWorldName[name] = Object.values(worldInfo.entries);
              }
            }),
        );

        const generatedContent = await runCharacterFieldGeneration({
          profileId: settings.profileId,
          userPrompt: settings.promptPresets[settings.promptPreset].content,
          buildPromptOptions,
          continueFrom,
          session,
          allCharacters,
          entriesGroupByWorldName,
          promptSettings: settings.prompts,
          formatDescription: { content: settings.prompts[`${settings.outputFormat}Format`].content },
          mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.filter(
            (p) => p.enabled,
          ),
          includeUserMacro: settings.contextToSend.persona,
          maxResponseToken: settings.maxResponseToken,
          targetField: targetField,
          outputFormat: settings.outputFormat,
        });

        const isGreeting = targetField.startsWith('alternate_greetings_');
        const isDraft = !isGreeting && !CHARACTER_FIELDS.includes(targetField as any);
        if (isGreeting) {
          const index = parseInt(targetField.split('_')[2]) - 1;
          const newGreetings = [...greetings];
          if (newGreetings[index]) newGreetings[index].value = generatedContent;
          handleGreetingsChange(newGreetings);
        } else {
          handleFieldChange(targetField, generatedContent, 'value', isDraft);
        }
      } catch (e: any) {
        console.error(e);
        st_echo('error', e.message || String(e));
      } finally {
        setIsGenerating((prev) => prev.filter((id) => id !== targetField));
      }
    },
    [session, settings, allCharacters, greetings, handleFieldChange, handleGreetingsChange],
  );

  // --- Character Actions ---
  const handleReset = useCallback(async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Fields', 'This will clear all fields. Are you sure?');
    if (confirm) {
      setSession(createDefaultSession());
      setLoadedCharacter(null);
    }
  }, []);

  const handleCompare = useCallback(
    (fieldId: string | number) => {
      if (!loadedCharacter) return st_echo('warning', 'Please load a character to compare against.');
      let current, original, fieldName: string;
      if (typeof fieldId === 'number') {
        current = greetings[fieldId]?.value ?? '';
        original = loadedCharacter.data?.alternate_greetings?.[fieldId] ?? '';
        fieldName = `Alternate Greeting ${fieldId + 1}`;
      } else {
        current = session.fields[fieldId]?.value ?? '';
        original = (loadedCharacter as any)[fieldId] ?? loadedCharacter.data?.[fieldId] ?? '';
        fieldName = CHARACTER_LABELS[fieldId as keyof typeof CHARACTER_LABELS];
      }
      setCompareData({ original, current, fieldName });
    },
    [loadedCharacter, session.fields, greetings],
  );

  const handleLoadCharacter = useCallback(
    async (charIndexStr: string) => {
      const char = allCharacters[parseInt(charIndexStr)];
      if (!char) return;
      const isDirty = CHARACTER_FIELDS.some((f) => session.fields[f].value.trim() !== '');
      if (isDirty) {
        const confirm = await globalContext.Popup.show.confirm('Load Character', 'Overwrite current fields?');
        if (!confirm) return;
      }
      const newFields = { ...session.fields };
      CHARACTER_FIELDS.forEach((f) => {
        newFields[f] = { value: (char as any)[f] ?? char.data?.[f] ?? '', prompt: '', label: CHARACTER_LABELS[f] };
      });
      const newGreetings = (char.data?.alternate_greetings ?? []).map((v: string) => ({ value: v, prompt: '' }));
      setLoadedCharacter(char);
      setSession((prev) => ({ ...prev, fields: newFields, lastLoadedCharacterId: char.avatar }));
      handleGreetingsChange(newGreetings);
    },
    [allCharacters, session.fields, handleGreetingsChange],
  );

  const getGreetingsArray = () => greetings.map((g) => g.value).filter((v) => v.trim() !== '');

  const handleSaveAsNew = async () => {
    if (!session.fields.name.value) return st_echo('warning', 'Please provide a character name.');
    const confirm = await globalContext.Popup.show.confirm('Save as New Character', 'Are you sure?');
    if (!confirm) return;
    const data: FullExportData = {
      name: session.fields.name.value,
      description: session.fields.description.value,
      personality: session.fields.personality.value,
      scenario: session.fields.scenario.value,
      first_mes: session.fields.first_mes.value,
      mes_example: session.fields.mes_example.value,
      data: {
        alternate_greetings: getGreetingsArray(),
        tags: [],
        avatar: 'none',
        name: session.fields.name.value,
        description: session.fields.description.value,
        first_mes: session.fields.first_mes.value,
        mes_example: session.fields.mes_example.value,
        personality: session.fields.personality.value,
        scenario: session.fields.scenario.value,
      },
      avatar: 'none',
      tags: [],
      spec: 'chara_card_v3',
      spec_version: '3.0',
    };
    try {
      await createCharacter(data, true);
    } catch (e: any) {
      st_echo('error', `Failed to create character: ${e.message}`);
    }
  };

  const handleOverride = async () => {
    if (!loadedCharacter) return st_echo('warning', 'Please load a character to override.');
    const confirm = await globalContext.Popup.show.confirm(
      'Override Character',
      `Override "${loadedCharacter.name}"? This cannot be undone.`,
    );
    if (!confirm) return;
    const data: Character = {
      ...loadedCharacter,
      name: session.fields.name.value,
      description: session.fields.description.value,
      personality: session.fields.personality.value,
      scenario: session.fields.scenario.value,
      first_mes: session.fields.first_mes.value,
      mes_example: session.fields.mes_example.value,
      data: { ...loadedCharacter.data, alternate_greetings: getGreetingsArray() },
    };
    try {
      await saveCharacter(data, true);
      st_echo('success', `Character "${data.name}" updated!`);
    } catch (e: any) {
      st_echo('error', `Failed to override character: ${e.message}`);
    }
  };

  const handleExportDrafts = () => {
    const data = JSON.stringify({ draftFields: session.draftFields, version: VERSION }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `crec-draft-fields-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleImportDrafts = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (!data.draftFields) throw new Error('Invalid file format.');
        const confirm =
          Object.keys(session.draftFields).length > 0
            ? await globalContext.Popup.show.confirm(
                'Import Drafts',
                'This will replace current draft fields. Continue?',
              )
            : true;
        if (confirm) {
          setSession((p) => ({ ...p, draftFields: data.draftFields }));
          st_echo('success', 'Draft fields imported.');
        }
      } catch (e: any) {
        st_echo('error', `Import failed: ${e.message}`);
      }
    };
    input.click();
  };

  // --- Memoized Derived Data ---
  const characterDropdownItems = useMemo(
    (): DropdownItem[] => allCharacters.map((c, i) => ({ value: String(i), label: c.name })),
    [allCharacters],
  );
  const worldInfoDropdownItems = useMemo(
    (): DropdownItem[] => allWorldNames.map((n) => ({ value: n, label: n })),
    [allWorldNames],
  );
  const promptPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.promptPresets).map((k) => ({ value: k, label: k })),
    [settings.promptPresets],
  );
  const mainContextPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.mainContextTemplatePresets).map((k) => ({ value: k, label: k })),
    [settings.mainContextTemplatePresets],
  );
  const wiDDItems = useMemo((): DropdownItem[] => allWorldNames.map((n) => ({ value: n, label: n })), [allWorldNames]);
  const charDDItems = useMemo(
    (): DropdownItem[] => allCharacters.map((c, i) => ({ value: String(i), label: c.name })),
    [allCharacters],
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div id="charCreatorPopup">
      <h2>Character Creator</h2>
      <div className="container">
        {/* Left Column */}
        <div className="column">
          <div className="card">
            <h3>Connection Profile</h3>
            <STConnectionProfileSelect
              initialSelectedProfileId={settings.profileId}
              onChange={(p) => updateSetting('profileId', p?.id ?? '')}
            />
          </div>
          <div className="card">
            <h3>Context to Send</h3>
            <div className="context-options">
              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.stDescription}
                  onChange={(e) => updateContextToSend('stDescription', e.target.checked)}
                />{' '}
                Description of SillyTavern & Char Card
              </label>
              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.persona}
                  onChange={(e) => updateContextToSend('persona', e.target.checked)}
                />{' '}
                User's Persona
              </label>

              {(this_chid !== undefined || selected_group) && (
                <div className="message-options">
                  <h4>Messages to Include</h4>
                  <select
                    className="text_pole"
                    value={settings.contextToSend.messages.type}
                    onChange={(e) =>
                      updateContextToSend('messages', {
                        ...settings.contextToSend.messages,
                        type: e.target.value as any,
                      })
                    }
                  >
                    <option value="none">None</option>
                    <option value="all">All Messages</option>
                    <option value="first">First X Messages</option>
                    <option value="last">Last X Messages</option>
                    <option value="range">Range</option>
                  </select>
                  {settings.contextToSend.messages.type === 'first' && (
                    <div style={{ marginTop: '10px' }}>
                      <label>
                        First{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          value={settings.contextToSend.messages.first ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              first: parseInt(e.target.value) || 10,
                            })
                          }
                        />{' '}
                        Messages
                      </label>
                    </div>
                  )}
                  {settings.contextToSend.messages.type === 'last' && (
                    <div style={{ marginTop: '10px' }}>
                      <label>
                        Last{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          value={settings.contextToSend.messages.last ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              last: parseInt(e.target.value) || 10,
                            })
                          }
                        />{' '}
                        Messages
                      </label>
                    </div>
                  )}
                  {settings.contextToSend.messages.type === 'range' && (
                    <div style={{ marginTop: '10px' }}>
                      <label>
                        Range:{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="0"
                          placeholder="Start"
                          value={settings.contextToSend.messages.range?.start ?? 0}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              range: {
                                ...settings.contextToSend.messages.range!,
                                start: parseInt(e.target.value) || 0,
                              },
                            })
                          }
                        />{' '}
                        to{' '}
                        <input
                          type="number"
                          className="text_pole small message-input"
                          min="1"
                          placeholder="End"
                          value={settings.contextToSend.messages.range?.end ?? 10}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              range: { ...settings.contextToSend.messages.range!, end: parseInt(e.target.value) || 10 },
                            })
                          }
                        />
                      </label>
                    </div>
                  )}
                </div>
              )}

              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.charCard}
                  onChange={(e) => updateContextToSend('charCard', e.target.checked)}
                />{' '}
                Selected Characters' Data
              </label>
              {settings.contextToSend.charCard && (
                <STFancyDropdown
                  items={characterDropdownItems}
                  value={session.selectedCharacterIndexes}
                  onChange={(v) => setSession((s) => ({ ...s, selectedCharacterIndexes: v }))}
                  multiple
                  enableSearch
                />
              )}

              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.worldInfo}
                  onChange={(e) => updateContextToSend('worldInfo', e.target.checked)}
                />{' '}
                Selected World Info
              </label>
              {settings.contextToSend.worldInfo && (
                <STFancyDropdown
                  items={worldInfoDropdownItems}
                  value={session.selectedWorldNames}
                  onChange={(v) => setSession((s) => ({ ...s, selectedWorldNames: v }))}
                  multiple
                  enableSearch
                />
              )}

              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.existingFields}
                  onChange={(e) => updateContextToSend('existingFields', e.target.checked)}
                />{' '}
                Existing Field Content
              </label>
              <label className="checkbox_label">
                <input
                  type="checkbox"
                  checked={settings.contextToSend.dontSendOtherGreetings}
                  onChange={(e) => updateContextToSend('dontSendOtherGreetings', e.target.checked)}
                />{' '}
                Don't send other alternate greetings
              </label>
            </div>
          </div>
          <div className="card">
            <h3>Generation Options</h3>
            <label title="You can edit in extension settings">
              Main Context Template
              <STPresetSelect
                onItemsChange={() => {}}
                label="Main Context Template"
                items={mainContextPresetItems}
                value={settings.mainContextTemplatePreset}
                onChange={(v) => updateSetting('mainContextTemplatePreset', v ?? 'default')}
              />
            </label>
            <label>
              Max Context Tokens
              <select
                className="text_pole"
                value={settings.maxContextType}
                onChange={(e) => updateSetting('maxContextType', e.target.value as any)}
              >
                <option value="profile">Use profile preset</option>
                <option value="sampler">Use active preset</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            {settings.maxContextType === 'custom' && (
              <input
                type="number"
                className="text_pole"
                value={settings.maxContextValue}
                onChange={(e) => updateSetting('maxContextValue', parseInt(e.target.value) || 16384)}
              />
            )}
            <label>
              Max Response Tokens
              <input
                type="number"
                className="text_pole"
                value={settings.maxResponseToken}
                onChange={(e) => updateSetting('maxResponseToken', parseInt(e.target.value) || 1024)}
              />
            </label>
            <label>
              Output Format
              <select
                className="text_pole"
                value={settings.outputFormat}
                onChange={(e) => updateSetting('outputFormat', e.target.value as any)}
              >
                <option value="none">Plain Text</option>
                <option value="xml">XML</option>
                <option value="json">JSON</option>
              </select>
            </label>
          </div>
          <div className="card">
            <h3>Additional Instructions</h3>
            <STPresetSelect
              label="Prompt Preset"
              items={promptPresetItems}
              value={settings.promptPreset}
              onChange={(v) => updateSetting('promptPreset', v ?? 'default')}
              onItemsChange={(items) =>
                updateSetting(
                  'promptPresets',
                  items.reduce(
                    (acc, i) => ({ ...acc, [i.value]: settings.promptPresets[i.value] ?? { content: '' } }),
                    {},
                  ),
                )
              }
              enableCreate
              enableDelete
              enableRename
              readOnlyValues={['default']}
            />
            <STTextarea
              value={settings.promptPresets[settings.promptPreset]?.content ?? ''}
              onChange={(e) =>
                updateSetting('promptPresets', {
                  ...settings.promptPresets,
                  [settings.promptPreset]: { content: e.target.value },
                })
              }
              rows={4}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="wide-column">
          <div className="character-field-actions">
            <STButton onClick={handleSaveAsNew}>Save as New</STButton>
            <STButton onClick={handleOverride} disabled={!loadedCharacter}>
              Override Char
            </STButton>
            {settings.showSaveAsWorldInfoEntry.show && (
              <STFancyDropdown
                items={worldInfoDropdownItems}
                placeholder="Save as WI Entry"
                closeOnSelect
                value={[]}
                onChange={(v) => {}}
                onBeforeSelection={async (current, proposed) => {
                  if (!session.fields.name.value) {
                    st_echo('warning', 'Please enter a name first.');
                    return false;
                  }
                  const worldName = proposed[0];
                  const template = Handlebars.compile(settings.prompts.worldInfoCharDefinition.content);
                  const content = template({
                    character: { ...session.fields, alternate_greetings: greetings.map((g) => g.value) },
                  });
                  const entry: WIEntry = {
                    uid: -1,
                    key: [session.fields.name.value],
                    content,
                    comment: session.fields.name.value,
                    disable: false,
                    keysecondary: [],
                  };
                  try {
                    await applyWorldInfoEntry({ entry, selectedWorldName: worldName, operation: 'add' });
                    st_echo('success', `Entry added to ${worldName}.`);
                  } catch (err: any) {
                    st_echo('error', `Failed to add WI Entry: ${err.message}`);
                  }
                  return false; // Prevent selection
                }}
              />
            )}
            <STButton onClick={handleReset}>
              <i className="fa-solid fa-rotate-left" style={{ marginRight: '10px' }}></i>Reset Fields
            </STButton>
            <div style={{ width: '200px' }} title="Load Character Data">
              <STFancyDropdown
                items={characterDropdownItems}
                value={loadedCharacter ? [String(allCharacters.indexOf(loadedCharacter))] : []}
                onChange={(v) => handleLoadCharacter(v[0])}
                multiple={false}
                enableSearch
                placeholder="Load Character..."
              />
            </div>
          </div>
          <div className="tab-buttons">
            <STButton
              onClick={() => setActiveTab('core')}
              className={`menu_button tab-button ${activeTab === 'core' ? 'active' : ''}`}
            >
              Core Fields
            </STButton>
            <STButton
              onClick={() => setActiveTab('draft')}
              className={`menu_button tab-button ${activeTab === 'draft' ? 'active' : ''}`}
            >
              Draft Fields
            </STButton>
            <div className="right-aligned">
              {activeTab === 'draft' && (
                <>
                  <STButton onClick={handleAddDraftField}>
                    <i className="fa-solid fa-plus"></i> Add
                  </STButton>
                  <STButton onClick={handleExportDrafts}>Export</STButton>
                  <STButton onClick={handleImportDrafts}>Import</STButton>
                </>
              )}
            </div>
          </div>
          <div className="tab-content-area">
            {activeTab === 'core' && (
              <div className="card tab-content active">
                <h3>Core Character Fields</h3>
                {CHARACTER_FIELDS.map((fieldId) => {
                  const config = fieldConfigs[fieldId as keyof typeof fieldConfigs];
                  if (!config) return null;
                  return (
                    <CharacterField
                      key={fieldId}
                      fieldId={fieldId}
                      label={config.label}
                      value={session.fields[fieldId]?.value ?? ''}
                      prompt={session.fields[fieldId]?.prompt ?? ''}
                      large={config.large}
                      rows={config.rows}
                      promptEnabled={config.promptEnabled}
                      isGenerating={isGenerating.includes(fieldId)}
                      onValueChange={(id, v) => handleFieldChange(id, v, 'value', false)}
                      onPromptChange={(id, p) => handleFieldChange(id, p, 'prompt', false)}
                      onGenerate={handleGenerate}
                      onContinue={(id) => handleGenerate(id, session.fields[id].value)}
                      onClear={(id) => handleClearField(id, false)}
                      onCompare={handleCompare}
                    />
                  );
                })}
                <AlternateGreetings
                  greetings={greetings}
                  onGreetingsChange={handleGreetingsChange}
                  isGenerating={isGenerating.some((id) => id.startsWith('alternate_greetings_'))}
                  onGenerate={(i) => handleGenerate(`alternate_greetings_${i + 1}`)}
                  onContinue={(i) => handleGenerate(`alternate_greetings_${i + 1}`, greetings[i].value)}
                  onCompare={handleCompare}
                />
              </div>
            )}
            {activeTab === 'draft' && (
              <div className="card tab-content active">
                <h3>Draft Fields</h3>
                {Object.entries(session.draftFields).map(([fieldId, data]) => (
                  <CharacterField
                    key={fieldId}
                    fieldId={fieldId}
                    label={data.label}
                    value={data.value}
                    prompt={data.prompt}
                    isDraft
                    rows={5}
                    isGenerating={isGenerating.includes(fieldId)}
                    onValueChange={(id, v) => handleFieldChange(id, v, 'value', true)}
                    onPromptChange={(id, p) => handleFieldChange(id, p, 'prompt', true)}
                    onGenerate={handleGenerate}
                    onContinue={(id) => handleGenerate(id, session.draftFields[id].value)}
                    onClear={(id) => handleClearField(id, true)}
                    onDelete={handleDeleteDraftField}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {compareData && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <CompareFieldPopup
              originalContent={compareData.original}
              newContent={compareData.current}
              fieldName={compareData.fieldName}
            />
          }
          onComplete={() => setCompareData(null)}
          options={{ wide: true }}
        />
      )}
    </div>
  );
};
