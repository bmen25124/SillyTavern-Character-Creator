import React, { FC, useState, useMemo, useCallback } from 'react';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  PresetItem,
  SortableListItemData,
  STButton,
  STPresetSelect,
  STSortableList,
  STTextarea,
} from 'sillytavern-utils-lib/components';
import {
  convertToVariableName,
  DEFAULT_PROMPT_CONTENTS,
  DEFAULT_SETTINGS,
  ExtensionSettings,
  MainContextPromptBlock,
  MainContextTemplatePreset,
  MessageRole,
  PromptSetting,
  settingsManager,
  SYSTEM_PROMPT_KEYS,
  SystemPromptKey,
} from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

const globalContext = SillyTavern.getContext();

export const CharacterCreatorSettings: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [selectedSystemPrompt, setSelectedSystemPrompt] = useState<string>(SYSTEM_PROMPT_KEYS[0]);

  const updateAndRefresh = useCallback(
    (updater: (currentSettings: ExtensionSettings) => void) => {
      const currentSettings = settingsManager.getSettings();
      updater(currentSettings);
      settingsManager.saveSettings();
      forceUpdate();
    },
    [forceUpdate],
  );

  // --- Derived Data for UI (Memoized for performance) ---
  const mainContextPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.mainContextTemplatePresets).map((key) => ({ value: key, label: key })),
    [settings.mainContextTemplatePresets],
  );

  const systemPromptItems = useMemo(
    (): PresetItem[] =>
      Object.entries(settings.prompts).map(([key, prompt]) => ({
        value: key,
        label: `${prompt.label} (${key})`,
      })),
    [settings.prompts],
  );

  const mainContextListItems = useMemo((): SortableListItemData[] => {
    const preset = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset];
    if (!preset) return [];
    return preset.prompts.map((prompt) => {
      const promptSetting = settings.prompts[prompt.promptName];
      const label = promptSetting ? `${promptSetting.label} (${prompt.promptName})` : prompt.promptName;
      return {
        id: prompt.promptName,
        label,
        enabled: prompt.enabled,
        selectValue: prompt.role,
        selectOptions: [
          { value: 'user', label: 'User' },
          { value: 'assistant', label: 'Assistant' },
          { value: 'system', label: 'System' },
        ],
      };
    });
  }, [settings.mainContextTemplatePreset, settings.mainContextTemplatePresets, settings.prompts]);

  // --- Handlers for Main Context Template ---
  const handleMainContextPresetChange = (newValue?: string) => {
    updateAndRefresh((s) => {
      s.mainContextTemplatePreset = newValue ?? 'default';
    });
  };

  const handleMainContextPresetsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newPresets: Record<string, MainContextTemplatePreset> = {};
      newItems.forEach((item) => {
        newPresets[item.value] =
          s.mainContextTemplatePresets[item.value] ??
          structuredClone(
            s.mainContextTemplatePresets[s.mainContextTemplatePreset] ?? s.mainContextTemplatePresets['default'],
          );
      });
      s.mainContextTemplatePresets = newPresets;
    });
  };

  const handleMainContextListChange = (newListItems: SortableListItemData[]) => {
    updateAndRefresh((s) => {
      const newPrompts: MainContextPromptBlock[] = newListItems.map((item) => ({
        promptName: item.id,
        enabled: item.enabled,
        role: (item.selectValue as MessageRole) ?? 'user',
      }));

      // Create a new preset object with the updated prompts
      const updatedPreset = {
        ...s.mainContextTemplatePresets[s.mainContextTemplatePreset],
        prompts: newPrompts,
      };

      // Create a new presets object with the updated preset
      const updatedPresets = {
        ...s.mainContextTemplatePresets,
        [s.mainContextTemplatePreset]: updatedPreset,
      };

      // Assign the new presets object back to the settings
      s.mainContextTemplatePresets = updatedPresets;
    });
  };

  const handleRestoreMainContextDefault = async () => {
    const confirm = await globalContext.Popup.show.confirm('Restore default', 'Are you sure?');
    if (!confirm) return;
    updateAndRefresh((s) => {
      // Create a new presets object with the restored default preset
      s.mainContextTemplatePresets = {
        ...s.mainContextTemplatePresets,
        default: structuredClone(DEFAULT_SETTINGS.mainContextTemplatePresets['default']),
      };

      if (s.mainContextTemplatePreset === 'default') forceUpdate();
      else s.mainContextTemplatePreset = 'default';
    });
  };

  // --- Handlers for Prompt Templates ---
  const handleSystemPromptsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newKeys = newItems.map((item) => item.value);
      const oldKeys = Object.keys(s.prompts);
      const deletedKeys = oldKeys.filter((key) => !newKeys.includes(key));

      deletedKeys.forEach((key) => {
        Object.values(s.mainContextTemplatePresets).forEach((preset) => {
          preset.prompts = preset.prompts.filter((p) => p.promptName !== key);
        });
      });

      const newPrompts: Record<string, PromptSetting> = {};
      newItems.forEach((item) => {
        newPrompts[item.value] = s.prompts[item.value] ?? { content: '', isDefault: false, label: item.label };
      });
      // @ts-ignore
      s.prompts = newPrompts;
    });
  };

  const handleSystemPromptCreate = (value: string) => {
    const variableName = convertToVariableName(value);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${value}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create a new prompts object
      s.prompts = {
        ...s.prompts,
        [variableName]: { content: s.prompts[selectedSystemPrompt]?.content ?? '', isDefault: false, label: value },
      };

      // Create a new mainContextTemplatePresets object
      const newPresets = Object.fromEntries(
        Object.entries(s.mainContextTemplatePresets).map(([presetName, preset]) => [
          presetName,
          {
            ...preset,
            prompts: [...preset.prompts, { enabled: true, promptName: variableName, role: 'user' }],
          },
        ]),
      );
      // @ts-ignore
      s.mainContextTemplatePresets = newPresets;
    });

    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptRename = (oldValue: string, newValue: string) => {
    const variableName = convertToVariableName(newValue);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${newValue}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create new prompts object
      const { [oldValue]: renamedPrompt, ...restPrompts } = s.prompts;
      // @ts-ignore
      s.prompts = {
        ...restPrompts,
        [variableName]: { ...renamedPrompt, label: newValue },
      };

      // Create new mainContextTemplatePresets object
      const newPresets = Object.fromEntries(
        Object.entries(s.mainContextTemplatePresets).map(([presetName, preset]) => [
          presetName,
          {
            ...preset,
            prompts: preset.prompts.map((p) => (p.promptName === oldValue ? { ...p, promptName: variableName } : p)),
          },
        ]),
      );
      s.mainContextTemplatePresets = newPresets;
    });

    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    updateAndRefresh((s) => {
      const prompt = s.prompts[selectedSystemPrompt];
      if (prompt) {
        // Create a new prompts object
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...prompt, // Copy existing properties
            content: newContent,
            isDefault: SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt as SystemPromptKey)
              ? DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as SystemPromptKey] === newContent
              : false,
          },
        };
      }
    });
  };

  const handleRestoreSystemPromptDefault = async () => {
    const prompt = settings.prompts[selectedSystemPrompt];
    if (!prompt) return st_echo('warning', 'No prompt selected.');
    const confirm = await globalContext.Popup.show.confirm('Restore Default', `Restore default for "${prompt.label}"?`);
    if (confirm) {
      updateAndRefresh((s) => {
        // Create a new prompts object with the restored content for the selected prompt
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...s.prompts[selectedSystemPrompt],
            content: DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as SystemPromptKey],
          },
        };
      });
    }
  };

  // --- Other Settings & Reset ---
  const handleResetEverything = async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Everything', 'Are you sure? This cannot be undone.');
    if (confirm) {
      settingsManager.resetSettings();
      forceUpdate();
      st_echo('success', 'Settings have been reset.');
    }
  };

  const selectedPrompt = settings.prompts[selectedSystemPrompt];
  const isDefaultSystemPromptSelected = SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt as SystemPromptKey);

  return (
    <div className="charCreator_settings">
      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Main Context Template</span>
          <STButton
            className="fa-solid fa-undo"
            title="Restore main context template to default"
            onClick={handleRestoreMainContextDefault}
          />
        </div>
        <STPresetSelect
          label="Template"
          items={mainContextPresetItems}
          value={settings.mainContextTemplatePreset}
          readOnlyValues={['default']}
          onChange={handleMainContextPresetChange}
          onItemsChange={handleMainContextPresetsChange}
          enableCreate
          enableRename
          enableDelete
        />
        <div style={{ marginTop: '5px' }}>
          <STSortableList
            items={mainContextListItems}
            onItemsChange={handleMainContextListChange}
            showSelectInput
            showToggleButton
          />
        </div>
      </div>

      <hr style={{ margin: '10px 0' }} />

      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Prompt Templates</span>
          {isDefaultSystemPromptSelected && (
            <STButton
              className="fa-solid fa-undo"
              title="Restore selected prompt to default"
              onClick={handleRestoreSystemPromptDefault}
            />
          )}
        </div>
        <STPresetSelect
          label="Prompt"
          items={systemPromptItems}
          value={selectedSystemPrompt}
          readOnlyValues={SYSTEM_PROMPT_KEYS}
          onChange={(newValue) => setSelectedSystemPrompt(newValue ?? '')}
          onItemsChange={handleSystemPromptsChange}
          onCreate={handleSystemPromptCreate}
          onRename={handleSystemPromptRename}
          enableCreate
          enableRename
          enableDelete
        />
        <STTextarea
          value={selectedPrompt?.content ?? ''}
          onChange={handleSystemPromptContentChange}
          placeholder="Edit the selected prompt template here..."
          rows={6}
          style={{ marginTop: '5px', width: '100%' }}
        />
      </div>

      <hr style={{ margin: '15px 0' }} />

      <label className="checkbox_label" style={{ marginTop: '15px' }}>
        <input
          type="checkbox"
          checked={settings.showSaveAsWorldInfoEntry.show}
          onChange={(e) =>
            updateAndRefresh((s) => {
              s.showSaveAsWorldInfoEntry.show = e.target.checked;
            })
          }
        />
        Show "Save as World Info Entry" option in popup
      </label>

      <hr style={{ margin: '15px 0' }} />

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <STButton className="danger_button" style={{ width: 'auto' }} onClick={handleResetEverything}>
          <i style={{ marginRight: '10px' }} className="fa-solid fa-triangle-exclamation" />I messed up, reset
          everything
        </STButton>
      </div>
    </div>
  );
};
