/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PageContent } from "@ndla/primitives";
import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import type { Meta, StoryFn } from "@storybook/react";
import { Plain } from "../KeyFigure/KeyFigure.stories";
import { Default as PitchStory } from "../Pitch/Pitch.stories";
import { Grid, GridItem } from "./Grid";

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
  },
  decorators: [
    (Story) => (
      <PageContent asChild>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
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
    return (
      <GridItem key={idx} data-type="grid-cell">
        <Plain key={idx} {...args} />
      </GridItem>
    );
  });
  return <Grid {...args}>{items}</Grid>;
};

export const GridPitchStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(
    <GridItem data-type="grid-cell">
      <PitchStory
        // oxlint-disable-next-line typescript/no-non-null-asserted-optional-chain
        metaImage={PitchStory.args?.metaImage!}
        // oxlint-disable-next-line typescript/no-non-null-asserted-optional-chain
        title={PitchStory.args?.title!}
        // oxlint-disable-next-line typescript/no-non-null-asserted-optional-chain
        url={PitchStory.args?.url!}
        description={PitchStory.args?.description}
      />
    </GridItem>,
  );
  return <Grid {...args}>{items}</Grid>;
};

export const GridItemsWithBorders: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(0).map((_, idx) => {
    const args = keyFigureArgs[idx % keyFigureArgs.length];
    return (
      <GridItem key={idx} data-type="grid-cell" border={idx % 2 === 0}>
        <Plain key={idx} {...args} />
      </GridItem>
    );
  });
  return <Grid {...args}>{items}</Grid>;
};

export const GridItemsWithBordersInsideGridWithBorder: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(0).map((_, idx) => {
    const args = keyFigureArgs[idx % keyFigureArgs.length];
    return (
      <GridItem key={idx} data-type="grid-cell" border={true}>
        <Plain key={idx} {...args} />
      </GridItem>
    );
  });
  return (
    <Grid {...args} border="lightBlue">
      {items}
    </Grid>
  );
};
