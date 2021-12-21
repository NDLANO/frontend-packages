/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import jump from 'jump.js';

import { forEachElement, inIframe, getElementOffset } from './domHelpers';

const closeAllVisibleNotions = (returnFocusToParent) => {
  forEachElement('[data-notion]', (item) => {
    const id = item.getAttribute('id');
    const popup = document.querySelector(`[data-concept-id='${id}']`);
    if (popup.classList.contains('visible')) {
      popup.classList.remove('visible');
      popup.setAttribute('aria-hidden', true);
      if (returnFocusToParent) {
        const openBtn = item.querySelector('[data-notion-link]');
        openBtn.focus();
      }
    }
  });
};

const ESCKeyListener = (e) => {
  if (e.key === 'Escape') {
    closeAllVisibleNotions(true);
    window.removeEventListener('keyup', ESCKeyListener, true);
    window.removeEventListener(
      'mousedown',
      checkClickOutside,
      true,
    ); /* eslint no-use-before-define: ["error", { "variables": false }] */
  }
};

const checkClickOutside = (e) => {
  // click out side will close concept box.
  let { target } = e;
  let clickedInside = false;
  while (target.nodeName !== 'BODY' && !clickedInside) {
    if (target.getAttribute('data-concept-id')) {
      clickedInside = true;
    } else {
      target = target.parentNode;
    }
  }
  if (!clickedInside) {
    closeAllVisibleNotions();
    window.removeEventListener('keyup', ESCKeyListener, true);
    window.removeEventListener('mousedown', checkClickOutside, true);
  }
};

export const addShowConceptDefinitionClickListeners = () => {
  forEachElement('[data-notion]', (item) => {
    const id = item.getAttribute('id');
    const popup = document.querySelector(`[data-concept-id='${id}']`);
    const openBtn = item.querySelector('[data-notion-link]');
    const closeBtn = popup.querySelector('[data-notion-close]');

    openBtn.onclick = () => {
      const wasHidden = !popup.classList.contains('visible');

      closeAllVisibleNotions();
      window.removeEventListener('keyup', ESCKeyListener, true);
      window.removeEventListener('mousedown', checkClickOutside, true);

      if (wasHidden) {
        popup.classList.add('visible');
        popup.setAttribute('aria-hidden', false);
        const parentOffset = getElementOffset(popup.offsetParent).top;
        const openBtnBottom = openBtn.getBoundingClientRect().bottom + window.pageYOffset - parentOffset;
        popup.style.top = `${openBtnBottom + 10}px`;
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
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
        if (popupTop + popupHeight > documentHeight) {
          popup.childNodes[1].style.overflowY = 'scroll';
          popup.childNodes[1].style.height = '100vh';
        }
        if (inIframe() && window.parent) {
          window.parent.postMessage(
            {
              event: 'scrollTo',
              // In an iframe viewport just returns the iframe height. So just offset the popup height
              top: popupTop - popupHeight,
            },
            '*',
          );
        } else {
          jump(popup, {
            duration: 300,
            offset,
          });
        }
        window.addEventListener('keyup', ESCKeyListener, true);
        window.addEventListener('mousedown', checkClickOutside, true);
        closeBtn.focus();
        // Add Tab exit listener with a hijack of keydown
        const focusableElements = popup.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        focusableElements[focusableElements.length - 1].addEventListener(
          'keydown',
          (e) => {
            if (e.key === 'Tab') {
              e.preventDefault();
              openBtn.focus();
              closeAllVisibleNotions();
            }
          },
          true,
        );
      }
    };

    closeBtn.onclick = () => {
      popup.classList.remove('visible');
      popup.setAttribute('aria-hidden', true);
      window.removeEventListener('keyup', ESCKeyListener, true);
      openBtn.focus();
    };
  });
};
