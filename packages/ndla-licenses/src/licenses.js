/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import defined from 'defined';
import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED, CC } from './licenseRights';

const freeUseNB = 'Fri gjenbruk';
const freeUseNN = 'Fri gjenbruk';
const freeUseEN = 'Free reuse';
const restrictedUseNB = 'Begrenset bruk';
const restrictedUseNN = 'Begrenset bruk';
const restrictedUseEN = 'Restricted use';

const openLicenseLinkTextNB = 'Lær mer om åpne lisenser';
const openLicenseLinkTextNN = 'Lær mer om åpne lisenser';
const openLicenseLinkTextEN = 'Learn more about open licenses';

const byncnd = {
  nn: {
    short: restrictedUseNN,
    title: 'Namngiving-IkkjeKommersiell-IngenTilarbeiding',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Denne lisensen er den mest restriktive av dei seks kjernelisensane våre. Den tillet andre å lasta ned verket ditt og dela det med andre så lenge du er namngitt som opphavspersonen, men dei kan ikkje endra det på nokon måte, eller bruka det kommersielt.',
  },
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-IngenBearbeidelser',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele det med andre så lenge du er navngitt som opphavspersonen, men de kan ikke endre det på noen måte, eller bruke det kommersielt.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-NoDerivs',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.',
  },
  rights: [CC, BY, NC, ND],
  abbreviation: `${CC} ${BY}-${NC}-${ND}`.toUpperCase(),
};

const byncsa = {
  nn: {
    short: restrictedUseNN,
    title: 'Namngiving-IkkjeKommersiell-DelPåSameVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Denne lisensen let andre distribuera, endra, remixa, og byggja vidare på verket ditt for ikkje-kommersielle formål. Deira verk må namngje deg som den opprinnelige opphavspersonen og avledeta verk må bera ein lisens som svarar til denne.',
  },
  nb: {
    short: restrictedUseNB,
    title: 'Navngivelse-IkkeKommersiell-DelPåSammeVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphavspersonen og avledete verk må bære en tilsvarende lisens.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Attribution-NonCommercial-ShareAlike',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.',
  },
  rights: [CC, BY, NC, SA],
  abbreviation: `${CC} ${BY}-${NC}-${SA}`.toUpperCase(),
};

const bync = {
  nn: {
    short: freeUseNN,
    title: 'Namngiving-IkkjeKommersiell',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Denne lisensen let andre distribuera, endra, remixa, og byggja videre på verket ditt for ikkje-kommersielle formål. Verket deira må namngje deg som opphavsperson og også vera ikkje-kommersielle, men dei treng ikkje krevja at verk avleda av deira ber dei same vilkåra.',
  },
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IkkeKommersiell',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphavsperson og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NonCommercial',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nc/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.',
  },
  rights: [CC, BY, NC],
  abbreviation: `${CC} ${BY}-${NC}`.toUpperCase(),
};

const bynd = {
  nn: {
    short: freeUseNN,
    title: 'Namngiving-IngenTilarbeiding',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nd/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Denne lisensen gjev høve til å distribuera verket vidare, både for kommersielle og ikkje-kommersielle formål, så lenge det vert gjeve vidare uendra og i sitt heile, og at du vert namngjeven som den som har skapt verket.',
  },
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-IngenBearbeidelse',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nd/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og ikke-kommersielle formål, så lenge det gis videre uendret og i sin helhet, og at du navngis som den som har skapt verket.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution-NoDerivs',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-nd/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.',
  },
  rights: [CC, BY, ND],
  abbreviation: `${CC} ${BY}-${ND}`.toUpperCase(),
};

const bysa = {
  nn: {
    short: freeUseNN,
    title: 'Namngiving-DelPåSameVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Fri gjenbruk ved namngiving. Navngiving vil seie at du oppgir namnet til opphavspersonen/ane. Om du deler, må andre også få lov til å dele vidare på same vilkår. Dette sikrar vidare gjenbruk og bidreg til delingskultur.',
  },
  nb: {
    short: freeUseNB,
    title: 'Navngivelse-DelPåSammeVilkår',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Fri gjenbruk ved navngivelse. Navngivelse vil si at du oppgir navnet til opphavspersonen(e). Hvis du deler, må andre også få lov til å dele videre på samme vilkår. Dette sikrer videre gjenbruk og bidrar til delingskultur.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution ShareAlike',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.',
  },
  rights: [CC, BY, SA],
  abbreviation: `${CC} ${BY}-${SA}`.toUpperCase(),
};

const by = {
  nn: {
    short: freeUseNN,
    title: 'Navngivelse',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by/4.0/deed.no',
    linkText: openLicenseLinkTextNN,
    description:
      'Denne lisensen let andre distribuera, endra, remixa, og byggje vidare på verket ditt, også for kommersielle formål, så lenge dei namngir deg som den opphavlege opphavspersonen. Dette er den mest fleksible og opne lisensen vi tilbyr. Den vert tilrådd om du ynsker maksimal spreiing og bruk av materiale under ein CC-lisens.',
  },
  nb: {
    short: freeUseNB,
    title: 'Navngivelse',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by/4.0/deed.no',
    linkText: openLicenseLinkTextNB,
    description:
      'Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphavspersonen. Dette er den mest fleksible og åpne lisensen vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC-lisens.',
  },

  en: {
    short: freeUseEN,
    title: 'Attribution',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/licenses/by/4.0/deed.en',
    linkText: openLicenseLinkTextEN,
    description:
      'This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.',
  },
  rights: [CC, BY],
  abbreviation: `${CC} ${BY}`.toUpperCase(),
};

const pd = {
  nn: {
    short: freeUseNN,
    title: 'Offentleg domene',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/deed.no',
    linkText: 'Lær meir om public domain-merker',
    description:
      'Dette merket let andre kopiera, endra, remixa, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.',
  },
  nb: {
    short: freeUseNB,
    title: 'Offentlig domene',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/deed.no',
    linkText: 'Lær mer om public domain-merker',
    description:
      'Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.',
  },

  en: {
    short: freeUseEN,
    title: 'Public Domain Mark',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/mark/1.0/',
    linkText: 'Learn more about public domain marks',

    description:
      'This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.',
  },
  rights: [PD],
  abbreviation: PD.toUpperCase(),
};

const cc0 = {
  nn: {
    short: freeUseNN,
    title: 'Fristatus-erklæring',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/deed.no',
    linkText: 'Lær meir om public domain-merker',
    description:
      'Dette merket let andre kopiera, endra, remixa, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.',
  },
  nb: {
    short: freeUseNB,
    title: 'Fristatus-erklæring',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/deed.no',
    linkText: 'Lær mer om public domain-merker',
    description:
      'Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.',
  },

  en: {
    short: freeUseEN,
    title: 'Public Domain Dedication',
    userFriendlyTitle: '',
    url: 'https://creativecommons.org/publicdomain/zero/1.0/',
    linkText: 'Learn more about public domain marks',
    description:
      'This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.',
  },
  rights: [CC0],
  abbreviation: CC0.toUpperCase(),
};

const copy = {
  nn: {
    short: restrictedUseNN,
    title: 'Opphavsrett',
    userFriendlyTitle: '',
    url: 'http://www.delrett.no/nb/artikler/om-opphavsrett',
    linkText: 'Lær meir om opphavsrett',
    description:
      'Det er berre den som har laga innhaldet som kan endra, publisera og gje andre rett til å bruka innhaldet.',
  },
  nb: {
    short: restrictedUseNB,
    title: 'Opphavsrett',
    userFriendlyTitle: '',
    url: 'http://www.delrett.no/nb/artikler/om-opphavsrett',
    linkText: 'Lær mer om opphavsrett',
    description:
      'Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.',
  },

  en: {
    short: restrictedUseEN,
    title: 'Copyright',
    userFriendlyTitle: '',
    url: 'http://www.delrett.no/nb/artikler/om-opphavsrett',
    linkText: 'Learn more about copyright',
    description:
      'Only those who have created the content can modify, publish, and give others permission to use the content.',
  },
  rights: [COPYRIGHTED],
  abbreviation: COPYRIGHTED.toUpperCase(),
};

function licenseByLocale(license, locale) {
  const texts = defined(license[locale], license.nb);
  return {
    ...texts,
    rights: license.rights,
    abbreviation: license.abbreviation,
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
    case 'copyrighted':
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
        abbreviation,
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

export const isCreativeCommonsLicense = licenseRights =>
  licenseRights.every(r => r !== COPYRIGHTED);
