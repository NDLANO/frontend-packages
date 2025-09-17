/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const locales = ["nb", "nn", "en"] as const;
export type Locale = (typeof locales)[number];

export type LocaleString = Record<Locale, string>;

export function isLocale(l: string): l is Locale {
  return (locales as readonly string[]).includes(l);
}

export function getLocaleOrDefault(maybeLocale: string | undefined, def: Locale): Locale {
  if (maybeLocale === undefined || !isLocale(maybeLocale)) {
    return def;
  }
  return maybeLocale;
}
