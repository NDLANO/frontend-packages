/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Person } from "@ndla/icons/common";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FormControl } from "./FormControl";
import { Input, InputContainer, TextArea } from "./Input";
import { Label } from "./Label";
import { Text } from "./Text";

/**
 * Form control komponent inspirert av chakra-ui. Gjør det enklere å sette opp form fields.
 */
export default {
  title: "Primitives/FormControl",
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
      <Text textStyle="label.small" id="name-info">
        Vi har behov for å vite navnet ditt!
      </Text>
      <Label>Navn</Label>
      <InputContainer>
        <Person />
        <Input
          name="name"
          aria-describedby="name-info"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </InputContainer>
      <FieldErrorMessage>Dette feltet er obligatorisk</FieldErrorMessage>
    </FormControl>
  );
};

export const WithFormHelper: StoryFn<typeof FormControl> = ({ ...args }) => {
  return (
    <FormControl {...args}>
      <Label>Navn</Label>
      <InputContainer>
        <Person />
        <Input name="name" />
      </InputContainer>
      <FieldHelper>Husk å bruke korrekt tegnsetting!</FieldHelper>
    </FormControl>
  );
};

export const Disabled: StoryFn<typeof FormControl> = ({ ...args }) => {
  return (
    <FormControl {...args} isDisabled>
      <Label>Navn</Label>
      <InputContainer>
        <Person />
        <Input name="name" />
      </InputContainer>
      <FieldHelper>Husk å bruke korrekt tegnsetting!</FieldHelper>
    </FormControl>
  );
};

export const DisabledWithoutWrapper: StoryFn<typeof FormControl> = ({ ...args }) => {
  return (
    <FormControl {...args} isDisabled>
      <Label>Navn</Label>
      <Input name="name" />
      <FieldHelper>Husk å bruke korrekt tegnsetting!</FieldHelper>
    </FormControl>
  );
};

export const WithoutWrapper: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        Vi har behov for å vite navnet ditt!
      </Text>
      <Label>Navn</Label>
      <FieldErrorMessage>Dette feltet er obligatorisk</FieldErrorMessage>
      <Input name="name" aria-describedby="name-info" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </FormControl>
  );
};

export const FormHelperWhenNoError: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        Vi har behov for å vite navnet ditt!
      </Text>
      <Label>Navn</Label>
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
        <FieldHelper>Husk å bruke korrekt tegnsetting!</FieldHelper>
      ) : (
        <FieldErrorMessage>Dette feltet er obligatorisk</FieldErrorMessage>
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
        Vi har behov for å vite navnet ditt!
      </Text>
      <Label htmlFor="name">Navn</Label>
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
        <FieldHelper id="name-helper">Husk å bruke korrekt tegnsetting!</FieldHelper>
      ) : (
        <FieldErrorMessage id="name-error">Dette feltet er obligatorisk</FieldErrorMessage>
      )}
    </div>
  );
};

export const TextAreaFormControl: StoryFn<typeof FormControl> = ({ ...args }) => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;

  return (
    <FormControl {...args} isInvalid={isInvalid}>
      <Text textStyle="label.small" id="name-info">
        Vi har behov for å vite navnet ditt!
      </Text>
      <Label>Navn</Label>
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
        <FieldHelper>Husk å bruke korrekt tegnsetting!</FieldHelper>
      ) : (
        <FieldErrorMessage>Dette feltet er obligatorisk</FieldErrorMessage>
      )}
    </FormControl>
  );
};
