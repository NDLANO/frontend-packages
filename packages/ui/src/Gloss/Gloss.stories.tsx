/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { wordClass } from "../model/WordClass";
import { Gloss } from "./Gloss";
import { GlossExample } from "./GlossExample";

const meta: Meta<typeof Gloss> = {
  title: "Components/Gloss",
  component: Gloss,
  tags: ["autodocs"],
  args: {
    title: {
      title: "Å angripe",
      htmlTitle: "Å angripe",
      language: "nb",
    },
    glossData: {
      gloss: "angreifen",
      wordClass: [wordClass.verb],
      originalLanguage: "de",
      transcriptions: {},
      examples: [
        [
          {
            example: "Hitler greift die Sowjetunion an",
            language: "de",
            transcriptions: {},
          },
          {
            example: "Hitler angriper Sovjetunionen",
            language: "nb",
            transcriptions: {},
          },
        ],
        [
          {
            example: "Ich greife an",
            language: "de",
            transcriptions: {},
          },
          {
            example: "Jeg griper an",
            language: "nb",
            transcriptions: {},
          },
        ],
      ],
    },
    audio: {
      title: "",
      src: "",
    },
  },
};

export default meta;

export const GlossStory: StoryFn<typeof Gloss> = ({ ...args }) => {
  return <Gloss {...args} />;
};

export const Bordered: StoryObj<typeof Gloss> = {
  args: {
    variant: "bordered",
  },
};

export const NoExamples: StoryObj<typeof Gloss> = {
  args: {
    title: {
      title: "Å angripe",
      htmlTitle: "Å angripe",
      language: "nb",
    },
    glossData: {
      gloss: "angreifen",
      wordClass: [wordClass.verb],
      originalLanguage: "de",
      transcriptions: {},
      examples: [],
    },
    audio: {
      title: "",
      src: "",
    },
  },
};

export const GlossChineseStory: StoryObj<typeof Gloss> = {
  args: {
    title: {
      title: "Ma Hong",
      htmlTitle: "Ma Hong",
      language: "nb",
    },
    glossData: {
      gloss: "马红",
      wordClass: [wordClass.properNoun],
      originalLanguage: "zh",
      transcriptions: {
        traditional: "(馬紅)",
        pinyin: "Mǎ Hóng",
      },
      examples: [
        [
          {
            example: "我叫马红",
            language: "zh",
            transcriptions: {
              pinyin: "wo jiao ma hong",
            },
          },
          {
            example: "Jeg heter ma hong",
            language: "nb",
            transcriptions: {},
          },
        ],
      ],
    },
    audio: {
      title: "Spill av lyd",
      src: "https://api.staging.ndla.no/audio/files/shu3jia4.mp3",
    },
  },
};

export const BigExample: StoryObj<typeof Gloss> = {
  args: {
    title: {
      title: "(spørsmålspartikkel); hva med…?",
      htmlTitle: "(spørsmålspartikkel); hva med…?",
      language: "nb",
    },
    audio: {
      src: "https://api.ndla.no/audio/files/ne.mp3",
      title: "Spill av",
    },
    glossData: {
      gloss: "呢",
      wordClass: ["particle"],
      originalLanguage: "zh",
      transcriptions: {
        pinyin: "ne",
      },
      examples: [
        [
          {
            example: "我叫马红，你呢？//我叫馬紅，你呢？",
            language: "zh",
            transcriptions: {
              pinyin: "Wǒ jiào Mǎ Hóng, nǐ ne?",
            },
          },
          {
            example: "Jeg heter Ma Hong, hva med deg?",
            language: "nb",
            transcriptions: {},
          },
          {
            example: "Eg heiter Ma Hong, kva med deg?",
            language: "nn",
            transcriptions: {},
          },
        ],
        [
          {
            example: "我姓王，你呢？",
            language: "zh",
            transcriptions: {
              pinyin: "Wǒ xìng Wáng, nǐ ne?",
            },
          },
          {
            example: "Jeg heter Wang til etternavn, hva med deg?",
            language: "nb",
            transcriptions: {},
          },
          {
            example: "Eg heiter Wang til etternamn, kva med deg?",
            language: "nn",
            transcriptions: {},
          },
        ],
        [
          {
            example: "我是老师，你呢？//我是老師，你呢？",
            language: "zh",
            transcriptions: {
              pinyin: "Wǒ shì lǎoshī, nǐ ne?",
            },
          },
          {
            example: "Jeg er lærer, hva med deg?",
            language: "nb",
            transcriptions: {},
          },
          {
            example: "Eg er lærar, kva med deg?",
            language: "nn",
            transcriptions: {},
          },
        ],
      ],
    },
  },
};

const GlossExampleText = {
  example: "我叫马红",
  language: "zh",
  transcriptions: {
    pinyin: "wo jiao ma hong",
  },
};

export const GlossExampleStory: StoryFn<typeof Gloss> = () => {
  return <GlossExample originalLanguage="zh" examples={[GlossExampleText]} />;
};
