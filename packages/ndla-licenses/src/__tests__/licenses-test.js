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
  isCreativeCommonsLicense,
} from '../licenses';

import { BY, SA, NC, CC, COPYRIGHTED, NA } from '../licenseRights';

test('licenses/getLicenseByAbbreviation get license for CC-BY-SA-4.0 in english', () => {
  const license = getLicenseByAbbreviation('CC-BY-SA-4.0', 'en');

  expect(license.title).toBe('CC BY-SA 4.0: Attribution ShareAlike');
  expect(license.rights).toEqual([CC, BY, SA]);
});

test('licenses/getLicenseByAbbreviation get license for N/A in norwegian', () => {
  const license = getLicenseByAbbreviation('N/A', 'nb');

  expect(license.title).toBe('N/A - ikke relevant');
  expect(license.rights).toEqual([NA]);
});

test('licenses/getLicenseByAbbreviation get license without locale defaults to nb', () => {
  const license = getLicenseByAbbreviation('CC-BY-NC-SA-4.0');

  expect(license.title).toBe(
    'CC BY-NC-SA 4.0: Navngivelse-Ikkekommersiell-Del på samme vilkår',
  );
  expect(license.rights).toEqual([CC, BY, NC, SA]);
});

test('licenses/getLicenseByAbbreviation unknown license', () => {
  const license = getLicenseByAbbreviation('unknown-license', 'nb');

  expect(license.title).toBe('unknown-license');
  expect(license.short).toBe('unknown-license');
  expect(license.description).toBe('unknown-license');
  expect(license.rights).toEqual([]);
});

test('licenses/isCreativeCommonsLicense when creative commons license should return true', () => {
  const result = isCreativeCommonsLicense([CC, BY]);
  expect(result).toBe(true);
});

test('licenses/isCreativeCommonsLicense when copy licebse should return false', () => {
  const result = isCreativeCommonsLicense([COPYRIGHTED]);
  expect(result).toBe(false);
});
