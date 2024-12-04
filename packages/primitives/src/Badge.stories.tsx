/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    colorTheme: "neutral",
    children: "Kjernestoff",
  },
  render: ({ children, ...args }) => <Badge {...args}>{children}</Badge>,
} as Meta<typeof Badge>;

export const Neutral: StoryObj<typeof Badge> = {};

export const Brand1: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "brand1",
    children: "Fagstoff",
  },
};

export const Brand2: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "brand2",
    children: "Oppgaver og aktiviteter",
  },
};

export const Brand3: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "brand3",
    children: "Læringssti",
  },
};

export const Success: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "success",
    children: "Endret",
  },
};

export const Warning: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "warning",
    children: "Noe skurrer...",
  },
};

export const Danger: StoryObj<typeof Badge> = {
  args: {
    colorTheme: "danger",
    children: "Pass på!",
  },
};
