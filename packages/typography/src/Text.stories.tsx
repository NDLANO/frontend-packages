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

/**
 * NDLA bruker fontene [ Source Serif Pro ](https://fonts.google.com/specimen/Source+Serif+Pro), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) og [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)
 *
 * Tilbakefallsfonter er Helvetica og Arial
 */
export default {
  title: 'Base styles/Typography/Text',
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

/**
 * Kinesisk har behov for egen skriftstørrelsedefinisjoner for at fonten skal være lesbar. Tekststil blir automatisk endret når en setter kinesisk som språk på en Text-komponent.
 */
export const Chinese: StoryObj<typeof Text> = {
  args: { lang: 'zh-Hans', children: '人人生而自由,在尊严和权利上一律平等。' },
  render: (args) => (
    <>
      <Text {...args} />
      <Text {...args} textStyle="button" />
      <Text {...args} textStyle="content" />
      <Text {...args} textStyle="content-alt" />
      <Text {...args} textStyle="meta-text-large" />
      <Text {...args} textStyle="meta-text-small" />
    </>
  ),
};
