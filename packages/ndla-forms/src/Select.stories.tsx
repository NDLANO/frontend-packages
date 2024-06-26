/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useId, useMemo, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FormControl } from "./FormControl";
import { Label } from "./Label";
import Select from "./Select";

const roleExamples = [
  "Opphaver",
  "Fotograf",
  "Kunstner",
  "Forfatter",
  "Manusforfatter",
  "Innleser",
  "Oversetter",
  "Regissør",
  "Illustratør",
  "Medforfatter",
  "Komponist",
];

export default {
  title: "Forms/Native Select",
  tags: ["autodocs"],
  component: Select,
  args: {
    value: "Fotograf",
  },
  argTypes: {
    onChange: { control: false },
    children: { control: false },
  },
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Select>;

export const Default: StoryFn<typeof Select> = ({ value: valueProp, ...args }) => {
  const [value, setValue] = useState(valueProp);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  return (
    <Select {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      <option value="">Tildel rolle</option>
      {roleExamples.map((titleRole) => (
        <option value={titleRole} key={titleRole}>
          {titleRole}
        </option>
      ))}
    </Select>
  );
};

export const WithFormControl: StoryFn<typeof Select> = ({ value: valueProp, ...args }) => {
  const [value, setValue] = useState<string | undefined>(valueProp as string | undefined);
  const error = useMemo(() => {
    if (!value?.length) {
      return "Du må velge en rolle";
    }
    return undefined;
  }, [value]);

  const id = useId();

  useEffect(() => {
    setValue(valueProp as string);
  }, [valueProp]);

  return (
    <FormControl id={id} isRequired isInvalid={!!error}>
      <Label>Rolle</Label>
      <Select {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        <option value="">Tildel rolle</option>
        {roleExamples.map((titleRole) => (
          <option value={titleRole} key={titleRole}>
            {titleRole}
          </option>
        ))}
      </Select>
      <FieldErrorMessage>{error}</FieldErrorMessage>
    </FormControl>
  );
};
