/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import CreatedBy from './CreatedBy';
import { defaultParameters } from '../../../../stories/defaults';

/***
 * LTI-versjoner av innhold fra NDLA skal vise denne teksten og logo i bunnen. "NDLA" og logoen lenker til ndla.no. "Artikkel" kan være en lenke til artikkelen på ndla.no om den fins. Begge lenker åpner som standard i ny fane men det kan overstyres med target-parameter.
 */
export default {
  title: 'Components/CreatedBy',
  component: CreatedBy,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    name: 'Artikkelen',
    description: 'er utarbeidet av',
  },
} as Meta<typeof CreatedBy>;

export const WithoutLink: StoryObj<typeof CreatedBy> = {
  args: {},
};

export const WithLink: StoryObj<typeof CreatedBy> = {
  args: {
    url: 'https://ndla.no/subject:26/topic:1:191103/topic:1:4352/resource:1:2052',
  },
};
