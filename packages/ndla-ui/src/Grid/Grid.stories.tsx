/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import { ArticleContent, ArticleWrapper } from "@ndla/ui";
import { Grid } from "./Grid";
import { Plain } from "../KeyFigure/KeyFigure.stories";
import { Default as PitchStory } from "../Pitch/Pitch.stories";

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
      <div key={idx} data-type="grid-cell" data-parallax-cell="false">
        <Plain key={idx} {...args} />
      </div>
    );
  });
  return <Grid {...args}>{items}</Grid>;
};

export const GridPitchStory: StoryFn<typeof Grid> = ({ ...args }) => {
  const columns = args.columns === "2x2" ? 4 : parseInt(args.columns);
  const items = new Array(columns).fill(
    <div data-type="grid-cell" data-parallax-cell="false">
      <PitchStory
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        metaImage={PitchStory.args?.metaImage!}
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        title={PitchStory.args?.title!}
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        url={PitchStory.args?.url!}
        description={PitchStory.args?.description}
      />
    </div>,
  );
  return <Grid {...args}>{items}</Grid>;
};
