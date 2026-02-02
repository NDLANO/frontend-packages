/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Portal } from "@ark-ui/react";
import { Button } from "./Button";
import {
  PopoverContent,
  PopoverContentStandalone,
  PopoverDescription,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./Popover";

export default {
  title: "Primitives/Popover",
  tags: ["autodocs"],
  component: PopoverRoot,
  parameters: {
    inlineStories: true,
  },
  args: {
    children:
      "Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  render: ({ children, ...args }) => (
    <PopoverRoot {...args}>
      <PopoverTrigger asChild>
        <Button>Open me!</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverTitle>Welcome!</PopoverTitle>
          <PopoverDescription>{children}</PopoverDescription>
        </PopoverContent>
      </Portal>
    </PopoverRoot>
  ),
} as Meta<typeof PopoverRoot>;

export const Default: StoryObj<typeof PopoverRoot> = {};

export const RightAligned: StoryObj<typeof PopoverRoot> = {
  args: {
    positioning: { placement: "right" },
  },
};

export const LeftAligned: StoryObj<typeof PopoverRoot> = {
  args: {
    positioning: { placement: "left" },
  },
  render: ({ children, ...args }) => (
    <PopoverRoot {...args}>
      <PopoverTrigger asChild>
        <Button css={{ marginInlineStart: "50%" }}>Open me!</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverTitle>Welcome!</PopoverTitle>
          <PopoverDescription>{children}</PopoverDescription>
        </PopoverContent>
      </Portal>
    </PopoverRoot>
  ),
};

export const WithStandaloneComponents: StoryFn = (args) => (
  <PopoverRoot {...args}>
    <PopoverTrigger asChild>
      <Button>Open me!</Button>
    </PopoverTrigger>
    <Portal>
      <PopoverPositioner>
        <PopoverContentStandalone>
          <PopoverTitle>Welcome!</PopoverTitle>
          <PopoverDescription>
            Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad.
          </PopoverDescription>
        </PopoverContentStandalone>
      </PopoverPositioner>
    </Portal>
  </PopoverRoot>
);
