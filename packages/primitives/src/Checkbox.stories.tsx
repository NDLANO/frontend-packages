/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CheckLine } from "@ndla/icons";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  CheckboxControl,
  CheckboxGroup,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
} from "./Checkbox";
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";

const meta: Meta<typeof CheckboxRoot> = {
  title: "Primitives/Checkbox",
  component: CheckboxRoot,
  tags: ["autodocs"],
  render: (args) => (
    <CheckboxRoot {...args}>
      <CheckboxControl>
        <CheckboxIndicator asChild>
          <CheckLine />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
      <CheckboxHiddenInput />
    </CheckboxRoot>
  ),
};

export default meta;

export const Default: StoryObj<typeof CheckboxRoot> = {};

export const Chip: StoryObj<typeof CheckboxRoot> = {
  args: {
    variant: "chip",
  },
};

export const Disabled: StoryObj<typeof CheckboxRoot> = {
  args: {
    disabled: true,
  },
};

export const ChipDisabled: StoryObj<typeof CheckboxRoot> = {
  args: {
    variant: "chip",
    disabled: true,
  },
};

export const ChipDisabledChecked: StoryObj<typeof CheckboxRoot> = {
  args: {
    variant: "chip",
    disabled: true,
    defaultChecked: true,
  },
};

export const ChipInvalid: StoryObj<typeof CheckboxRoot> = {
  args: {
    variant: "chip",
    invalid: true,
  },
};

export const ChipInvalidChecked: StoryObj<typeof CheckboxRoot> = {
  args: {
    variant: "chip",
    invalid: true,
    defaultChecked: true,
  },
};

export const DisabledChecked: StoryObj<typeof CheckboxRoot> = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const Required: StoryObj<typeof CheckboxRoot> = {
  args: {
    required: true,
  },
};

export const Invalid: StoryObj<typeof CheckboxRoot> = {
  args: {
    invalid: true,
  },
};

export const WithField: StoryFn<typeof CheckboxRoot> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <FieldRoot invalid={checked}>
      <FieldHelper>Ikke kryss av denne!</FieldHelper>
      <FieldErrorMessage>Denne skal ikke være avkrysset!</FieldErrorMessage>
      <CheckboxRoot {...args} checked={checked} onCheckedChange={(e) => setChecked(e.checked === true)}>
        <CheckboxControl>
          <CheckboxIndicator asChild>
            <CheckLine />
          </CheckboxIndicator>
        </CheckboxControl>
        <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
        <CheckboxHiddenInput />
      </CheckboxRoot>
    </FieldRoot>
  );
};

export const WithRequiredField: StoryFn<typeof CheckboxRoot> = (args) => {
  const [checked, setChecked] = useState(false);

  return (
    <FieldRoot invalid={!checked} required>
      <FieldErrorMessage>Du må godta dette!</FieldErrorMessage>
      <CheckboxRoot {...args} checked={checked} onCheckedChange={(e) => setChecked(e.checked === true)}>
        <CheckboxControl>
          <CheckboxIndicator asChild>
            <CheckLine />
          </CheckboxIndicator>
        </CheckboxControl>
        <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
        <CheckboxHiddenInput />
      </CheckboxRoot>
    </FieldRoot>
  );
};

export const Group: StoryFn<typeof CheckboxRoot> = () => {
  const items = [
    { value: "1", label: "Verdi 1" },
    { value: "2", label: "Verdi 2" },
    { value: "3", label: "Verdi 3" },
    { value: "4", label: "Verdi 4" },
  ];
  return (
    <CheckboxGroup defaultValue={["1", "3"]}>
      {items.map((item) => (
        <CheckboxRoot key={item.value} value={item.value}>
          <CheckboxControl>
            <CheckboxIndicator asChild>
              <CheckLine />
            </CheckboxIndicator>
          </CheckboxControl>
          <CheckboxLabel>{item.label}</CheckboxLabel>
          <CheckboxHiddenInput />
        </CheckboxRoot>
      ))}
    </CheckboxGroup>
  );
};
