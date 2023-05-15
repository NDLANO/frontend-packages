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
    sourceWord: {
      word: 'angreifen',
      language: 'de',
      traditionalChinese: '',
      pinyin: '',
      wordClass: 'verb',
      norwegianTranslation: 'Å angripe',
    },
    audio: {
      title: '',
      src: '',
    },
    examples: [
      {
        exampleSentence: 'Hitler greift die Sowjetunion an',
        translation: 'Hitler angriper Sovjetunionen',
      },
      {
        exampleSentence: 'Ich greife an',
        translation: 'Jeg griper an',
      },
    ],
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
    sourceWord: {
      word: '马红',
      language: 'de',
      traditionalChinese: '馬紅',
      pinyin: 'Mǎ Hóng',
      wordClass: 'Egn',
      norwegianTranslation: 'Ma Hong',
    },
    audio: {
      title: 'Spill av lyd',
      src: 'https://api.staging.ndla.no/audio/files/shu3jia4.mp3',
    },
    examples: [
      {
        exampleSentence: '我叫马红',
        exampleSentencePinyin: 'Wǒ jiào Mǎ Hóng.',
        translation: 'Jeg heter ma hong',
      },
    ],
  },
  render: function Render(args) {
    return (
      <>
        <Gloss {...args}></Gloss>
      </>
    );
  },
};
