/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface LicenseLocaleType {
  short: string;
  title: string;
  userFriendlyTitle: string;
  url: string;
  linkText: string;
  description: string;
  abbreviation: string;
  rights: string[];
}

type LocalLicenseLocaleInfo = Omit<LicenseLocaleType, "rights">;

export interface LicenseType {
  nn: LocalLicenseLocaleInfo;
  nb: LocalLicenseLocaleInfo;
  en: LocalLicenseLocaleInfo;
  rights: string[];
}

const locales = ["nb", "nn", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(l: string): l is Locale {
  return (locales as readonly string[]).includes(l);
}

export function getLocaleOrDefault(maybeLocale: string | undefined, def: Locale): Locale {
  if (maybeLocale === undefined || !isLocale(maybeLocale)) {
    return def;
  }
  return maybeLocale;
}
