/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Meta, StoryObj } from "@storybook/react";
import { StepsContent, StepsIndicator, StepsItem, StepsList, StepsRoot, StepsSeparator, StepsTrigger } from "./Steps";

export default {
  title: "Primitives/Steps",
  component: StepsRoot,
  tags: ["autodocs"],
  args: {
    orientation: "horizontal",
    defaultStep: 0,
    count: 3,
  },
  render: (args) => (
    <StepsRoot {...args}>
      <StepsList>
        <StepsItem index={0}>
          <StepsTrigger>
            <StepsIndicator>{1}</StepsIndicator>
            <span>Step 1</span>
          </StepsTrigger>
          <StepsSeparator />
        </StepsItem>
        <StepsItem index={1}>
          <StepsTrigger>
            <StepsIndicator>{2}</StepsIndicator>
            <span>Step 2</span>
          </StepsTrigger>
          <StepsSeparator />
        </StepsItem>
        <StepsItem index={2}>
          <StepsTrigger>
            <StepsIndicator>{12}</StepsIndicator>
            <span>Step 3</span>
          </StepsTrigger>
        </StepsItem>
      </StepsList>
      <StepsContent index={0}>Step 1</StepsContent>
      <StepsContent index={1}>Step 2</StepsContent>
      <StepsContent index={2}>Step 3</StepsContent>
    </StepsRoot>
  ),
} satisfies Meta<typeof StepsRoot>;

export const Horizontal: StoryObj<typeof StepsRoot> = {};

export const Vertical: StoryObj<typeof StepsRoot> = {
  args: {
    orientation: "vertical",
  },
};
