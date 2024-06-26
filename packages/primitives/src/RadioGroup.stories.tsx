/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemText,
  RadioGroupLabel,
  RadioGroupRoot,
} from "./RadioGroup";

const meta: Meta<typeof RadioGroupRoot> = {
  title: "Primitives/RadioGroup",
  component: RadioGroupRoot,
  tags: ["autodocs"],
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <RadioGroupRoot {...args}>
      <RadioGroupLabel>Ditt favorittfag</RadioGroupLabel>
      {subjects.map((subject, index) => (
        <RadioGroupItem key={subject} value={subject} disabled={index === 2}>
          <RadioGroupItemControl />
          <RadioGroupItemText>{subject}</RadioGroupItemText>
          <RadioGroupItemHiddenInput />
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  ),
};

export default meta;

const subjects = ["Norsk", "Engelsk", "Matte", "Naturfag"];

export const Default: StoryObj<typeof RadioGroupRoot> = {};

export const Vertical: StoryObj<typeof RadioGroupRoot> = {
  args: {
    orientation: "vertical",
  },
};

export const Horizontal: StoryObj<typeof RadioGroupRoot> = {
  args: {
    orientation: "horizontal",
  },
};
