/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useArgs } from "@storybook/preview-api";
import { Meta, StoryFn } from "@storybook/react";
import LetterFilter from "./LetterFilter";
import { defaultParameters } from "../../../../stories/defaults";

export default {
  title: "Components/LetterFilter",
  component: LetterFilter,
  tags: ["autodocs"],
  parameters: {
    ...defaultParameters,
  },
  args: {
    enabledLetters: ["a", "c"],
    onChange: (value?: string) => {},
  },
} as Meta<typeof LetterFilter>;

export const LetterFilterStory: StoryFn<typeof LetterFilter> = (args) => {
  const [, updateArgs] = useArgs();

  return <LetterFilter {...args} onChange={(val) => updateArgs({ value: val })} />;
};

LetterFilterStory.storyName = "LetterFilter";
