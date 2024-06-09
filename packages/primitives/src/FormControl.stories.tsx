/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useId, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Person } from "@ndla/icons/common";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";
import { FormInput, FormTextArea, Input, InputContainer } from "./Input";
import { FormLabel, Label } from "./Label";
import { Text } from "./Text";

export default {
  title: "Primitives/FormControl",
  tags: ["autodocs"],
  component: FormControl,
  parameters: {
    inlineStories: true,
  },
  argTypes: {
    isInvalid: { control: false },
  },
} as Meta<typeof FormControl>;

export const Default: StoryFn<typeof FormControl> = ({ ...args }) => {
  const id = useId();
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <FormControl {...args} id={id} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        We need to know your name!
      </Text>
      <FormLabel>Name</FormLabel>
      <InputContainer>
        <Person />
        <FormInput
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
  const id = useId();
  return (
    <FormControl {...args} id={id}>
      <FormLabel>Name</FormLabel>
      <InputContainer>
        <Person />
        <FormInput name="name" />
      </InputContainer>
      <FieldHelper>Make sure to use proper punctuation</FieldHelper>
    </FormControl>
  );
};

export const Disabled: StoryFn<typeof FormControl> = ({ ...args }) => {
  const id = useId();
  return (
    <FormControl {...args} id={id} isDisabled>
      <FormLabel>Name</FormLabel>
      <InputContainer>
        <Person />
        <FormInput name="name" />
      </InputContainer>
      <FieldHelper>Make sure to use proper punctuation</FieldHelper>
    </FormControl>
  );
};

export const DisabledWithoutWrapper: StoryFn<typeof FormControl> = ({ ...args }) => {
  const id = useId();
  return (
    <FormControl {...args} id={id} isDisabled>
      <FormLabel>Name</FormLabel>
      <FormInput name="name" />
      <FieldHelper>Make sure to use proper punctuation</FieldHelper>
    </FormControl>
  );
};

export const WithoutWrapper: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const id = useId();
  const isInvalid = value.length === 0;
  return (
    <FormControl {...args} id={id} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        We need to know your name!
      </Text>
      <FormLabel>Name</FormLabel>
      <FieldErrorMessage>This field is required</FieldErrorMessage>
      <FormInput
        name="name"
        aria-describedby="name-info"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </FormControl>
  );
};

export const FormHelperWhenNoError: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const id = useId();
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} id={id} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        We need to know your name!
      </Text>
      <FormLabel>Name</FormLabel>
      <InputContainer>
        <Person />
        <FormInput
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
      <Text textStyle="label.small" id="name-info">
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
          required={true}
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
  const id = useId();
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} id={id} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        We need to know your name!
      </Text>
      <FormLabel>Name</FormLabel>
      <InputContainer>
        <Person />
        <FormTextArea
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
