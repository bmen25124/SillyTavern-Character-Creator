import * as Handlebars from 'handlebars';
import { CharacterState, ReviseMessage, CHAT_HISTORY_PLACEHOLDER_ID } from './revise-types.js';
import { ExtensionSettings, settingsManager } from './settings.js';
import { Session, globalContext } from './generate.js';
import { Character } from 'sillytavern-utils-lib/types';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export async function buildInitialReviseMessages(
  initialState: CharacterState,
  targetFieldId: string | undefined, // undefined for global sessions
  mainContextTemplatePreset: string,
  contextToSend: ExtensionSettings['contextToSend'],
  sessionForContext: Pick<Session, 'selectedCharacterIndexes' | 'selectedWorldNames'>,
): Promise<ReviseMessage[]> {
  const settings = settingsManager.getSettings();
  const preset = settings.mainContextTemplatePresets[mainContextTemplatePreset];
  if (!preset) {
    throw new Error(`Main context template preset "${mainContextTemplatePreset}" not found.`);
  }

  const initialMessages: ReviseMessage[] = [];

  const resolvedContext = {
    user: globalContext.name1 || 'You',
    char: initialState.fields.name?.value || 'Character',
    persona: globalContext.powerUserSettings.persona_description,
  };

  const templateData: Record<string, any> = {
    ...resolvedContext,
    fields: {
      core: Object.fromEntries(
        Object.entries(initialState.fields)
          .filter(([k]) => !k.startsWith('alternate_greetings_'))
          .map(([, v]) => [v.label, v.value]),
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(initialState.fields)
          .filter(([k]) => k.startsWith('alternate_greetings_'))
          .map(([, v]) => [v.label, v.value]),
      ),
      draft: Object.fromEntries(Object.entries(initialState.draftFields).map(([, v]) => [v.label, v.value])),
    },
  };

  // Populate templateData with characters and lorebooks for handlebars evaluation, respecting contextToSend settings.
  if (contextToSend.charCard) {
    const charactersData: Character[] = [];
    sessionForContext.selectedCharacterIndexes.forEach((charIndex) => {
      const char = globalContext.characters[parseInt(charIndex)];
      if (char) {
        charactersData.push(char);
      }
    });
    templateData['characters'] = charactersData;
  }

  if (contextToSend.worldInfo) {
    const lorebooksData: Record<string, WIEntry[]> = {};
    await Promise.all(
      sessionForContext.selectedWorldNames.map(async (name) => {
        const worldInfo = await globalContext.loadWorldInfo(name);
        if (worldInfo) {
          lorebooksData[name] = Object.values(worldInfo.entries).filter((entry) => !entry.disable);
        }
      }),
    );
    templateData['lorebooks'] = lorebooksData;
  }

  for (const block of preset.prompts) {
    if (!block.enabled) continue;

    // Respect contextToSend settings from the main UI
    if (block.promptName === 'stDescription' && !contextToSend.stDescription) continue;
    if (block.promptName === 'charDefinitions' && !contextToSend.charCard) continue;
    if (block.promptName === 'lorebookDefinitions' && !contextToSend.worldInfo) continue;
    if (block.promptName === 'existingFieldDefinitions' && !contextToSend.existingFields) continue;
    if (block.promptName === 'personaDescription' && !contextToSend.persona) continue;

    // Handle chat history as a special case by inserting a placeholder
    if (block.promptName === 'chatHistory') {
      initialMessages.push({
        id: CHAT_HISTORY_PLACEHOLDER_ID,
        role: 'system',
        content: '[[Chat history placeholder]]',
        isInitial: true,
      });
      continue;
    }

    // These prompts are designed for single-field generation and are not suitable for a conversational revise session.
    // They can confuse the AI into making unprompted changes.
    const irrelevantPrompts = ['taskDescription', 'stDescription'];
    if (irrelevantPrompts.includes(block.promptName)) {
      continue;
    }

    const promptSetting = settings.prompts[block.promptName];
    if (!promptSetting || promptSetting.content.includes('{{activeFormatInstructions}}')) {
      continue;
    }

    let content = '';
    content = Handlebars.compile(promptSetting.content, { noEscape: true })(templateData);

    content = globalContext.substituteParams(content);

    if (content.trim()) {
      initialMessages.push({
        id: `im-${initialMessages.length}`,
        role: block.role,
        content: content.trim(),
        isInitial: true,
      });
    }
  }

  const targetLabel = targetFieldId
    ? initialState.fields[targetFieldId]?.label || initialState.draftFields[targetFieldId]?.label
    : 'Global';

  const taskDescriptionTemplate = settings.prompts.reviseTaskDescription.content;
  const taskDescription = Handlebars.compile(taskDescriptionTemplate, { noEscape: true })({
    isFieldSession: !!targetFieldId,
    targetLabel,
  });

  initialMessages.push({
    id: `im-${initialMessages.length}`,
    role: 'system',
    content: taskDescription,
    isInitial: true,
  });

  return initialMessages;
}
