/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import jump from 'jump.js';

import { forEachElement, inIframe, getElementOffset } from './domHelpers';

export const addFootnoteClickListeners = () => {
  forEachElement('.c-footnotes__ref sup a, .c-footnotes__cite sup a', el => {
    const target = el;

    const hash = target.href.slice(target.href.indexOf('#'));
    target.onclick = e => {
      e.preventDefault();
      const scrollTarget = document.getElementById(hash.slice(1));

      if (inIframe() && window.parent) {
        const elementOffset = getElementOffset(scrollTarget);
        window.parent.postMessage(
          {
            event: 'scrollTo',
            top: elementOffset.top - 100, // different offset because of no menu in iframe.
          },
          '*',
        );
      } else {
        jump(hash, { offset: -200, duration: 300 });
      }
    };
  });
};
