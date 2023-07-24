export interface LicenseLocaleType {
  short: string;
  title: string;
  userFriendlyTitle: string;
  url: string;
  linkText: string;
  description: string;
  abbreviation: string;
}

export interface LicenseType {
  nn: LicenseLocaleType;
  nb: LicenseLocaleType;
  en: LicenseLocaleType;
  rights: string[];
}

export interface RightLocaleInfo {
  title: string;
  userFriendlyTitle: string;
  description: string;
}

export interface RightType {
  short: string;
  nb: RightLocaleInfo;
  nn: RightLocaleInfo;
  en: RightLocaleInfo;
}

const locales = ['nb', 'nn', 'en'] as const;
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
