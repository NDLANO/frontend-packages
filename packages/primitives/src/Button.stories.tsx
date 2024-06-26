/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Copy } from "@ndla/icons/action";
import { Forward } from "@ndla/icons/common";
import { styled } from "@ndla/styled-system/jsx";
import { Button } from "./Button";

export default {
  title: "Primitives/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    children: "Button",
    size: "default",
    variant: "primary",
  },
} as Meta<typeof Button>;

export const Primary: StoryFn<typeof Button> = ({ ...args }) => {
  return <Button {...args} />;
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    variant: "tertiary",
  },
};

export const Danger: StoryObj<typeof Button> = {
  args: {
    variant: "danger",
  },
};

export const Success: StoryObj<typeof Button> = {
  args: {
    variant: "success",
  },
};

export const Link: StoryObj<typeof Button> = {
  args: {
    variant: "link",
    children: (
      <>
        {"Button"}
        <Forward />
      </>
    ),
  },
};

export const DefaultSize: StoryObj<typeof Button> = {
  args: {
    size: "default",
  },
};

export const SmallSize: StoryObj<typeof Button> = {
  args: {
    size: "small",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        <Copy />
        Button
      </>
    ),
  },
};

const UglyButton = styled(
  Button,
  {
    base: {
      background: "yellow.1000",
      color: "text.onAction",
      paddingBlock: "large",
      paddingInline: "large",
    },
  },
  { forwardCssProp: true },
);

export const StyledButtonExample = () => <UglyButton>Styled!</UglyButton>;
