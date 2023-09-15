/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Typography from './Typography';
import { defaultParameters } from '../../../../stories/defaults';
import SafeLink from '../../../safelink';

const exampleText = 'Nasjonal digital læringsarena';
const ExampleElementWithLink = (
  <span>
    {`${exampleText} `}
    <SafeLink to="ndla.no">Link i brødtekst</SafeLink>
  </span>
);

export default {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    element: 'h1',
    children: exampleText,
  },
} as Meta<typeof Typography>;

export const H1: StoryFn<typeof Typography> = (args) => {
  return <Typography {...args} />;
};

export const H1Resource: StoryObj<typeof Typography> = {
  args: {
    element: 'h1-resource',
    children: exampleText,
  },
};

export const H2: StoryObj<typeof Typography> = {
  args: {
    element: 'h2',
    children: exampleText,
  },
};
export const H3: StoryObj<typeof Typography> = {
  args: {
    element: 'h3',
    children: exampleText,
  },
};
export const H4: StoryObj<typeof Typography> = {
  args: {
    element: 'h4',
    children: exampleText,
  },
};
export const ListTitle: StoryObj<typeof Typography> = {
  args: {
    element: 'list-title',
    children: exampleText,
  },
};

export const Ingress: StoryObj<typeof Typography> = {
  args: {
    element: 'ingress',
    children: exampleText,
  },
};

export const ButtonText: StoryObj<typeof Typography> = {
  args: {
    element: 'button-text',
    children: exampleText,
  },
};

export const Content: StoryObj<typeof Typography> = {
  args: {
    element: 'content',
    children: ExampleElementWithLink,
  },
};

export const ContentAlt: StoryObj<typeof Typography> = {
  args: {
    element: 'content-alt',
    children: ExampleElementWithLink,
  },
};

export const MetaTextSmall: StoryObj<typeof Typography> = {
  args: {
    element: 'meta-text-small',
    children: exampleText,
  },
};

export const MetaTextLarge: StoryObj<typeof Typography> = {
  args: {
    element: 'meta-text-large',
    children: exampleText,
  },
};
