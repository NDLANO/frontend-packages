/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { HomeBreadcrumb } from "./HomeBreadcrumb";

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
  title: "Components/Breadcrumb/HomeBreadcrumb",
  component: HomeBreadcrumb,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    items: items,
  },
} as Meta<typeof HomeBreadcrumb>;

export const Default: StoryObj<typeof HomeBreadcrumb> = {};
