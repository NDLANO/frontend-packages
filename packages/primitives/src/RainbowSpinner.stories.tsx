/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { RainbowSpinner } from "./RainbowSpinner";

export default {
  title: "Primitives/RainbowSpinner",
  tags: ["autodocs"],
  component: RainbowSpinner,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof RainbowSpinner>;

export const Default: StoryObj = {};
