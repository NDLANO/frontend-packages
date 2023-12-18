/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { LinkBlockSection } from '.';
import LinkBlock from './LinkBlock';
import { defaultParameters } from '../../../../stories/defaults';

export default {
  title: 'Components/Link Block',
  component: LinkBlock,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: {},
} as Meta<typeof LinkBlock>;

const args = {
  title: 'Redaksjonell medarbeider i faget spansk 2',
  language: 'nb',
  date: '05. mars 2023',
  url: '',
};

export const AnnouncementExample: StoryObj<typeof LinkBlock> = { args };

export const LinkList: StoryFn<typeof LinkBlock> = () => (
  <LinkBlockSection>
    <LinkBlock {...args} />
    <LinkBlock {...args} />
    <LinkBlock {...args} />
    <LinkBlock {...args} />
  </LinkBlockSection>
);
