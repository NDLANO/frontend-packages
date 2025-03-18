/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { CloseLine } from "@ndla/icons";
import { LoadingIconButton } from "./LoadingButton";

export default {
  title: "Components/LoadingButton/LoadingIconButton",
  component: LoadingIconButton,
  tags: ["autodocs"],
  args: {
    children: <CloseLine />,
    size: "medium",
    loading: true,
    "aria-label": "Laster",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof LoadingIconButton>;

export const Primary: StoryFn<typeof LoadingIconButton> = ({ ...args }) => {
  return <LoadingIconButton {...args} />;
};

export const LoadingReplace: StoryObj<typeof LoadingIconButton> = {
  args: {
    loading: true,
    replaceContent: true,
  },
};

export const CustomLoading: StoryObj<typeof LoadingIconButton> = {
  args: {
    loading: true,
    loadingContent: "...",
  },
};
