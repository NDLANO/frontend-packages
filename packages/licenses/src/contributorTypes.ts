/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Locale, LocaleString } from "./types";
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
] as const;
const processors = ["processor", "facilitator", "editorial", "linguistic", "idea", "compiler", "correction"] as const;
const rightsholders = ["rightsholder", "publisher", "distributor", "supplier"] as const;

type CreatorType = (typeof creators)[number];
type ProcessorType = (typeof processors)[number];
type RightsholderType = (typeof rightsholders)[number];
type ContributorType = CreatorType | ProcessorType | RightsholderType;

export const contributorGroups = {
  creators,
  processors,
  rightsholders,
  contributors: [...creators, ...rightsholders, ...processors],
} as const;

type ContributorTypes = Record<ContributorType, LocaleString>;

export const contributorTypes: ContributorTypes = {
  originator: { nb: "Opphaver", nn: "Opphavar", en: "Originator" },
  photographer: { nb: "Fotograf", nn: "Fotograf", en: "Photographer" },
  artist: { nb: "Kunstner", nn: "Kunstnar", en: "Artist" },
  editorial: { nb: "Redaksjonelt", nn: "Redaksjonelt", en: "Editorial" },
  writer: { nb: "Forfatter", nn: "Forfattar", en: "Writer" },
  scriptwriter: { nb: "Manusforfatter", nn: "Manusforfattar", en: "Scriptwriter" },
  reader: { nb: "Innleser", nn: "Innlesar", en: "Reader" },
  translator: { nb: "Oversetter", nn: "Omsetjar", en: "Translator" },
  director: { nb: "Regissør", nn: "Regissør", en: "Director" },
  illustrator: { nb: "Illustratør", nn: "Illustratør", en: "Illustrator" },
  cowriter: { nb: "Medforfatter", nn: "Medforfattar", en: "Cowriter" },
  composer: { nb: "Komponist", nn: "Komponist", en: "Composer" },
  processor: { nb: "Bearbeider", nn: "Tilarbeidar", en: "Processor" },
  facilitator: { nb: "Tilrettelegger", nn: "Tilretteleggjar", en: "Facilitator" },
  linguistic: { nb: "Språklig", nn: "Språkleg", en: "Linguistic" },
  idea: { nb: "Idé", nn: "Idé", en: "Idea" },
  compiler: { nb: "Sammenstiller", nn: "Sammenstillar", en: "Compiler" },
  correction: { nb: "Korrektur", nn: "Korrektur", en: "Correction" },
  rightsholder: { nb: "Rettighetshaver", nn: "Rettshavar", en: "Rightsholder" },
  publisher: { nb: "Forlag", nn: "Forlag", en: "Publisher" },
  distributor: { nb: "Distributør", nn: "Distributør", en: "Distributor" },
  supplier: { nb: "Leverandør", nn: "Leverandør", en: "Supplier" },
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

export function mkContributorString(contributors: Contributor[], lang: Locale, ignoreType?: string) {
  return contributors
    .map((contributor) => {
      const type = contributor.type.toLowerCase();
      if (type === ignoreType) {
        return contributor.name;
      }
      const translatedType = contributorTypes[type as ContributorType][lang];
      return `${translatedType} ${contributor.name}`;
    })
    .join(", ");
}

export function getGroupedContributorDescriptionList(copyright: CopyrightType, lang: Locale) {
  const { creators, rightsholders, processors } = copyright;
  return [
    {
      label: contributorTypes.originator[lang],
      description: mkContributorString(creators, lang, "originator"),
      metaType: metaTypes.author,
    },
    {
      label: contributorTypes.rightsholder[lang],
      description: mkContributorString(rightsholders, lang, "rightsholder"),
      metaType: metaTypes.copyrightHolder,
    },
    {
      label: contributorTypes.processor[lang],
      description: mkContributorString(processors, lang, "processor"),
      metaType: metaTypes.contributor,
    },
  ].filter((item) => item.description !== "");
}
