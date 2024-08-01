/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SearchLine } from "@ndla/icons/common";
import { CheckboxCircleFill } from "@ndla/icons/editor";
import { InputContainer, TextArea } from "./InputV3";

/**
 * A textbox that automatically resizes itself based on its content.
 * If you want to set a different height than the default, it should be done using the `min-height` css property,
 * as the component overrides any height set on the component itself.
 */
export default {
  title: "Forms/TextArea",
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
    <SearchLine />
    <TextArea {...args} />
    <CheckboxCircleFill />
  </InputContainer>
);
