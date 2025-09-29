/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { rights } from "./licenseRights";
import { getLocaleOrDefault, type Locale, type LocaleString } from "./types";

type LicenseLocaleStrings = "short" | "title" | "url" | "description" | "abbreviation";

export type LicenseLocaleType = Record<LicenseLocaleStrings, string> & { rights: string[] };

type LicenseType = Record<LicenseLocaleStrings, LocaleString> & { rights: string[] };

const freeUseLocale: LocaleString = { nb: "Offentlig eie", nn: "Offentleg eige", en: "Public domain" };
const restrictedReuseLocale: LocaleString = {
  nb: "Begrensa gjenbruk",
  nn: "Avgrensa gjenbruk",
  en: "Restricted reuse",
};


const byncndAbbrev = `${rights.CC} ${rights.BY}-${rights.NC}-${rights.ND} ${rights.VERSION}`.toUpperCase();

const ccLocaleLink = (link: string) => {
  const noLink = `${link}/deed.no`;
  return {
    nb: noLink,
    nn: noLink,
    en: `${link}/4.0`,
  };
};

const byncnd: LicenseType = {
  short: restrictedReuseLocale,
  title: {
    nb: "CC BY-NC-ND 4.0: Navngivelse-Ikkekommersiell-Ingen bearbeidelse",
    nn: "CC BY-NC-ND 4.0: Namngiving-Ikkjekommersiell-Ingen tilarbeiding",
    en: "CC BY-NC-ND 4.0: Attribution-NonCommercial-NoDerivs",
  },
  url: ccLocaleLink("https://creativecommons.org/licenses/by-nc-nd/4.0"),
  abbreviation: { nb: byncndAbbrev, nn: byncndAbbrev, en: byncndAbbrev },
  description: {
    nb: "Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele det med andre så lenge du er navngitt som opphaver, men de kan ikke endre det på noen måte, eller bruke det kommersielt.",
    nn: "Denne lisensen er den mest restriktive av dei seks kjernelisensane våre. Den tillet andre å lasta ned verket ditt og dela det med andre så lenge du er namngitt som opphavar, men dei kan ikkje endra det på nokon måte, eller bruke det kommersielt.",
    en: "This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.",
  },
  rights: [rights.CC, rights.BY, rights.NC, rights.ND],
};

const byncsaAbbrev = `${rights.CC} ${rights.BY}-${rights.NC}-${rights.SA} ${rights.VERSION}`.toUpperCase();

const byncsa: LicenseType = {
  short: restrictedReuseLocale,
  title: {
    nb: "CC BY-NC-SA 4.0: Navngivelse-Ikkekommersiell-Del på samme vilkår",
    nn: "CC BY-NC-SA 4.0: Namngiving-Ikkjekommersiell-Del på same vilkår",
    en: "CC BY-NC-SA 4.0: Attribution-NonCommercial-ShareAlike",
  },
  url: ccLocaleLink("https://creativecommons.org/licenses/by-nc-sa/4.0"),
  abbreviation: { nb: byncsaAbbrev, nn: byncsaAbbrev, en: byncsaAbbrev },
  description: {
    nb: "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphaveren og avledete verk må bære en tilsvarende lisens.",
    nn: "Denne lisensen let andre distribuere, endre, remixe, og byggje vidare på verket ditt for ikkje-kommersielle formål. Deira verk må namngje deg som den opprinnelige opphavaren og avleia verk må bera ein lisens som svarar til denne.",
    en: "This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.",
  },
  rights: [rights.CC, rights.BY, rights.NC, rights.SA],
};

const byncAbbrev = `${rights.CC} ${rights.BY}-${rights.NC} ${rights.VERSION}`.toUpperCase();

const bync: LicenseType = {
  short: restrictedReuseLocale,
  title: {
    nb: "CC BY-NC 4.0: Navngivelse-Ikkekommersiell",
    nn: "CC BY-NC 4.0: Namngiving-Ikkjekommersiell",
    en: "CC BY-NC 4.0: Attribution-NonCommercial",
  },
  url: ccLocaleLink("https://creativecommons.org/licenses/by-nc/4.0"),
  abbreviation: { nb: byncAbbrev, nn: byncAbbrev, en: byncAbbrev },
  description: {
    nb: "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphaver og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.",
    nn: "Denne lisensen let andre distribuer, endre, remixe, og byggje videre på verket ditt for ikkje-kommersielle formål. Verket deira må namngje deg som opphavar og også vera ikkje-kommersielle, men dei treng ikkje krevja at verk avleda av deira ber dei same vilkåra.",
    en: "This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.",
  },
  rights: [rights.CC, rights.BY, rights.NC],
};

const byndAbbrev = `${rights.CC} ${rights.BY}-${rights.ND} ${rights.VERSION}`.toUpperCase();

const bynd: LicenseType = {
  short: restrictedReuseLocale,
  title: {
    nb: "CC BY-ND 4.0: Navngivelse-Ingen bearbeidelse",
    nn: "CC BY-ND 4.0: Namngiving-Ingen tilarbeiding",
    en: "CC BY-ND 4.0: Attribution-NoDerivs",
  },
  url: ccLocaleLink("https://creativecommons.org/licenses/by-nd/4.0"),
  abbreviation: { nb: byndAbbrev, nn: byndAbbrev, en: byndAbbrev },
  description: {
    nb: "Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og ikke-kommersielle formål, så lenge det gis videre uendret og i sin helhet, og at du navngis som den som har skapt verket.",
    nn: "Denne lisensen gjev høve til å distribuera verket vidare, både for kommersielle og ikkje-kommersielle formål, så lenge det vert gjeve vidare uendra og i sitt heile, og at du vert namngjeven som den som har skapt verket.",
    en: "This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.",
  },
  rights: [rights.CC, rights.BY, rights.ND],
};

const bysaAbbrev = `${rights.CC} ${rights.BY}-${rights.SA} ${rights.VERSION}`.toUpperCase();

const bysa: LicenseType = {
  short: restrictedReuseLocale,
  title: {
    nb: "CC BY-SA 4.0: Navngivelse-Del på samme vilkår",
    nn: "CC BY-SA 4.0: Namngiving-Del på samme vilkår",
    en: "CC BY-SA 4.0: Attribution ShareAlike",
  },
  url: ccLocaleLink("https://creativecommons.org/licenses/by-sa/4.0"),
  abbreviation: { nb: bysaAbbrev, nn: bysaAbbrev, en: bysaAbbrev },
  description: {
    nb: "Fri gjenbruk ved navngivelse. Navngivelse vil si at du oppgir navnet til opphaver(ene). Hvis du deler, må andre også få lov til å dele videre på samme vilkår. Dette sikrer videre gjenbruk og bidrar til delingskultur.",
    nn: "Fri gjenbruk ved namngiving. Namngiving vil seie at du oppgir namnet til opphavar(ane). Om du deler, må andre også få lov til å dele vidare på same vilkår. Dette sikrar vidare gjenbruk og bidreg til delingskultur.",
    en: "This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.",
  },
  rights: [rights.CC, rights.BY, rights.SA],
};

const byAbbrev = `${rights.CC} ${rights.BY} ${rights.VERSION}`.toUpperCase();

const by: LicenseType = {
  short: freeUseLocale,
  title: { nb: "CC BY 4.0: Navngivelse", nn: "CC BY 4.0: Namngiving", en: "CC BY 4.0: Attribution" },
  url: ccLocaleLink("https://creativecommons.org/licenses/by/4.0"),
  abbreviation: { nb: byAbbrev, nn: byAbbrev, en: byAbbrev },
  description: {
    nb: "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphaveren. Dette er den mest fleksible og åpne lisensen vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC-lisens.",
    nn: "Denne lisensen let andre distribuere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, så lenge dei namngir deg som den opphavlege opphavaren. Dette er den mest fleksible og opne lisensen vi tilbyr. Den vert tilrådd om du ynsker maksimal spreiing og bruk av materiale under ein CC-lisens.",
    en: "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphaveren. Dette er den mest fleksible og åpne lisensen vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC-lisens.",
  },
  rights: [rights.CC, rights.BY],
};

const pd: LicenseType = {
  short: freeUseLocale,
  title: {
    nb: "PD Public domain merket: Offentlig eiendom",
    nn: "PD Public domain merket: Offentleg eigedom",
    en: "PD: Public Domain Mark",
  },
  url: ccLocaleLink("https://creativecommons.org/publicdomain/mark/1.0"),
  abbreviation: freeUseLocale,
  description: {
    nb: "Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.",
    nn: "Dette merket let andre kopiere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.",
    en: "This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.",
  },
  rights: [rights.PD],
};

const cc0Abbrev = rights.CC0.toUpperCase();

const cc0: LicenseType = {
  short: freeUseLocale,
  title: {
    nb: "CC0 Public domain dedication: Gitt til fellesskapet",
    nn: "CC0 Public domain dedication: Gitt til fellesskapet",
    en: "CC0: Public Domain Dedication",
  },
  url: ccLocaleLink("https://creativecommons.org/publicdomain/zero/1.0"),
  abbreviation: { nb: cc0Abbrev, nn: cc0Abbrev, en: cc0Abbrev },
  description: {
    nb: "Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.",
    nn: "Dette merket let andre kopiere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.",
    en: "This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.",
  },
  rights: [rights.CC0],
};

const copy: LicenseType = {
  short: restrictedReuseLocale,
  title: { nb: "Begrensa gjenbruk", nn: "Avgrensa gjenbruk", en: "Copyright" },
  url: {
    nb: "https://ndla.no/nb/article/opphavsrett",
    nn: "https://ndla.no/nn/article/opphavsrett",
    en: "https://ndla.no/en/article/opphavsrett",
  },
  abbreviation: restrictedReuseLocale,
  description: {
    nb: "Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.",
    nn: "Det er berre den som har laga innhaldet som kan endra, publisera og gje andre rett til å nytte innhaldet.",
    en: "Only those who have created the content can modify, publish, and give others permission to use the content.",
  },
  rights: [rights.COPYRIGHTED],
};

const naAbbreviation = rights.NA.toUpperCase();

const na: LicenseType = {
  short: { nb: "N/A - ikke relevant", nn: "N/A - ikkje relevant", en: "N/A - not applicable" },
  title: { nb: "N/A - ikke relevant", nn: "N/A - ikkje relevant", en: "N/A - not applicable" },
  url: { nb: "", nn: "", en: "" },
  abbreviation: { nb: naAbbreviation, nn: naAbbreviation, en: naAbbreviation },
  description: {
    nb: "Dette merket er ment for innhold som ikke trenger lisens.",
    nn: "Dette merket er meint for innhald som ikkje treng lisens.",
    en: "This mark is intended for content that does not require a license.",
  },
  rights: [rights.NA],
};

function licenseByLocale(license: LicenseType, locale: Locale | string | undefined) {
  const surelyLocale = getLocaleOrDefault(locale, "nb");

  return {
    short: license.short[surelyLocale],
    title: license.title[surelyLocale],
    url: license.url[surelyLocale],
    abbreviation: license.abbreviation[surelyLocale],
    description: license.description[surelyLocale],
    rights: license.rights,
  };
}

export const licenses = {
  CC_BY_NC_ND_4: "CC-BY-NC-ND-4.0",
  CC_BY_NC_SA_4: "CC-BY-NC-SA-4.0",
  CC_BY_NC_4: "CC-BY-NC-4.0",
  CC_BY_ND_4: "CC-BY-ND-4.0",
  CC_BY_SA_4: "CC-BY-SA-4.0",
  CC_BY_4: "CC-BY-4.0",
  PD: "PD",
  CC0: "CC0-1.0",
  COPYRIGHTED: "COPYRIGHTED",
  NA: "N/A",
} as const;

export const ALL_ABBREVIATIONS = Object.values(licenses);

export function getLicenseByAbbreviation(abbreviation: string, locale: Locale | string | undefined): LicenseLocaleType {
  switch (abbreviation) {
    case licenses.CC_BY_NC_ND_4:
      return licenseByLocale(byncnd, locale);
    case licenses.CC_BY_NC_SA_4:
      return licenseByLocale(byncsa, locale);
    case licenses.CC_BY_NC_4:
      return licenseByLocale(bync, locale);
    case licenses.CC_BY_ND_4:
      return licenseByLocale(bynd, locale);
    case licenses.CC_BY_SA_4:
      return licenseByLocale(bysa, locale);
    case licenses.CC_BY_4:
      return licenseByLocale(by, locale);
    case rights.PD:
    case licenses.PD:
      return licenseByLocale(pd, locale);
    case rights.CC0:
    case licenses.CC0:
      return licenseByLocale(cc0, locale);
    case rights.COPYRIGHTED:
    case licenses.COPYRIGHTED:
      return licenseByLocale(copy, locale);
    case rights.NA:
    case licenses.NA:
      return licenseByLocale(na, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        rights: [],
        description: abbreviation,
        url: "",
        abbreviation,
      };
  }
}

export function getLicenseByNBTitle(title: string, locale?: Locale | string): LicenseLocaleType | string {
  switch (title.replace(/\s/g, "").toLowerCase()) {
    case "navngivelse-ikkekommersiell-ingenbearbeidelser":
      return getLicenseByAbbreviation(licenses.CC_BY_NC_ND_4, locale);
    case "navngivelse-ikkekommersiell-ingenbearbeidelse":
      return getLicenseByAbbreviation(licenses.CC_BY_NC_ND_4, locale);
    case "navngivelse-ikkekommersiell-delpåsammevilkår":
      return getLicenseByAbbreviation(licenses.CC_BY_NC_SA_4, locale);
    case "navngivelse-ikkekommersiell":
      return getLicenseByAbbreviation(licenses.CC_BY_NC_4, locale);
    case "navngivelse-ingenbearbeidelse":
      return getLicenseByAbbreviation(licenses.CC_BY_ND_4, locale);
    case "navngivelse-delpåsammevilkår":
      return getLicenseByAbbreviation(licenses.CC_BY_SA_4, locale);
    case "navngivelse":
      return getLicenseByAbbreviation(licenses.CC_BY_4, locale);
    default:
      return title;
  }
}

export const isCreativeCommonsLicense = (licenseRights: string[]) =>
  licenseRights.every((r) => r !== rights.COPYRIGHTED);
