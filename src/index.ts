import {
  applyWorldInfoEntry,
  buildFancyDropdown,
  buildPresetSelect,
  BuildPromptOptions,
  buildSortableList,
  createCharacter,
  saveCharacter,
  DropdownItem,
  SortableListItemData,
} from 'sillytavern-utils-lib';
import { diffWords } from 'diff';
import { selected_group, st_echo, this_chid, world_names } from 'sillytavern-utils-lib/config';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';

import {
  globalContext,
  runCharacterFieldGeneration,
  Session,
  CharacterFieldName,
  CHARACTER_FIELDS,
  CharacterField,
  CHARACTER_LABELS,
} from './generate.js';

import {
  extensionName,
  settingsManager,
  OutputFormat,
  SYSTEM_PROMPT_KEYS,
  DEFAULT_PROMPT_CONTENTS,
  PromptSetting,
  convertToVariableName,
  VERSION,
  DEFAULT_SETTINGS,
  MessageRole,
  ContextToSend,
  SystemPromptKey,
  initializeSettings,
} from './settings.js';
import { Character, FullExportData } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

import * as Handlebars from 'handlebars';

if (!Handlebars.helpers['join']) {
  Handlebars.registerHelper('join', function (array: any, separator: any) {
    if (Array.isArray(array)) {
      return array.join(typeof separator === 'string' ? separator : ', ');
    }
    return '';
  });
}

async function handleSettingsUI() {
  const settingsHtml = await globalContext.renderExtensionTemplateAsync(
    `third-party/${extensionName}`,
    'templates/settings',
  );
  $('#extensions_settings').append(settingsHtml);

  const settingsContainer = document.querySelector('.charCreator_settings');
  if (!settingsContainer) return;

  const settings = settingsManager.getSettings();

  let setMainContextList: (list: SortableListItemData[]) => void;
  let getMainContextList: () => SortableListItemData[];
  // --- Setup Main Context Template ---
  {
    const promptSelect = settingsContainer.querySelector('#charCreator_mainContextTemplatePreset') as HTMLSelectElement;
    const promptList = settingsContainer.querySelector('#charCreator_mainContextList') as HTMLTextAreaElement;
    const restoreMainContextTemplateButton = settingsContainer.querySelector(
      '#charCreator_restoreMainContextTemplateDefault',
    ) as HTMLButtonElement;

    // promptTextarea.value = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset]?.content;
    buildPresetSelect('#charCreator_mainContextTemplatePreset', {
      initialList: Object.keys(settings.mainContextTemplatePresets),
      initialValue: settings.mainContextTemplatePreset,
      readOnlyValues: ['default'],
      onSelectChange(_, newValue) {
        const newPresetValue = newValue ?? 'default';
        setList(
          settings.mainContextTemplatePresets[newPresetValue].prompts.map((prompt) => {
            let label = prompt.promptName;
            if (settings.prompts[prompt.promptName]) {
              label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
            }
            return {
              enabled: prompt.enabled,
              id: prompt.promptName,
              label,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: prompt.role,
            };
          }),
        );

        settings.mainContextTemplatePreset = newPresetValue;
        settingsManager.saveSettings();
      },
      create: {
        onAfterCreate(value) {
          let currentPreset = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset];
          if (!currentPreset) {
            currentPreset = settings.mainContextTemplatePresets['default'];
          }
          settings.mainContextTemplatePresets[value] = structuredClone(currentPreset);
        },
      },
      rename: {
        onAfterRename(previousValue, newValue) {
          settings.mainContextTemplatePresets[newValue] = settings.mainContextTemplatePresets[previousValue];
          delete settings.mainContextTemplatePresets[previousValue];
        },
      },
      delete: {
        onAfterDelete(value) {
          delete settings.mainContextTemplatePresets[value];
        },
      },
    });

    const initialPromptList: SortableListItemData[] = settings.mainContextTemplatePresets[
      settings.mainContextTemplatePreset
    ].prompts.map((prompt) => {
      let label = prompt.promptName;
      if (settings.prompts[prompt.promptName]) {
        label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
      }
      return {
        enabled: prompt.enabled,
        id: prompt.promptName,
        label,
        selectOptions: [
          { value: 'user', label: 'User' },
          { value: 'assistant', label: 'Assistant' },
          { value: 'system', label: 'System' },
        ],
        selectValue: prompt.role,
      };
    });
    const { setList, getList } = buildSortableList(promptList, {
      initialList: initialPromptList,
      showSelectInput: true,
      showToggleButton: true,
      onSelectChange(itemId, newValue) {
        const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
          (prompt) => prompt.promptName === itemId,
        );
        if (item) {
          item.role = newValue as MessageRole;
          settingsManager.saveSettings();
        }
      },
      onToggle(itemId, newState) {
        const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
          (prompt) => prompt.promptName === itemId,
        );
        if (item) {
          item.enabled = newState;
          settingsManager.saveSettings();
        }
      },
      onOrderChange(newItemOrderIds) {
        const newOrder = newItemOrderIds
          .map((id) => {
            const item = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts.find(
              (prompt) => prompt.promptName === id,
            );
            return item;
          })
          .filter((item) => item !== undefined);
        settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts = newOrder;
        settingsManager.saveSettings();
      },
    });
    setMainContextList = setList;
    getMainContextList = getList;

    restoreMainContextTemplateButton.addEventListener('click', async () => {
      const confirm = await globalContext.Popup.show.confirm(
        'Restore default',
        'Are you sure you want to restore the default prompt?',
      );
      if (!confirm) {
        return;
      }

      settings.mainContextTemplatePresets['default'] = {
        prompts: DEFAULT_SETTINGS.mainContextTemplatePresets['default'].prompts,
      };
      if (promptSelect.value !== 'default') {
        promptSelect.value = 'default';
        promptSelect.dispatchEvent(new Event('change'));
      } else {
        setList(
          settings.mainContextTemplatePresets['default'].prompts.map((prompt) => {
            let label = prompt.promptName;
            if (settings.prompts[prompt.promptName]) {
              label = `${settings.prompts[prompt.promptName].label} (${prompt.promptName})`;
            }
            return {
              enabled: prompt.enabled,
              id: prompt.promptName,
              label,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: prompt.role,
            };
          }),
        );
        settingsManager.saveSettings();
      }
    });
  }

  // --- Setup Consolidated System Prompts ---
  {
    const promptSelect = settingsContainer.querySelector('#charCreator_systemPromptPreset') as HTMLSelectElement;
    const promptTextarea = settingsContainer.querySelector('#charCreator_systemPromptContent') as HTMLTextAreaElement;
    const restoreSystemPromptButton = settingsContainer.querySelector(
      '#charCreator_restoreSystemPromptDefault',
    ) as HTMLButtonElement;

    buildPresetSelect('#charCreator_systemPromptPreset', {
      initialList: Object.keys(settings.prompts),
      readOnlyValues: SYSTEM_PROMPT_KEYS,
      initialValue: SYSTEM_PROMPT_KEYS[0],
      label(value) {
        if (value === '') {
          return 'prompt';
        }

        const promptSetting = settings.prompts[value];
        if (promptSetting) {
          return `${promptSetting.label} (${value})`;
        }
        return value;
      },
      create: {
        onBeforeCreate(value) {
          const variableName = convertToVariableName(value);
          if (!variableName) {
            st_echo('error', `Invalid prompt name: ${value}`);
            return false;
          }
          if (settings.prompts[variableName]) {
            st_echo('error', `Prompt name already exists: ${variableName}`);
            return false;
          }

          return true;
        },
        onAfterCreate(value) {
          const variableName = convertToVariableName(value);
          settings.prompts[variableName] = {
            content: promptTextarea.value,
            isDefault: false,
            label: value,
          };
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts.push({
              enabled: true,
              promptName: variableName,
              role: 'user',
            });
          });
          setMainContextList([
            ...getMainContextList(),
            {
              enabled: true,
              id: variableName,
              label: `${value} (${variableName})`,
              selectOptions: [
                { value: 'user', label: 'User' },
                { value: 'assistant', label: 'Assistant' },
                { value: 'system', label: 'System' },
              ],
              selectValue: 'user',
            },
          ]);

          return variableName;
        },
      },
      rename: {
        onBeforeRename(_previousValue, newValue) {
          const variableName = convertToVariableName(newValue);
          if (!variableName) {
            st_echo('error', `Invalid prompt name: ${newValue}`);
            return false;
          }
          if (settings.prompts[variableName]) {
            st_echo('error', `Prompt name already exists: ${variableName}`);
            return false;
          }

          return true;
        },
        onAfterRename(previousValue, newValue) {
          const filteredValue = convertToVariableName(newValue);
          settings.prompts[filteredValue] = { ...settings.prompts[previousValue], label: newValue };
          delete settings.prompts[previousValue];
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts.forEach((prompt) => {
              if (prompt.promptName === previousValue) {
                prompt.promptName = filteredValue;
              }
            });
          });

          setMainContextList(
            getMainContextList().map((item) => {
              if (item.id === previousValue) {
                return {
                  ...item,
                  id: filteredValue,
                  label: `${newValue} (${filteredValue})`,
                };
              }
              return item;
            }),
          );
          return filteredValue;
        },
      },
      delete: {
        onAfterDelete(value) {
          delete settings.prompts[value];
          Object.entries(settings.mainContextTemplatePresets).forEach(([presetName, preset]) => {
            preset.prompts = preset.prompts.filter((prompt) => prompt.promptName !== value);
          });
          setMainContextList(getMainContextList().filter((item) => item.id !== value));
        },
      },
      onSelectChange(_, newValue) {
        const newPresetValue = newValue ?? '';
        const promptSetting: PromptSetting | undefined = settings.prompts[newPresetValue];
        if (promptSetting) {
          promptTextarea.value = promptSetting.content ?? '';
          restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(newPresetValue as SystemPromptKey)
            ? 'block'
            : 'none';
          settingsManager.saveSettings();
        }
      },
    });

    // Initial state
    const selectedKey = promptSelect.value;
    const prompSetting: PromptSetting | undefined = settings.prompts[selectedKey];
    if (prompSetting) {
      promptTextarea.value = prompSetting.content ?? '';
      restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(selectedKey as SystemPromptKey)
        ? 'block'
        : 'none';
    }

    // Event listener for textarea change
    promptTextarea.addEventListener('change', () => {
      const selectedKey = promptSelect.value as SystemPromptKey;
      const currentContent = promptTextarea.value;

      const prompSetting: PromptSetting | undefined = settings.prompts[selectedKey];
      if (prompSetting) {
        prompSetting.content = currentContent;
        prompSetting.isDefault = SYSTEM_PROMPT_KEYS.includes(selectedKey)
          ? DEFAULT_PROMPT_CONTENTS[selectedKey] === currentContent
          : false;
        restoreSystemPromptButton.style.display = SYSTEM_PROMPT_KEYS.includes(selectedKey) ? 'block' : 'none';
        settingsManager.saveSettings();
      }
    });

    restoreSystemPromptButton.addEventListener('click', async () => {
      const selectedKey = promptSelect.value as SystemPromptKey;
      const defaultContent = DEFAULT_PROMPT_CONTENTS[selectedKey];
      const promptSetting: PromptSetting | undefined = settings.prompts[selectedKey];
      if (promptSetting) {
        const confirm = await globalContext.Popup.show.confirm(
          'Restore Default',
          `Are you sure you want to restore the default for "${promptSetting.label}"?`,
        );
        if (confirm) {
          promptTextarea.value = defaultContent;
          promptTextarea.dispatchEvent(new Event('change'));
        }
      } else {
        st_echo('warning', 'No prompt selected.');
      }
    });
  }

  const showSaveAsWorldInfoCheckbox = settingsContainer.querySelector(
    '#charCreator_showSaveAsWorldInfo',
  ) as HTMLInputElement;
  if (showSaveAsWorldInfoCheckbox) {
    showSaveAsWorldInfoCheckbox.checked = settings.showSaveAsWorldInfoEntry.show;
    showSaveAsWorldInfoCheckbox.addEventListener('change', () => {
      settings.showSaveAsWorldInfoEntry.show = showSaveAsWorldInfoCheckbox.checked;
      settingsManager.saveSettings();
    });
  }

  // Reset Everything Button
  const resetEverythingButton = settingsContainer.querySelector('#charCreator_resetEverything') as HTMLButtonElement;
  resetEverythingButton.addEventListener('click', async () => {
    const confirm = await globalContext.Popup.show.confirm(
      'Reset Everything',
      'Are you sure? This will reset all settings to default and clear your data in popup. This cannot be undone. This is a destructive action.',
    );
    if (confirm) {
      // Clear active session
      localStorage.removeItem('charCreator');

      // Reset all settings to default
      settingsManager.resetSettings();

      setTimeout(() => {
        st_echo('success', 'Everything has been reset to default. Please reload the page.');
      }, 1500);
    }
  });
}

async function handlePopupUI() {
  const iconHtml = `<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>`;

  $('.form_create_bottom_buttons_block').prepend(iconHtml);
  $('#GroupFavDelOkBack').prepend(iconHtml); // Add to group management too if needed
  $('#form_character_search_form').prepend(iconHtml);

  const popupIcons = document.querySelectorAll('.charCreator-icon');

  popupIcons.forEach((icon) => {
    icon.addEventListener('click', async () => {
      const popupHtml = await globalContext.renderExtensionTemplateAsync(
        `third-party/${extensionName}`,
        'templates/popup',
      );
      globalContext.callGenericPopup(popupHtml, POPUP_TYPE.DISPLAY, undefined, {
        large: true,
        wide: true,
      });

      const popupContainer = document.getElementById('charCreatorPopup');
      if (!popupContainer) return;

      const settings = settingsManager.getSettings();

      // --- Setup Left Column ---

      // Connection Profile Dropdown
      globalContext.ConnectionManagerRequestService.handleDropdown(
        '#charCreatorPopup #charCreator_connectionProfile',
        settings.profileId,
        (profile: any) => {
          settings.profileId = profile?.id ?? '';
          settingsManager.saveSettings();
        },
      );

      // Context Sending Options
      const stDescriptionCheckbox = popupContainer.querySelector('#charCreator_stDescription') as HTMLInputElement;
      const includePersonaCheckbox = popupContainer.querySelector('#charCreator_includePersona') as HTMLInputElement;
      const includeCharsCheckbox = popupContainer.querySelector('#charCreator_includeChars') as HTMLInputElement;
      const includeCharsContainer = popupContainer.querySelector('#charCreator_charIncludeContainer') as HTMLDivElement;
      const includeWorldInfoCheckbox = popupContainer.querySelector(
        '#charCreator_includeWorldInfo',
      ) as HTMLInputElement;
      const includeWorldInfoContainer = popupContainer.querySelector(
        '#charCreator_worldInfoIncludeContainer',
      ) as HTMLDivElement;
      const includeExistingFieldsCheckbox = popupContainer.querySelector(
        '#charCreator_includeExistingFields',
      ) as HTMLInputElement;

      stDescriptionCheckbox.checked = settings.contextToSend.stDescription;
      includePersonaCheckbox.checked = settings.contextToSend.persona;
      includeCharsCheckbox.checked = settings.contextToSend.charCard;
      includeExistingFieldsCheckbox.checked = settings.contextToSend.existingFields;
      includeWorldInfoCheckbox.checked = settings.contextToSend.worldInfo;

      const dontSendOtherGreetingsCheckbox = popupContainer.querySelector(
        '#charCreator_dontSendOtherGreetings',
      ) as HTMLInputElement;
      dontSendOtherGreetingsCheckbox.checked = settings.contextToSend.dontSendOtherGreetings;

      includeCharsContainer.style.display = includeCharsCheckbox.checked ? 'block' : 'none';
      includeWorldInfoContainer.style.display = includeWorldInfoCheckbox.checked ? 'block' : 'none';

      stDescriptionCheckbox.addEventListener('change', () => {
        settings.contextToSend.stDescription = stDescriptionCheckbox.checked;
        settingsManager.saveSettings();
      });
      includePersonaCheckbox.addEventListener('change', () => {
        settings.contextToSend.persona = includePersonaCheckbox.checked;
        settingsManager.saveSettings();
      });
      includeCharsCheckbox.addEventListener('change', () => {
        settings.contextToSend.charCard = includeCharsCheckbox.checked;
        includeCharsContainer.style.display = includeCharsCheckbox.checked ? 'block' : 'none';
        settingsManager.saveSettings();
      });
      includeWorldInfoCheckbox.addEventListener('change', () => {
        settings.contextToSend.worldInfo = includeWorldInfoCheckbox.checked;
        includeWorldInfoContainer.style.display = includeWorldInfoCheckbox.checked ? 'block' : 'none';
        settingsManager.saveSettings();
      });
      includeExistingFieldsCheckbox.addEventListener('change', () => {
        settings.contextToSend.existingFields = includeExistingFieldsCheckbox.checked;
        settingsManager.saveSettings();
      });

      dontSendOtherGreetingsCheckbox.addEventListener('change', () => {
        settings.contextToSend.dontSendOtherGreetings = dontSendOtherGreetingsCheckbox.checked;
        settingsManager.saveSettings();
      });

      // Message Options Setup
      const messageOptionsContainer = popupContainer.querySelector('.message-options') as HTMLDivElement;
      const messageTypeSelect = popupContainer.querySelector('#charCreator_messageType') as HTMLSelectElement;
      const firstXDiv = popupContainer.querySelector('#charCreator_firstX') as HTMLElement;
      const lastXDiv = popupContainer.querySelector('#charCreator_lastX') as HTMLElement;
      const rangeXDiv = popupContainer.querySelector('#charCreator_rangeX') as HTMLElement;
      const firstXInput = popupContainer.querySelector('#charCreator_firstXMessages') as HTMLInputElement;
      const lastXInput = popupContainer.querySelector('#charCreator_lastXMessages') as HTMLInputElement;
      const rangeStartInput = popupContainer.querySelector('#charCreator_rangeStart') as HTMLInputElement;
      const rangeEndInput = popupContainer.querySelector('#charCreator_rangeEnd') as HTMLInputElement;

      messageTypeSelect.value = settings.contextToSend.messages.type;
      firstXInput.value = String(settings.contextToSend.messages.first ?? 10);
      lastXInput.value = String(settings.contextToSend.messages.last ?? 10);
      rangeStartInput.value = String(settings.contextToSend.messages.range?.start ?? 0);
      rangeEndInput.value = String(settings.contextToSend.messages.range?.end ?? 10);

      const updateMessageInputVisibility = (type: string) => {
        firstXDiv.style.display = type === 'first' ? 'block' : 'none';
        lastXDiv.style.display = type === 'last' ? 'block' : 'none';
        rangeXDiv.style.display = type === 'range' ? 'block' : 'none';
      };
      updateMessageInputVisibility(messageTypeSelect.value);
      if (this_chid === undefined && !selected_group) {
        messageOptionsContainer.style.display = 'none';
      }

      messageTypeSelect.addEventListener('change', () => {
        const type = messageTypeSelect.value as ContextToSend['messages']['type'];
        settings.contextToSend.messages.type = type;
        settingsManager.saveSettings();
        updateMessageInputVisibility(type);
      });
      firstXInput.addEventListener('change', () => {
        settings.contextToSend.messages.first = parseInt(firstXInput.value) || 10;
        settingsManager.saveSettings();
      });
      lastXInput.addEventListener('change', () => {
        settings.contextToSend.messages.last = parseInt(lastXInput.value) || 10;
        settingsManager.saveSettings();
      });
      rangeStartInput.addEventListener('change', () => {
        settings.contextToSend.messages.range = {
          start: parseInt(rangeStartInput.value) || 0,
          end: settings.contextToSend.messages.range?.end ?? 10,
        };
        settingsManager.saveSettings();
      });
      rangeEndInput.addEventListener('change', () => {
        settings.contextToSend.messages.range = {
          start: settings.contextToSend.messages.range?.start ?? 0,
          end: parseInt(rangeEndInput.value) || 10,
        };
        settingsManager.saveSettings();
      });

      // Max Context Options
      const maxContextTypeSelect = popupContainer.querySelector('#charCreator_maxContextType') as HTMLSelectElement;
      const maxTokensContainer = popupContainer.querySelector('#charCreator_maxTokens_container') as HTMLElement;
      const maxTokensInput = popupContainer.querySelector('#charCreator_maxTokens') as HTMLInputElement;

      maxContextTypeSelect.value = settings.maxContextType;
      maxTokensContainer.style.display = settings.maxContextType === 'custom' ? 'block' : 'none';
      maxTokensInput.value = String(settings.maxContextValue);

      maxContextTypeSelect.addEventListener('change', () => {
        const value = maxContextTypeSelect.value as 'profile' | 'sampler' | 'custom';
        settings.maxContextType = value;
        settingsManager.saveSettings();
        maxTokensContainer.style.display = value === 'custom' ? 'block' : 'none';
      });
      maxTokensInput.addEventListener('change', () => {
        settings.maxContextValue = Number(maxTokensInput.value) || 16384;
        settingsManager.saveSettings();
      });

      // Max Response Tokens
      const maxResponseTokensInput = popupContainer.querySelector('#charCreator_maxResponseTokens') as HTMLInputElement;
      maxResponseTokensInput.value = String(settings.maxResponseToken);
      maxResponseTokensInput.addEventListener('change', () => {
        settings.maxResponseToken = Number(maxResponseTokensInput.value) || 1024;
        settingsManager.saveSettings();
      });

      // Output Format Select
      const outputFormatSelect = popupContainer.querySelector('#charCreator_outputFormat') as HTMLSelectElement;
      outputFormatSelect.value = settings.outputFormat;
      outputFormatSelect.addEventListener('change', () => {
        settings.outputFormat = outputFormatSelect.value as OutputFormat;
        settingsManager.saveSettings();
      });

      // --- Setup Character Context ---
      const sessionKey = `charCreator`;
      const activeSession: Session = JSON.parse(localStorage.getItem(sessionKey) ?? '{}');
      if (!activeSession.selectedCharacterIndexes) {
        activeSession.selectedCharacterIndexes = this_chid ? [this_chid] : [];
      }
      if (!activeSession.selectedWorldNames) {
        activeSession.selectedWorldNames = [];
      }
      if (!activeSession.fields) {
        // @ts-ignore
        activeSession.fields = {};
      }
      if (!activeSession.draftFields) {
        activeSession.draftFields = {};
      }
      if (!activeSession.lastLoadedCharacterId) {
        activeSession.lastLoadedCharacterId = '';
      }
      CHARACTER_FIELDS.forEach((field) => {
        if (!activeSession.fields[field]) {
          activeSession.fields[field] = {
            value: '',
            prompt: '',
            label: '',
          };
        }
      });
      const saveSession = () => {
        localStorage.setItem(sessionKey, JSON.stringify(activeSession));
      };

      const context = SillyTavern.getContext();

      activeSession.selectedCharacterIndexes = activeSession.selectedCharacterIndexes.filter(
        (chid) => context.characters[Number(chid)],
      );

      // "Characters to Include" Dropdown
      const charSelectorContainer = popupContainer.querySelector('#charCreator_characterSelector');
      if (charSelectorContainer) {
        const characterItems: DropdownItem[] = context.characters.map((char: Character) => ({
          value: context.characters.indexOf(char).toString(),
          label: char.name,
        }));

        const characterSelector = buildFancyDropdown('#charCreator_characterSelector', {
          initialList: characterItems,
          initialValues: activeSession.selectedCharacterIndexes,
          placeholderText: 'Select characters...',
          enableSearch: characterItems.length > 10,
          onSelectChange: (_previousValues: string[], newValues: string[]) => {
            activeSession.selectedCharacterIndexes = newValues;
            saveSession();
          },
        });
        const includeCharsClearButton = popupContainer.querySelector('#charCreator_clear-includeChars-button') as HTMLInputElement;
        includeCharsClearButton.addEventListener('click', () => {
          characterSelector.deselectAll();
        });
      }

      // "Lorebooks to Include" Dropdown
      const worldInfoSelectorContainer = popupContainer.querySelector('#charCreator_worldInfoSelector');
      let allWorldNames: string[] = structuredClone(world_names);
      try {
        if (worldInfoSelectorContainer && allWorldNames.length > 0) {
          buildFancyDropdown('#charCreator_worldInfoSelector', {
            initialList: allWorldNames,
            initialValues: activeSession.selectedWorldNames,
            placeholderText: 'Select lorebooks...',
            enableSearch: allWorldNames.length > 10,
            onSelectChange: (_previousValues: string[], newValues: string[]) => {
              activeSession.selectedWorldNames = newValues;
              saveSession();
            },
          });
        } else if (worldInfoSelectorContainer) {
          worldInfoSelectorContainer.textContent = 'No active lorebooks found.';
        }
      } catch (error) {
        console.error('Failed to get active world info:', error);
        if (worldInfoSelectorContainer) {
          worldInfoSelectorContainer.textContent = 'Error loading lorebooks.';
        }
      }

      // Additional Instructions / Prompt Preset
      const promptTextarea = popupContainer.querySelector('#charCreator_prompt') as HTMLTextAreaElement;
      buildPresetSelect('#charCreatorPopup #charCreator_promptPreset', {
        initialValue: settings.promptPreset,
        initialList: Object.keys(settings.promptPresets),
        readOnlyValues: ['default'],
        onSelectChange: async (_previousValue, newValue) => {
          const newPresetValue = newValue ?? 'default';
          settings.promptPreset = newPresetValue;
          settingsManager.saveSettings();
          promptTextarea.value = settings.promptPresets[newPresetValue]?.content ?? '';
        },
        create: {
          onAfterCreate: (value) => {
            const currentPreset = settings.promptPresets[settings.promptPreset];
            settings.promptPresets[value] = {
              content: currentPreset?.content ?? '',
            };
          },
        },
        rename: {
          onAfterRename: (previousValue, newValue) => {
            settings.promptPresets[newValue] = settings.promptPresets[previousValue];
            delete settings.promptPresets[previousValue];
          },
        },
        delete: {
          onAfterDelete: (value) => {
            delete settings.promptPresets[value];
          },
        },
      });
      promptTextarea.value = settings.promptPresets[settings.promptPreset]?.content ?? '';
      promptTextarea.addEventListener('change', () => {
        if (settings.promptPresets[settings.promptPreset]) {
          settings.promptPresets[settings.promptPreset].content = promptTextarea.value;
          settingsManager.saveSettings();
        }
      });

      // --- Setup Right Column (Character Fields) ---

      // Define field configurations
      const fieldConfigs = {
        name: { label: CHARACTER_LABELS.name, rows: 1, large: false, promptEnabled: false },
        description: { label: CHARACTER_LABELS.description, rows: 5, large: true, promptEnabled: true },
        personality: { label: CHARACTER_LABELS.personality, rows: 4, large: true, promptEnabled: true },
        scenario: { label: CHARACTER_LABELS.scenario, rows: 3, large: true, promptEnabled: true },
        first_mes: { label: CHARACTER_LABELS.first_mes, rows: 3, large: true, promptEnabled: true },
        mes_example: { label: CHARACTER_LABELS.mes_example, rows: 6, large: true, promptEnabled: true },
      };

      // Get template and container
      const coreFieldTemplate = popupContainer.querySelector('#charCreator_coreFieldTemplate') as HTMLTemplateElement;
      const draftFieldTemplate = popupContainer.querySelector('#charCreator_draftFieldTemplate') as HTMLTemplateElement;
      const coreFieldsContainer = popupContainer.querySelector('#charCreator_coreFieldsContainer') as HTMLDivElement;
      const draftFieldsList = popupContainer.querySelector('#charCreator_draftFieldsList') as HTMLDivElement;
      const tabButtons = popupContainer.querySelectorAll('.tab-button');
      const tabContents = popupContainer.querySelectorAll('.tab-content');
      const addDraftFieldButton = popupContainer.querySelector('#charCreator_addDraftField') as HTMLButtonElement;
      const exportDraftFieldsButton = popupContainer.querySelector(
        '#charCreator_exportDraftFields',
      ) as HTMLButtonElement;
      const importDraftFieldsButton = popupContainer.querySelector(
        '#charCreator_importDraftFields',
      ) as HTMLButtonElement;

      // Initialize storage for field elements
      // @ts-ignore
      const coreFieldElements: Record<
        CharacterFieldName,
        {
          textarea: HTMLTextAreaElement;
          button: HTMLButtonElement;
          continueButton: HTMLButtonElement;
          promptTextarea?: HTMLTextAreaElement;
          clearButton?: HTMLButtonElement;
        }
      > = {};

      // --- Tab Switching Logic ---
      const setActiveTab = (targetTabId: string) => {
        tabButtons.forEach((button) => {
          button.classList.toggle('active', button.getAttribute('data-tab') === targetTabId);
        });
        tabContents.forEach((content) => {
          content.classList.toggle('active', content.id === targetTabId);
        });
        const isDraft = targetTabId === 'charCreator_draftFieldsContainer';
        addDraftFieldButton.style.display = isDraft ? 'block' : 'none';
        exportDraftFieldsButton.style.display = isDraft ? 'block' : 'none';
        importDraftFieldsButton.style.display = isDraft ? 'block' : 'none';
      };

      tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const targetTabId = button.getAttribute('data-tab');
          if (targetTabId) {
            setActiveTab(targetTabId);
          }
        });
      });

      setActiveTab('charCreator_coreFieldsContainer');

      // Function to get sorted alternate greeting field names
      const getAlternateGreetingFieldNames = (): string[] => {
        return Object.keys(activeSession.fields)
          .filter((key) => key.startsWith('alternate_greetings_'))
          .sort((a, b) => {
            const indexA = parseInt(a.split('_')[2] || '1');
            const indexB = parseInt(b.split('_')[2] || '1');
            return indexA - indexB;
          });
      };

      // Function to render the alternate greetings UI within the core fields container
      let activeTabIndex = 0;
      const renderAlternateGreetingsUI = (parentElement: HTMLElement) => {
        const agTemplate = popupContainer.querySelector(
          '#charCreator_alternateGreetingTabContentTemplate',
        ) as HTMLTemplateElement;
        const tabButtonContainer = parentElement.querySelector('.alternate-greetings-tabs') as HTMLDivElement;
        const contentArea = parentElement.querySelector('.alternate-greetings-content-area') as HTMLDivElement;
        const placeholder = parentElement.querySelector('.no-greetings-placeholder') as HTMLParagraphElement;
        const addButton = parentElement.querySelector('.add-alternate-greeting-button') as HTMLButtonElement;
        const deleteButton = parentElement.querySelector('.delete-alternate-greeting-button') as HTMLButtonElement;
        const sideButtonContainer = parentElement.querySelector('.field-container > div:last-child');
        const generateButton = sideButtonContainer?.querySelector(
          '.generate-alternate-greeting-button',
        ) as HTMLButtonElement;
        const continueButton = sideButtonContainer?.querySelector(
          '.continue-alternate-greeting-button',
        ) as HTMLButtonElement;
        const compareButton = sideButtonContainer?.querySelector(
          '.compare-alternate-greeting-button',
        ) as HTMLButtonElement;
        const clearButton = sideButtonContainer?.querySelector('.clear-alternate-greeting-button') as HTMLButtonElement;

        tabButtonContainer.innerHTML = '';
        contentArea.innerHTML = '';

        const greetingFieldNames = getAlternateGreetingFieldNames();

        const switchTab = (index: number) => {
          activeTabIndex = index;
          tabButtonContainer.querySelectorAll('.alternate-greeting-tab-button').forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
          });
          contentArea.querySelectorAll('.alternate-greeting-tab-content').forEach((contentDiv, i) => {
            (contentDiv as HTMLElement).style.display = i === index ? 'block' : 'none';
          });
          const hasGreetings = greetingFieldNames.length > 0;
          generateButton.disabled = !hasGreetings;
          continueButton.disabled = !hasGreetings;
          compareButton.disabled = !hasGreetings;
          clearButton.disabled = !hasGreetings;
          deleteButton.disabled = !hasGreetings; // Enable/disable delete button
        };

        if (greetingFieldNames.length === 0) {
          placeholder.style.display = 'block';
          contentArea.style.display = 'none';
          generateButton.disabled = true;
          clearButton.disabled = true;
          deleteButton.disabled = true;
        } else {
          placeholder.style.display = 'none';
          contentArea.style.display = 'block';

          greetingFieldNames.forEach((fieldName, index) => {
            const greetingField = activeSession.fields[fieldName];
            if (!greetingField) return; // Should not happen, but safety check

            // Create Tab Button
            const tabButton = document.createElement('button');
            tabButton.className = 'menu_button alternate-greeting-tab-button';
            const displayNumber = parseInt(fieldName.split('_')[2]) || 1;
            tabButton.textContent = `Greeting ${displayNumber}`;
            tabButton.dataset.index = index.toString();
            tabButton.addEventListener('click', () => switchTab(index));
            tabButtonContainer.appendChild(tabButton);

            // Create Tab Content
            const contentClone = agTemplate.content.cloneNode(true) as DocumentFragment;
            const valueTextarea = contentClone.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement;
            const promptTextarea = contentClone.querySelector(
              '.alternate-greeting-prompt-textarea',
            ) as HTMLTextAreaElement;

            valueTextarea.value = greetingField.value ?? '';
            promptTextarea.value = greetingField.prompt ?? '';
            valueTextarea.rows = 8;

            // Add change listener for value textarea
            valueTextarea.addEventListener('change', () => {
              if (activeSession.fields[fieldName]) {
                activeSession.fields[fieldName].value = valueTextarea.value;
                saveSession();
              }
            });

            // Add change listener for prompt textarea
            promptTextarea.addEventListener('change', () => {
              if (activeSession.fields[fieldName]) {
                activeSession.fields[fieldName].prompt = promptTextarea.value;
                saveSession();
              }
            });

            contentArea.appendChild(contentClone);
          });

          // Initial tab state
          switchTab(0);
        }

        // --- Setup Control Buttons ---
        const newAddButton = addButton.cloneNode(true) as HTMLButtonElement;
        addButton.parentNode?.replaceChild(newAddButton, addButton);
        const newDeleteButton = deleteButton.cloneNode(true) as HTMLButtonElement;
        deleteButton.parentNode?.replaceChild(newDeleteButton, deleteButton);
        const newGenerateButton = generateButton.cloneNode(true) as HTMLButtonElement;
        generateButton.parentNode?.replaceChild(newGenerateButton, generateButton);
        const newContinueButton = continueButton.cloneNode(true) as HTMLButtonElement;
        continueButton.parentNode?.replaceChild(newContinueButton, continueButton);
        const newCompareButton = compareButton.cloneNode(true) as HTMLButtonElement;
        compareButton.parentNode?.replaceChild(newCompareButton, compareButton);
        const newClearButton = clearButton.cloneNode(true) as HTMLButtonElement;
        clearButton.parentNode?.replaceChild(newClearButton, clearButton);

        // Add Button Listener
        newAddButton.addEventListener('click', () => {
          const nextNumber = greetingFieldNames.length + 1;
          const newFieldName = `alternate_greetings_${nextNumber}`;
          activeSession.fields[newFieldName] = { prompt: '', value: '', label: `Alternate Greeting ${nextNumber}` };
          saveSession();
          renderAlternateGreetingsUI(parentElement); // Re-render
          switchTab(greetingFieldNames.length);
        });

        // Delete Button Listener
        newDeleteButton.addEventListener('click', async () => {
          if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;

          const fieldNameToDelete = greetingFieldNames[activeTabIndex];
          const confirm = await globalContext.Popup.show.confirm(
            'Delete Greeting',
            `Are you sure you want to delete Greeting ${activeTabIndex + 1}? This cannot be undone.`,
          );
          if (confirm) {
            delete activeSession.fields[fieldNameToDelete];
            // Re-index subsequent greetings
            const subsequentFieldNames = greetingFieldNames.slice(activeTabIndex + 1);
            subsequentFieldNames.forEach((oldName, i) => {
              const newNumber = activeTabIndex + i + 1;
              const newName = `alternate_greetings_${newNumber}`;
              if (oldName !== newName) {
                activeSession.fields[newName] = activeSession.fields[oldName];
                activeSession.fields[newName].label = `Alternate Greeting ${newNumber}`;
                delete activeSession.fields[oldName];
              }
            });

            saveSession();
            renderAlternateGreetingsUI(parentElement); // Re-render
            // Adjust active tab if the last one was deleted
            const newFieldNames = getAlternateGreetingFieldNames();
            if (newFieldNames.length > 0) {
              switchTab(Math.min(activeTabIndex, newFieldNames.length - 1));
            }
          }
        });

        // Generate Button Listener
        newGenerateButton.addEventListener('click', () => {
          if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
          const targetFieldName = greetingFieldNames[activeTabIndex];
          const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
          const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

          handleFieldGeneration({
            targetField: targetFieldName,
            button: newGenerateButton,
            textarea: textarea!,
            isDraft: false,
          });
        });

        // Continue Button Listener
        newContinueButton.addEventListener('click', () => {
          if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
          const targetFieldName = greetingFieldNames[activeTabIndex];
          const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
          const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

          if (!textarea?.value.trim()) {
            st_echo('warning', 'No content to continue from');
            return;
          }

          handleFieldGeneration({
            targetField: targetFieldName,
            button: newContinueButton,
            textarea: textarea!,
            isDraft: false,
            continueFrom: textarea.value,
          });
        });

        // Compare Button Listener
        newCompareButton.addEventListener('click', () => {
          if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
          const targetFieldName = greetingFieldNames[activeTabIndex];
          const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
          const textarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;

          if (!textarea?.value.trim()) {
            st_echo('warning', 'No content to compare');
            return;
          }

          // Find loaded character content for the current alternate greeting
          const selectedId = loadCharDropdown?.getValues()?.[0];
          if (!selectedId) {
            st_echo('warning', 'Please select a character first to compare against.');
            return;
          }

          const character = context.characters[parseInt(selectedId)];
          if (!character) {
            st_echo('warning', 'Selected character not found.');
            return;
          }

          const characterGreetings = character.data?.alternate_greetings ?? [];
          const characterValue = characterGreetings[activeTabIndex] ?? '';

          handleFieldComparison(targetFieldName, textarea.value, characterValue);
        });

        // Clear Button Listener
        newClearButton.addEventListener('click', () => {
          if (activeTabIndex < 0 || activeTabIndex >= greetingFieldNames.length) return;
          const targetFieldName = greetingFieldNames[activeTabIndex];
          const contentDiv = contentArea.querySelectorAll('.alternate-greeting-tab-content')[activeTabIndex];
          const valueTextarea = contentDiv?.querySelector('.alternate-greeting-textarea') as HTMLTextAreaElement | null;
          const promptTextarea = contentDiv?.querySelector(
            '.alternate-greeting-prompt-textarea',
          ) as HTMLTextAreaElement | null;

          if (activeSession.fields[targetFieldName]) {
            valueTextarea!.value = '';
            activeSession.fields[targetFieldName].value = '';
            saveSession();
          }
        });
      };

      // Generate core fields from template
      CHARACTER_FIELDS.forEach((fieldName) => {
        // Type guard to ensure fieldName is a key of fieldConfigs
        if (!(fieldName in fieldConfigs)) {
          console.warn(`Skipping unknown core field: ${fieldName}`);
          return;
        }
        const config = fieldConfigs[fieldName as keyof typeof fieldConfigs];
        const clone = coreFieldTemplate.content.cloneNode(true) as DocumentFragment;

        // Configure the cloned elements
        const label = clone.querySelector('label') as HTMLLabelElement;
        const textarea = clone.querySelector('.field-value-textarea') as HTMLTextAreaElement;
        const button = clone.querySelector('.generate-field-button') as HTMLButtonElement;
        const continueButton = clone.querySelector('.continue-field-button') as HTMLButtonElement;
        const clearButton = clone.querySelector('.clear-field-button') as HTMLButtonElement;
        const promptTextarea = clone.querySelector('.field-prompt-textarea') as HTMLTextAreaElement;

        // Set IDs and attributes
        textarea.id = `charCreator_field_${fieldName}`;
        promptTextarea.id = `charCreator_prompt_${fieldName}`;
        label.textContent = config.label;
        label.htmlFor = textarea.id; // Set label 'for' attribute

        // Set content
        textarea.rows = config.rows;

        const fieldData = activeSession.fields[fieldName];
        textarea.value = fieldData?.value ?? '';
        button.dataset.field = fieldName;
        button.title = `Generate ${config.label}`;
        promptTextarea.placeholder = `Enter additional prompt for ${config.label.toLowerCase()}...`;
        promptTextarea.value = fieldData?.prompt ?? '';

        if (!config.promptEnabled) {
          promptTextarea.closest('.field-prompt-container')?.remove();
        }

        if (config.large) {
          textarea.closest('.field-container')?.classList.add('large-field');
        }

        // Event listener for clear button (Core Fields)
        clearButton?.addEventListener('click', () => {
          textarea.value = '';
          textarea.dispatchEvent(new Event('change')); // Trigger change to update session
        });

        // Store references
        coreFieldElements[fieldName] = {
          textarea,
          button,
          continueButton,
          promptTextarea,
          clearButton,
        };

        coreFieldsContainer.appendChild(clone);
      });

      // --- Render Alternate Greetings using its template ---
      const agTemplateElement = popupContainer.querySelector(
        '#charCreator_alternateGreetingsTemplate',
      ) as HTMLTemplateElement;
      const agContent = agTemplateElement.content.cloneNode(true) as DocumentFragment;
      const agFieldElement = agContent.querySelector('.alternate-greetings-field') as HTMLElement;
      coreFieldsContainer.appendChild(agContent); // Append the whole template content
      renderAlternateGreetingsUI(agFieldElement); // Initialize UI logic within the appended element

      // --- Render Draft Fields ---
      const renderDraftField = (fieldName: string, fieldData: CharacterField) => {
        if (!draftFieldTemplate || !draftFieldsList) return;

        const clone = draftFieldTemplate.content.cloneNode(true) as DocumentFragment;
        const fieldDiv = clone.querySelector('.character-field') as HTMLElement;
        const label = clone.querySelector('label') as HTMLLabelElement;
        const textarea = clone.querySelector('.field-value-textarea') as HTMLTextAreaElement;
        const promptTextarea = clone.querySelector('.field-prompt-textarea') as HTMLTextAreaElement;
        const deleteButton = clone.querySelector('.delete-draft-field-button') as HTMLButtonElement;
        const generateButton = clone.querySelector('.generate-field-button') as HTMLButtonElement;
        const continueButton = clone.querySelector('.continue-field-button') as HTMLButtonElement;
        const clearButton = clone.querySelector('.clear-field-button') as HTMLButtonElement;

        fieldDiv.dataset.draftFieldName = fieldName;
        label.textContent = fieldData.label; // Use the key as the label for now
        label.htmlFor = `charCreator_draft_field_${fieldName}`;
        textarea.id = `charCreator_draft_field_${fieldName}`;
        textarea.value = fieldData.value ?? '';
        promptTextarea.value = fieldData.prompt ?? '';
        promptTextarea.id = `charCreator_draft_prompt_${fieldName}`;
        promptTextarea.placeholder = `Enter additional prompt for ${fieldData.label}...`;
        deleteButton.dataset.draftFieldName = fieldName;
        generateButton.dataset.field = fieldName;

        clearButton.dataset.draftFieldName = fieldName;
        // Event listener for value change
        textarea.addEventListener('change', () => {
          if (activeSession.draftFields[fieldName]) {
            activeSession.draftFields[fieldName].value = textarea.value;
            saveSession();
          }
        });

        // Event listener for prompt change
        promptTextarea.addEventListener('change', () => {
          if (activeSession.draftFields[fieldName]) {
            activeSession.draftFields[fieldName].prompt = promptTextarea.value;
            saveSession();
          }
        });

        // Event listener for clear button (Draft Fields)
        clearButton.addEventListener('click', () => {
          if (activeSession.draftFields[fieldName]) {
            textarea.value = ''; // Clear the textarea visually
            activeSession.draftFields[fieldName].value = ''; // Update the session data
            saveSession();
          }
        });

        // Event listener for delete button
        deleteButton.addEventListener('click', async () => {
          const confirm = await globalContext.Popup.show.confirm(
            'Delete Draft Field',
            `Are you sure you want to delete the draft field "${fieldData.label}"? This cannot be undone.`,
          );
          if (confirm) {
            delete activeSession.draftFields[fieldName];
            fieldDiv.remove();
            saveSession();
          }
        });

        // Generate button click handler
        generateButton.addEventListener('click', () => {
          handleFieldGeneration({
            targetField: fieldName,
            button: generateButton,
            textarea,
            isDraft: true,
          });
        });

        // Continue button click handler
        continueButton.addEventListener('click', () => {
          if (!textarea.value.trim()) {
            st_echo('warning', 'No content to continue from');
            return;
          }
          handleFieldGeneration({
            targetField: fieldName,
            button: continueButton,
            textarea,
            isDraft: true,
            continueFrom: textarea.value,
          });
        });

        draftFieldsList.appendChild(clone);
      };

      const renderAllDraftFields = () => {
        if (!draftFieldsList) return;
        draftFieldsList.innerHTML = ''; // Clear existing draft fields
        Object.entries(activeSession.draftFields || {}).forEach(([name, data]) => {
          renderDraftField(name, data);
        });
      };

      // Initial rendering of draft fields
      renderAllDraftFields();

      // --- Export/Import Draft Fields Logic ---
      exportDraftFieldsButton?.addEventListener('click', () => {
        const exportData = {
          draftFields: activeSession.draftFields,
          timestamp: new Date().toISOString(),
          version: VERSION,
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `draft-fields-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });

      importDraftFieldsButton?.addEventListener('click', async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';

        input.addEventListener('change', async () => {
          const file = input.files?.[0];
          if (!file) return;

          try {
            const text = await file.text();
            const importData = JSON.parse(text);

            if (!importData.draftFields || typeof importData.draftFields !== 'object') {
              throw new Error('Invalid draft fields data');
            }

            let confirm = true;
            if (Object.keys(activeSession.draftFields).length > 0) {
              confirm = await globalContext.Popup.show.confirm(
                'Import Draft Fields',
                'This will replace all existing draft fields. Continue?',
              );
            }

            if (confirm) {
              activeSession.draftFields = importData.draftFields;
              saveSession();
              renderAllDraftFields();
              st_echo('success', 'Draft fields imported successfully');
            }
          } catch (error: any) {
            st_echo('error', `Failed to import draft fields: ${error.message}`);
          }
        });

        input.click();
      });

      // --- Add Draft Field Button Logic ---
      if (addDraftFieldButton) {
        addDraftFieldButton.addEventListener('click', async () => {
          const fieldNameInput = await globalContext.Popup.show.input('Enter Draft Field Name', '');
          if (!fieldNameInput || !fieldNameInput.trim()) {
            return;
          }
          const fieldName = convertToVariableName(fieldNameInput.trim()); // Sanitize name
          if (!fieldName) {
            st_echo('error', 'Invalid field name provided.');
            return;
          }

          if (activeSession.draftFields[fieldName] || CHARACTER_LABELS[fieldName as CharacterFieldName]) {
            st_echo('warning', `Field name "${fieldName}" already exists.`);
            return;
          }

          // Add the new draft field
          activeSession.draftFields[fieldName] = { value: '', prompt: '', label: fieldNameInput };
          renderDraftField(fieldName, activeSession.draftFields[fieldName]);
          saveSession();
        });
      }

      let loadCharDropdown: ReturnType<typeof buildFancyDropdown> | null = null;

      // --- Button Actions ---
      // Setup Load Character Dropdown
      const loadCharSelectorContainer = popupContainer.querySelector('#charCreator_loadCharSelector');
      if (loadCharSelectorContainer) {
        const characterItems: DropdownItem[] = context.characters.map((char: Character) => ({
          value: context.characters.indexOf(char).toString(),
          label: char.name,
        }));

        // Find the character index that matches the stored avatar
        const initialCharacterIndex = activeSession.lastLoadedCharacterId
          ? context.characters.findIndex((char: Character) => char.avatar === activeSession.lastLoadedCharacterId)
          : -1;
        const initialValues = initialCharacterIndex >= 0 ? [initialCharacterIndex.toString()] : [];

        loadCharDropdown = buildFancyDropdown('#charCreator_loadCharSelector', {
          initialList: characterItems,
          initialValues: initialValues,
          placeholderText: 'Load Character Data...',
          enableSearch: characterItems.length > 10,
          multiple: false,
          closeOnSelect: true,
          async onBeforeSelection(_currentValues, proposedValues) {
            if (proposedValues.length === 0) return false;
            const selectedId = proposedValues[0];
            if (selectedId.length === 0) return false;

            const allFieldEmpty = CHARACTER_FIELDS.every((fieldName) => {
              const textarea = coreFieldElements[fieldName]?.textarea;
              return textarea && textarea.value.trim() === '';
            });

            if (!allFieldEmpty) {
              const confirm = await globalContext.Popup.show.confirm(
                'Load Character Data',
                'Are you sure you want to overwrite existing data? This cannot be undone.',
              );
              if (!confirm) return false;
            }

            return true;
          },
          onSelectChange: async (_previousValues: string[], newValues: string[]) => {
            if (newValues.length === 0) return;
            const selectedId = newValues[0];
            if (selectedId.length === 0) return;

            const character = context.characters[parseInt(selectedId)];
            if (!character) {
              st_echo('warning', 'Selected character not found.');
              return;
            }

            // Load core character fields
            CHARACTER_FIELDS.forEach((fieldName) => {
              const elements = coreFieldElements[fieldName];
              if (elements) {
                // Check if elements exist (not null)
                const textarea = elements.textarea;
                const promptTextarea = elements.promptTextarea;
                const fieldData = activeSession.fields[fieldName];

                // @ts-ignore - Accessing character fields directly
                const charValue = character[fieldName] ?? character.data?.[fieldName] ?? ''; // Check data field too
                if (textarea.value !== charValue) {
                  textarea.value = charValue;
                  if (fieldData) fieldData.value = charValue; // Update session
                }

                // Clear specific prompts when loading a character
                if (promptTextarea && fieldData?.prompt) {
                  promptTextarea.value = '';
                  fieldData.prompt = ''; // Update session
                }
              }
            });

            // Clear existing alternate greetings fields before loading new ones
            getAlternateGreetingFieldNames().forEach((fieldName) => {
              delete activeSession.fields[fieldName];
            });

            // Load alternate greetings from character data (assuming it's string[])
            const greetingsData = character.data?.alternate_greetings ?? [];
            if (Array.isArray(greetingsData)) {
              greetingsData.forEach((greeting: string, index: number) => {
                const number = index + 1;
                const fieldName = `alternate_greetings_${number}`;
                activeSession.fields[fieldName] = {
                  value: greeting,
                  prompt: '', // Initialize prompt as empty
                  label: `Alternate Greeting ${number}`,
                };
              });
            }

            // Re-render the alternate greetings UI
            const agFieldElement = coreFieldsContainer?.querySelector(
              '.alternate-greetings-field',
            ) as HTMLElement | null;
            if (agFieldElement) {
              renderAlternateGreetingsUI(agFieldElement);
            }

            // Store the selected character's avatar in session
            activeSession.lastLoadedCharacterId = character.avatar;
            saveSession(); // Save session after loading all fields
          },
        });
      }

      const resetButton = popupContainer.querySelector('#charCreator_reset') as HTMLButtonElement;
      resetButton.addEventListener('click', async () => {
        const confirm = await globalContext.Popup.show.confirm(
          'Reset Fields',
          'Are you sure? This will reset core fields and remove draft fields. This cannot be undone.',
        );
        if (confirm) {
          // Reset core fields
          CHARACTER_FIELDS.forEach((fieldName) => {
            const elements = coreFieldElements[fieldName];
            if (elements) {
              // Check if elements exist (not null)
              const fieldData = activeSession.fields[fieldName];
              if (elements.textarea) {
                elements.textarea.value = '';
                if (fieldData) fieldData.value = ''; // Update session
              }
              if (elements.promptTextarea) {
                elements.promptTextarea.value = '';
                if (fieldData) fieldData.prompt = ''; // Update session
              }
            }
          });

          // Remove all alternate greeting fields
          getAlternateGreetingFieldNames().forEach((fieldName) => {
            delete activeSession.fields[fieldName];
          });

          // Re-render the alternate greetings UI (will show empty state)
          const agFieldElement = coreFieldsContainer?.querySelector('.alternate-greetings-field') as HTMLElement | null;
          if (agFieldElement) {
            renderAlternateGreetingsUI(agFieldElement);
          }

          // Reset load character selector
          loadCharDropdown!.deselectAll();

          activeSession.draftFields = {};
          saveSession();
          renderAllDraftFields();
        }
      });

      const saveAsNewCharacterButton = popupContainer.querySelector(
        '#charCreator_saveAsNewCharacter',
      ) as HTMLButtonElement;
      saveAsNewCharacterButton.addEventListener('click', async () => {
        if (!activeSession.fields.name.value) {
          st_echo('warning', 'Please enter a name for the new character.');
          return;
        }
        const confirm = await globalContext.Popup.show.confirm('Save as New Character', `Are you sure?`);
        if (!confirm) return;
        // Gather alternate greetings
        const alternate_greetings = getAlternateGreetingFieldNames()
          .map((fieldName) => activeSession.fields[fieldName]?.value ?? '')
          .filter((value) => value.trim() !== ''); // Filter out empty greetings

        const data: FullExportData = {
          name: activeSession.fields.name.value,
          description: activeSession.fields.description.value,
          personality: activeSession.fields.personality.value,
          scenario: activeSession.fields.scenario.value,
          first_mes: activeSession.fields.first_mes.value,
          mes_example: activeSession.fields.mes_example.value,
          data: {
            name: activeSession.fields.name.value,
            description: activeSession.fields.description.value,
            personality: activeSession.fields.personality.value,
            scenario: activeSession.fields.scenario.value,
            first_mes: activeSession.fields.first_mes.value,
            mes_example: activeSession.fields.mes_example.value,
            tags: [],
            avatar: 'none',
            alternate_greetings, // Assign the gathered array
          },
          avatar: 'none',
          tags: [],
          spec: 'chara_card_v3',
          spec_version: '3.0',
        };
        try {
          await createCharacter(data, true);
        } catch (error: any) {
          st_echo('error', `Failed to create character: ${error.message}`);
        }
      });

      const overrideCharacterButton = popupContainer.querySelector(
        '#charCreator_overrideCharacter',
      ) as HTMLButtonElement;
      overrideCharacterButton.addEventListener('click', async () => {
        const selectedId = loadCharDropdown?.getValues()?.[0];
        if (!selectedId) {
          st_echo('warning', 'Please load a character first to override.');
          return;
        }

        const characterToOverride = context.characters[parseInt(selectedId)];
        if (!characterToOverride) {
          st_echo('warning', 'Selected character not found for override.');
          return;
        }

        if (!activeSession.fields.name.value) {
          st_echo('warning', 'Please enter a name for the character.');
          return;
        }

        const confirm = await globalContext.Popup.show.confirm(
          'Override Character',
          `Are you sure you want to override "${characterToOverride.name}"? This cannot be undone.`,
        );
        if (!confirm) return;

        // Gather alternate greetings
        const alternate_greetings = getAlternateGreetingFieldNames()
          .map((fieldName) => activeSession.fields[fieldName]?.value ?? '')
          .filter((value) => value.trim() !== ''); // Filter out empty greetings

        // Construct the Character object for saving
        const data: Character = {
          ...characterToOverride, // Keep existing properties
          name: activeSession.fields.name.value,
          description: activeSession.fields.description.value,
          personality: activeSession.fields.personality.value,
          scenario: activeSession.fields.scenario.value,
          first_mes: activeSession.fields.first_mes.value,
          mes_example: activeSession.fields.mes_example.value,
          data: {
            ...characterToOverride.data, // Keep existing data properties
            name: activeSession.fields.name.value,
            description: activeSession.fields.description.value,
            personality: activeSession.fields.personality.value,
            scenario: activeSession.fields.scenario.value,
            first_mes: activeSession.fields.first_mes.value,
            mes_example: activeSession.fields.mes_example.value,
            alternate_greetings, // Assign the gathered array
          },
        };

        try {
          await saveCharacter(data, true);
          st_echo('success', `Character "${data.name}" overridden successfully!`);
        } catch (error: any) {
          st_echo('error', `Failed to override character: ${error.message}`);
        }
      });

      const saveAsWorldInfoEntrySelector = popupContainer.querySelector(
        '#charCreator_saveAsWorldInfoSelector',
      ) as HTMLSelectElement;

      // Hide the selector if the feature is disabled in settings
      if (!settings.showSaveAsWorldInfoEntry.show) {
        saveAsWorldInfoEntrySelector.style.display = 'none';
      } else {
        const { close } = buildFancyDropdown(saveAsWorldInfoEntrySelector, {
          placeholderText: 'Save as World Info Entry',
          initialList: world_names,
          closeOnSelect: true,
          multiple: false,
          enableSearch: true,
          async onBeforeSelection(_currentValues, proposedValues) {
            if (proposedValues.length === 0) return false;

            // Gather alternate greetings for the template
            const alternate_greetings_template = getAlternateGreetingFieldNames()
              .map((fieldName) => activeSession.fields[fieldName]?.value ?? '')
              .filter((value) => value.trim() !== '');

            // Construct a partial character object for the template
            const characterForTemplate = {
              name: activeSession.fields.name.value,
              description: activeSession.fields.description.value,
              first_mes: activeSession.fields.first_mes.value,
              scenario: activeSession.fields.scenario.value,
              personality: activeSession.fields.personality.value,
              mes_example: activeSession.fields.mes_example.value,
              alternate_greetings: alternate_greetings_template,
            };

            if (!characterForTemplate.name) {
              st_echo('warning', 'Please enter a name for the character.');
              close();
              return false;
            }

            let content: string = '';
            try {
              const template = Handlebars.compile(settings.prompts.charDefinitions.content, {
                noEscape: true,
              });
              content = template({ character: characterForTemplate }); // Pass the constructed object
            } catch (error: any) {
              console.error(`Failed to compile character definition prompt: ${error.message}`);
              st_echo('error', `Failed to compile character definition prompt: ${error.message}`);
              close();
              return false;
            }

            const selectedWorldName = proposedValues[0];
            const wiEntry: WIEntry = {
              uid: -1, // not necessary
              key: [activeSession.fields.name.value],
              content,
              comment: activeSession.fields.name.value,
              disable: false,
              keysecondary: [],
            };
            try {
              await applyWorldInfoEntry({
                entry: wiEntry,
                selectedWorldName: selectedWorldName,
                operation: 'add',
              });
              st_echo('success', 'Entry added');
            } catch (error: any) {
              st_echo('error', `Failed to create world info entry: ${error.message}`);
            }

            close();
            return false;
          },
        });
      }

      // --- Generation Logic ---
      // Shared function to handle field generation
      async function handleFieldGeneration(options: {
        targetField: string;
        button: HTMLButtonElement;
        textarea: HTMLTextAreaElement;
        isDraft?: boolean;
        continueFrom?: string;
      }) {
        const { targetField, button, textarea, isDraft = false, continueFrom } = options;

        // Disable button and show loading state
        button.disabled = true;
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        try {
          // @ts-ignore
          const userPrompt = (popupContainer.querySelector('#charCreator_prompt') as HTMLTextAreaElement).value;

          if (!settings.profileId) {
            st_echo('warning', 'Please select a connection profile.');
            return;
          }

          const profile = context.extensionSettings.connectionManager?.profiles?.find(
            (p: any) => p.id === settings.profileId,
          );
          if (!profile) {
            st_echo('warning', 'Connection profile not found.');
            return;
          }

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

          let formatDescription = '';
          switch (settings.outputFormat) {
            case 'xml':
              formatDescription = settings.prompts.xmlFormat.content;
              break;
            case 'json':
              formatDescription = settings.prompts.jsonFormat.content;
              break;
            case 'none':
              formatDescription = settings.prompts.noneFormat.content;
              break;
          }

          const entriesGroupByWorldName: Record<string, WIEntry[]> = {};
          // Use Promise.all for parallel loading
          await Promise.all(
            world_names
              .filter((name: string) => activeSession.selectedWorldNames.includes(name))
              .map(async (name: string) => {
                const worldInfo = await globalContext.loadWorldInfo(name);
                if (worldInfo) {
                  entriesGroupByWorldName[name] = Object.values(worldInfo.entries);
                }
              }),
          );

          // For draft fields, prepare session with specific prompt
          let sessionForGeneration: Session;

          // Create a new fields object with proper typing
          // @ts-ignore
          const typedFields: Record<CharacterFieldName, CharacterField> = {};
          for (const field of CHARACTER_FIELDS) {
            typedFields[field] = {
              prompt: activeSession.fields[field].prompt,
              value: activeSession.fields[field].value,
              label: CHARACTER_LABELS[field],
            };
          }
          // Add alternate greetings fields
          getAlternateGreetingFieldNames().forEach((fieldName) => {
            typedFields[fieldName as CharacterFieldName] = {
              prompt: activeSession.fields[fieldName].prompt,
              value: activeSession.fields[fieldName].value,
              label: fieldName,
            };
          });

          sessionForGeneration = {
            ...activeSession,
            fields: typedFields,
          };

          const promptSettings = structuredClone(settings.prompts);
          if (!settings.contextToSend.stDescription) {
            // @ts-ignore
            delete promptSettings.stDescription;
          }
          if (!settings.contextToSend.charCard || activeSession.selectedCharacterIndexes.length === 0) {
            // @ts-ignore
            delete promptSettings.charDefinitions;
          }
          if (!settings.contextToSend.worldInfo || activeSession.selectedWorldNames.length === 0) {
            // @ts-ignore
            delete promptSettings.lorebookDefinitions;
          }
          if (!settings.contextToSend.existingFields) {
            // @ts-ignore
            delete promptSettings.existingFieldDefinitions;
          }
          if (!settings.contextToSend.persona) {
            // @ts-ignore
            delete promptSettings.personaDescription;
          }
          // @ts-ignore - since this is only for saving as world info entry
          delete promptSettings.worldInfoCharDefinition;

          const generatedContent = await runCharacterFieldGeneration({
            profileId: settings.profileId,
            userPrompt: userPrompt,
            buildPromptOptions: buildPromptOptions,
            continueFrom,
            session: sessionForGeneration,
            allCharacters: context.characters,
            entriesGroupByWorldName: entriesGroupByWorldName,
            promptSettings,
            formatDescription: {
              content: formatDescription,
            },
            mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts
              .filter((p) => p.enabled)
              .map((p) => ({
                promptName: p.promptName,
                role: p.role,
              })),
            includeUserMacro: settings.contextToSend.persona,
            maxResponseToken: settings.maxResponseToken,
            targetField: targetField,
            outputFormat: settings.outputFormat,
          });

          textarea.value = generatedContent;
          textarea.dispatchEvent(new Event('change'));
        } catch (error: any) {
          console.error(`Error generating field ${targetField}:`, error);
          st_echo('error', `Failed to generate ${targetField}: ${error.message || error}`);
        } finally {
          button.disabled = false;
          button.innerHTML = originalIcon;
        }
      }

      // Function to handle field comparison
      const handleFieldComparison = async (fieldName: string, currentValue: string, characterValue: string) => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('compare-popup');

        const compareTitle = document.createElement('h3');
        compareTitle.textContent = `Compare ${CHARACTER_LABELS[fieldName as CharacterFieldName] || fieldName}`;
        mainDiv.appendChild(compareTitle);

        const compareContainer = document.createElement('div');
        compareContainer.style.display = 'flex';
        compareContainer.style.gap = '1rem';
        compareContainer.style.marginTop = '1rem';

        // Create containers for original and new content
        const originalContent = document.createElement('div');
        originalContent.style.flex = '1';
        const newContent = document.createElement('div');
        newContent.style.flex = '1';

        const originalTitle = document.createElement('h4');
        originalTitle.textContent = 'Character Content';
        const newTitle = document.createElement('h4');
        newTitle.textContent = 'Current Content';

        originalContent.appendChild(originalTitle);
        newContent.appendChild(newTitle);

        // Show word-level diff
        const diff = diffWords(characterValue, currentValue);
        let originalHtml = '';
        let newHtml = '';

        diff.forEach((part) => {
          const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
          const spanStyle = `color: ${color}; ${part.added || part.removed ? 'background-color: rgba(0,0,0,0.1);' : ''}`;

          if (!part.added) {
            originalHtml += `<span style="${spanStyle}">${part.value}</span>`;
          }
          if (!part.removed) {
            newHtml += `<span style="${spanStyle}">${part.value}</span>`;
          }
        });

        const originalContentText = document.createElement('div');
        originalContentText.classList.add('content');
        originalContentText.innerHTML = originalHtml;
        originalContentText.style.whiteSpace = 'pre-wrap';
        originalContentText.style.fontFamily = 'monospace';
        originalContentText.style.padding = '1rem';
        originalContentText.style.border = '1px solid #ccc';

        const newContentText = document.createElement('div');
        newContentText.classList.add('content');
        newContentText.innerHTML = newHtml;
        newContentText.style.whiteSpace = 'pre-wrap';
        newContentText.style.fontFamily = 'monospace';
        newContentText.style.padding = '1rem';
        newContentText.style.border = '1px solid #ccc';

        originalContent.appendChild(originalContentText);
        newContent.appendChild(newContentText);

        compareContainer.appendChild(originalContent);
        compareContainer.appendChild(newContent);
        mainDiv.appendChild(compareContainer);

        await globalContext.callGenericPopup(mainDiv, POPUP_TYPE.DISPLAY, undefined, {
          wide: true,
        });
      };

      // Setup core field event listeners
      Object.entries(coreFieldElements).forEach(([fieldName, { textarea, button, continueButton, promptTextarea }]) => {
        const compareButton = textarea
          .closest('.field-container')
          ?.querySelector('.compare-field-button') as HTMLButtonElement;

        // Compare button click handler
        if (compareButton) {
          compareButton.addEventListener('click', () => {
            handleFieldComparison(
              fieldName,
              textarea.value,
              // @ts-ignore - Accessing character fields directly
              context.characters[parseInt(loadCharDropdown?.getValues()?.[0])]?.[fieldName] ??
                // @ts-ignore - Accessing character fields directly
                context.characters[parseInt(loadCharDropdown?.getValues()?.[0])]?.data?.[fieldName] ??
                '',
            );
          });
        }

        // Continue button click handler
        if (continueButton) {
          continueButton.addEventListener('click', () => {
            if (!textarea.value.trim()) {
              st_echo('warning', 'No content to continue from');
              return;
            }
            handleFieldGeneration({
              targetField: fieldName as CharacterFieldName,
              button: continueButton,
              textarea,
              continueFrom: textarea.value,
            });
          });
        }
        if (button) {
          button.addEventListener('click', () => {
            handleFieldGeneration({
              targetField: fieldName as CharacterFieldName,
              button,
              textarea,
            });
          });

          textarea.addEventListener('change', () => {
            const field = fieldName as CharacterFieldName;
            activeSession.fields[field] = {
              ...activeSession.fields[field],
              value: textarea.value,
            };
            saveSession();
          });

          promptTextarea?.addEventListener('change', () => {
            const field = fieldName as CharacterFieldName;
            activeSession.fields[field] = {
              ...activeSession.fields[field],
              prompt: promptTextarea.value,
            };
            saveSession();
          });
        }
      });
    });
  });
}

function importCheck(): boolean {
  if (!globalContext.ConnectionManagerRequestService) return false;
  return true;
}

function main() {
  handleSettingsUI();
  handlePopupUI();
}

if (!importCheck()) {
  st_echo('error', `[${extensionName}] Make sure ST is updated.`);
} else {
  initializeSettings().then(() => {
    main();
  });
}
