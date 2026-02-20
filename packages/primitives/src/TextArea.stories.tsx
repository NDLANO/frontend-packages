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
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { FieldHelper } from "./FieldHelper";
import { FieldTextArea, InputContainer, TextArea } from "./Input";
import { FieldLabel } from "./Label";

/**
 * A textbox that automatically resizes itself based on its content.
 * If you want to set a different height than the default, it should be done using the `min-height` css property,
 * as the component overrides any height set on the component itself.
 */
export default {
  title: "Primitives/TextArea",
  tags: ["autodocs"],
  component: TextArea,
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof TextArea>;

export const Default: StoryFn<typeof TextArea> = ({ ...args }) => <TextArea {...args} />;

export const WithLeftDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <SearchLine />
    <TextArea {...args} />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <TextArea {...args} />
    <CheckboxCircleFill />
  </InputContainer>
);

export const WithExistingText: StoryFn<typeof TextArea> = () => {
  const [value, setValue] = useState(
    `I denne delte mappa finner du fagstoff og oppgaver fra NDLA. Artiklene er samlet inn og satt i rekkefølge av en lærer. 

    Du kan bla i artiklene ved å bruke menyen.`,
  );

  return (
    <InputContainer>
      <TextArea value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </InputContainer>
  );
};

export const WithLeftAndRightDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <SearchLine />
    <TextArea {...args} />
    <CheckboxCircleFill />
  </InputContainer>
);

export const WithField: StoryFn<typeof TextArea> = () => {
  const [value, setValue] = useState<string>("");
  const invalid = !value.length;
  return (
    <FieldRoot required invalid={invalid}>
      <FieldLabel>Tell your story</FieldLabel>
      <FieldHelper>Remember to include every detail!</FieldHelper>
      <FieldErrorMessage>This cannot be empty!</FieldErrorMessage>
      <InputContainer>
        <SearchLine />
        <FieldTextArea value={value} onChange={(e) => setValue(e.currentTarget.value)} />
        <CheckboxCircleFill />
      </InputContainer>
    </FieldRoot>
  );
};
