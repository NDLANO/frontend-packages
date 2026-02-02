/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal } from "@ark-ui/react";
import { Button } from "./Button";
import {
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipContentStandalone,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
} from "./Tooltip";

export default {
  title: "Primitives/Tooltip",
  tags: ["autodocs"],
  component: TooltipRoot,
} as Meta<typeof TooltipRoot>;

export const Default: StoryFn<typeof TooltipRoot> = ({ ...args }) => (
  <TooltipRoot {...args}>
    <TooltipTrigger asChild>
      <Button>Hover me!</Button>
    </TooltipTrigger>
    <Portal>
      <TooltipContent>Thanks for checking!</TooltipContent>
    </Portal>
  </TooltipRoot>
);

export const StandaloneComponents: StoryFn<typeof TooltipRoot> = ({ ...args }) => (
  <TooltipRoot {...args}>
    <TooltipTrigger asChild>
      <Button>Hover me!</Button>
    </TooltipTrigger>
    <Portal>
      <TooltipPositioner>
        <TooltipContentStandalone>
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
          TooltipContent is just a combination of TooltipPositioner, TooltipArrow, TooltipArrowTip and
          TooltipContentStandalone.
        </TooltipContentStandalone>
      </TooltipPositioner>
    </Portal>
  </TooltipRoot>
);
