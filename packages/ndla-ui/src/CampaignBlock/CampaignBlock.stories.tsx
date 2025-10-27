/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { CampaignBlock } from "./CampaignBlock";

export default {
  title: "Components/Campaign Block",
  component: CampaignBlock,
  tags: ["autodocs"],
  args: {},
} as Meta<typeof CampaignBlock>;

export const ImageLeft: StoryObj<typeof CampaignBlock> = {
  args: {
    title: "NDLA film",
    description:
      "NDLA film er en tjeneste i samarbeid med Norgesfilm. Denne tjenesten lar deg se en rekke spillefilmer, kortfilmer, dokumentarer og serier. Du kan også se undervisningsfilm og filmklipp. Velkommen inn i filmens verden!",
    headingLevel: "h2",
    url: {
      url: "#",
      text: "Gå til NDLA film",
    },
    image: {
      alt: "",
      src: "https://api.test.ndla.no/image-api/raw/n2UYRxEG.png",
    },
  },
};

export const ImageRight: StoryObj<typeof CampaignBlock> = {
  args: {
    title: "FN-dagen 24. oktober!",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  quis nostrud exercitation ",
    url: {
      url: "#",
      text: "Les mer om FN-dagen",
    },
    image: {
      alt: "FN-symbol",
      src: "https://api.test.ndla.no/image-api/raw/LkmDGtip.png",
    },
    imageSide: "right",
  },
};

export const NoUrl: StoryObj<typeof CampaignBlock> = {
  args: {
    title: "No url!!!",
    description: "Look ma, no url!",
    image: {
      alt: "Tømmer",
      src: "https://api.test.ndla.no/image-api/raw/stokkmarknes_004_d013e.jpg",
    },
    imageSide: "left",
  },
};

export const HTML: StoryObj<typeof CampaignBlock> = {
  args: {
    title: "Something <em>bold</em>",
    description: "Can go a <i>long</i> way",
    image: {
      alt: "Tømmer",
      src: "https://api.test.ndla.no/image-api/raw/stokkmarknes_004_d013e.jpg",
    },
    imageSide: "left",
    url: {
      url: "#",
      text: `Read more in <span lang="nn">Nynorsk</span>`,
    },
  },
};
