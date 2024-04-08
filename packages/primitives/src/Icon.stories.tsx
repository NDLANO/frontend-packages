/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Primitives/IconBase",
  tags: ["autodocs"],
  component: Icon,
  parameters: {
    inlineStories: true,
  },
  args: {
    size: "large",
    inverted: false,
    children: (
      <path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.7 7.6 1 12a11.8 11.8 0 0 0 22 0c-1.7-4.4-6-7.5-11-7.5" />
    ),
  },
  argTypes: {
    children: {
      control: null,
    },
  },
} as Meta<typeof Icon>;

export const Default: StoryObj = {};
