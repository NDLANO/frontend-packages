/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Portal } from "@ark-ui/react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import {
  PopoverArrow,
  PopoverArrowStandalone,
  PopoverArrowTip,
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
} as Meta<typeof PopoverRoot>;

export const Default: StoryFn = (args) => (
  <PopoverRoot {...args}>
    <PopoverTrigger asChild>
      <Button>Open me!</Button>
    </PopoverTrigger>
    <Portal>
      <PopoverContent>
        <PopoverArrow />
        <PopoverTitle>Welcome!</PopoverTitle>
        <PopoverDescription>
          Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad.
        </PopoverDescription>
      </PopoverContent>
    </Portal>
  </PopoverRoot>
);

export const WithStandaloneComponents: StoryFn = (args) => (
  <PopoverRoot {...args}>
    <PopoverTrigger asChild>
      <Button>Open me!</Button>
    </PopoverTrigger>
    <Portal>
      <PopoverPositioner>
        <PopoverContentStandalone>
          <PopoverArrowStandalone>
            <PopoverArrowTip />
          </PopoverArrowStandalone>
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
