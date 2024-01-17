/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import CheckboxItem from "./CheckboxItem";
import { defaultParameters } from "../../../stories/defaults";

export default {
  title: "Forms/CheckboxItem",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    label: "Check it",
    disabled: false,
  },
} as Meta<typeof CheckboxItem>;

export const Default: StoryFn<typeof CheckboxItem> = ({ ...args }) => <CheckboxItem {...args} />;
