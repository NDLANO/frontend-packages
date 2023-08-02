/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from '@storybook/react';
import BlogPost, { Props } from './BlogPost';
import { defaultParameters } from '../../../../stories/defaults';

const args: Props = {
  title: { title: 'Min bloggpost', language: 'nb-no' },
  author: 'Ola Nordmann',
  url: '#',
  headingLevel: 'h3',
  size: 'large',
  metaImage: {
    alt: 'Yonghetempelet i Beijing. Foto.',
    url: 'https://api.test.ndla.no/image-api/raw/id//62870',
  },
};

export default {
  title: 'Components/Blog Post',
  component: BlogPost,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
  },
  args: args,
} as Meta<typeof BlogPost>;

export const BlogPostStory: StoryFn<typeof BlogPost> = ({ ...args }) => {
  return <BlogPost {...args} />;
};

BlogPostStory.args = args;
BlogPostStory.storyName = 'BlogPost';
