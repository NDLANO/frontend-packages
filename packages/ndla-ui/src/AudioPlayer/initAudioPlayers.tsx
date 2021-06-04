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
import LocaleProvider from '../locale/LocaleProvider';
import { Locale } from '../types';
import { truncateDescription } from './AudioPlayer';

const forEachElement = (selector: string, callback: Function) => {
  const nodeList = document.querySelectorAll(selector);
  for (let i = 0; i < nodeList.length; i += 1) {
    callback(nodeList[i], i);
  }
};

const initAudioPlayers = (locale: Locale) => {
  forEachElement('[data-audio-player]', (el: HTMLElement) => {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-title');
    const speech = el.getAttribute('data-speech');
    if (src && title) {
      if (speech) {
        ReactDOM.render(<SpeechControl src={src} title={title} />, el);
      } else {
        ReactDOM.render(
          <LocaleProvider locale={locale}>
            <Controls src={src} title={title} />
          </LocaleProvider>,
          el,
        );
      }
    }
  });

  forEachElement('[data-audio-player-description]', (el: HTMLElement) => {
    const readMoreLabel = el.getAttribute('data-read-more-text');
    truncateDescription(el, readMoreLabel);
  });

  forEachElement('[data-audio-text-button-id]', (el: HTMLElement) => {
    const id = el.getAttribute('data-audio-text-button-id');
    if (id) {
      el.onclick = () => document?.getElementById(id)?.toggleAttribute('hidden');
    }
  });
};

export default initAudioPlayers;
