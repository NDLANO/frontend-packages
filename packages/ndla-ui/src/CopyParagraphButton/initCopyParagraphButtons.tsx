/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import ReactDOM from 'react-dom';
import CopyParagraphButton from './CopyParagraphButton';

const forEachElement = (selector: string, callback: Function) => {
  const nodeList = document.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

const initCopyParagraphButtons = () => {
  forEachElement('[data-header-copy-container]', (el: HTMLElement) => {
    const title = el.getAttribute('data-title');

    ReactDOM.hydrate(<CopyParagraphButton title={title} content={title} hydrate />, el);
  });
};

export default initCopyParagraphButtons;
