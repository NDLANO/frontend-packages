/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CloseLine } from "@ndla/icons";
import { css } from "@ndla/styled-system/css";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { IconButton } from "./Button";

export default {
  title: "Primitives/Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    children: <CloseLine />,
    size: "medium",
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

export const ClearSubtle: StoryObj<typeof IconButton> = {
  args: {
    variant: "clearSubtle",
  },
  decorators: [
    (Story) => (
      <div className={css({ background: "surface.action" })}>
        <Story />
      </div>
    ),
  ],
};

export const DefaultSize: StoryObj<typeof IconButton> = {
  args: {
    size: "medium",
  },
};

export const SmallSize: StoryObj<typeof IconButton> = {
  args: {
    size: "small",
  },
};

export const Disabled: StoryObj<typeof IconButton> = {
  args: {
    disabled: true,
  },
};

export const Loading: StoryObj<typeof IconButton> = {
  args: {
    loading: true,
  },
};

export const LoadingReplace: StoryObj<typeof IconButton> = {
  args: {
    loading: true,
    replaceContent: true,
  },
};

export const CustomLoading: StoryObj<typeof IconButton> = {
  args: {
    loading: true,
    loadingContent: "...",
  },
};
