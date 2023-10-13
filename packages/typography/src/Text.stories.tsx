/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Text from './Text';
import { defaultParameters } from '../../../stories/defaults';

const exampleText = 'Nasjonal digital læringsarena';

export default {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    element: 'p',
    textStyle: 'ingress',
    children: exampleText,
  },
} as Meta<typeof Text>;

export const Ingress: StoryFn<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Button: StoryObj<typeof Text> = {
  args: { textStyle: 'button', children: exampleText },
};

export const Content: StoryObj<typeof Text> = {
  args: {
    textStyle: 'content',
    children: exampleText,
  },
};

export const ContentAlt: StoryObj<typeof Text> = {
  args: {
    textStyle: 'content-alt',
    children: exampleText,
  },
};

export const MetaTextLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: 'meta-text-large',
    children: exampleText,
  },
};

export const MetaTextSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: 'meta-text-small',
    children: exampleText,
  },
};
