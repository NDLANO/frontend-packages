/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { BY, SA, NC, ND, PD, CC0, COPYRIGHTED, CC, NA } from "./licenseRights";
import { getLocaleOrDefault, LicenseType, LicenseLocaleType, Locale } from "./types";

const freeUseNB = "Offentlig eie";
const freeUseNN = "Offentleg eige";
const freeUseEN = "Public domain";
const restrictedUseNB = "Begrenset bruk";
const restrictedUseNN = "Begrensa bruk";
const restrictedUseEN = "Restricted use";
const restrictedReuseNB = "Begrenset gjenbruk";
const restrictedReuseNN = "Begrensa gjenbruk";
const restrictedReuseEN = "Restricted reuse";

const openLicenseLinkTextNB = "Les mer om opphavsrett";
const openLicenseLinkTextNN = "Les meir om opphavsrett";
const openLicenseLinkTextEN = "Read more about copyright";

const naNB = "N/A - ikke relevant";
const naNN = "N/A - ikkje relevant";
const naEN = "N/A - not applicable";

const byncndAbbrev = `${CC} ${BY}-${NC}-${ND}`.toUpperCase();

const byncnd: LicenseType = {
  nn: {
    short: restrictedReuseNN,
    title: "CC BY-NC-ND 4.0: Namngiving-Ikkjekommersiell-Ingen tilarbeiding",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: byncndAbbrev,
    description:
      "Denne lisensen er den mest restriktive av dei seks kjernelisensane våre. Den tillet andre å lasta ned verket ditt og dela det med andre så lenge du er namngitt som opphavar, men dei kan ikkje endra det på nokon måte, eller bruke det kommersielt.",
  },
  nb: {
    short: restrictedReuseNB,
    title: "CC BY-NC-ND 4.0: Navngivelse-Ikkekommersiell-Ingen bearbeidelse",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: byncndAbbrev,
    description:
      "Denne lisensen er den mest restriktive av våre seks kjernelisenser. Den tillater andre å laste ned ditt verk og dele det med andre så lenge du er navngitt som opphaver, men de kan ikke endre det på noen måte, eller bruke det kommersielt.",
  },

  en: {
    short: restrictedReuseEN,
    title: "CC BY-NC-ND 4.0: Attribution-NonCommercial-NoDerivs",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: byncndAbbrev,
    description:
      "This license is the most restrictive of our six main licenses, only allowing others to download your works and share them with others as long as they credit you, but they can’t change them in any way or use them commercially.",
  },
  rights: [CC, BY, NC, ND],
};

const byncsaAbbrev = `${CC} ${BY}-${NC}-${SA}`.toUpperCase();

const byncsa: LicenseType = {
  nn: {
    short: restrictedReuseNN,
    title: "CC BY-NC-SA 4.0: Namngiving-Ikkjekommersiell-Del på same vilkår",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: byncsaAbbrev,
    description:
      "Denne lisensen let andre distribuere, endre, remixe, og byggje vidare på verket ditt for ikkje-kommersielle formål. Deira verk må namngje deg som den opprinnelige opphavaren og avleia verk må bera ein lisens som svarar til denne.",
  },
  nb: {
    short: restrictedReuseNB,
    title: "CC BY-NC-SA 4.0: Navngivelse-Ikkekommersiell-Del på samme vilkår",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: byncsaAbbrev,
    description:
      "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som den opprinnelige opphaveren og avledete verk må bære en tilsvarende lisens.",
  },

  en: {
    short: restrictedReuseEN,
    title: "CC BY-NC-SA 4.0: Attribution-NonCommercial-ShareAlike",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: byncsaAbbrev,
    description:
      "This license lets others remix, tweak, and build upon your work non-commercially, as long as they credit you and license their new creations under the identical terms.",
  },
  rights: [CC, BY, NC, SA],
};

const byncAbbrev = `${CC} ${BY}-${NC}`.toUpperCase();

const bync: LicenseType = {
  nn: {
    short: restrictedReuseNN,
    title: "CC BY-NC 4.0: Namngiving-Ikkjekommersiell",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: byncAbbrev,
    description:
      "Denne lisensen let andre distribuer, endre, remixe, og byggje videre på verket ditt for ikkje-kommersielle formål. Verket deira må namngje deg som opphavar og også vera ikkje-kommersielle, men dei treng ikkje krevja at verk avleda av deira ber dei same vilkåra.",
  },
  nb: {
    short: restrictedReuseNB,
    title: "CC BY-NC 4.0: Navngivelse-Ikkekommersiell",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: byncAbbrev,
    description:
      "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk for ikke-kommersielle formål. Deres verk må navngi deg som opphaver og også være ikke-kommersielle, men de behøver ikke kreve at verk avledet fra deres bærer de samme vilkårene.",
  },

  en: {
    short: restrictedReuseEN,
    title: "CC BY-NC 4.0: Attribution-NonCommercial",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nc/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: byncAbbrev,
    description:
      "This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.",
  },
  rights: [CC, BY, NC],
};

const byndAbbrev = `${CC} ${BY}-${ND}`.toUpperCase();

const bynd: LicenseType = {
  nn: {
    short: restrictedReuseNN,
    title: "CC BY-ND 4.0: Namngiving-Ingen tilarbeiding",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nd/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: byndAbbrev,
    description:
      "Denne lisensen gjev høve til å distribuera verket vidare, både for kommersielle og ikkje-kommersielle formål, så lenge det vert gjeve vidare uendra og i sitt heile, og at du vert namngjeven som den som har skapt verket.",
  },
  nb: {
    short: restrictedReuseNB,
    title: "CC BY-ND 4.0: Navngivelse-Ingen bearbeidelse",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nd/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: byndAbbrev,
    description:
      "Denne lisensen gir mulighet for å videredistribuere verket, både for kommersielle og ikke-kommersielle formål, så lenge det gis videre uendret og i sin helhet, og at du navngis som den som har skapt verket.",
  },

  en: {
    short: restrictedReuseEN,
    title: "CC BY-ND 4.0: Attribution-NoDerivs",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-nd/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: byndAbbrev,
    description:
      "This license allows for redistribution, commercial and non-commercial, as long as it is passed along unchanged and in whole, with credit to you.",
  },
  rights: [CC, BY, ND],
};

const bysaAbbrev = `${CC} ${BY}-${SA}`.toUpperCase();

const bysa: LicenseType = {
  nn: {
    short: restrictedReuseNN,
    title: "CC BY-SA 4.0: Namngiving-Del på samme vilkår",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-sa/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: bysaAbbrev,
    description:
      "Fri gjenbruk ved namngiving. Namngiving vil seie at du oppgir namnet til opphavar(ane). Om du deler, må andre også få lov til å dele vidare på same vilkår. Dette sikrar vidare gjenbruk og bidreg til delingskultur.",
  },
  nb: {
    short: restrictedReuseNB,
    title: "CC BY-SA 4.0: Navngivelse-Del på samme vilkår",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-sa/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: bysaAbbrev,
    description:
      "Fri gjenbruk ved navngivelse. Navngivelse vil si at du oppgir navnet til opphaver(ene). Hvis du deler, må andre også få lov til å dele videre på samme vilkår. Dette sikrer videre gjenbruk og bidrar til delingskultur.",
  },

  en: {
    short: restrictedReuseEN,
    title: "CC BY-SA 4.0: Attribution ShareAlike",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by-sa/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: bysaAbbrev,
    description:
      "This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.",
  },
  rights: [CC, BY, SA],
};

const byAbbrev = `${CC} ${BY}`.toUpperCase();

const by: LicenseType = {
  nn: {
    short: freeUseNN,
    title: "CC BY 4.0: Namngiving",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by/4.0/deed.no",
    linkText: openLicenseLinkTextNN,
    abbreviation: byAbbrev,
    description:
      "Denne lisensen let andre distribuere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, så lenge dei namngir deg som den opphavlege opphavaren. Dette er den mest fleksible og opne lisensen vi tilbyr. Den vert tilrådd om du ynsker maksimal spreiing og bruk av materiale under ein CC-lisens.",
  },
  nb: {
    short: freeUseNB,
    title: "CC BY 4.0: Navngivelse",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by/4.0/deed.no",
    linkText: openLicenseLinkTextNB,
    abbreviation: byAbbrev,
    description:
      "Denne lisensen lar andre distribuere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, så lenge de navngir deg som den opprinnelige opphaveren. Dette er den mest fleksible og åpne lisensen vi tilbyr. Den anbefales dersom du ønsker maksimal spredning og bruk av materiale under en CC-lisens.",
  },

  en: {
    short: freeUseEN,
    title: "CC BY 4.0: Attribution",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/licenses/by/4.0/deed.en",
    linkText: openLicenseLinkTextEN,
    abbreviation: byAbbrev,
    description:
      "This license lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.",
  },
  rights: [CC, BY],
};

const pd: LicenseType = {
  nn: {
    short: freeUseNN,
    title: "PD Public domain merket: Offentleg eigedom",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/mark/1.0/deed.no",
    linkText: "Lær meir om public domain-merke",
    abbreviation: freeUseNN,
    description:
      "Dette merket let andre kopiere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.",
  },
  nb: {
    short: freeUseNB,
    title: "PD Public domain merket: Offentlig eiendom",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/mark/1.0/deed.no",
    linkText: "Lær mer om public domain-merke",
    abbreviation: freeUseNB,
    description:
      "Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.",
  },

  en: {
    short: freeUseEN,
    title: "PD: Public Domain Mark",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/mark/1.0/",
    linkText: "Learn more about public domain mark",
    abbreviation: freeUseEN,
    description:
      "This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.",
  },
  rights: [PD],
};

const cc0Abbrev = CC0.toUpperCase();

const cc0: LicenseType = {
  nn: {
    short: freeUseNN,
    title: "CC0 Public domain dedication: Gitt til fellesskapet",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/zero/1.0/deed.no",
    linkText: "Lær meir om public domain-merke",
    abbreviation: cc0Abbrev,
    description:
      "Dette merket let andre kopiere, endre, remixe, og byggje vidare på verket ditt, også for kommersielle formål, utan å be om løyve.",
  },
  nb: {
    short: freeUseNB,
    title: "CC0 Public domain dedication: Gitt til fellesskapet",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/zero/1.0/deed.no",
    linkText: "Lær mer om public domain-merke",
    abbreviation: cc0Abbrev,
    description:
      "Dette merket lar andre kopiere, endre, remixe, og bygge videre på ditt verk, også for kommersielle formål, uten å be om tillatelse.",
  },

  en: {
    short: freeUseEN,
    title: "CC0: Public Domain Dedication",
    userFriendlyTitle: "",
    url: "https://creativecommons.org/publicdomain/zero/1.0/",
    linkText: "Learn more about public domain marks",
    abbreviation: cc0Abbrev,
    description:
      "This mark lets others copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.",
  },
  rights: [CC0],
};

const copy: LicenseType = {
  nn: {
    short: restrictedUseNN,
    title: "Opphavsrett",
    userFriendlyTitle: "",
    url: "https://ndla.no/nn/article/opphavsrett",
    linkText: "Lær meir om opphavsrett",
    abbreviation: restrictedUseNN,
    description:
      "Det er berre den som har laga innhaldet som kan endra, publisera og gje andre rett til å nytte innhaldet.",
  },
  nb: {
    short: restrictedUseNB,
    title: "Opphavsrett",
    userFriendlyTitle: "",
    url: "https://ndla.no/nb/article/opphavsrett",
    linkText: "Lær mer om opphavsrett",
    abbreviation: restrictedUseNB,
    description:
      "Det er bare den som har laget innholdet som kan endre, publisere og gi andre rett til å bruke innholdet.",
  },

  en: {
    short: restrictedUseEN,
    title: "Copyright",
    userFriendlyTitle: "",
    url: "https://ndla.no/en/article/opphavsrett",
    linkText: "Learn more about copyright",
    abbreviation: restrictedUseEN,
    description:
      "Only those who have created the content can modify, publish, and give others permission to use the content.",
  },
  rights: [COPYRIGHTED],
};

const naAbbreviation = NA.toUpperCase();

const na: LicenseType = {
  nn: {
    short: naNN,
    title: "N/A - ikkje relevant",
    userFriendlyTitle: "",
    url: "",
    linkText: "N/A",
    abbreviation: naAbbreviation,
    description: "Dette merket er meint for innhald som ikkje treng lisens.",
  },
  nb: {
    short: naNB,
    title: "N/A - ikke relevant",
    userFriendlyTitle: "",
    url: "",
    linkText: "N/A",
    abbreviation: naAbbreviation,
    description: "Dette merket er ment for innhold som ikke trenger lisens.",
  },

  en: {
    short: naEN,
    title: "N/A - not applicable",
    userFriendlyTitle: "",
    url: "",
    linkText: "N/A",
    abbreviation: naAbbreviation,
    description: "This mark is intended for content that does not require a license.",
  },
  rights: [NA],
};

function licenseByLocale(license: LicenseType, locale: Locale | string | undefined) {
  const surelyLocale = getLocaleOrDefault(locale, "nb");
  const texts = license[surelyLocale];

  return {
    ...texts,
    rights: license.rights,
  };
}

export const ALL_ABBREVIATIONS = [
  "CC-BY-NC-ND-4.0",
  "CC-BY-NC-SA-4.0",
  "CC-BY-NC-4.0",
  "CC-BY-ND-4.0",
  "CC-BY-SA-4.0",
  "CC-BY-4.0",
  "PD",
  "CC0-1.0",
  "COPYRIGHTED",
  "N/A",
] as const;

export function getLicenseByAbbreviation(abbreviation: string, locale: Locale | string | undefined): LicenseLocaleType {
  switch (abbreviation) {
    case "CC-BY-NC-ND-4.0":
      return licenseByLocale(byncnd, locale);
    case "CC-BY-NC-SA-4.0":
      return licenseByLocale(byncsa, locale);
    case "CC-BY-NC-4.0":
      return licenseByLocale(bync, locale);
    case "CC-BY-ND-4.0":
      return licenseByLocale(bynd, locale);
    case "CC-BY-SA-4.0":
      return licenseByLocale(bysa, locale);
    case "CC-BY-4.0":
      return licenseByLocale(by, locale);
    case "PD":
      return licenseByLocale(pd, locale);
    case "CC0-1.0":
      return licenseByLocale(cc0, locale);
    case "COPYRIGHTED":
      return licenseByLocale(copy, locale);
    case "N/A":
      return licenseByLocale(na, locale);
    case "pd":
      return licenseByLocale(pd, locale);
    case "cc0":
      return licenseByLocale(cc0, locale);
    case "copyrighted":
      return licenseByLocale(copy, locale);
    case "na":
      return licenseByLocale(na, locale);
    default:
      return {
        short: abbreviation,
        title: abbreviation,
        userFriendlyTitle: abbreviation,
        rights: [],
        description: abbreviation,
        linkText: abbreviation,
        url: "",
        abbreviation,
      };
  }
}

export function getLicenseByNBTitle(title: string, locale?: Locale | string): LicenseLocaleType | string {
  switch (title.replace(/\s/g, "").toLowerCase()) {
    case "navngivelse-ikkekommersiell-ingenbearbeidelser":
      return getLicenseByAbbreviation("CC-BY-NC-ND-4.0", locale);
    case "navngivelse-ikkekommersiell-ingenbearbeidelse":
      return getLicenseByAbbreviation("CC-BY-NC-ND-4.0", locale);
    case "navngivelse-ikkekommersiell-delpåsammevilkår":
      return getLicenseByAbbreviation("CC-BY-NC-SA-4.0", locale);
    case "navngivelse-ikkekommersiell":
      return getLicenseByAbbreviation("CC-BY-NC-4.0", locale);
    case "navngivelse-ingenbearbeidelse":
      return getLicenseByAbbreviation("CC-BY-ND-4.0", locale);
    case "navngivelse-delpåsammevilkår":
      return getLicenseByAbbreviation("CC-BY-SA-4.0", locale);
    case "navngivelse":
      return getLicenseByAbbreviation("CC-BY-4.0", locale);
    default:
      return title;
  }
}

export const isCreativeCommonsLicense = (licenseRights: string[]) => licenseRights.every((r) => r !== COPYRIGHTED);
