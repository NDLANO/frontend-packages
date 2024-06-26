/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import { Meta, StoryFn } from "@storybook/react";
import { colors } from "@ndla/core";
import Grid from "./Grid";
import { BlogPostStory } from "../BlogPost/BlogPost.stories";
import { KeyFigureStory } from "../KeyFigure/KeyFigure.stories";

const GridWrapper = styled.div`
  .docs-story {
    background-color: ${colors.background.lightBlue};
  }
`;

const GridDocsContainer = ({ ...props }: DocsContainerProps) => (
  <GridWrapper>
    <DocsContainer {...props} />
  </GridWrapper>
);

export default {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      container: GridDocsContainer,
    },
  },
  args: {
    columns: "2",
    border: "none",
    background: "white",
  },
} as Meta<typeof Grid>;

export const GridKeyPerformanceStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(
    <KeyFigureStory
      title={KeyFigureStory.args?.title!}
      subtitle={KeyFigureStory.args?.subtitle!}
      image={KeyFigureStory.args?.image!}
    />,
  );
  return <Grid {...args}>{items}</Grid>;
};

export const GridBlogPostStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(
    <BlogPostStory
      metaImage={BlogPostStory.args?.metaImage!}
      title={BlogPostStory.args?.title!}
      size={BlogPostStory.args?.size}
      headingLevel={BlogPostStory.args?.headingLevel}
      url={BlogPostStory.args?.url!}
      author={BlogPostStory.args?.author}
    />,
  );
  return <Grid {...args}>{items}</Grid>;
};
