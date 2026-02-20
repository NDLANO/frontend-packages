/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryObj } from "@storybook/react";
import { type ReactNode } from "react";
import { Figure } from "./Figure";
import { Text } from "./Text";

export default {
  title: "Primitives/Figure",
  tags: ["autodocs"],
  component: Figure,
  parameters: {
    inlineStories: true,
  },
  args: {
    size: "full",
    float: undefined,
  },
  render: (args) => (
    <Figure {...args}>
      <img src="https://api.test.ndla.no/image-api/raw/id/604" alt="Mitt drømmeslott" />
    </Figure>
  ),
} satisfies Meta<typeof Figure>;

export const Default: StoryObj<typeof Figure> = {
  args: {},
};

export const FloatRight: StoryObj<typeof Figure> = {
  args: {
    float: "right",
    size: "medium",
  },
};

export const FloatRightSmall: StoryObj<typeof Figure> = {
  args: {
    float: "right",
    size: "small",
  },
};

export const FloatRightXsmall: StoryObj<typeof Figure> = {
  args: {
    float: "right",
    size: "xsmall",
  },
};

export const FloatLeft: StoryObj<typeof Figure> = {
  args: {
    float: "left",
    size: "medium",
  },
};

export const FloatLeftSmall: StoryObj<typeof Figure> = {
  args: {
    float: "left",
    size: "small",
  },
};

export const FloatLeftXsmall: StoryObj<typeof Figure> = {
  args: {
    float: "left",
    size: "xsmall",
  },
};

const TextWrapper = ({ children }: { children: ReactNode }) => (
  <styled.div css={{ "& > p": { marginBlock: "medium", width: "100%" } }}>
    <Text>
      Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig av
      at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
    </Text>
    {children}

    <Text>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </Text>
    <Text>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </Text>
    <Text>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </Text>
  </styled.div>
);

export const FloatRightWithText: StoryObj<typeof Figure> = {
  render: () => (
    <TextWrapper>
      <Figure float="right" size="medium">
        <img src="https://api.test.ndla.no/image-api/raw/id/604" alt="Mitt drømmeslott" />
      </Figure>
    </TextWrapper>
  ),
};

export const FloatLeftWithText: StoryObj<typeof Figure> = {
  render: () => (
    <TextWrapper>
      <Figure float="left" size="medium">
        <img src="https://api.test.ndla.no/image-api/raw/id/604" alt="Mitt drømmeslott" />
      </Figure>
    </TextWrapper>
  ),
};
