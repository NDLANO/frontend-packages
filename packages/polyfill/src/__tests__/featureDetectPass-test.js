/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { featureDetect } from '../featureDetect';

test('that featureDetect does not insert polyfill if no features are missing', () => {
  // Mock missing features to pass feature detect
  window.fetch = () => {};
  Number.prototype.isInteger = () => {}; // eslint-disable-line no-extend-native
  Number.prototype.isNaN = () => {}; // eslint-disable-line no-extend-native

  const js = featureDetect(
    JSON.stringify({ src: '/polyfill.js' }),
    JSON.stringify([{ src: '/client.js' }]),
  );

  // Run js code
  eval(js); // eslint-disable-line no-eval

  // Check that head does not contain any (polyfill) script tags
  const head = document.getElementsByTagName('head')[0];
  const scriptTag = head.querySelector('script');
  expect(scriptTag).toBe(null);

  // Check that body contains client script tags
  const body = document.getElementsByTagName('body')[0];
  const bodyScriptTags = body.querySelectorAll('script');
  expect(bodyScriptTags[0].outerHTML).toBe(
    '<script src="/client.js"></script>',
  );
});
