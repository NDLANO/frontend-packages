/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */

import defined from 'defined';

// License rights
export const BY = 'by'; // Attribution
export const SA = 'sa'; // Share-alike
export const NC = 'nc'; // Non-commercial
export const ND = 'nd'; // No derivative work
export const PD = 'pd'; // Public Domain
export const CC0 = 'cc0'; // Public Domain Dedication
export const CC = 'cc'; // Creative Commons
export const COPY = 'copy'; // Copyright



const by = {
  short: BY,
  nb: {
    title: 'Navngivelse',
    userFriendlyTitle: 'Navngivelse',
    description: 'Opphavspersonen til verket må navngis.',
  },
  en: {
    title: 'Attribution',
    userFriendlyTitle: 'Refer to name',
    description: 'The work&CloseCurlyQuote;s creator have to be named',
  },
};

const sa = {
  short: SA,
  nb: {
    title: 'Share Alike',
    userFriendlyTitle: 'Del på samme vilkår',
    description: 'Bearbeidinger av verket kan bare spres på samme vilkår som det opprinnelige verket.',
  },
  en: {
    short: 'SA',
    title: 'Del likt',
    userFriendlyTitle: 'Share with same license',
    description: 'You should share only under a license identical ("not more restrictive") to the license that governs the original work.',
  },
};

const nc = {
  short: NC,
  nb: {
    title: 'Ikke-kommersiell',
    userFriendlyTitle: 'Ikke-kommersiell',
    description: 'Verket kan ikke brukes kommersielt.',
  },
  en: {
    title: 'Non Commercial',
    userFriendlyTitle: 'Non Commercial',
    description: 'The work can not be used commercially.',
  },
};

const nd = {
  short: ND,
  nb: {
    title: 'Ingen bearbeiding',
    userFriendlyTitle: 'Ingen bearbeiding',
    description: 'Verket kan bare brukes i uendret tilstand.',
  },
  en: {
    title: 'NO DERIVES',
    userFriendlyTitle: 'NO DERIVES',
    description: 'The work can only be used as is.',
  },
};

const pd = {
  short: PD,
  nb: {
    title: 'Offentlig eiendom',
    userFriendlyTitle: 'Offentlig eiendom',
    description: 'Verket er identifisert som fritt for kjente opphavsrettsbegrensninger.',
  },
  en: {
    title: 'Public Domain',
    userFriendlyTitle: 'Public Domain',
    description: 'The work is free of all known.',
  },
};

const cc0 = {
  short: CC0,
  nb: {
    title: 'Gitt det offentlige',
    userFriendlyTitle: 'Gitt det offentlige',
    description: 'Verket er gitt til fellesskapet og Opphavspersonen frasier seg alle rettigheter, også navngivelse.',
  },
  en: {
    title: 'Public Domain Dedication',
    userFriendlyTitle: 'Public Domain Dedication',
    description: 'The work is given the public and the Creator has given up all rights, also attribution.',
  },
};

const copy = {
  short: COPY,
  nb: {
    title: 'Opphavsrett',
    userFriendlyTitle: 'Opphavsrett',
    description: 'Bare opphavspersonen kan bearbeide, publisere og gi bruksrett. Verket kan ikke deles.',
  },
  en: {
    title: 'Copyright',
    userFriendlyTitle: 'Copyright',
    description: 'Only the creator can derive, publish, or license the work. It can not be shared without permission.',
  },
};

const cc = {
  short: CC,
  nb: {
    title: 'Creative Commons',
    userFriendlyTitle: 'Opphavsrett',
    description: 'Regler for gjenbruk og deling',
  },
  en: {
    title: 'Creative Commons',
    userFriendlyTitle: 'Copyright',
    description: 'Rights for reuse and sharing of content.',
  },
};

function licenseRightByLocale(license, locale) {
  const texts = defined(license[locale], license.nb);
  return {
    short: license.short,
    ...texts,
  };
}

export function getLicenseRightByAbbreviation(abbreviation, locale) {
  switch (abbreviation) {
    case BY : return licenseRightByLocale(by, locale);
    case SA : return licenseRightByLocale(sa, locale);
    case NC : return licenseRightByLocale(nc, locale);
    case ND : return licenseRightByLocale(nd, locale);
    case PD : return licenseRightByLocale(pd, locale);
    case CC : return licenseRightByLocale(cc, locale);
    case CC0 : return licenseRightByLocale(cc0, locale);
    case COPY : return licenseRightByLocale(copy, locale);
    default : return {
      short: abbreviation,
      title: abbreviation,
      userFriendlyTitle: abbreviation,
      description: abbreviation };
  }
}
