/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isLocale, type Locale, type RightLocaleInfo, type RightType } from "./types";

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
};

const by: RightType = {
  short: rights.BY,
  nn: {
    title: "Namngiving",
    userFriendlyTitle: "Namngiving",
    description: "Du må alltid oppgi kven som har laga innhaldet.",
  },
  nb: {
    title: "Navngivelse",
    userFriendlyTitle: "Navngivelse",
    description: "Du må alltid oppgi hvem som har laget innholdet.",
  },
  en: {
    title: "Attribution",
    userFriendlyTitle: "Refer to name",
    description: `The work's creator have to be named`,
  },
};

const sa: RightType = {
  short: rights.SA,
  nn: {
    title: "Del på same vilkår",
    userFriendlyTitle: "Del på same vilkår",
    description: "Du kan berre dele innhaldet med same lisens som det opphavlege innhaldet.",
  },
  nb: {
    title: "Del på samme vilkår",
    userFriendlyTitle: "Del på samme vilkår",
    description: "Du kan bare dele innholdet med samme lisens som det opprinnelige innholdet.",
  },
  en: {
    title: "Del likt",
    userFriendlyTitle: "Share with same license",
    description: "You should share only under a license identical to the license that governs the original work.",
  },
};

const nc: RightType = {
  short: rights.NC,
  nn: {
    title: "Ikkje-kommersiell",
    userFriendlyTitle: "Ikkje-kommersiell",
    description: "Du kan ikkje tene pengar på bruk av dette innhaldet.",
  },
  nb: {
    title: "Ikke-kommersiell",
    userFriendlyTitle: "Ikke-kommersiell",
    description: "Du kan ikke tjene penger på bruk av dette innholdet.",
  },
  en: {
    title: "Non Commercial",
    userFriendlyTitle: "Non Commercial",
    description: "The work can not be used commercially.",
  },
};

const nd: RightType = {
  short: rights.ND,
  nn: {
    title: "Ingen tilarbeiding",
    userFriendlyTitle: "Ingen tilarbeiding",
    description: "Du kan ikkje endre innhaldet.",
  },
  nb: {
    title: "Ingen bearbeiding",
    userFriendlyTitle: "Ingen bearbeiding",
    description: "Du kan ikke endre innholdet.",
  },
  en: {
    title: "NO DERIVES",
    userFriendlyTitle: "NO DERIVES",
    description: "The work can only be used as is.",
  },
};

const pd: RightType = {
  short: rights.PD,
  nn: {
    title: "Offentleg eige",
    userFriendlyTitle: "Offentleg eigedom",
    description: "Innhaldet er så gammalt at du kan bruke det som du vil.",
  },
  nb: {
    title: "Offentlig eie",
    userFriendlyTitle: "Offentlig eiendom",
    description: "Innholdet er så gammelt at du kan bruke det som du vil.",
  },
  en: {
    title: "Public Domain",
    userFriendlyTitle: "Public Domain",
    description: "The work is free of all known.",
  },
};

const cc0: RightType = {
  short: rights.CC0,
  nn: {
    title: "Gjeve til fellesskapet",
    userFriendlyTitle: "Gjeve til fellesskapet",
    description: "Du kan bruke innhaldet fritt.",
  },
  nb: {
    title: "Gitt til fellesskapet",
    userFriendlyTitle: "Gitt til fellesskapet",
    description: "Du kan bruke innholdet fritt.",
  },
  en: {
    title: "Public Domain Dedication",
    userFriendlyTitle: "Public Domain Dedication",
    description: "The work is given the public and the Creator has given up all rights, also attribution.",
  },
};

const copyrighted: RightType = {
  short: rights.COPYRIGHTED,
  nn: {
    title: "Opphavsrett",
    userFriendlyTitle: "Opphavsrett",
    description:
      "Det er berre den som har laga innhaldet som kan endre, publisera og gje andre rett til å bruke innhaldet.",
  },
  nb: {
    title: "Opphavsrett",
    userFriendlyTitle: "Opphavsrett",
    description:
      "Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.",
  },
  en: {
    title: "Copyright",
    userFriendlyTitle: "Copyright",
    description: "Only the creator can derive, publish, or license the work. It can not be shared without permission.",
  },
};

const cc: RightType = {
  short: rights.CC,
  nn: {
    title: "Creative Commons",
    userFriendlyTitle: "Opphavsrett",
    description: "Denne lisensen gir deg rett til å dele og bruke dette innhaldet på visse vilkår:",
  },
  nb: {
    title: "Creative Commons",
    userFriendlyTitle: "Opphavsrett",
    description: "Denne lisensen gir deg rett til å dele og bruke dette innholdet på visse vilkår:",
  },
  en: {
    title: "Creative Commons",
    userFriendlyTitle: "Copyright",
    description: "Rights for reuse and sharing of content:",
  },
};

const na: RightType = {
  short: rights.NA,
  nn: {
    title: "N/A - ikkje relevant",
    userFriendlyTitle: "NA - ikkje relevant",
    description: "Dette merket er meint for innhald som ikkje treng lisens.",
  },
  nb: {
    title: "N/A - ikke relevant",
    userFriendlyTitle: "NA - ikke relevant",
    description: "Dette merket er ment for innhold som ikke trenger lisens.",
  },
  en: {
    title: "N/A - not applicable",
    userFriendlyTitle: "NA - not applicable",
    description: "This mark is intended for content that does not require a license.",
  },
};

function licenseRightByLocale(
  license: RightType,
  locale: Locale | string | undefined,
): RightLocaleInfo & { short: string } {
  const newLocale = locale || "nb";
  let texts: RightLocaleInfo;
  if (isLocale(newLocale)) {
    texts = license[newLocale];
  } else {
    texts = license["nb"];
  }

  return {
    short: license.short,
    ...texts,
  };
}

export function getLicenseRightByAbbreviation(
  abbreviation: string,
  locale: Locale | string | undefined,
): RightLocaleInfo & { short: string } {
  // const
  switch (abbreviation) {
    case rights.BY:
      return licenseRightByLocale(by, locale);
    case rights.SA:
      return licenseRightByLocale(sa, locale);
    case rights.NC:
      return licenseRightByLocale(nc, locale);
    case rights.ND:
      return licenseRightByLocale(nd, locale);
    case rights.PD:
      return licenseRightByLocale(pd, locale);
    case rights.CC:
      return licenseRightByLocale(cc, locale);
    case rights.CC0:
      return licenseRightByLocale(cc0, locale);
    case rights.COPYRIGHTED:
      return licenseRightByLocale(copyrighted, locale);
    case rights.NA:
      return licenseRightByLocale(na, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        userFriendlyTitle: abbreviation,
        description: abbreviation,
      };
  }
}
