/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ExpandableBox, ExpandableBoxSummary } from "./ExpandableBox";
import { Heading } from "./Text";

/**
 * Dette er kun en wrapper rundt HTML details elementet.
 * `ExpandableBoxSummary` er en wrapper rundt HTML summary elementet.
 */
export default {
  title: "Primitives/ExpandableBox",
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  component: ExpandableBox,
  render: (args) => (
    <ExpandableBox {...args}>
      <ExpandableBoxSummary>Open me</ExpandableBoxSummary>
      Everything here is only visible when the box is open
    </ExpandableBox>
  ),
} as Meta<typeof ExpandableBox>;

export const Default: StoryObj<typeof ExpandableBox> = {};

export const WithHeader: StoryFn<typeof ExpandableBox> = ({ ...args }) => (
  <ExpandableBox {...args}>
    <ExpandableBoxSummary>
      <Heading as="h2">Open me as header text</Heading>
    </ExpandableBoxSummary>
    Everything here is only visible when the box is open
  </ExpandableBox>
);
