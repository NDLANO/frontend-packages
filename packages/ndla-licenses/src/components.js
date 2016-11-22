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
export const ByComponent = 'by'; // Attribution
export const SaComponent = 'sa'; // Share-alike
export const NcComponent = 'nc'; // Non-commercial
export const NdComponent = 'nd'; // No derivative work

const by = {
  nb: {
    short: 'BY',
    title: 'Navngivelse',
    userFriendlyTitle: 'Navngivelse',
    description: 'Opphavspersonen til verket må navngis.',
  },
  en: {
    short: 'BY',
    title: 'Attribution',
    userFriendlyTitle: 'Refer to name',
    description: 'The work&CloseCurlyQuote;s creator have to be named',
  },
};
const sa = {
  nb: {
    short: 'SA',
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
  nb: {
    short: 'NC',
    title: 'Ikke-kommersiell',
    userFriendlyTitle: 'Ikke-kommersiell',
    description: 'Verket kan ikke brukes kommersielt.',
  },
  en: {
    short: 'NC',
    title: 'Non Commercial',
    userFriendlyTitle: 'Non Commercial',
    description: 'The work can not be used commercially.',
  },
};
const nd = {
  nb: {
    short: 'ND',
    title: 'Ingen bearbeiding',
    userFriendlyTitle: 'Ingen bearbeiding',
    description: 'Verket kan bare brukes i uendret tilstand.',
  },
  en: {
    short: 'NV',
    title: 'NO DERIVES',
    userFriendlyTitle: 'NO DERIVES',
    description: 'The work can only be used as is.',
  },
};
const pd = {
  nb: {
    short: 'PD',
    title: 'Offentlig eiendom',
    userFriendlyTitle: 'Offentlig eiendom',
    description: 'Verket er identifisert som fritt for kjente opphavsrettsbegrensninger.',
  },
  en: {
    short: 'PD',
    title: 'Public Domain',
    userFriendlyTitle: 'Public Domain',
    description: 'The work is free of all known.',
  },
};
const cc0 = {
  nb: {
    short: 'CC0',
    title: 'Gitt det offentlige',
    userFriendlyTitle: 'Gitt det offentlige',
    description: 'Verket er gitt til fellesskapet og Opphavspersonen frasier seg alle rettigheter, også navngivelse.',
  },
  en: {
    short: 'CCO',
    title: 'Public Domain Dedication',
    userFriendlyTitle: 'Public Domain Dedication',
    description: 'The work is given the public and the Creator has given up all rights, also attribution.',
  },
};
const cc = {
  nb: {
    short: 'CC',
    title: 'Copyright',
    userFriendlyTitle: 'Opphavsrett',
    description: 'Bare opphavspersonen kan bearbeide, publisere og gi bruksrett. Verket kan ikke deles.',
  },
  en: {
    short: 'CC',
    title: 'Copyright',
    userFriendlyTitle: 'Copyright',
    description: 'Only the creator can derive, publish, or license the work. It can not be shared without permission.',
  },
};

function licenseComponentsByLocale(license, locale) {
  const texts = defined(license[locale], license.nb);
  return {
    ...texts,
  };
}

export function getLicenseComponentByAbbreviation(abbreviation, locale) {
  switch (abbreviation) {
    case 'by' : return licenseComponentsByLocale(by, locale);
    case 'sa' : return licenseComponentsByLocale(sa, locale);
    case 'nc' : return licenseComponentsByLocale(nc, locale);
    case 'nd' : return licenseComponentsByLocale(nd, locale);
    case 'pd' : return licenseComponentsByLocale(pd, locale);
    case 'cc' : return licenseComponentsByLocale(cc, locale);
    case 'cc0' : return licenseComponentsByLocale(cc0, locale);
    default : return {
      short: abbreviation,
      title: abbreviation,
      userFriendlyTitle: abbreviation,
      rights: [],
      description: abbreviation };
  }
}
