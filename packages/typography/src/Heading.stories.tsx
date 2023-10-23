/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Heading from './Heading';
import { defaultParameters } from '../../../stories/defaults';

const exampleText = 'Nasjonal digital læringsarena';

/**
 * NDLA bruker fontene [ Source Serif Pro ](https://fonts.google.com/specimen/Source+Serif+Pro), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) og [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)
 *
 * Tilbakefallsfonter er Helvetica og Arial
 */
export default {
  title: 'Base styles/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    element: 'h1',
    headingStyle: 'h1',
    children: exampleText,
  },
} as Meta<typeof Heading>;

export const H1: StoryFn<typeof Heading> = (args) => {
  return <Heading {...args} />;
};

export const H1Resource: StoryObj<typeof Heading> = {
  args: {
    headingStyle: 'h1-resource',
    children: exampleText,
  },
};

export const H2: StoryObj<typeof Heading> = {
  args: {
    headingStyle: 'h2',
    children: exampleText,
  },
};

export const H3: StoryObj<typeof Heading> = {
  args: {
    headingStyle: 'h3',
    children: exampleText,
  },
};

export const listTitle: StoryObj<typeof Heading> = {
  args: {
    headingStyle: 'list-title',
    children: exampleText,
  },
};

/**
 * Kinesisk har behov for egen skriftstørrelsedefinisjoner for at fonten skal være lesbar. Tekststil blir automatisk endret når en setter kinesisk som språk på en Heading-komponent.
 */
export const Chinese: StoryObj<typeof Heading> = {
  args: { lang: 'zh-Hans', children: '人人生而自由,在尊严和权利上一律平等。' },
  render: (args) => (
    <>
      <Heading {...args} />
      <Heading {...args} headingStyle="h1" />
      <Heading {...args} headingStyle="h1-resource" />
      <Heading {...args} headingStyle="h2" />
      <Heading {...args} headingStyle="h3" />
      <Heading {...args} headingStyle="list-title" />
    </>
  ),
};
