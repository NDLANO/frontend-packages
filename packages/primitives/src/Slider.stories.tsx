/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import {
  SliderControl,
  SliderHiddenInput,
  SliderLabel,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "./Slider";

export default {
  title: "Primitives/Slider",
  component: SliderRoot,
  tags: ["autodocs"],
  args: {
    max: 100,
    min: 0,
    defaultValue: [50],
  },
  render: (args) => (
    <SliderRoot {...args}>
      <SliderLabel>Rate this slider from 0 to 100</SliderLabel>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0}>
          <SliderHiddenInput />
        </SliderThumb>
      </SliderControl>
    </SliderRoot>
  ),
} as Meta<typeof SliderRoot>;

export const Horizontal: StoryObj<typeof SliderRoot> = {
  args: {
    orientation: "horizontal",
  },
};

/**
 * Sliders kan også være vertikale. Da er det viktig å sette en høyde på `SliderControl`.
 */
export const Vertical: StoryObj<typeof SliderRoot> = {
  args: {
    orientation: "vertical",
    max: 10,
    min: 0,
    defaultValue: [1],
  },
  render: (args) => (
    <SliderRoot {...args}>
      <SliderLabel>Rate this slider from 1 to 10</SliderLabel>
      <SliderControl style={{ height: "200px" }}>
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb index={0}>
          <SliderHiddenInput />
        </SliderThumb>
      </SliderControl>
    </SliderRoot>
  ),
};
