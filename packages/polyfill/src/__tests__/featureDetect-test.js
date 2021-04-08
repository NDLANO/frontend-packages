/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { featureDetect } from '../featureDetect';

test('that featureDetect inserts polyfill if needed', () => {
  const js = featureDetect(
    JSON.stringify({ src: '/polyfill.js' }),
    JSON.stringify([{ src: '/vendor.js' }, { src: '/client.js' }]),
  );

  // Run js code
  eval(js); // eslint-disable-line no-eval

  // Check that head contains polyfill script tag
  const head = document.getElementsByTagName('head')[0];
  const polyfillScriptTag = head.querySelector('script');
  expect(polyfillScriptTag.outerHTML).toBe('<script src="/polyfill.js"></script>');

  // Trigger on load event for polyfill script tag
  polyfillScriptTag.onload();

  // Check that body contains vendor and client script tags
  const body = document.getElementsByTagName('body')[0];
  const bodyScriptTags = body.querySelectorAll('script');
  expect(bodyScriptTags[0].outerHTML).toBe('<script src="/vendor.js"></script>');
  expect(bodyScriptTags[1].outerHTML).toBe('<script src="/client.js"></script>');
});
