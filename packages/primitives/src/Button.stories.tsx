/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, button } from "./Button";

export default {
  title: "Primitives/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: button.variantMap.size,
    },
    variant: {
      control: { type: "radio" },
      options: button.variantMap.variant,
    },
    shape: {
      control: { type: "radio" },
      options: button.variantMap.shape,
    },
    colorTheme: {
      control: { type: "radio" },
      options: button.variantMap.colorTheme,
    },
    modifier: {
      control: { type: "radio" },
      options: [...button.variantMap.modifier, "none"],
    },
  },
  args: {
    colorTheme: "primary",
    children: "Button",
    size: "normal",
    variant: "solid",
    shape: "normal",
  },
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Ghost: StoryObj<typeof Button> = {
  args: {
    colorTheme: "light",
    children: "Button",
    variant: "ghost",
    shape: "pill",
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    children: "Link",
    variant: "link",
  },
};
