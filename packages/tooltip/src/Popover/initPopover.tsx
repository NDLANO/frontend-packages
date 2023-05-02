/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Popover from './Popover';

const forEachElement = (selector: string, callback: Function) => {
  const nodeList = document.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

/**
 * Hydrates popovers for SSR pages.
 */
const initPopovers = () => {
  forEachElement('[data-popover-from-article-converter]', (el: HTMLDivElement) => {
    const popover = el.getAttribute('data-popover');
    const inner = el.querySelector('[data-trigger]');

    const outerHTML = inner?.outerHTML;
    // Popovers located inside dialogs fail to resolve their css.
    // This is a hacky workaround, and should be removed once article-converter usage is
    // straightened out.
    if (el.children.length === 2) {
      document.head.appendChild(el.children[0]);
    }

    ReactDOM.hydrate(<Popover popover={popover!} hydrateHTML={outerHTML} />, el);
  });
};

export default initPopovers;
