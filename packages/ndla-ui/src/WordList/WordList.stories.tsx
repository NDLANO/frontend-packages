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
import AccordionRoot from '../../../ndla-accordion/src/AccordionRoot';
import { defaultParameters } from '../../../../stories/defaults';
import AccordionItem from '../../../ndla-accordion/src/AccordionItem';
import AccordionHeader from '../../../ndla-accordion/src/AccordionHeader';
import AccordionContent from '../../../ndla-accordion/src/AccordionContent';

const meta: Meta<typeof WordList> = {
  title: 'Enkle komponenter/Word List',
  component: WordList,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    sourceWord: {
      word: 'Kildeord',
      language: 'nb-no',
    },
    audio: {
      title: 'Spill av lyd',
      src: 'https://api.staging.ndla.no/audio/files/shu3jia4.mp3',
    },
  },
};

export default meta;

export const WordListStory: StoryObj<typeof WordList> = {
  render: function Render(args) {
    return (
      <>
        <WordList {...args}></WordList>
        <AccordionRoot type="single" collapsible>
          <AccordionItem value={'1'}>
            <AccordionHeader>Tittel</AccordionHeader>
            <AccordionContent>
              <div>
                <strong>Undertittel</strong>
              </div>
              <div>En kort paragraf</div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </>
    );
  },
};
