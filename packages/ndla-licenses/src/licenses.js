/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */

import defined from 'defined';

const freeUseNB = 'Fri bruk';
const freeUseEN = 'Free use';
const restrictedUseNB = 'Begrenset bruk';
const restrictedUseEN = 'Restricted use';

// License rights
export const BY = 'by'; // Attribution
export const SA = 'sa'; // Share-alike
export const NC = 'nc'; // Non-commercial
export const ND = 'nd'; // No derivative work

const byncnd = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-IngenBearbeidelser',
    description: 'Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele dem med andre så lenge du er navngitt som opphavspersonen, men de kan ikke endre dem på noen måte, eller bruke dem kommersielt.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-NoDerivs',
    description: 'This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.',
  },
  rights: [BY, NC, ND],
};

const byncsa = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-DelPåSammeVilkår',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-ShareAlike',
    description: 'This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.',
  },
  rights: [BY, NC, SA],
};


const bync = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IkkeKommersiell',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphavsperson og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NonCommercial',
    description: 'This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.',
  },
  rights: [BY, NC],
};

const bynd = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IngenBearbeidelse',
    description: 'Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og for ikke-kommersielle formål, så lenge det gis videre uendret og sin helhet, og at du navngis som den som har skapt verket.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NoDerivs',
    description: 'This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.',
  },
  rights: [BY, ND],
};

const bysa = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-DelPåSammeVilkår',
    description: 'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens. Denne lisensen blir ofte sidestilt med "copyleft" og åpen kildekode-lisenser. Alle nye verk basert på ditt vil være utstyrt ned den samme lisensen, slik at eventuelle avledete verk vil også tillate kommersiell bruk. Dette er den lisensen som brukes av Wikipedia, og som anbefales for materiale som ville ha nytte av å kunne inkludere innhold fra Wikipedia og fra andre prosjekter med tilsvarende lisenser.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution ShareAlike',
    description: 'This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.',
  },
  rights: [BY, SA],
};


function licenseByLocale(license, locale) {
  const texts = defined(license[locale], license.nb);
  return {
    ...texts,
    rights: license.rights,
  };
}

export function getLicenseByAbbreviation(abbreviation, locale) {
  switch (abbreviation) {
    case 'by-nc-nd' : return licenseByLocale(byncnd, locale);
    case 'by-nc-sa' : return licenseByLocale(byncsa, locale);
    case 'by-nc' : return licenseByLocale(bync, locale);
    case 'by-nd' : return licenseByLocale(bynd, locale);
    case 'by-sa' : return licenseByLocale(bysa, locale);
    default : return {
      short: abbreviation,
      title: abbreviation,
      rights: [],
      description: abbreviation };
  }
}
