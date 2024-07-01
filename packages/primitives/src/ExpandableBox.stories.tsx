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
 * This is just a thin wrapper around the native HTML details element.
 * `ExpandableBoxSummary` is a thin wrapper around the native HTML summary element.
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
      <Heading asChild>
        <h2>Open me as header text</h2>
      </Heading>
    </ExpandableBoxSummary>
    Everything here is only visible when the box is open
  </ExpandableBox>
);
