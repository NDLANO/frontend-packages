/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { getLicenseByAbbreviation, isCreativeCommonsLicense } from '../licenses';

import { BY, SA, NC, CC, COPY } from '../licenseRights';

test('licenses/getLicenseByAbbreviation get license for by-sa in english', () => {
  const license = getLicenseByAbbreviation('by-sa', 'en');

  expect(license.title).toBe('Attribution ShareAlike');
  expect(license.rights).toEqual([CC, BY, SA]);
});

test('licenses/getLicenseByAbbreviation get license without locale defaults to nb', () => {
  const license = getLicenseByAbbreviation('by-nc-sa');

  expect(license.title).toBe('Navngivelse-IkkeKommersiell-DelPåSammeVilkår');
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
  const result = isCreativeCommonsLicense([COPY]);
  expect(result).toBe(false);
});
