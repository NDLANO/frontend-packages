/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const exampleText = "Nasjonal digital læringsarena";

/**
 * NDLA har to tekstkomponenter: `Text` og `Heading`. De underliggende komponentene er tilnærmet like, men har to store forskjeller:
 * * `Text` sin `as`-prop støtter kun et subset av HTML-tags, mens `Heading` sin `as`-prop støtter alle heading-tags.
 * * `Heading` og `Text` har forskjellige default-verdier for `textStyle`-propen.
 */
export default {
  title: "Primitives/Text Styles",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: exampleText,
  },
  parameters: {
    inlineStories: true,
  },
} as Meta<typeof Text>;

export const Default: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const HeadingLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "heading.large",
    children: exampleText,
  },
};

export const HeadingMedium: StoryObj<typeof Text> = {
  args: {
    textStyle: "heading.medium",
    children: exampleText,
  },
};

export const HeadingSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "heading.small",
    children: exampleText,
  },
};

export const TitleLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "title.large",
    children: exampleText,
  },
};

export const TitleMedium: StoryObj<typeof Text> = {
  args: {
    textStyle: "title.medium",
    children: exampleText,
  },
};

export const TitleSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "title.small",
    children: exampleText,
  },
};

export const BodyArticle: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.article",
    children: exampleText,
  },
};

export const BodyArticleLink: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.articleLink",
    children: exampleText,
  },
};

export const BodyLink: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.link",
    children: exampleText,
  },
};

export const BodyXlarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.xlarge",
    children: exampleText,
  },
};

export const BodyLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.large",
    children: exampleText,
  },
};

export const BodyMedium: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.medium",
    children: exampleText,
  },
};

export const BodySmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "body.small",
    children: exampleText,
  },
};

export const LabelLarge: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.large",
    children: exampleText,
  },
};

export const LabelLargeBold: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.large",
    fontWeight: "bold",
    children: exampleText,
  },
};

export const LabelMedium: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.medium",
    children: exampleText,
  },
};

export const LabelMediumBold: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.medium",
    fontWeight: "bold",
    children: exampleText,
  },
};

export const LabelSmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.small",
    children: exampleText,
  },
};

export const LabelSmallBold: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.small",
    fontWeight: "bold",
    children: exampleText,
  },
};

export const LabelXsmall: StoryObj<typeof Text> = {
  args: {
    textStyle: "label.xsmall",
    fontWeight: "bold",
    children: exampleText,
  },
};

export const Polymorphic: StoryFn<typeof Text> = () => (
  <Text as="div">
    The underlying HTML tag can be changed through the use of the <code>as</code> prop! To keep TypeScript happy, we
    only allow for a subset of HTML tags.
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
      <Text {...args} textStyle="heading.large" />
      <Text {...args} textStyle="heading.medium" />
      <Text {...args} textStyle="heading.small" />
      <Text {...args} textStyle="title.large" />
      <Text {...args} textStyle="title.medium" />
      <Text {...args} textStyle="title.small" />
      <Text {...args} textStyle="body.article" />
      <Text {...args} textStyle="body.articleLink" />
      <Text {...args} textStyle="body.link" />
      <Text {...args} textStyle="body.xlarge" />
      <Text {...args} textStyle="body.large" />
      <Text {...args} textStyle="body.medium" />
      <Text {...args} textStyle="body.small" />
      <Text {...args} textStyle="label.large" />
      <Text {...args} textStyle="label.large" fontWeight="bold" />
      <Text {...args} textStyle="label.medium" />
      <Text {...args} textStyle="label.medium" fontWeight="bold" />
      <Text {...args} textStyle="label.small" />
      <Text {...args} textStyle="label.small" fontWeight="bold" />
      <Text {...args} textStyle="label.xsmall" />
      <Text {...args} textStyle="label.xsmall" fontWeight="bold" />
      <Text {...args} textStyle="body.xlarge" />
      <Text {...args} data-pinyin="">
        Pinyin does not get larger if marked with data-pinyin
      </Text>
    </>
  ),
};