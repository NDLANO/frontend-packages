/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ExpandableBox, ExpandableBoxSummary } from "./ExpandableBox";

/**
 * This is just a thin wrapper around the native HTML details element.
 * `ExpandableBoxSummary` is a thin wrapper around the native HTML summary element.
 * The components will eventually add style and functionality to the native elements, as opposed to the components being styled by global css.
 */
export default {
  title: "Components/ExpandableBox",
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
      <h2>Open me as header text</h2>
    </ExpandableBoxSummary>
    Everything here is only visible when the box is open
  </ExpandableBox>
);
