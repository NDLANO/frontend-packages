/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Controls from './Controls';
import SpeechControl from './SpeechControl';

const forEachElement = (selector: string, callback: Function) => {
  const nodeList = document.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

const initAudioPlayers = () => {
  forEachElement('[data-audio-player]', (el: HTMLElement) => {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-title');
    const speech = el.getAttribute('data-speech');
    if (src && title) {
      if (speech) {
        ReactDOM.render(<SpeechControl src={src} title={title} />, el);
      } else {
        ReactDOM.render(<Controls src={src} title={title} />, el);
      }
    }
  });
};

export default initAudioPlayers;
