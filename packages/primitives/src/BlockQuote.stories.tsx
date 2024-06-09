/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { BlockQuote } from "./BlockQuote";
import { Text } from "./Text";

export default {
  title: "Primitives/BlockQuote",
  component: BlockQuote,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    variant: "neutral",
    children: (
      <Text>
        Helse er en tilstand av fullkomment fysisk, psykisk og sosialt velvære – ikke bare fravær av sykdom eller
        svakhet. (WHO)
      </Text>
    ),
  },
} as Meta<typeof BlockQuote>;

export const Neutral: StoryObj<typeof BlockQuote> = {
  args: {
    variant: "neutral",
  },
};

export const Brand1: StoryObj<typeof BlockQuote> = {
  args: {
    variant: "brand1",
  },
};

export const Brand2: StoryObj<typeof BlockQuote> = {
  args: {
    variant: "brand2",
  },
};
