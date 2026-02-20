/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { SearchLine, CheckboxCircleFill } from "@ndla/icons";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { FieldRoot, FieldsetRoot } from "./Field";
import { FieldErrorMessage, FieldsetErrorText } from "./FieldErrorMessage";
import { FieldHelper, FieldsetHelper } from "./FieldHelper";
import { FieldInput, Input, InputContainer } from "./Input";
import { FieldLabel, FieldsetLegend, Label } from "./Label";

export default {
  title: "Primitives/Input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    inlineStories: true,
  },
  args: { componentSize: "medium" },
} as Meta<typeof Input>;

export const Default: StoryFn<typeof Input> = ({ ...args }) => <Input {...args} />;

export const Small: StoryFn<typeof Input> = () => <Input componentSize="small" />;

export const WithLeftDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <SearchLine />
    <Input placeholder="Placeholder" />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <Input />
    <CheckboxCircleFill />
  </InputContainer>
);

export const WithLeftAndRightDecorative: StoryFn<typeof Input> = () => (
  <InputContainer>
    <SearchLine />
    <Input />
    <CheckboxCircleFill />
  </InputContainer>
);

export const WithLabel: StoryFn<typeof Input> = () => (
  <div>
    <Label htmlFor="input">Label</Label>
    <Input id="input" />
  </div>
);

export const Disabled: StoryFn<typeof Input> = () => (
  <div>
    <Label data-disabled="true" htmlFor="disabledInput">
      Label
    </Label>
    <Input id="disabledInput" disabled />
  </div>
);

export const WithField: StoryFn<typeof Input> = () => {
  const [value, setValue] = useState<string>("");
  const invalid = !value.length;
  return (
    <FieldRoot required invalid={invalid}>
      <FieldLabel>Label</FieldLabel>
      <FieldHelper>Husk å skrive inn hele setningen!</FieldHelper>
      <FieldErrorMessage>Setningen kan ikke være tom!</FieldErrorMessage>
      <InputContainer>
        <SearchLine />
        <FieldInput value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        <CheckboxCircleFill />
      </InputContainer>
    </FieldRoot>
  );
};

export const GroupedInputs: StoryFn<typeof Input> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const invalid = !firstName.length || !lastName.length;
  return (
    <FieldsetRoot invalid={invalid}>
      <FieldsetLegend>Ditt fulle navn</FieldsetLegend>
      <FieldsetHelper>Noen ganger er det ikke nok med fornavn!</FieldsetHelper>
      <FieldsetErrorText>Vi trenger hele navnet ditt!</FieldsetErrorText>
      <FieldRoot required invalid={!firstName.length}>
        <FieldLabel>Fornavn</FieldLabel>
        <FieldErrorMessage>Du må ha et fornavn!</FieldErrorMessage>
        <FieldHelper>Gjerne ta med mellomnavnet ditt her også.</FieldHelper>
        <FieldInput value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
      </FieldRoot>
      <FieldRoot required invalid={!lastName.length}>
        <FieldLabel>Etternavn</FieldLabel>
        <FieldErrorMessage>Du må ha et etternavn!</FieldErrorMessage>
        <FieldInput value={lastName} onChange={(e) => setLastName(e.currentTarget.value)} />
      </FieldRoot>
    </FieldsetRoot>
  );
};
