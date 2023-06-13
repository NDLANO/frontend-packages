/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LinkBlock from './LinkBlock';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Enkle komponenter/Link Block',
  component: LinkBlock,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof LinkBlock>;

export const AnnouncementExample: StoryObj<typeof LinkBlock> = {
  args: {
    title: 'Redaksjonell medarbeider i faget spansk 2',
    language: 'nb',
    date: '05. mars 2023',
    url: '',
  },
};
