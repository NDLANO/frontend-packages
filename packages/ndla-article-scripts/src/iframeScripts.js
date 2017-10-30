/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const updateIFrameDimensions = (init = true) => {
  document
    .querySelectorAll('.article__oembed iframe, .c-embedded--resize iframe')
    .forEach(el => {
      const iframe = el;
      let ratio = null;

      const parentWidth = iframe.parentNode.clientWidth;

      if (init && iframe.width && iframe.height) {
        ratio = iframe.height / iframe.width;
        el.setAttribute('data-ratio', ratio);
      } else {
        const ratioAttr = el.getAttribute('data-ratio');
        if (ratioAttr) {
          ratio = parseFloat(ratioAttr);
        }
      }

      let newHeight = 0;

      if (ratio) {
        newHeight = parentWidth * ratio;
      } else {
        newHeight = iframe.clientHeight * parentWidth / iframe.clientWidth;
      }

      iframe.height = newHeight;
      iframe.width = parentWidth;
    });
};

export const addEventListenerForResize = () => {
  window.addEventListener('resize', () => updateIFrameDimensions(false));
};

export const removeEventListenerForResize = () => {
  window.removeEventListener('resize', () => updateIFrameDimensions(false));
};
