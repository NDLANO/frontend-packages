/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { LoadingButton } from "./LoadingButton";

export default {
  title: "Components/LoadingButton/LoadingButton",
  component: LoadingButton,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    children: "Button",
    size: "medium",
    variant: "primary",
    loading: true,
    "aria-label": "Laster",
  },
} as Meta<typeof LoadingButton>;

export const Primary: StoryFn<typeof LoadingButton> = ({ ...args }) => {
  return <LoadingButton {...args} />;
};

export const LoadingReplace: StoryObj<typeof LoadingButton> = {
  args: {
    loading: true,
    replaceContent: true,
  },
};

export const CustomLoading: StoryObj<typeof LoadingButton> = {
  args: {
    loading: true,
    loadingContent: "...",
  },
};

export const CustomLoadingReplace: StoryObj<typeof LoadingButton> = {
  args: {
    loading: true,
    replaceContent: true,
    loadingContent: "Laster...",
  },
};
