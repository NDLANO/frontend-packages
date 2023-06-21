/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { defaultParameters } from '../../../../stories/defaults';
import ListResource from './ListResource';

export default {
  title: 'Components/Ressurser/ListResource',
  component: ListResource,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  argTypes: {
    resourceImage: {
      control: false,
    },
    resourceTypes: {
      control: false,
    },
    headingLevel: {
      control: false,
    },
    menuItems: {
      control: false,
    },
  },
  args: {
    id: '1234',
    link: '',
    title: 'Tittel til ressurs',
    resourceImage: {
      src: '',
      alt: '',
    },
    resourceTypes: [{ id: 'urn:resourcetype:learningPath', name: 'Læringssti' }],
    tags: ['tag', 'tag', 'tag', 'tag'],
  },
} as Meta<typeof ListResource>;

export const ListResourceStory: StoryFn<typeof ListResource> = (args) => {
  return <ListResource {...args} />;
};

ListResourceStory.storyName = 'ListResource';
