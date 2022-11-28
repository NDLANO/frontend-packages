/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from './Tooltip';

const forEachElement = (selector: string, callback: Function) => {
  const nodeList = document.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

/**
 * Hydrates tooltip for SSR pages
 */
const initTooltips = () => {
  forEachElement('[data-tooltip-container]', (el: HTMLDivElement) => {
    const tooltip = el.getAttribute('data-tooltip');
    const ariaLabel = el.getAttribute('data-aria-label');

    const content = el.innerHTML;

    ReactDOM.hydrate(<Tooltip tooltip={tooltip!} dangerous={content} ariaLabel={ariaLabel || undefined} />, el);
  });
};

export default initTooltips;
