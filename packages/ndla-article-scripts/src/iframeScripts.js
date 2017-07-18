/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const updateIFrameDimensions = () => {
  document.querySelectorAll('.article__oembed iframe').forEach(el => {
    const iframe = el;
    const parentWidth = iframe.parentNode.clientWidth;
    const newHeight = iframe.clientHeight * parentWidth / iframe.clientWidth;
    iframe.height = newHeight;
    iframe.width = parentWidth;
  });
};

export const addEventListenerForResize = () => {
  window.addEventListener('resize', updateIFrameDimensions);
};

export const removeEventListenerForResize = () => {
  window.removeEventListener('resize', updateIFrameDimensions);
};
