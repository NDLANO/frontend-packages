/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useId, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { css } from "@ndla/styled-system/css";
import { Button } from "./Button";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";
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
};

export default meta;

const subjects = ["Norsk", "Engelsk", "Matte", "Naturfag"];

export const Default: StoryFn<typeof RadioGroupRoot> = ({ ...args }) => {
  return (
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
  );
};

export const WithFormControl: StoryFn<typeof RadioGroupRoot> = ({ ...args }) => {
  const id = useId();
  const [value, setValue] = useState<string | null>(null);
  const isInvalid = !value;
  return (
    <FormControl id={id} isInvalid={isInvalid} className={css({ alignItems: "flex-start" })}>
      <RadioGroupRoot {...args} value={value} onValueChange={(e) => setValue(e.value)}>
        <RadioGroupLabel>Ditt favorittfag</RadioGroupLabel>
        <FieldHelper>Husk at du må velge riktig fag!</FieldHelper>
        <FieldErrorMessage>Du må velge noe!</FieldErrorMessage>
        {subjects.map((subject, index) => (
          <RadioGroupItem key={subject} value={subject} disabled={index === 2}>
            <RadioGroupItemControl />
            <RadioGroupItemText>{subject}</RadioGroupItemText>
            <RadioGroupItemHiddenInput />
          </RadioGroupItem>
        ))}
      </RadioGroupRoot>
      <Button onClick={() => setValue(null)}>Reset</Button>
    </FormControl>
  );
};
