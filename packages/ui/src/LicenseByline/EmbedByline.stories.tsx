/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { EmbedByline } from "./EmbedByline";

export default {
  title: "Components/EmbedByline",
  component: EmbedByline,
  tags: ["autodocs"],
  args: {
    visibleAlt: "Synlig alt-tekst kan legges her, eller fjernes helt",
    type: "image",
    description:
      "Bildetekst som kan være ganske lang. Denne roboten er laget av DALLE2, en helt vaskeekte AI. Hvis denne teksten blir veldig lang kommer den på flere linjer.",
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      origin: "http://floradania.dk/forside/",
      creators: [],
      processors: [],
      rightsholders: [
        {
          type: "Supplier",
          name: "Floradania",
        },
      ],
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof EmbedByline>;

export const EmbedBylineStory: StoryFn<typeof EmbedByline> = (args) => {
  return <EmbedByline {...args} />;
};

export const Error: StoryObj<typeof EmbedByline> = {
  args: {
    error: true,
    copyright: undefined,
  },
};

EmbedBylineStory.storyName = "EmbedByline";
