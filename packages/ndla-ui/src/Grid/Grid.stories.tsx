/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Grid from './Grid';
import { defaultParameters } from '../../../../stories/defaults';
import { BlogPostStory } from '../BlogPost/BlogPost.stories';
import { KeyFigureStory } from '../KeyFigure/KeyFigure.stories';

export default {
  title: 'Enkle komponenter/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    ...defaultParameters,
    layout: 'centered',
  },
  args: {
    columns: 2,
    border: false,
  },
} as Meta<typeof Grid>;

export const GridKeyPerformanceStory: StoryFn<typeof Grid> = ({ ...args }) => {
  return (
    <Grid {...args}>
      <KeyFigureStory
        title={KeyFigureStory.args?.title!}
        subtitle={KeyFigureStory.args?.subtitle!}
        image={KeyFigureStory.args?.image}
      />
      <KeyFigureStory
        title={KeyFigureStory.args?.title!}
        subtitle={KeyFigureStory.args?.subtitle!}
        image={KeyFigureStory.args?.image}
      />
    </Grid>
  );
};

export const GridBlogPostStory: StoryFn<typeof Grid> = ({ ...args }) => {
  return (
    <Grid {...args}>
      <BlogPostStory
        metaImage={BlogPostStory.args?.metaImage!}
        title={BlogPostStory.args?.title!}
        size={BlogPostStory.args?.size}
        headingLevel={BlogPostStory.args?.headingLevel}
        url={BlogPostStory.args?.url!}
        author={BlogPostStory.args?.author}
      />
      <BlogPostStory
        metaImage={BlogPostStory.args?.metaImage!}
        title={BlogPostStory.args?.title!}
        size={BlogPostStory.args?.size}
        headingLevel={BlogPostStory.args?.headingLevel}
        url={BlogPostStory.args?.url!}
        author={BlogPostStory.args?.author}
      />
    </Grid>
  );
};
