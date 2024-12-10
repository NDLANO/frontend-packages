/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "Primitives/Spinner",
  tags: ["autodocs"],
  component: Spinner,
  parameters: {
    inlineStories: true,
  },
  args: {
    size: "large",
  },
} as Meta<typeof Spinner>;

export const Default: StoryObj = {};
