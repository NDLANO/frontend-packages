/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Search } from "@ndla/icons/common";
import { Check } from "@ndla/icons/editor";
import { InputContainer, TextArea } from "./Input";

/**
 * Textbox med automatisk størrelse basert på innhold.
 * Hvis det er behov for annen høyde enn default, bør det gjøres ved hjelp av css property `min-height`,
 * da komponenten overstyrer all annen height som er satt på selve komponenten.
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
    <Search />
    <TextArea {...args} />
  </InputContainer>
);

export const WithRightDecorative: StoryFn<typeof TextArea> = ({ ...args }) => (
  <InputContainer>
    <TextArea {...args} />
    <Check />
  </InputContainer>
);

export const WithExistingText: StoryFn<typeof TextArea> = ({ ...args }) => {
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
    <Search />
    <TextArea {...args} />
    <Check />
  </InputContainer>
);
