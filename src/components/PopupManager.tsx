import { useState } from 'react';
import { Popup } from 'sillytavern-utils-lib/components/react';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { MainPopup } from './MainPopup.js';

export const PopupManager = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Expose functions to the global scope to be called by vanilla JS
  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  // @ts-ignore
  window.openCharacterCreatorPopup = openPopup;

  if (!isPopupVisible) {
    return null;
  }

  return (
    <Popup
      content={<MainPopup />}
      type={POPUP_TYPE.DISPLAY}
      onComplete={closePopup}
      options={{
        large: true,
        wide: true,
      }}
    />
  );
};
