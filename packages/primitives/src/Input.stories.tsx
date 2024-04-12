/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { Search } from "@ndla/icons/common";
import { Check } from "@ndla/icons/editor";
import { Input, InputContainer } from "./Input";

export default {
  title: "Primitives/Input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = () => <Input />;

export const WithLeftDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <Search />
    <Input />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <Input />
    <Check />
  </InputContainer>
);

export const WithLeftAndRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <Search />
    <Input />
    <Check />
  </InputContainer>
);
