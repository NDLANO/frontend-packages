/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { IconButton } from "./IconButton";

export default {
  title: "Primitives/Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    colorTheme: "primary",
    children: <Cross />,
    size: "small",
    variant: "solid",
    fontWeight: "normal",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof IconButton>;

export const IconButtonStory: StoryFn<typeof IconButton> = (args) => {
  return <IconButton {...args} />;
};

IconButtonStory.storyName = "IconButton";
