/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isLocale, type Locale, type LocaleString } from "./types";

interface RightType {
  short: string;
  title: LocaleString;
  description: LocaleString;
}

interface RightLocaleInfo {
  short: string;
  title: string;
  description: string;
}

// License rights
export const rights = {
  BY: "by", // Attribution
  SA: "sa", // Share-alike
  NC: "nc", // Non-commercial
  ND: "nd", // No derivative work
  PD: "pd", // Public Domain
  CC0: "cc0", // Public Domain Dedication
  CC: "cc", // Creative Commons
  COPYRIGHTED: "copyrighted", // Copyrighted
  NA: "n/a", // Not Applicable
  VERSION: "4.0", //Current license version
} as const;

const by: RightType = {
  short: rights.BY,
  title: { nb: "Navngivelse", nn: "Namngiving", en: "Attribution" },
  description: {
    nb: "Du må alltid oppgi hvem som har laget innholdet.",
    nn: "Du må alltid oppgi kven som har laga innhaldet.",
    en: "The work's creator have to be named",
  },
};

const sa: RightType = {
  short: rights.SA,
  title: { nb: "Del på samme vilkår", nn: "Del på same vilkår", en: "Share with same license" },
  description: {
    nb: "Du kan bare dele innholdet med samme lisens som det opprinnelige innholdet.",
    nn: "Du kan berre dele innhaldet med same lisens som det opphavlege innhaldet.",
    en: "You should share only under a license identical to the license that governs the original work.",
  },
};

const nc: RightType = {
  short: rights.NC,
  title: { nb: "Ikke-kommersiell", nn: "Ikkje-kommersiell", en: "Non Commercial" },
  description: {
    nb: "Du kan ikke tjene penger på bruk av dette innholdet.",
    nn: "Du kan ikkje tene pengar på bruk av dette innhaldet.",
    en: "The work can not be used commercially.",
  },
};

const nd: RightType = {
  short: rights.ND,
  title: { nb: "Ingen bearbeiding", nn: "Ingen tilarbeiding", en: "NO DERIVES" },
  description: {
    nb: "Du kan ikke endre innholdet.",
    nn: "Du kan ikkje endre innhaldet.",
    en: "The work can only be used as is.",
  },
};

const pd: RightType = {
  short: rights.PD,
  title: { nb: "Offentlig eie", nn: "Offentleg eige", en: "Public Domain" },
  description: {
    nb: "Innholdet er så gammelt at du kan bruke det som du vil.",
    nn: "Innhaldet er så gammalt at du kan bruke det som du vil.",
    en: "The work is free of all known.",
  },
};

const cc0: RightType = {
  short: rights.CC0,
  title: { nb: "Gitt til fellesskapet", nn: "Gjeve til fellesskapet", en: "Public Domain Dedication" },
  description: {
    nb: "Du kan bruke innholdet fritt.",
    nn: "Du kan bruke innhaldet fritt.",
    en: "The work is given the public and the Creator has given up all rights, also attribution.",
  },
};

const copyrighted: RightType = {
  short: rights.COPYRIGHTED,
  title: { nb: "Opphavsrett", nn: "Opphavsrett", en: "Copyright" },
  description: {
    nb: "Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.",
    nn: "Det er berre den som har laga innhaldet som kan endre, publisera og gje andre rett til å bruke innhaldet.",
    en: "Only the creator can derive, publish, or license the work. It can not be shared without permission.",
  },
};

const cc: RightType = {
  short: rights.CC,
  title: { nb: "Creative Commons", nn: "Creative Commons", en: "Creative Commons" },
  description: {
    nb: "Denne lisensen gir deg rett til å dele og bruke dette innholdet på visse vilkår:",
    nn: "Denne lisensen gir deg rett til å dele og bruke dette innhaldet på visse vilkår:",
    en: "Rights for reuse and sharing of content:",
  },
};

const na: RightType = {
  short: rights.NA,
  title: { nb: "N/A - ikke relevant", nn: "N/A - ikkje relevant", en: "N/A - not applicable" },
  description: {
    nb: "Dette merket er ment for innhold som ikke trenger lisens.",
    nn: "Dette merket er meint for innhald som ikkje treng lisens.",
    en: "This mark is intended for content that does not require a license.",
  },
};

type RightsValues = (typeof rights)[keyof typeof rights];

const rightObjects: Record<RightsValues, RightType | undefined> = {
  [rights.BY]: by,
  [rights.SA]: sa,
  [rights.NC]: nc,
  [rights.ND]: nd,
  [rights.PD]: pd,
  [rights.CC0]: cc0,
  [rights.CC]: cc,
  [rights.COPYRIGHTED]: copyrighted,
  [rights.NA]: na,
  [rights.VERSION]: undefined,
};

function licenseRightByLocale(license: RightType, locale: Locale | string | undefined): RightLocaleInfo {
  const surelyLocale = locale && isLocale(locale) ? locale : "nb";
  return {
    short: license.short,
    title: license.title[surelyLocale],
    description: license.description[surelyLocale],
  };
}

export function getLicenseRightByAbbreviation(
  abbreviation: string,
  locale: Locale | string | undefined,
): RightLocaleInfo {
  const obj = rightObjects[abbreviation as RightsValues];
  if (obj) {
    return licenseRightByLocale(obj, locale);
  }
  return {
    short: abbreviation,
    title: abbreviation,
    description: abbreviation,
  };
}
