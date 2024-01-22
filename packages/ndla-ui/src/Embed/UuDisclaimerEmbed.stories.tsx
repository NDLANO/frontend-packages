/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { UuDisclaimerEmbedData } from "@ndla/types-embed";
import UuDisclaimerEmbed from "./UudisclaimerEmbed";
import { defaultParameters } from "../../../../stories/defaults";

const embedData: UuDisclaimerEmbedData = {
  resource: "uu-disclaimer",
  disclaimer: "Dette inholdet er ikke tastaturvennlig.",
  articleId: 123,
};

const meta: Meta<typeof UuDisclaimerEmbed> = {
  title: "Embeds/UuDisclaimerEmbed",
  component: UuDisclaimerEmbed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="o-wrapper">
        <article className="c-article c-article--clean">
          <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
            <section>
              <Story />
            </section>
          </section>
        </article>
      </div>
    ),
  ],
  parameters: defaultParameters,
};

export default meta;

export const Regular: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {},
    },
  },
};

export const WithLink: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {
        disclaimerLink: {
          href: "https://ndla.no/article/123",
          text: "Navn på artikkel med innhold",
        },
      },
    },
  },
};
