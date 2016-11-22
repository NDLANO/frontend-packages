/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-env jest */

import { getLicenseComponentByAbbreviation } from '../licenses';

test('lisence/getLicenseComponentByAbbreviation get component for by in English', () => {
  const component = getLicenseComponentByAbbreviation('by');
  expect(component.title).toBe('Navngivelse');
});
