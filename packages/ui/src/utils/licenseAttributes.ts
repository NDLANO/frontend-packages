/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { getLicenseByAbbreviation, isCreativeCommonsLicense } from "@ndla/licenses";

export const licenseAttributes = (license: string | undefined, lang: string | undefined, url: string | undefined) => {
  const licenseAbbr = getLicenseByAbbreviation(license ? license : "", lang);

  const licenseProps = isCreativeCommonsLicense(licenseAbbr.rights)
    ? {
        "xmlns:cc": "https://creativecommons.org/ns#",
        "xmlns:dct": "http://purl.org/dc/terms/",
        about: url ?? undefined,
      }
    : {};

  return licenseProps;
};
