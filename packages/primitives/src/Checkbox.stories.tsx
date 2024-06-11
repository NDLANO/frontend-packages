/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useId, useState } from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Done } from "@ndla/icons/editor";
import { CheckboxControl, CheckboxHiddenInput, CheckboxIndicator, CheckboxLabel, CheckboxRoot } from "./Checkbox";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";

const meta: Meta<typeof CheckboxRoot> = {
  title: "Primitives/Checkbox",
  component: CheckboxRoot,
  tags: ["autodocs"],
  render: (args) => (
    <CheckboxRoot {...args}>
      <CheckboxControl>
        <CheckboxIndicator asChild>
          <Done />
        </CheckboxIndicator>
      </CheckboxControl>
      <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
      <CheckboxHiddenInput />
    </CheckboxRoot>
  ),
};

export default meta;

export const Default: StoryObj<typeof CheckboxRoot> = {};

export const Disabled: StoryObj<typeof CheckboxRoot> = {
  args: {
    disabled: true,
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

export const WithFormControl: StoryFn<typeof CheckboxRoot> = (args) => {
  const id = useId();
  const [checked, setChecked] = useState(false);

  return (
    <FormControl id={id} isInvalid={checked}>
      <FieldHelper>Ikke kryss av denne!</FieldHelper>
      <FieldErrorMessage>Denne skal ikke være avkrysset!</FieldErrorMessage>
      <CheckboxRoot {...args} checked={checked} onCheckedChange={(e) => setChecked(e.checked === true)}>
        <CheckboxControl>
          <CheckboxIndicator asChild>
            <Done />
          </CheckboxIndicator>
        </CheckboxControl>
        <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
        <CheckboxHiddenInput />
      </CheckboxRoot>
    </FormControl>
  );
};

export const FormControlRequired: StoryFn<typeof CheckboxRoot> = (args) => {
  const id = useId();
  const [checked, setChecked] = useState(false);

  return (
    <FormControl id={id} isInvalid={!checked} isRequired>
      <FieldErrorMessage>Du må godta dette!</FieldErrorMessage>
      <CheckboxRoot {...args} checked={checked} onCheckedChange={(e) => setChecked(e.checked === true)}>
        <CheckboxControl>
          <CheckboxIndicator asChild>
            <Done />
          </CheckboxIndicator>
        </CheckboxControl>
        <CheckboxLabel>Jeg godtar dette</CheckboxLabel>
        <CheckboxHiddenInput />
      </CheckboxRoot>
    </FormControl>
  );
};
