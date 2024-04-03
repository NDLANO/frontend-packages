/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Person } from "@ndla/icons/common";
import { Text } from "@ndla/typography";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";
import { Input, InputContainer, TextArea } from "./InputV3";
import { Label } from "./Label";

export default {
  title: "Forms/FormControl",
  tags: ["autodocs"],
  component: FormControl,
  parameters: {
    inlineStories: true,
  },
  args: {
    id: "name",
  },
  argTypes: {
    isInvalid: { control: false },
  },
} as Meta<typeof FormControl>;

export const Default: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="content" id="name-info" margin="none">
        We need to know your name!
      </Text>
      <Label>Name</Label>
      <InputContainer>
        <Person />
        <Input
          name="name"
          aria-describedby="name-info"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </InputContainer>
      <FieldErrorMessage>This field is required</FieldErrorMessage>
    </FormControl>
  );
};

export const WithFormHelper: StoryFn<typeof FormControl> = ({ ...args }) => {
  return (
    <FormControl {...args}>
      <Label>Name</Label>
      <InputContainer>
        <Person />
        <Input name="name" />
      </InputContainer>
      <FieldHelper>Make sure to use proper punctuation</FieldHelper>
    </FormControl>
  );
};

export const FormHelperWhenNoError: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="content" id="name-info" margin="none">
        We need to know your name!
      </Text>
      <Label>Name</Label>
      <InputContainer>
        <Person />
        <Input
          name="name"
          aria-describedby="name-info"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </InputContainer>
      {!isInvalid ? (
        <FieldHelper>Make sure to use proper punctuation</FieldHelper>
      ) : (
        <FieldErrorMessage>This field is required</FieldErrorMessage>
      )}
    </FormControl>
  );
};

/**
 * Dette eksempelet ligger her kun for å vise at det går an å bruke alle komponentene uten å bruke
 * FormControl. Det krever dog at en har tunga rett i munnen og vet hva en gjør.
 */
export const WithoutFormControl: StoryFn<typeof FormControl> = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  const baseLabels = ["name-info"];
  const labels = isInvalid ? baseLabels.concat("name-error") : baseLabels.concat("name-helper");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text textStyle="content" id="name-info" margin="none">
        We need to know your name!
      </Text>
      <Label htmlFor="name">Name</Label>
      <InputContainer>
        <Person />
        <Input
          id="name"
          name="name"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          aria-describedby={labels.join(" ")}
          aria-required={true}
          aria-invalid={isInvalid}
        />
      </InputContainer>
      {!isInvalid ? (
        <FieldHelper id="name-helper">Make sure to use proper punctuation!</FieldHelper>
      ) : (
        <FieldErrorMessage id="name-error">This field is required</FieldErrorMessage>
      )}
    </div>
  );
};

export const TextAreaFormControl: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="content" id="name-info" margin="none">
        We need to know your name!
      </Text>
      <Label>Name</Label>
      <InputContainer>
        <Person />
        <TextArea
          name="name"
          aria-describedby="name-info"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </InputContainer>
      {!isInvalid ? (
        <FieldHelper>Make sure to use proper punctuation</FieldHelper>
      ) : (
        <FieldErrorMessage>This field is required</FieldErrorMessage>
      )}
    </FormControl>
  );
};
