/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-env jest */

import {
  getLicenseByAbbreviation,
} from '../licenses';


test('licenses/getLicenseByAbbreviation get license for by-sa in english', () => {
  const license = getLicenseByAbbreviation('by-sa', 'en');

  expect(license.title).toBe('Attribution ShareAlike');
});
