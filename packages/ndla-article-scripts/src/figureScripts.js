/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { copyTextToClipboard } from 'ndla-util';
import { findAncestorByClass, removeElementById } from './domHelpers';

export const addCloseFigureDetailsClickListeners = () => {
  document.querySelectorAll('.c-figure .c-figure__close').forEach(el => {
    const target = el;
    target.onclick = () => {
      removeElementById('c-license-icon-description');
      target.parentNode.parentNode.classList.remove('c-figure--active');
      target.parentNode.parentNode
        .querySelector('figcaption')
        .classList.remove('u-hidden');
    };
  });
};

export const addCopyToClipboardListeners = () => {
  document.querySelectorAll('button[data-copy-string]').forEach(el => {
    const target = el;
    target.onclick = () => {
      const text = target.getAttribute('data-copy-string');
      const copiedTitle = target.getAttribute('data-copied-title');

      const success = copyTextToClipboard(text);

      if (success) {
        const previouesTitle = target.innerHTML;
        target.innerHTML = copiedTitle;
        target.disabled = true;

        setTimeout(() => {
          target.innerHTML = previouesTitle;
          target.disabled = false;
        }, 10000);
      }
    };
  });
};

export const addShowFigureDetailsClickListeners = () => {
  document.querySelectorAll('.c-figure .c-figure__captionbtn').forEach(el => {
    const target = el;
    target.onclick = () => {
      removeElementById('c-license-icon-description');
      const figure = findAncestorByClass(target, 'c-figure');
      figure.classList.add('c-figure--active');

      const figcaption = findAncestorByClass(target, 'c-figure__caption');
      figcaption.classList.add('u-hidden');
    };
  });
};
