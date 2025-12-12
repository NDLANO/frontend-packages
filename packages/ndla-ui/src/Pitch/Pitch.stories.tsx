/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import { Pitch, type Props } from "./Pitch";
import { ArticleContent, ArticleWrapper } from "../Article/Article";
import { Grid } from "../Grid/Grid";

const args: Props = {
  title: "Min pitch",
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

export const Default = ({ ...args }: Props) => {
  return (
    <Grid columns="2">
      <div data-type="grid-cell">
        <Pitch {...args} />
      </div>
      <div data-type="grid-cell">
        <Pitch {...args} description="Kortere beskrivelse" />
      </div>
    </Grid>
  );
};

Default.args = args;
