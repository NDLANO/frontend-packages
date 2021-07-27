/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { metaTypes } from './CCRel';

export const contributorGroups = {
  creators: [
    'originator',
    'photographer',
    'artist',
    'writer',
    'scriptwriter',
    'reader',
    'translator',
    'director',
    'illustrator',
    'cowriter',
    'composer',
  ],
  processors: ['processor', 'facilitator', 'editorial', 'linguistic', 'idea', 'compiler', 'correction'],
  rightsholders: ['rightsholder', 'publisher', 'distributor', 'supplier'],
};

export interface ContributorTypes {
  [lang: string]: {
    [key: string]: string;
  };
}

export const contributorTypes: ContributorTypes = {
  en: {
    originator: 'Originator',
    photographer: 'Photographer',
    artist: 'Artist',
    editorial: 'Editorial',
    writer: 'Writer',
    scriptwriter: 'Scriptwriter',
    reader: 'Reader',
    translator: 'Translator',
    director: 'Director',
    illustrator: 'Illustrator',
    cowriter: 'Cowriter',
    composer: 'Composer',
    processor: 'Processor',
    facilitator: 'Facilitator',
    linguistic: 'Linguistic',
    idea: 'Idea',
    compiler: 'Compiler',
    correction: 'Correction',
    rightsholder: 'Rightsholder',
    publisher: 'Publisher',
    distributor: 'Distributor',
    supplier: 'Supplier',
  },
  nb: {
    originator: 'Opphaver',
    photographer: 'Fotograf',
    artist: 'Kunstner',
    editorial: 'Redaksjonelt',
    writer: 'Forfatter',
    scriptwriter: 'Manusforfatter',
    reader: 'Innleser',
    translator: 'Oversetter',
    director: 'Regissør',
    illustrator: 'Illustratør',
    cowriter: 'Medforfatter',
    composer: 'Komponist',
    processor: 'Bearbeider',
    facilitator: 'Tilrettelegger',
    linguistic: 'Språklig',
    idea: 'Idé',
    compiler: 'Sammenstiller',
    correction: 'Korrektur',
    rightsholder: 'Rettighetshaver',
    publisher: 'Forlag',
    distributor: 'Distributør',
    supplier: 'Leverandør',
  },
  nn: {
    originator: 'Opphavar',
    photographer: 'Fotograf',
    artist: 'Kunstnar',
    editorial: 'Redaksjonelt',
    writer: 'Forfattar',
    scriptwriter: 'Manusforfattar',
    reader: 'Innlesar',
    translator: 'Omsetjar',
    director: 'Regissør',
    illustrator: 'Illustratør',
    cowriter: 'Medforfattar',
    composer: 'Komponist',
    processor: 'Tilarbeidar',
    facilitator: 'Tilretteleggjar',
    linguistic: 'Språkleg',
    idea: 'Idé',
    compiler: 'Sammenstillar',
    correction: 'Korrektur',
    rightsholder: 'Rettshaver',
    publisher: 'Forlag',
    distributor: 'Distributør',
    supplier: 'Leverandør',
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

export function mkContributorString(contributors: Contributor[], lang: string, ignoreType: string) {
  return contributors
    .map((contributor) => {
      const type = contributor.type.toLowerCase();
      if (type === ignoreType) {
        return contributor.name;
      }
      const translatedType = contributorTypes[lang][type];
      return `${translatedType} ${contributor.name}`;
    })
    .join(', ');
}

export function getGroupedContributorDescriptionList(copyright: CopyrightType, lang: string) {
  const { creators, rightsholders, processors } = copyright;
  return [
    {
      label: contributorTypes[lang].originator,
      description: mkContributorString(creators, lang, 'originator'),
      metaType: metaTypes.author,
    },
    {
      label: contributorTypes[lang].rightsholder,
      description: mkContributorString(rightsholders, lang, 'rightsholder'),
      metaType: metaTypes.copyrightHolder,
    },
    {
      label: contributorTypes[lang].processor,
      description: mkContributorString(processors, lang, 'processor'),
      metaType: metaTypes.contributor,
    },
  ].filter((item) => item.description !== '');
}
