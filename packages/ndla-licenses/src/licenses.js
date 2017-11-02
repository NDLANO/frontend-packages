/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint max-len: 0 */

import defined from 'defined';
import { BY, SA, NC, ND, PD, CC0, COPY } from './licenseRights';

const freeUseNB = 'Fri gjenbruk';
const freeUseEN = 'Free reuse';
const restrictedUseNB = 'Begrenset bruk';
const restrictedUseEN = 'Restricted use';

const openLicenseLinkTextNB = 'Lær mer om åpne lisenser';
const openLicenseLinkTextEN = 'Learn more about open licenses';

const byncnd = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-IngenBearbeidelser',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-nd/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele dem med andre så lenge du er navngitt som opphavspersonen, men de kan ikke endre dem på noen måte, eller bruke dem kommersielt.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-NoDerivs',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-nd/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.',
  },
  rights: [BY, NC, ND],
};

const byncsa = {
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-DelPåSammeVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-sa/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-ShareAlike',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-sa/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.',
  },
  rights: [BY, NC, SA],
};

const bync = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IkkeKommersiell',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphavsperson og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NonCommercial',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.',
  },
  rights: [BY, NC],
};

const bynd = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IngenBearbeidelse',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nd/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og for ikke-kommersielle formål, så lenge det gis videre uendret og sin helhet, og at du navngis som den som har skapt verket.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NoDerivs',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nd/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.',
  },
  rights: [BY, ND],
};

const bysa = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-DelPåSammeVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-sa/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Fri gjenbruk ved navngivelse. Navngivelse vil si at du oppgir navnet til opphavspersonen(e). Hvis du deler, må andre også få lov til å dele videre på samme vilkår. Dette sikrer videre gjenbruk og bidrar til delingskultur.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution ShareAlike',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-sa/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.',
  },
  rights: [BY, SA],
};

const by = {
  nb: {
    short: freeUseNB,
    title: 'Navngivelse',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by/3.0/no/',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphavspersonen. Dette er den mest fleksible og åpne av de lisendene vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC lisens.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by/3.0/',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.',
  },
  rights: [BY],
};


const pd = {
  nb: {
    short: freeUseNB,
    title: 'Offentlig domene',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/deed.no',
    linkText: 'Lær mer om public domain-merker',
    description:
      'Denne lisensen lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.',
  },

  en: {
    short: freeUseEN,
    title: 'Public Domain Mark',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/',
    linkText: 'Learn more about public domain marks',

    description:
      'This license lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.',
  },
  rights: [PD],
};

const cc0 = {
  nb: {
    short: freeUseNB,
    title: 'Fristatus-erklæring',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/deed.no',
    linkText: 'Lær mer om public domain-merker',
    description:
      'Denne lisensen lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.',
  },

  en: {
    short: freeUseEN,
    title: 'Public Domain Dedication',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/',
    linkText: 'Learn more about public domain marks',
    description:
      'This license lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.',
  },
  rights: [CC0],
};

const copy = {
  nb: {
    short: restrictedUseNB,
    title: 'Opphavsrett',
    userFriendlyTitle: '',
    url: 'http://www.delrett.no/nb/artikler/om-opphavsrett',
    linkText: 'Lær mer om opphavsrett',
    description:
      'TODO: write description',
  },

  en: {
    short: restrictedUseEN,
    title: 'Copyright',
    userFriendlyTitle: '',
    url: 'http://www.delrett.no/nb/artikler/om-opphavsrett',
    linkText: 'Learn more about copyright',
    description:
      'TODO: write description',
  },
  rights: [COPY],
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
    case 'by-nc-nd':
      return licenseByLocale(byncnd, locale);
    case 'by-nc-sa':
      return licenseByLocale(byncsa, locale);
    case 'by-nc':
      return licenseByLocale(bync, locale);
    case 'by-nd':
      return licenseByLocale(bynd, locale);
    case 'by-sa':
      return licenseByLocale(bysa, locale);
    case 'by':
      return licenseByLocale(by, locale);
    case 'pd':
      return licenseByLocale(pd, locale);
    case 'cc0':
      return licenseByLocale(cc0, locale);
    case 'copy':
      return licenseByLocale(copy, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        userFriendlyTitle: abbreviation,
        rights: [],
        description: abbreviation,
        linkText: abbreviation,
        url: '',
      };
  }
}

export function getLicenseByNBTitle(title, locale) {
  switch (title.replace(/\s/g, '').toLowerCase()) {
    case 'navngivelse-ikkekommersiell-ingenbearbeidelser':
      return getLicenseByAbbreviation('by-nc-nd', locale);
    case 'navngivelse-ikkekommersiell-ingenbearbeidelse':
      return getLicenseByAbbreviation('by-nc-nd', locale);
    case 'navngivelse-ikkekommersiell-delpåsammevilkår':
      return getLicenseByAbbreviation('by-nc-sa', locale);
    case 'navngivelse-ikkekommersiell':
      return getLicenseByAbbreviation('by-nc', locale);
    case 'navngivelse-ingenbearbeidelse':
      return getLicenseByAbbreviation('by-nd', locale);
    case 'navngivelse-delpåsammevilkår':
      return getLicenseByAbbreviation('by-sa', locale);
    case 'navngivelse':
      return getLicenseByAbbreviation('by', locale);
    default:
      return title;
  }
}
