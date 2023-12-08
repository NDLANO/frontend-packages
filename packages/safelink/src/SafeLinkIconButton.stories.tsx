/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import { PersonOutlined } from '@ndla/icons/common';
import MissingRouterContext from './MissingRouterContext';
import SafeLinkIconButton from './SafeLinkIconButton';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Components/SafeLinkIconButton',
  component: SafeLinkIconButton,
  tags: ['autodocs'],
  paramemeters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    to: '/',
    children: <PersonOutlined />,
  },
  argTypes: {
    children: { control: false },
  },
} as Meta<typeof SafeLinkIconButton>;

export const Default: StoryObj<typeof SafeLinkIconButton> = {};

export const Disabled: StoryObj<typeof SafeLinkIconButton> = {
  args: { disabled: true },
};

export const ExternalLink: StoryObj<typeof SafeLinkIconButton> = {
  args: { to: 'https://example.com', showNewWindowIcon: true, children: null, target: '_blank' },
};

export const WithMissingRouterContext: StoryObj<typeof SafeLinkIconButton> = {
  decorators: [
    (Story) => (
      <MissingRouterContext.Provider value={true}>
        <Story />
      </MissingRouterContext.Provider>
    ),
  ],
  args: { to: 'https://example.com', target: '_blank' },
};
