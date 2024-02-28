/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import { defaultParameters } from "../../../../stories/defaults";

const items = [
  {
    name: "Fag",
    to: "#1",
  },
  {
    name: "Hovedemne tittel",
    to: "#2",
  },
  {
    name: "Underemne tittel",
    to: "#3",
  },
  {
    name: "Tittel på side/ressurs",
    to: "#4",
  },
];

export default {
  title: "Components/Breadcrumb/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: items,
  },
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
} as Meta<typeof Breadcrumb>;

export const Defalt: StoryObj<typeof Breadcrumb> = {};

export const CollapseFirst: StoryObj<typeof Breadcrumb> = {
  args: { collapseFirst: true },
};

export const CollapseLast: StoryObj<typeof Breadcrumb> = {
  args: { collapseLast: true },
};

export const AutoCollapse: StoryObj<typeof Breadcrumb> = {
  args: { autoCollapse: true },
};

export const CustomSeparator: StoryObj<typeof Breadcrumb> = {
  args: {
    renderSeparator: (item, totalCount) => (
      <div style={{ padding: "0px 12px" }}>
        {item.index}/{totalCount}
      </div>
    ),
  },
};

export const CustomItem: StoryObj<typeof Breadcrumb> = {
  args: {
    renderItem: (item) => (
      <div>
        {item.index}:{item.name}
      </div>
    ),
  },
};
