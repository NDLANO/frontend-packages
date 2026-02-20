/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FileCopyLine, ArrowRightLine } from "@ndla/icons";
import { styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
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
    size: "medium",
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
        <ArrowRightLine />
      </>
    ),
  },
};

export const DefaultSize: StoryObj<typeof Button> = {
  args: {
    size: "medium",
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

export const Loading: StoryObj<typeof Button> = {
  args: {
    loading: true,
  },
};

export const LoadingReplace: StoryObj<typeof Button> = {
  args: {
    loading: true,
    replaceContent: true,
  },
};

export const CustomLoading: StoryObj<typeof Button> = {
  args: {
    loading: true,
    loadingContent: "...",
  },
};

export const CustomLoadingReplace: StoryObj<typeof Button> = {
  args: {
    loading: true,
    replaceContent: true,
    loadingContent: "Laster...",
  },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        <FileCopyLine />
        Button
      </>
    ),
  },
};

const UglyButton = styled(Button, {
  base: {
    background: "yellow.600",
    color: "text.onAction",
    paddingBlock: "large",
    paddingInline: "large",
  },
});

export const StyledButtonExample = () => <UglyButton>Styled!</UglyButton>;
