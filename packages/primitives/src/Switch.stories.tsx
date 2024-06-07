/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useId, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";
import { SwitchControl, SwitchHiddenInput, SwitchLabel, SwitchRoot, SwitchThumb } from "./Switch";

const meta: Meta<typeof SwitchRoot> = {
  title: "Primitives/Switch",
  component: SwitchRoot,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryFn<typeof SwitchRoot> = ({ ...args }) => {
  return (
    <SwitchRoot {...args}>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchHiddenInput />
    </SwitchRoot>
  );
};

export const WithThumbCharacter: StoryFn<typeof SwitchRoot> = ({ ...args }) => {
  return (
    <SwitchRoot {...args}>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchControl>
        <SwitchThumb>G</SwitchThumb>
      </SwitchControl>
      <SwitchHiddenInput />
    </SwitchRoot>
  );
};

export const Disabled: StoryFn<typeof SwitchRoot> = ({ ...args }) => {
  return (
    <SwitchRoot {...args} disabled>
      <SwitchLabel>Label</SwitchLabel>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchHiddenInput />
    </SwitchRoot>
  );
};

export const InForm: StoryFn<typeof SwitchRoot> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);
  const id = useId();

  return (
    <FormControl id={id} isRequired isInvalid={!checked}>
      <FieldHelper>Husk at denne switchen må være på!</FieldHelper>
      <FieldErrorMessage>Jeg sa at denne switchen må være på!</FieldErrorMessage>
      <SwitchRoot {...args}>
        <SwitchLabel>Label</SwitchLabel>
        <SwitchControl>
          <SwitchThumb />
        </SwitchControl>
        <SwitchHiddenInput checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />
      </SwitchRoot>
    </FormControl>
  );
};
