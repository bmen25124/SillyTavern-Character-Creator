import React from 'react';
import ReactDOM from 'react-dom/client';
import { extensionName, initializeSettings } from './settings.js';
import { CharacterCreatorSettings } from './components/Settings.js';
import { st_echo } from 'sillytavern-utils-lib/config';
import { PopupManager } from './components/PopupManager.js';

const globalContext = SillyTavern.getContext();

export async function init() {
  // --- Settings Panel Rendering ---
  const settingsHtml: string = await globalContext.renderExtensionTemplateAsync(
    `third-party/${extensionName}`,
    'templates/settings',
  );
  document.querySelector('#extensions_settings')!.insertAdjacentHTML('beforeend', settingsHtml);

  const settingsRootElement = document.createElement('div');
  const settingContainer = document.querySelector('.charCreator_settings .inline-drawer-content') as HTMLElement;
  if (settingContainer) {
    settingContainer.prepend(settingsRootElement);
    const settingsRoot = ReactDOM.createRoot(settingsRootElement);
    settingsRoot.render(
      <React.StrictMode>
        <CharacterCreatorSettings />
      </React.StrictMode>,
    );
  }

  // --- Main Popup Icon and Trigger Logic ---
  const popupIconHtml = `<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>`;

  const targets = [
    document.querySelector('.form_create_bottom_buttons_block'),
    document.querySelector('#GroupFavDelOkBack'),
    document.querySelector('#rm_buttons_container') ?? document.querySelector('#form_character_search_form'),
  ];

  const popupManagerContainer = document.createElement('div');
  document.body.appendChild(popupManagerContainer);
  const popupManagerRoot = ReactDOM.createRoot(popupManagerContainer);
  popupManagerRoot.render(
    <React.StrictMode>
      <PopupManager />
    </React.StrictMode>,
  );

  targets.forEach((target) => {
    if (!target) return;

    // 1. Create a new icon element for each target
    const iconWrapper = document.createElement('div');
    iconWrapper.innerHTML = popupIconHtml.trim();
    const iconElement = iconWrapper.firstChild as HTMLElement;

    if (!iconElement) return;

    // 2. Add the icon to the DOM
    target.prepend(iconElement);

    // 3. Attach a click listener to trigger the React popup
    iconElement.addEventListener('click', () => {
      // @ts-ignore
      if (window.openCharacterCreatorPopup) {
        // @ts-ignore
        window.openCharacterCreatorPopup();
      }
    });
  });
}

function importCheck(): boolean {
  if (!globalContext.ConnectionManagerRequestService) return false;
  return true;
}

if (!importCheck()) {
  st_echo('error', `[${extensionName}] Make sure ST is updated.`);
} else {
  initializeSettings().then(() => {
    init();
  });
}
