/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PageContent } from "@ndla/primitives";
import type { OembedEmbedData, OembedData } from "@ndla/types-embed";
import type { Meta, StoryObj } from "@storybook/react";
import { ArticleWrapper, ArticleContent } from "../Article/Article";
import { ExternalEmbed } from "./ExternalEmbed";

const embedData: OembedEmbedData = {
  resource: "external",
  url: "https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media",
  type: "iframe",
};

const embedDataFullscreen: OembedEmbedData = {
  resource: "external",
  url: "https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media",
  type: "fullscreen",
  title: "Zahra Biabani: The eco-creators helping the climate through social media",
  caption: "Ted talk",
  imageid: "65086",
};

const metaData: OembedData = {
  oembed: {
    type: "video",
    version: "1.0",
    title: "Zahra Biabani: The eco-creators helping the climate through social media",
    description:
      '"Climate doom-ism," or a pessimistic outlook on the future of the planet, rivals climate denialism in holding up the fight against climate change, says activist Zahra Biabani. Illuminating how hope combats inaction, she takes us inside the world of eco-friendly content on TikTok -- and shows that we all have what it takes to make real change.',
    authorName: "Zahra Biabani",
    authorUrl: "https://www.ted.com/speakers/zahra_biabani",
    providerName: "TED",
    providerUrl: "https://www.ted.com",
    cacheAge: 300,
    thumbnailUrl:
      "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/803ab5d5-2cff-4764-b5b6-545217159538/ZahraBiabani_2022T-embed.jpg?h=315&w=560",
    thumbnailWidth: 560,
    thumbnailHeight: 315,
    width: 560,
    height: 315,
    html: '<iframe src="https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media" width="560" height="315" allowfullscreen style="border: none;" scrolling="no"></iframe>',
  },
};

const meta: Meta<typeof ExternalEmbed> = {
  title: "Embeds/ExternalEmbed",
  component: ExternalEmbed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <PageContent variant="content" asChild>
        <ArticleWrapper>
          <ArticleContent>
            <section>
              <Story />
            </section>
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
    ),
  ],
};

export default meta;

export const Regular: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: "external",
      status: "success",
      embedData: embedData,
      data: metaData,
    },
  },
};

export const Failed: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: "external",
      status: "error",
      embedData: embedData,
    },
  },
};

const opensInNewMetaData: OembedData = {
  oembed: {
    type: "video",
    version: "1.0",
    title: "Zahra Biabani: The eco-creators helping the climate through social media",
    description:
      '"Climate doom-ism," or a pessimistic outlook on the future of the planet, rivals climate denialism in holding up the fight against climate change, says activist Zahra Biabani. Illuminating how hope combats inaction, she takes us inside the world of eco-friendly content on TikTok -- and shows that we all have what it takes to make real change.',
    authorName: "Zahra Biabani",
    authorUrl: "https://www.ted.com/speakers/zahra_biabani",
    providerName: "TED",
    providerUrl: "https://www.ted.com",
    cacheAge: 300,
    thumbnailUrl:
      "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/803ab5d5-2cff-4764-b5b6-545217159538/ZahraBiabani_2022T-embed.jpg?h=315&w=560",
    thumbnailWidth: 560,
    thumbnailHeight: 315,
    width: 560,
    height: 315,
    html: '<iframe src="https://embed.ted.com/talks/zahra_biabani_the_eco_creators_helping_the_climate_through_social_media" width="560" height="315" allowfullscreen style="border: none;" scrolling="no" ></iframe>',
  },
  iframeImage: {
    id: "65086",
    inactive: false,
    metaUrl: "https://api.test.ndla.no/image-api/v3/images/65086",
    title: {
      title: "\nSamtale ",
      language: "nb",
    },
    alttext: {
      alttext: " To ungdommer sitter og snakker. Foto. ",
      language: "nb",
    },
    copyright: {
      license: {
        license: "COPYRIGHTED",
        description: "Copyrighted",
      },
      origin: "",
      creators: [],
      processors: [],
      rightsholders: [
        {
          type: "rightsholder",
          name: "Folkehelseprosjektet Helsefremmende miljø på sosial medier, Bergen kommune 2019-2022",
        },
      ],
      processed: false,
    },
    tags: {
      tags: ["samtale", "Dialog", "gutter"],
      language: "nb",
    },
    caption: {
      caption: 'Dette bildet skal bare brukes i casen "Livet på sosiale medier". ',
      language: "nb",
    },
    supportedLanguages: ["nb"],
    created: "2022-12-02T14:24:19Z",
    createdBy: "oltQx44eGQp0DwkiR1NRo5qE",
    modelRelease: "yes",
    image: {
      fileName: "IgOjO6og.jpg",
      size: 176667,
      variants: [],
      contentType: "image/jpeg",
      imageUrl: "https://api.test.ndla.no/image-api/raw/IgOjO6og.jpg",
      dimensions: {
        width: 1920,
        height: 804,
      },
      language: "nb",
    },
  },
};

export const Fullscreen: StoryObj<typeof ExternalEmbed> = {
  args: {
    embed: {
      resource: "external",
      status: "success",
      embedData: embedDataFullscreen,
      data: opensInNewMetaData,
    },
  },
};
