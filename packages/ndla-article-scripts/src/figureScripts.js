/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { copyTextToClipboard, noScroll } from 'ndla-util';
import createFocusTrap from 'focus-trap';
import jump from 'jump.js';

import {
  findAncestorByClass,
  removeElementById,
  forEachElement,
} from './domHelpers';

const trapInstances = {};

const closeDialog = figure => {
  figure.classList.remove('c-figure--active');
  const details = figure.querySelector('.c-figure__license');
  details.setAttribute('aria-hidden', 'true');
  noScroll(false);
};

export const addCloseFigureDetailsClickListeners = () => {
  forEachElement('.c-figure .c-figure__close', el => {
    const target = el;

    target.onclick = () => {
      removeElementById('c-license-icon-description');
      const figure = findAncestorByClass(target, 'c-figure');

      const instance = trapInstances[figure.id];
      if (instance) {
        instance.deactivate();
      }
    };
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
  forEachElement('.c-figure .c-figure__captionbtn', el => {
    const target = el;
    const figure = findAncestorByClass(target, 'c-figure');
    const id = figure.getAttribute('id');

    const details = document.getElementById(`figure-details-${id}`);
    trapInstances[id] = createFocusTrap(details, {
      onDeactivate: () => {
        closeDialog(figure);
      },
      clickOutsideDeactivates: true,
    });

    target.onclick = () => {
      noScroll(true);
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0,
      );
      const figureHeight = figure.offsetHeight;

      jump(figure, {
        offset: -((viewportHeight - figureHeight) / 2),
        duration: 300,
        callback: () => {
          const instance = trapInstances[id];

          if (instance) {
            instance.activate();
          }
        },
      });

      setTimeout(() => {
        details.setAttribute('aria-hidden', 'false');
        removeElementById('c-license-icon-description');
        figure.classList.add('c-figure--active');
      }, 150);
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

const handler = () => updateIFrameDimensions(false);

export const addEventListenerForResize = () => {
  window.addEventListener('resize', handler);
};

export const removeEventListenerForResize = () => {
  window.removeEventListener('resize', handler);
};

export const addEventListenersForZoom = () => {
  forEachElement('.c-figure > .c-button', el => {
    const { parentNode } = el;
    const target = el;

    target.onclick = () => {
      const toggleClass = parentNode.getAttribute('data-toggleclass');
      parentNode.classList.toggle(toggleClass);
    };
  });
};

export const removeEventListenersForZoom = () => {
  forEachElement('.c-figure > .c-button', el => {
    const target = el;
    target.onclick = undefined;
  });
};
