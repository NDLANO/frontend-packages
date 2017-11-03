/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const updateIFrameDimensions = (init = true) => {
  document
    .querySelectorAll('.c-figure iframe, .c-embedded--resize iframe')
    .forEach(el => {
      const iframe = el;
      const parent = iframe.parentNode;
      let ratio = null;

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
