/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const addShowGlossaryDefinitionClickListeners = () => {
  document.querySelectorAll('.c-glossary-word__item').forEach(item => {
    const popup = item.querySelector('.c-glossary-word__popup');
    const openBtn = item.querySelector('.c-glossary-word__link');
    const closeBtn = item.querySelector('.c-glossary-word__close');

    openBtn.onclick = () => {
      const isHidden = !popup.classList.toggle(
        'c-glossary-word__popup--visible',
      );
      popup.setAttribute('aria-hidden', isHidden);
    };

    closeBtn.onclick = () => {
      popup.classList.remove('c-glossary-word__popup--visible');
      popup.setAttribute('aria-hidden', true);
    };
  });
};
