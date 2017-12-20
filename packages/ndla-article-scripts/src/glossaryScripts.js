/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import jump from 'jump.js';

import { forEachElement, getElementOffset } from './domHelpers';

export const addShowConceptDefinitionClickListeners = () => {
  forEachElement('.c-concept__item', item => {
    const popup = item.querySelector('.c-concept__popup');
    const openBtn = item.querySelector('.c-concept__link');
    const closeBtn = item.querySelector('.c-concept__close');

    openBtn.onclick = () => {
      const isHidden = !popup.classList.toggle('c-concept__popup--visible');

      if (!isHidden) {
        const viewportHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        );
        const popupHeight = popup.offsetHeight;
        const popupTop = getElementOffset(popup).top;
        let offset = 0;

        const { body } = document;
        const html = document.documentElement;
        const documentHeight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight,
        );

        if (popupTop + popupHeight < documentHeight) {
          offset = -((viewportHeight - popupHeight) / 2);
        } else {
          offset = popupHeight;
        }

        jump(popup, {
          duration: 300,
          offset,
        });
      }
      popup.setAttribute('aria-hidden', isHidden);
    };

    closeBtn.onclick = () => {
      popup.classList.remove('c-concept__popup--visible');
      popup.setAttribute('aria-hidden', true);
    };
  });
};
