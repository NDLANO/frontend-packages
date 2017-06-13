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
    description: 'Du må alltid oppgi hvem som har laget bildet, videoen, teksten osv.',
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
    description: 'Du kan bare dele bildet, videoen, teksten osv. med samme lisens som det opprinnelige bildet, videoen, teksten osv.',
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
    description: 'Du kan ikke endre bildet, videoen, teksten osv.',
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
    description: 'Bildet, videoen teksten osv. er så gammelt at du kan bruke det som du vil.',
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
    description: 'Bildet, videoen teksten osv. er så gammelt at du kan bruke det som du vil.',
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
    description: 'Det er bare den som har laget bildet, videoen, teksten osv. som kan endre, publisere og gi andre rett til å bruke bildet, videoen, teksten etc. Bildet, videoen, teksten osv. kan ikke deles.',
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
    description: 'Denne lisensen gir deg rett til å dele og bruke dette bildet, videoen, teksten osv.',
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
