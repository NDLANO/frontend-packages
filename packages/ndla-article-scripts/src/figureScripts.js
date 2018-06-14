/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { copyTextToClipboard } from 'ndla-util';

import { forEachElement, getElementOffset } from './domHelpers';

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

const panEventHandler = event => {
  const target = event.currentTarget;

  const image = target.querySelector('img');

  const offset = getElementOffset(target);

  let touch;

  if (event.touches) {
    [touch] = event.touches;
  }

  const posX = event.pageX || touch.pageX;
  const posY = event.pageY || touch.pageY;

  const transformOrigin = `${(posX - offset.left) /
    image.clientWidth *
    100}% ${(posY - offset.top) / image.clientHeight * 100}%`;

  image.style.transformOrigin = transformOrigin;
};

const toggleZoomImage = event => {
  const target = event.currentTarget;

  const zoomClass = 'c-figure-license__image-wrapper--zoom';
  const zoomed = target.classList.contains(zoomClass);

  if (zoomed) {
    target.classList.remove(zoomClass);
    target.removeEventListener('mousemove', panEventHandler);
    target.removeEventListener('touchmove', panEventHandler);
  } else {
    target.classList.add(zoomClass);
    target.addEventListener('mousemove', panEventHandler);
    target.addEventListener('touchmove', panEventHandler);
  }
};

export const addZoomImageListeners = () => {
  forEachElement('.c-figure-license__image-wrapper', el => {
    el.addEventListener('click', toggleZoomImage);
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
