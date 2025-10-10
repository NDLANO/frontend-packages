/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

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
  },
} as Meta<typeof Breadcrumb>;

export const Defalt: StoryObj<typeof Breadcrumb> = {
  args: {
    renderSeparator: (item, totalCount) => (
      <div style={{ padding: "0px 12px" }}>
        {item.index}/{totalCount}
      </div>
    ),
    renderItem: (item) => (
      <div>
        {item.index}:{item.name}
      </div>
    ),
  },
};
