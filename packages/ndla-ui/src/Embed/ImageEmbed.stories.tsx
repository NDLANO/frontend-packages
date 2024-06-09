/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IImageMetaInformationV3 } from "@ndla/types-backend/image-api";
import { ImageEmbedData } from "@ndla/types-embed";
import ImageEmbed from "./ImageEmbed";
import StoryFavoriteButton from "../../../../stories/StoryFavoriteButton";
import { ArticleWrapper } from "../Article";
import LayoutItem, { OneColumn } from "../Layout";

const embedData: ImageEmbedData = {
  resource: "image",
  resourceId: "61181",
  size: "full",
  align: "",
  alt: "Tenåringsjente med lyse fletter slenger på håret. Foto. ",
  caption:
    "Den østerrikske tronfølgeren Franz Ferdinand og hans hustru Sophie var på besøk i Sarajevo i 1914. Begge ble skutt og drept av nasjonalisten Gavrilo Princip i det som er kjent som <em>skuddene i Sarajevo</em>. Denne hendelsen var den utløsende årsaken til første verdenskrig.",
  url: "https://api.test.ndla.no/image-api/v2/images/61181",
};

const metaData: IImageMetaInformationV3 = {
  id: "61181",
  metaUrl: "https://api.test.ndla.no/image-api/v3/images/61181",
  title: {
    title: "\nHigh angle view of teenage girl with tousled dyed hair dancing at skateboard park\n",
    language: "nb",
  },
  alttext: {
    alttext: "Tenåringsjente med lyse fletter slenger på håret. Foto. ",
    language: "nb",
  },
  copyright: {
    license: {
      license: "CC-BY-NC-4.0",
      description: "Creative Commons Attribution-NonCommercial 4.0 International",
      url: "https://creativecommons.org/licenses/by-nc/4.0/",
    },
    origin: "https://bilder.ntb.no/r/preview/creative/EXuziiZGWno",
    creators: [
      {
        type: "photographer",
        name: "Maskot",
      },
    ],
    processors: [],
    rightsholders: [
      {
        type: "rightsholder",
        name: "NTB",
      },
    ],
    processed: false,
  },
  tags: {
    tags: ["danser", "kultur", "identitet"],
    language: "nb",
  },
  caption: {
    caption: "Modellklarert.",
    language: "nb",
  },
  supportedLanguages: ["nb"],
  created: "2022-01-07T08:26:01Z",
  createdBy: "lA2KgVfhY-fpmgHCYAy5W1DX",
  modelRelease: "yes",
  image: {
    fileName: "S81WiNgl.jpg",
    size: 1685455,
    contentType: "image/jpeg",
    imageUrl: "https://api.test.ndla.no/image-api/raw/S81WiNgl.jpg",
    dimensions: {
      width: 2000,
      height: 1333,
    },
    language: "nb",
  },
};

/** Bilder har tre mulige plasseringer: fullbredde midtstilt, venstrestilt og høyrestilt. Bilder kan være i størrelsene ekstra liten, liten, medium og stor (fullbredde). Bilder som ikke er fullbredde, kan ekspanderes på klikk. */
const meta: Meta<typeof ImageEmbed> = {
  title: "Embeds/ImageEmbed",
  component: ImageEmbed,
  tags: ["autodocs"],
  args: {
    previewAlt: true,
  },
  decorators: [
    (Story) => (
      <OneColumn>
        <ArticleWrapper modifier="clean">
          <LayoutItem layout="center">
            <section>
              <Story />
            </section>
          </LayoutItem>
        </ArticleWrapper>
      </OneColumn>
    ),
  ],
};

export default meta;

export const ImageEmbedStory: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: embedData,
      data: metaData,
    },
  },
};

ImageEmbedStory.storyName = "ImageEmbed";

export const Failed: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "error",
      embedData: embedData,
    },
  },
};

export const HiddenByline: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        size: "full-hide-byline",
      },
      data: metaData,
    },
  },
};

export const FullWidth: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: embedData,
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const Cropped: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        lowerRightX: "50.0",
        lowerRightY: "50.0",
        upperLeftX: "0.5",
        upperLeftY: "0",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

const TextWrapper = ({ children }: { children: ReactNode }) => (
  <>
    <p>
      Du har en kjempegod idé til en kortfilm. Men det koster mange penger å produsere filmen. Derfor er du avhengig av
      at noen tenner på idéen din og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
    </p>
    {children}

    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
    <p>
      Pitching er også en god måte å bevisstgjøre seg selv på. Når du pitcher, blir idéen og historien i den filmen du
      planlegger å lage, tydeligere for både deg selv og dem du eventuelt jobber sammen med i klassen.
    </p>
  </>
);

export const FloatLeft: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        align: "left",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const FloatRight: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        align: "right",
      },
      data: metaData,
    },
  },

  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const FloatRightSmall: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        size: "small",
        align: "right",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const FloatLeftSmall: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        size: "small",
        align: "left",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const FloatRightExtraSmall: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        size: "xsmall",
        align: "right",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};

export const FloatLeftExtraSmall: StoryObj<typeof ImageEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "image",
      status: "success",
      embedData: {
        ...embedData,
        size: "xsmall",
        align: "left",
      },
      data: metaData,
    },
  },
  render: (args) => (
    <TextWrapper>
      <ImageEmbed {...args} />
    </TextWrapper>
  ),
};
