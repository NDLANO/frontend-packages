/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { ListAlphabetical, ListCircle, ListNumbered } from "@ndla/icons/editor";
import { ToggleGroup, ToggleItem } from "./ToggleGroup";

const defaultMenuItems: ToggleItem[] = [
  {
    id: "alphabeticalList",
    onClick: () => {},
    icon: <ListAlphabetical />,
    label: "Alphabetical list",
  },
  {
    id: "numberedList",
    onClick: () => {},
    icon: <ListNumbered />,
    label: "Numbered list",
  },
  {
    id: "unorderedList",
    onClick: () => {},
    icon: <ListCircle />,
    label: "Unordered list",
    selected: true,
  },
];

export default {
  title: "Components/ToggleGroup",
  tags: ["autodocs"],
  component: ToggleGroup,
  args: {
    items: defaultMenuItems,
  },
  argTypes: {
    folders: { control: false },
  },
} as Meta<typeof ToggleGroup>;

export const Default: StoryFn<typeof ToggleGroup> = ({ ...args }) => {
  return <ToggleGroup {...args} />;
};

export const Label: StoryFn<typeof ToggleGroup> = ({ ...args }) => {
  return <ToggleGroup color="white" {...args} />;
};
