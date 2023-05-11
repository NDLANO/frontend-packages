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
import AccordionRoot from '../../../ndla-accordion';
import { defaultParameters } from '../../../../stories/defaults';
import AccordionItem from '../../../ndla-accordion';
import AccordionHeader from '../../../ndla-accordion';
import AccordionContent from '../../../ndla-accordion';

export default {
  title: 'Enkle komponenter/Word List',
  component: WordList,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof WordList>;

export const WordListStory: StoryObj<typeof WordList> = {
  args: {
    sourceWord: {
      word: 'Kildeord',
      language: 'nb-no',
    },
  },
};
