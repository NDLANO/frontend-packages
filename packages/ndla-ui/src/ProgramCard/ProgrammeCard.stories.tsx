/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgrammeCard from './ProgrammeCard';
import EducationalProgrammes from './EducationalProgrammes';
import { defaultParameters } from '../../../../stories/defaults';
import { mockProgrammesV3 as programmes } from '../../../../dummydata/mockProgrammesV3';

export default {
  title: 'Enkle komponenter/ProgrammeCard',
  component: ProgrammeCard,
  EducationalProgrammes,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {
    id: 'test ID',
    programmeTitle: { title: 'Elektro og datateknologi', language: 'nb-no' },
    headingLevel: 'h4',
    programmeIMGDesk: {
      src: 'https://api.test.ndla.no/image-api/raw/ajvkVKKR.svg?width=600&ts=1682591987993',
      alt: 'Elektro og datateknologi illustrasjon',
    },
    programmeIMGMob: {
      src: 'https://api.test.ndla.no/image-api/raw/YIAprLg9.svg?width=600&ts=1682592022017',
      alt: 'Elektro og datateknologi illustrasjon',
    },
    url: '#',
    programmesTitle: { title: 'Se våre utdanningsprogram', language: 'nb-no' },
    programmesHeadingLevel: 'h1',
    preamble: {
      text: 'Vi ønsker å tilby dei beste læringsressursene innen tradisjonelle og nye medier.',
      language: 'nb-no',
    },
    programmes,
  },
} as Meta<typeof ProgrammeCard>;

export const ProgrammeCardStory: StoryFn<typeof ProgrammeCard> = ({ ...args }) => {
  return <ProgrammeCard {...args} />;
};

ProgrammeCardStory.storyName = 'ProgrammeCard';

export const EducationalProgrammesStory: StoryFn<typeof EducationalProgrammes> = ({ ...args }) => {
  return <EducationalProgrammes {...args} />;
};

EducationalProgrammesStory.storyName = 'EducationalProgrammes';
