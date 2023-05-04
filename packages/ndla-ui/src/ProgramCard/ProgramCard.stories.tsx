/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgramCard from './ProgramCard';
import EducationalPrograms from './EducationalPrograms';
import { defaultParameters } from '../../../../stories/defaults';
import { mockProgramsV3 as programmes } from '../../../../dummydata/mockProgramsV3';

export default {
  title: 'Enkle komponenter/ProgramCard',
  component: ProgramCard,
  EducationalPrograms,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    id: 'test ID',
    programTitle: { title: 'Elektro og datateknologi', language: 'nb-no' },
    headingLevel: 'h4',
    programIMGDesk: {
      src: 'https://api.test.ndla.no/image-api/raw/ajvkVKKR.svg?width=600&ts=1682591987993',
      alt: 'Elektro og datateknologi illustrasjon',
    },
    programIMGMob: {
      src: 'https://api.test.ndla.no/image-api/raw/YIAprLg9.svg?width=600&ts=1682592022017',
      alt: 'Elektro og datateknologi illustrasjon',
    },
    url: '#',
    programsTitle: { title: 'Se våre utdanningsprogram', language: 'nb-no' },
    programsHeadingLevel: 'h1',
    preamble: {
      text: 'Vi ønsker å tilby dei beste læringsressursene innen tradisjonelle og nye medier.',
      language: 'nb-no',
    },
    programmes,
  },
} as Meta<typeof ProgramCard>;

export const ProgramCardStory: StoryFn<typeof ProgramCard> = ({ ...args }) => {
  return <ProgramCard {...args} />;
};

ProgramCardStory.storyName = 'ProgramCard';

export const EducationalProgramsStory: StoryFn<typeof EducationalPrograms> = ({ ...args }) => {
  return <EducationalPrograms {...args} />;
};

EducationalProgramsStory.storyName = 'EducationalPrograms';
