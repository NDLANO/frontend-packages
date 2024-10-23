/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import { Pitch, Props } from "./Pitch";
import { ArticleContent, ArticleWrapper } from "../Article";
import { Grid } from "../Grid";

const args: Props = {
  title: "Min bloggpost",
  description:
    "Vil du øve på spansk? Kunne du tenke deg hjelp til naturfag? Drømmer du om en prat med Mandela? Lag din egen praterobot!",
  url: "#",
  metaImage: {
    alt: "Yonghetempelet i Beijing. Foto.",
    url: "https://api.test.ndla.no/image-api/raw/id//62870",
  },
};

export default {
  title: "Components/Pitch",
  component: Pitch,
  tags: ["autodocs"],
  args: args,
  decorators: [
    (Story) => (
      <PageContent variant="page" asChild>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
    ),
  ],
} as Meta<typeof Pitch>;

export const Default: StoryFn<typeof Pitch> = ({ ...args }) => {
  return (
    <Grid columns="2" background="transparent">
      <Pitch {...args} />
      <Pitch {...args} />
    </Grid>
  );
};

Default.args = args;
