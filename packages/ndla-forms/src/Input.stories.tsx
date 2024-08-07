/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { SearchLine } from "@ndla/icons/common";
import { CheckboxCircleFill } from "@ndla/icons/editor";
import { Input, InputContainer } from "./InputV3";

export default {
  title: "Forms/Input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = () => <Input />;

export const WithLeftDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <SearchLine />
    <Input />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <Input />
    <CheckboxCircleFill />
  </InputContainer>
);

export const WithLeftAndRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <SearchLine />
    <Input />
    <CheckboxCircleFill />
  </InputContainer>
);
