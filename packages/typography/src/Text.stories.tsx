/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArgTypes, Meta, StoryFn, StoryObj } from "@storybook/react";
import Text, { TextVariant, elementMarginStyle, elementStyle } from "./Text";
import { MarginVariant } from "./types";

const exampleText = "Nasjonal digital læringsarena";

/**
 * NDLA bruker fontene [ Source Serif Pro ](https://fonts.google.com/specimen/Source+Serif+Pro), [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) og [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro)
 *
 * Tilbakefallsfonter er Helvetica og Arial
 */
export default {
  title: "Base styles/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    element: "p",
    textStyle: "ingress",
    children: exampleText,
    margin: "normal",
  },
  argTypes: {
    margin: {
      control: {
        type: "radio",
      },
      description: "Available margin styles",
      options: Object.keys(elementMarginStyle) as MarginVariant[],
    },
    textStyle: {
      type: "select",
      description: "Available text styles",
      options: Object.keys(elementStyle) as TextVariant[],
    },
    children: {
      description: "What to render within the text",
      type: "string",
    },
    element: {
      type: "text",
      description: "Any ElementType",
    },
  } as ArgTypes<typeof Text>,
} as Meta<typeof Text>;

export const Ingress: StoryFn<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Button: StoryObj<typeof Text> = {
  args: { textStyle: "button", children: exampleText },
};

export const Content: StoryObj<typeof Text> = {
  args: {
    textStyle: "content",
    children: exampleText,
  },
};

export const ContentAlt: StoryObj<typeof Text> = {
  args: {
    textStyle: "content-alt",
    children: exampleText,
  },
};

export const MetaTextLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "meta-text-large",
    children: exampleText,
  },
};

export const MetaTextMedium: StoryObj<typeof Text> = {
  args: {
    textStyle: "meta-text-medium",
    children: exampleText,
  },
};

export const MetaTextSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "meta-text-small",
    children: exampleText,
  },
};

export const MetaTextXSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "meta-text-xsmall",
    children: exampleText,
  },
};

export const MetaTextXXSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "meta-text-xxsmall",
    children: exampleText,
  },
};

export const LabelSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "label-small",
    children: exampleText,
  },
};

export const LabelLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "label-large",
    children: exampleText,
  },
};

export const Polymorphic: StoryFn<typeof Text> = () => (
  <Text element="a" href="https://www.ndla.no">
    Text components can be transformed to anything with the element prop!
  </Text>
);

/**
 * Kinesisk har behov for egen skriftstørrelsedefinisjoner for at fonten skal være lesbar. Tekststil blir automatisk endret når en setter kinesisk som språk på en Text-komponent.
 */
export const Chinese: StoryObj<typeof Text> = {
  args: { lang: "zh-Hans", children: "人人生而自由,在尊严和权利上一律平等。" },
  render: (args) => (
    <>
      <Text {...args} />
      <Text {...args} textStyle="button" />
      <Text {...args} textStyle="content" />
      <Text {...args} textStyle="content-alt" />
      <Text {...args} textStyle="meta-text-large" />
      <Text {...args} textStyle="meta-text-medium" />
      <Text {...args} textStyle="meta-text-small" />
      <Text {...args} textStyle="meta-text-xsmall" />
      <Text {...args} textStyle="meta-text-xxsmall" />
      <Text {...args} data-pinyin="">
        Pinyin does not get larger if marked with data-pinyin
      </Text>
    </>
  ),
};
