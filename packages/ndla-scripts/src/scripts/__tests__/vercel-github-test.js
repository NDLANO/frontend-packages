/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

test('get url works as intended', () => {
  process.env.CI = true;
  process.env.GITHUB_ACTIONS = true;

  const { getUrl } = require('../vercel-github.js');

  expect(getUrl('github.com')).toBe(undefined);
  expect(getUrl('http://github.com')).toBe('http://github.com');
  expect(getUrl('https://github.com')).toBe('https://github.com');
  expect(getUrl('https://ndla.no')).toBe('https://ndla.no');
  expect(getUrl('https://ndla.sh')).toBe('https://ndla.sh');
  expect(getUrl('https://ndla.sh?param=1')).toBe('https://ndla.sh/?param=1'); // Not very happy normalizeUrl adds / but whatever
  expect(getUrl('This is a string with the domain https://ndla.no in it.')).toBe('https://ndla.no');
});
