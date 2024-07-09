/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { FramedContent } from "@ndla/primitives";
import { CopyrightMetaData } from "@ndla/types-embed";
import CopyrightEmbed from "./CopyrightEmbed";

const copyrightEmbed: CopyrightMetaData = {
  resource: "copyright",
  status: "success",
  data: undefined,
  embedData: {
    resource: "copyright",
    title: "Hallo",
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      creators: [
        {
          type: "originator",
          name: "Camilla Øvstebø ",
        },
      ],
      processors: [
        {
          type: "linguistic",
          name: "Totaltekst",
        },
      ],
      rightsholders: [],
      processed: false,
    },
  },
};

/**
 * En `CopyrightEmbed` har ingen visuelt inntrykk. Det eneste formålet med den er å knytte et sett med elementer opp mot relevant opphavsrett-informasjon.
 */
export default {
  title: "Embeds/CopyrightEmbed",
  tags: ["autodocs"],
  component: CopyrightEmbed,
  parameters: {
    inlineStories: true,
  },
  args: {
    embed: copyrightEmbed,
  },
  render: (args) => (
    <FramedContent>
      <h2>Her har du helt vanlig innhold</h2>
      <p>Det kan som sagt være hva som helst.</p>
      <CopyrightEmbed {...args}>
        <p>Dette er innhold som er i en copyright-embed</p>
      </CopyrightEmbed>
    </FramedContent>
  ),
} satisfies Meta<typeof CopyrightEmbed>;

export const Default: StoryObj<typeof CopyrightEmbed> = {};
