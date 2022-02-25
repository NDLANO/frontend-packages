/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forEachElement } from './domHelpers';

export const addEventListenerForNotions = () => {
  forEachElement('[data-notion-expand-media]', (el) => {
    const target = el;
    target.onclick = () => {
      const notionMedia = document.getElementById(el.getAttribute('data-notion-media-id'));
      notionMedia?.classList.toggle('expanded');
    };
  });
};
