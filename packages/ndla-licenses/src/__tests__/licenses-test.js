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

import { BY, SA, NC } from '../licenseRights';

test('licenses/getLicenseByAbbreviation get license for by-sa in english', () => {
  const license = getLicenseByAbbreviation('by-sa', 'en');

  expect(license.title).toBe('Attribution ShareAlike');
  expect(license.rights).toEqual([BY, SA]);
});

test('licenses/getLicenseByAbbreviation get license without locale defaults to nb', () => {
  const license = getLicenseByAbbreviation('by-nc-sa');

  expect(license.title).toBe('Navngivelse-IkkeKommersiell-DelPåSammeVilkår');
  expect(license.rights).toEqual([BY, NC, SA]);
});

test('licenses/getLicenseByAbbreviation unknown license', () => {
  const license = getLicenseByAbbreviation('unknown-license', 'nb');

  expect(license.title).toBe('unknown-license');
  expect(license.short).toBe('unknown-license');
  expect(license.description).toBe('unknown-license');
  expect(license.rights).toEqual([]);
});
