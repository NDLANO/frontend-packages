/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { CopyrightMetaData } from "@ndla/types-embed";
import FramedContent from "./FramedContent";
import FigureImage from "../../../../stories/article/FigureImage";
import { CopyrightEmbed } from "../Embed";

export default {
  title: "Components/FramedContent",
  component: FramedContent,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    children: <p>Content!</p>,
  },
} as Meta<typeof FramedContent>;

export const WithFloating: StoryObj<typeof FramedContent> = {
  args: {
    children: (
      <>
        <p>En boks med flytelementer</p>
        <FigureImage embedData={{ alt: "", align: "right" }} />
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

export const WithFloatingSmall: StoryObj<typeof FramedContent> = {
  args: {
    children: (
      <>
        <p>En boks med flytelementer</p>
        <FigureImage embedData={{ alt: "", align: "right", size: "small" }} />
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

const copyrightEmbed: CopyrightMetaData = {
  resource: "copyright",
  status: "success",
  data: undefined,
  embedData: {
    resource: "copyright",
    title: "Hallo",
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      creators: [
        {
          type: "originator",
          name: "Camilla Øvstebø ",
        },
      ],
      processors: [
        {
          type: "linguistic",
          name: "Totaltekst",
        },
      ],
      rightsholders: [],
      processed: false,
    },
  },
};

export const WithCopyrightEmbed: StoryObj<typeof FramedContent> = {
  args: {
    children: (
      <>
        <h2>Her har du helt vanlig innhold</h2>
        <p>Det kan som sagt være hva som helst.</p>
        <CopyrightEmbed embed={copyrightEmbed}>
          <p>Dette er innhold som er i en copyright-embed.</p>
        </CopyrightEmbed>
      </>
    ),
  },
};
