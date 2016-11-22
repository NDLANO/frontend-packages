/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 /* eslint-env jest */

import { getLicenseRightByAbbreviation, BY } from '../licenseRights';

test('lisence/getLicenseRightByAbbreviation get component for by in bokmål', () => {
  const licenseRight = getLicenseRightByAbbreviation('by');
  expect(licenseRight.title).toBe('Navngivelse');
  expect(licenseRight.short).toBe(BY);
  expect(licenseRight.userFriendlyTitle).toBe('Navngivelse');
  expect(licenseRight.description).toBe('Opphavspersonen til verket må navngis.');
});
