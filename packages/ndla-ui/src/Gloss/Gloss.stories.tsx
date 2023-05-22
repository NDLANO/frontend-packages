/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
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
    glossData: {
      gloss: 'angreifen',
      originalLanguage: 'de',
      traditionalChinese: '',
      pinyin: '',
      glossType: 'verb',
      norwegianTranslation: 'Å angripe',
      examples: [
        [
          {
            example: 'Hitler greift die Sowjetunion an',
            language: 'de',
          },
          {
            example: 'Hitler angriper Sovjetunionen',
            language: 'nb',
          },
        ],
        [
          {
            example: 'Ich greife an',
            language: 'de',
          },
          {
            example: 'Jeg griper an',
            language: 'nb',
          },
        ],
      ],
      audio: {
        title: '',
        src: '',
      },
    },
  },
};

export default meta;

export const GlossStory: StoryObj<typeof Gloss> = {
  render: function Render(args) {
    return (
      <>
        <Gloss {...args}></Gloss>
      </>
    );
  },
};

export const GlossChineseStory: StoryObj<typeof Gloss> = {
  args: {
    glossData: {
      gloss: '马红',
      originalLanguage: 'zh',
      traditionalChinese: '馬紅',
      pinyin: 'Mǎ Hóng',
      glossType: 'Egn',
      norwegianTranslation: 'Ma Hong',
      examples: [
        [
          {
            example: '我叫马红',
            language: 'zh',
          },
          {
            example: 'wo jiao ma hong',
            language: 'pinyin',
          },
          {
            example: 'Jeg heter ma hong',
            language: 'nb',
          },
        ],
      ],
      audio: {
        title: 'Spill av lyd',
        src: 'https://api.staging.ndla.no/audio/files/shu3jia4.mp3',
      },
    },
  },
  render: function Render(args) {
    return (
      <>
        <Gloss {...args}></Gloss>
      </>
    );
  },
};
