/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forEachElement } from './domHelpers';

export const updateIFrameDimensions = (init = true, topNode = null) => {
  forEachElement(
    '.c-figure iframe, .c-embedded--resize iframe',
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
