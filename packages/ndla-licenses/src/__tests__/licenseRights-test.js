/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { getLicenseRightByAbbreviation, BY, COPYRIGHTED } from '../licenseRights';

test('lisence/getLicenseRightByAbbreviation get info for BY in bokmål', () => {
  const licenseRight = getLicenseRightByAbbreviation('by', 'nb');
  expect(licenseRight.title).toBe('Navngivelse');
  expect(licenseRight.short).toBe(BY);
  expect(licenseRight.userFriendlyTitle).toBe('Navngivelse');
  expect(licenseRight.description).toBe('Du må alltid oppgi hvem som har laget innholdet.');
});

test('lisence/getLicenseRightByAbbreviation get info for SA in English', () => {
  const licenseRight = getLicenseRightByAbbreviation(COPYRIGHTED, 'en');
  expect(licenseRight.title).toBe('Copyright');
  expect(licenseRight.short).toBe(COPYRIGHTED);
  expect(licenseRight.userFriendlyTitle).toBe('Copyright');
  expect(licenseRight.description).toBe(
    'Only the creator can derive, publish, or license the work. It can not be shared without permission.',
  );
});
