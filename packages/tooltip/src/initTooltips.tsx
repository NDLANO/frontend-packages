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
  forEachElement('[data-tooltip]', (el: HTMLElement) => {
    const id = el.getAttribute('data-tooltip-id');
    const label = el.getAttribute('data-tooltip-label');
    const children = el.querySelector('[data-tooltip-children]');

    ReactDOM.hydrate(<Tooltip id={id!} tooltip={label!} dangerousHTML={children?.outerHTML} />, el);
  });
};

export default initTooltips;
