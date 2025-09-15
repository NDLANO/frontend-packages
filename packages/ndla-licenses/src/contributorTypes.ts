/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { metaTypes } from "./CCRel";

const creators = [
  "originator",
  "photographer",
  "artist",
  "writer",
  "scriptwriter",
  "reader",
  "translator",
  "director",
  "illustrator",
  "cowriter",
  "composer",
];
const processors = ["processor", "facilitator", "editorial", "linguistic", "idea", "compiler", "correction"];
const rightsholders = ["rightsholder", "publisher", "distributor", "supplier"];

export const contributorGroups = {
  creators,
  processors,
  rightsholders,
  contributors: [...creators, ...rightsholders, ...processors],
};

export interface ContributorTypes {
  [lang: string]: {
    [key: string]: string;
  };
}

export const contributorTypes: ContributorTypes = {
  en: {
    originator: "Originator",
    photographer: "Photographer",
    artist: "Artist",
    editorial: "Editorial",
    writer: "Writer",
    scriptwriter: "Scriptwriter",
    reader: "Reader",
    translator: "Translator",
    director: "Director",
    illustrator: "Illustrator",
    cowriter: "Cowriter",
    composer: "Composer",
    processor: "Processor",
    facilitator: "Facilitator",
    linguistic: "Linguistic",
    idea: "Idea",
    compiler: "Compiler",
    correction: "Correction",
    rightsholder: "Rightsholder",
    publisher: "Publisher",
    distributor: "Distributor",
    supplier: "Supplier",
    author: "Author",
  },
  nb: {
    originator: "Opphaver",
    photographer: "Fotograf",
    artist: "Kunstner",
    editorial: "Redaksjonelt",
    writer: "Forfatter",
    scriptwriter: "Manusforfatter",
    reader: "Innleser",
    translator: "Oversetter",
    director: "Regissør",
    illustrator: "Illustratør",
    cowriter: "Medforfatter",
    composer: "Komponist",
    processor: "Bearbeider",
    facilitator: "Tilrettelegger",
    linguistic: "Språklig",
    idea: "Idé",
    compiler: "Sammenstiller",
    correction: "Korrektur",
    rightsholder: "Rettighetshaver",
    publisher: "Forlag",
    distributor: "Distributør",
    supplier: "Leverandør",
    author: "Forfatter",
  },
  nn: {
    originator: "Opphavar",
    photographer: "Fotograf",
    artist: "Kunstnar",
    editorial: "Redaksjonelt",
    writer: "Forfattar",
    scriptwriter: "Manusforfattar",
    reader: "Innlesar",
    translator: "Omsetjar",
    director: "Regissør",
    illustrator: "Illustratør",
    cowriter: "Medforfattar",
    composer: "Komponist",
    processor: "Tilarbeidar",
    facilitator: "Tilretteleggjar",
    linguistic: "Språkleg",
    idea: "Idé",
    compiler: "Sammenstillar",
    correction: "Korrektur",
    rightsholder: "Rettshavar",
    publisher: "Forlag",
    distributor: "Distributør",
    supplier: "Leverandør",
    author: "Forfattar",
  },
  se: {
    originator: "Vuoigŋadahkki",
    photographer: "Govvejeaddji",
    artist: "Dáiddár",
    editorial: "Doaimmahuslaš",
    writer: "Čálli",
    scriptwriter: "Mánusčálli",
    reader: "Lohkki",
    translator: "Jorgaleaddji",
    director: "Rešissevra",
    illustrator: "Govvasárgu",
    cowriter: "Mielčálli",
    composer: "Šuokŋadahkki",
    processor: "Gieđahalli",
    facilitator: "Heiveheaddji",
    linguistic: "Gielalaš",
    idea: "Jurdda",
    compiler: "Dássádeaddji",
    correction: "Korrektuvra",
    rightsholder: "Vuoigatvuođalaš",
    publisher: "Lágádus",
    distributor: "Distributevra",
    supplier: "Lágideaddji",
    author: "Author",
  },
  sma: {
    originator: "Voestesaajhtere",
    photographer: "Guvvievaeltije",
    artist: "Tjiehpiedæjja",
    editorial: "Redaksjonelle",
    writer: "Tjaelije",
    scriptwriter: "Manuse-tjaelije",
    reader: "Lohkije",
    translator: "Jarkoestæjja",
    director: "Bïhkedæjja",
    illustrator: "Illustratööre",
    cowriter: "Mubpie tjaelije",
    composer: "Komponiste",
    processor: "Gïetedæjja ",
    facilitator: "Sjïehteladtjije",
    linguistic: "Gïeleldh",
    idea: "Åssjalommese",
    compiler: "Iktedæjja",
    correction: "Staeriedimmie",
    rightsholder: "Reakta-aajhtere",
    publisher: "Berteme",
    distributor: "Deallahtæjja",
    supplier: "Deallahtæjja",
    author: "Author",
  },
};

export interface Contributor {
  type: string;
  name: string;
}

export interface CopyrightType {
  creators: Contributor[];
  processors: Contributor[];
  rightsholders: Contributor[];
}

export function mkContributorString(contributors: Contributor[], lang: string, ignoreType?: string) {
  return contributors
    .map((contributor) => {
      const type = contributor.type.toLowerCase();
      if (type === ignoreType) {
        return contributor.name;
      }
      const translatedType = contributorTypes[lang][type];
      return `${translatedType} ${contributor.name}`;
    })
    .join(", ");
}

export function getGroupedContributorDescriptionList(copyright: CopyrightType, lang: string) {
  const { creators, rightsholders, processors } = copyright;
  return [
    {
      label: contributorTypes[lang].originator,
      description: mkContributorString(creators, lang, "originator"),
      metaType: metaTypes.author,
    },
    {
      label: contributorTypes[lang].rightsholder,
      description: mkContributorString(rightsholders, lang, "rightsholder"),
      metaType: metaTypes.copyrightHolder,
    },
    {
      label: contributorTypes[lang].processor,
      description: mkContributorString(processors, lang, "processor"),
      metaType: metaTypes.contributor,
    },
  ].filter((item) => item.description !== "");
}
