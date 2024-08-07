/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { CloseLine } from "@ndla/icons/action";
import IconButtonV2 from "./IconButtonV2";

export default {
  title: "Components/Buttons/IconButton",
  component: IconButtonV2,
  tags: ["autodocs"],
  args: {
    colorTheme: "primary",
    children: <CloseLine />,
    size: "small",
    variant: "solid",
    fontWeight: "normal",
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<typeof IconButtonV2>;

export const IconButtonStory: StoryFn<typeof IconButtonV2> = (args) => {
  return <IconButtonV2 {...args} />;
};

IconButtonStory.storyName = "IconButton";
