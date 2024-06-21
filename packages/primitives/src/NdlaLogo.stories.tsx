/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { NdlaLogoEn, NdlaLogoNb, NdlaLogoText } from "./NdlaLogo";

/**
 * NDLA tilbyr en rekke varianter av logoen sin, men kodebasen vår bruker kun to av de.
 * Varianter som inneholder tekst eksporteres på to språk: Norsk og Engelsk. Det er opp til den som skal bruke logoene å sørge for at riktig logo vises frem på riktig språk.
 */
export default {
  title: "Primitives/NDLA Logo",
  tags: ["autodocs"],
  component: NdlaLogoNb,
  parameters: {
    inlineStories: true,
  },
  args: {
    color: "primary",
  },
} as Meta<typeof NdlaLogoNb>;

export const Default: StoryObj = {};

export const English: StoryFn = (args) => <NdlaLogoEn {...args} />;

export const Text: StoryFn = (args) => <NdlaLogoText {...args} />;
