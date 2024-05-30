/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { FramedContent } from "./FramedContent";

export default {
  title: "Primitives/FramedContent",
  component: FramedContent,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    colorTheme: "brand1",
    children: <p>Content!</p>,
  },
} as Meta<typeof FramedContent>;

// TODO: This should really be wrapped in an article to get proper "article" styling.
export const TooMuchContent: StoryObj<typeof FramedContent> = {
  args: {
    children: (
      <>
        <h2>
          Tekst i ramme fungerer <em>dårlig</em> med mye tekst.
        </h2>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen
          du planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
        </p>
      </>
    ),
  },
};
