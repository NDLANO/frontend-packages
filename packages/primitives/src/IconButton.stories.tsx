/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Cross } from "@ndla/icons/action";
import { IconButton } from "./Button";

export default {
  title: "Primitives/Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    children: <Cross />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof IconButton>;

export const Primary: StoryFn<typeof IconButton> = ({ ...args }) => {
  return <IconButton {...args} />;
};

export const Secondary: StoryObj<typeof IconButton> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<typeof IconButton> = {
  args: {
    variant: "tertiary",
  },
};

export const Danger: StoryObj<typeof IconButton> = {
  args: {
    variant: "danger",
  },
};

export const Success: StoryObj<typeof IconButton> = {
  args: {
    variant: "success",
  },
};

export const Clear: StoryObj<typeof IconButton> = {
  args: {
    variant: "clear",
  },
};

export const Disabled: StoryObj<typeof IconButton> = {
  args: {
    disabled: true,
  },
};
