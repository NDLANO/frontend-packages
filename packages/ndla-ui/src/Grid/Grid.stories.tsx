/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { ArticleContent, ArticleWrapper, OneColumn } from "@ndla/ui";
import { Grid } from "./Grid";
import { BlogPostStory } from "../BlogPost/BlogPost.stories";
import { Plain } from "../KeyFigure/KeyFigure.stories";

export default {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
    layout: "fullscreen",
  },
  args: {
    columns: "3",
    border: "none",
    background: "gray",
  },
  decorators: [
    (Story) => (
      <OneColumn wide>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </OneColumn>
    ),
  ],
} as Meta<typeof Grid>;

const keyFigureArgs = [
  { title: "22 000+", subtitle: "Tilgjengelige ressurser" },
  { title: "149", subtitle: "Eksamensfag" },
  { title: "500", subtitle: "Tverrfaglige ressurser" },
  { title: "0", subtitle: "Dårlige ideer" },
];

export const GridKeyPerformanceStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(0).map((_, idx) => {
    const args = keyFigureArgs[idx % keyFigureArgs.length];
    return <Plain key={idx} {...args} />;
  });
  return <Grid {...args}>{items}</Grid>;
};

export const GridBlogPostStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(
    <BlogPostStory
      metaImage={BlogPostStory.args?.metaImage!}
      title={BlogPostStory.args?.title!}
      size={"normal"}
      headingLevel={BlogPostStory.args?.headingLevel}
      url={BlogPostStory.args?.url!}
      author={BlogPostStory.args?.author}
    />,
  );
  return <Grid {...args}>{items}</Grid>;
};
