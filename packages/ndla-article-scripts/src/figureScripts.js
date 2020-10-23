/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { copyTextToClipboard } from '@ndla/util';

import { forEachElement } from './domHelpers';

export const toggleLicenseInfoBox = () => {
  forEachElement('.c-dialog', el => {
    const target = el;
    const toggleButton = target.querySelector('.c-figure__captionbtn');
    if (toggleButton) {
      toggleButton.onclick = () => {
        const activeClass = 'c-figure-license__hidden-content--active';
        const hiddenContent = target.querySelector(
          '.c-figure-license__hidden-content',
        );

        const dialogContent = target.querySelector(
          '.c-figure-license--fullscreen',
        );

        hiddenContent.classList.toggle(activeClass);

        if (hiddenContent.classList.contains(activeClass)) {
          dialogContent.scrollTop = dialogContent.scrollHeight;
        } else {
          dialogContent.scrollTop = 0;
        }
      };
    }
  });
};

export const addCopyToClipboardListeners = () => {
  forEachElement('button[data-copy-string]', el => {
    const target = el;
    target.onclick = () => {
      const text = target.getAttribute('data-copy-string');
      const copiedTitle = target.getAttribute('data-copied-title');

      const success = copyTextToClipboard(text, el.parentNode);

      if (success) {
        const previousTitle = target.innerHTML;
        target.innerHTML = copiedTitle;
        target.disabled = true;

        setTimeout(() => {
          target.innerHTML = previousTitle;
          target.disabled = false;
        }, 10000);
      }
    };
  });
};

export const updateIFrameDimensions = (init = true, topNode = null) => {
  forEachElement(
    '.c-figure--resize iframe',
    el => {
      const iframe = el;
      const parent = iframe.parentNode;
      let ratio = 0.5625;

      const computedStyle = window.getComputedStyle(parent);
      const paddingLeft = parseFloat(computedStyle.paddingLeft);
      const paddingRight = parseFloat(computedStyle.paddingRight);
      const parentWidth = parent.clientWidth - paddingLeft - paddingRight;

      if (init && iframe.width && iframe.height) {
        ratio = iframe.height / iframe.width;
        el.setAttribute('data-ratio', ratio);
      } else {
        const ratioAttr = el.getAttribute('data-ratio');
        if (ratioAttr) {
          ratio = parseFloat(ratioAttr);
        }
      }

      const newHeight = parentWidth * ratio;

      // fix for elements not visible
      if (newHeight > 0) {
        iframe.height = newHeight;
      }

      if (parentWidth > 0) {
        iframe.width = parentWidth;
      }
    },
    topNode,
  );
};

export const addEventListenerForFigureZoomButton = () => {
  forEachElement('button[data-figure-button]', el => {
    const target = el;
    target.onclick = () => {
      const parentFigure = target.closest('figure');
      const sourceTag =
        parentFigure && parentFigure.getElementsByTagName('source')[0];
      if (parentFigure && target.dataset.expanded) {
        target.setAttribute('aria-label', target.dataset.aria);
        target.classList.remove('c-figure__fullscreen-btn--expanded');
        parentFigure.classList.add(target.dataset.classtype);
        delete target.dataset.expanded;
      } else if (sourceTag) {
        sourceTag.setAttribute('sizes', '(min-width: 1024px) 1024px, 100vw');
        target.setAttribute('aria-label', target.dataset.ariaexpanded);
        parentFigure.classList.remove(target.dataset.classtype);
        target.classList.add('c-figure__fullscreen-btn--expanded');
        target.dataset.expanded = true;
      }
    };
  });
};

const handler = () => updateIFrameDimensions(false);

export const addEventListenerForResize = () => {
  window.addEventListener('resize', handler);
};

export const removeEventListenerForResize = () => {
  window.removeEventListener('resize', handler);
};
