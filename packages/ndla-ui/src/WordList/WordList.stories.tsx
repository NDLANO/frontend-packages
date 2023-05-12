/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import WordList from './WordList';
import { defaultParameters } from '../../../../stories/defaults';

const meta: Meta<typeof WordList> = {
  title: 'Enkle komponenter/Word List',
  component: WordList,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    sourceWord: {
      word: 'angreifen',
      language: 'nb-no',
      twoLanguages: false,
      wordClass: 'verb',
      norwegianTranslation: 'Å angripe',
    },
    audio: {
      title: 'Spill av lyd',
      src: 'https://api.staging.ndla.no/audio/files/shu3jia4.mp3',
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

export const WordListStory: StoryObj<typeof WordList> = {
  render: function Render(args) {
    return (
      <>
        <WordList {...args}></WordList>
      </>
    );
  },
};
