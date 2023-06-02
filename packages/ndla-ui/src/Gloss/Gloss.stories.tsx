/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import Gloss from './Gloss';
import { defaultParameters } from '../../../../stories/defaults';

const meta: Meta<typeof Gloss> = {
  title: 'Enkle komponenter/Gloss',
  component: Gloss,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    title: {
      title: 'Å angripe',
      language: 'nb',
    },
    glossData: {
      gloss: 'angreifen',
      wordClass: 'verb',
      originalLanguage: 'de',
      transcriptions: {},
      examples: [
        [
          {
            example: 'Hitler greift die Sowjetunion an',
            language: 'de',
            transcriptions: {},
          },
          {
            example: 'Hitler angriper Sovjetunionen',
            language: 'nb',
            transcriptions: {},
          },
        ],
        [
          {
            example: 'Ich greife an',
            language: 'de',
            transcriptions: {},
          },
          {
            example: 'Jeg griper an',
            language: 'nb',
            transcriptions: {},
          },
        ],
      ],
    },
    audio: {
      title: '',
      src: '',
    },
  },
};

export default meta;

export const GlossStory: StoryFn<typeof Gloss> = ({ ...args }) => {
  return <Gloss {...args} />;
};

export const GlossChineseStory: StoryObj<typeof Gloss> = {
  args: {
    title: {
      title: 'Ma Hong',
      language: 'nb',
    },
    glossData: {
      gloss: '马红',
      wordClass: 'Egn',
      originalLanguage: 'zh',
      transcriptions: {
        trad: '(馬紅)',
        pinyin: 'Mǎ Hóng',
      },
      examples: [
        [
          {
            example: '我叫马红',
            language: 'zh',
            transcriptions: {
              pinyin: 'wo jiao ma hong',
            },
          },
          {
            example: 'Jeg heter ma hong',
            language: 'nb',
            transcriptions: {},
          },
        ],
      ],
    },
    audio: {
      title: 'Spill av lyd',
      src: 'https://api.staging.ndla.no/audio/files/shu3jia4.mp3',
    },
  },
};
