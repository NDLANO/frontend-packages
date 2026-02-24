/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { test, expect } from "vitest";
import { rights } from "../licenseRights";
import { getLicenseByAbbreviation, isCreativeCommonsLicense } from "../licenses";

test("licenses/getLicenseByAbbreviation get license for CC-BY-SA-4.0 in english", () => {
  const license = getLicenseByAbbreviation("CC-BY-SA-4.0", "en");

  expect(license.title).toBe("CC BY-SA 4.0: Attribution ShareAlike");
  expect(license.rights).toEqual([rights.CC, rights.BY, rights.SA]);
});

test("licenses/getLicenseByAbbreviation get license for N/A in norwegian", () => {
  const license = getLicenseByAbbreviation("N/A", "nb");

  expect(license.title).toBe("N/A - ikke relevant");
  expect(license.rights).toEqual([rights.NA]);
});

test("licenses/getLicenseByAbbreviation get license without locale defaults to nb", () => {
  const license = getLicenseByAbbreviation("CC-BY-NC-SA-4.0", undefined);

  expect(license.title).toBe("CC BY-NC-SA 4.0: Navngivelse-Ikkekommersiell-Del på samme vilkår");
  expect(license.rights).toEqual([rights.CC, rights.BY, rights.NC, rights.SA]);
});

test("licenses/getLicenseByAbbreviation unknown license", () => {
  const license = getLicenseByAbbreviation("unknown-license", "nb");

  expect(license.title).toBe("unknown-license");
  expect(license.short).toBe("unknown-license");
  expect(license.description).toBe("unknown-license");
  expect(license.rights).toEqual([]);
});

test("licenses/isCreativeCommonsLicense when creative commons license should return true", () => {
  const result = isCreativeCommonsLicense([rights.CC, rights.BY]);
  expect(result).toBe(true);
});

test("licenses/isCreativeCommonsLicense when copy licebse should return false", () => {
  const result = isCreativeCommonsLicense([rights.COPYRIGHTED]);
  expect(result).toBe(false);
});
