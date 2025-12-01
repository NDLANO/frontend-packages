/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryObj } from "@storybook/react";
import { PageContent } from "@ndla/primitives";
import type { ConceptData, ConceptEmbedData } from "@ndla/types-embed";
import { ConceptEmbed } from "./ConceptEmbed";
import { ArticleContent, ArticleWrapper } from "../Article/Article";

const blockEmbedData: ConceptEmbedData = {
  contentId: "35",
  resource: "concept",
  type: "block",
};

const inlineEmbedData: ConceptEmbedData = {
  contentId: "2318",
  resource: "concept",
  type: "inline",
};

const conceptMetaData: ConceptData["concept"] = {
  id: 110,
  revision: 16,
  title: { title: "skin – formasjonsskade", htmlTitle: "skin – formasjonsskade", language: "nb" },
  content: {
    content:
      "<p>Ordet «skin» er engelsk og brukes om formasjonsskade som oppstår i boreprosessen i området som grenser inn til brønnen. Skaden er størst i området nærmest hullet, men den kan bre seg utover et stykke fra brønnen. Skin forteller om bergartens permeabilitet i reservoarsonen.</p> <p>Hullveggen skades både av borekronen, små partikler og væsken som brukes i brønnen.</p> <p>Skaden i bergarten gir dårligere forhold for oljen som skal strømme til brønnen. Gangene i bergarten plugges, og det oppstår et trykkfall som reduserer produksjonstrykket i brønnen.</p> <p>Det er viktig å redusere omfanget av skaden ved å velge væsker som passer godt til bergartsegenskapene, og å bore med en borekrone som skader minst mulig.</p> <p>Skader som er dannet av borevæske, kan repareres ved å syrebehandle hullets overflate.</p>",
    htmlContent:
      "<p>Ordet «skin» er engelsk og brukes om formasjonsskade som oppstår i boreprosessen i området som grenser inn til brønnen. Skaden er størst i området nærmest hullet, men den kan bre seg utover et stykke fra brønnen. Skin forteller om bergartens permeabilitet i reservoarsonen.</p> <p>Hullveggen skades både av borekronen, små partikler og væsken som brukes i brønnen.</p> <p>Skaden i bergarten gir dårligere forhold for oljen som skal strømme til brønnen. Gangene i bergarten plugges, og det oppstår et trykkfall som reduserer produksjonstrykket i brønnen.</p> <p>Det er viktig å redusere omfanget av skaden ved å velge væsker som passer godt til bergartsegenskapene, og å bore med en borekrone som skader minst mulig.</p> <p>Skader som er dannet av borevæske, kan repareres ved å syrebehandle hullets overflate.</p>",
    language: "nb",
  },
  copyright: {
    license: {
      license: "CC-BY-SA-4.0",
      description: "Creative Commons Attribution-ShareAlike 4.0 International",
      url: "https://creativecommons.org/licenses/by-sa/4.0/",
    },
    creators: [{ type: "writer", name: "Sissel Paaske" }],
    processors: [
      { type: "processor", name: "Totaltekst" },
      { type: "correction", name: "Arbeidets art" },
    ],
    rightsholders: [],
    processed: false,
  },
  source: "",
  tags: { tags: ["Brønn:Reservoar:"], language: "nb" },
  created: "2018-07-02T10:53:40Z",
  updated: "2020-11-18T08:58:33Z",
  updatedBy: ["sPHJn0BEtfxw2d2DUpIuS3iY", "KBAJskRqPXZUv9LFjAbz8btB", "eEIRDzflTh9oUp_3CgpuIMOg"],
  supportedLanguages: ["nb", "nn"],
  status: { current: "PUBLISHED", other: [] },
  visualElement: {
    visualElement:
      '<ndlaembed data-resource="image" data-resource_id="52863" data-alt="Eksempel på hvordan borevæsken kan trenge ut i formasjonen fra borehullet og skade formasjonens permeabilitet. Illustrasjon." data-size="full" data-align="" data-url="https://api.test.ndla.no/image-api/v2/images/52863"></ndlaembed>',
    language: "nb",
  },
  conceptType: "concept",
};

const visualElementData: ConceptData["visualElement"] = {
  resource: "image",
  status: "success",
  embedData: {
    resource: "image",
    resourceId: "52863",
    alt: "Eksempel på hvordan borevæsken kan trenge ut i formasjonen fra borehullet og skade formasjonens permeabilitet. Illustrasjon.",
    size: "full",
    align: "",
    url: "https://api.test.ndla.no/image-api/v2/images/52863",
  },
  data: {
    id: "52863",
    metaUrl: "https://api.test.ndla.no/image-api/v3/images/52863",
    title: {
      title: "Skin - formasjonsskade",
      language: "nb",
    },
    alttext: {
      alttext: "Skissen viser hvordan borevæsken trenger inn i formasjonen i området nær hullet. Illustrasjon.",
      language: "nb",
    },
    copyright: {
      license: {
        license: "CC-BY-SA-4.0",
        description: "Creative Commons Attribution-ShareAlike 4.0 International",
        url: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      origin: "",
      creators: [
        {
          type: "illustrator",
          name: "Sissel Paaske",
        },
      ],
      processors: [],
      rightsholders: [],
      processed: false,
    },
    tags: {
      tags: ["skin", "formasjonsskade", "nærbrønn", "permeabilitet"],
      language: "nb",
    },
    caption: {
      caption: 'Formasjonsskade i nærbrønnområdet kalles "skin". Illustrasjon.',
      language: "nb",
    },
    supportedLanguages: ["nb"],
    created: "2020-10-26T15:02:47Z",
    createdBy: "KBAJskRqPXZUv9LFjAbz8btB",
    modelRelease: "not-set",
    image: {
      variants: [],
      fileName: "6WbfcOmr.png",
      size: 194971,
      contentType: "image/png",
      imageUrl: "https://api.test.ndla.no/image-api/raw/6WbfcOmr.png",
      dimensions: {
        width: 429,
        height: 565,
      },
      language: "nb",
    },
  },
};

const blockMetaData: ConceptData = {
  concept: conceptMetaData,
  visualElement: visualElementData,
};

const meta: Meta<typeof ConceptEmbed> = {
  title: "Embeds/ConceptEmbed",
  component: ConceptEmbed,
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <PageContent variant="content" asChild>
        <ArticleWrapper>
          <ArticleContent>
            <Story />
          </ArticleContent>
        </ArticleWrapper>
      </PageContent>
    ),
  ],
};

export default meta;

export const Block: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: blockEmbedData,
      data: blockMetaData,
    },
  },
};

export const BlockFailed: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "error",
      embedData: blockEmbedData,
    },
  },
};

export const Inline: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: inlineEmbedData,
      data: blockMetaData,
    },
    children: "forklaring",
  },
};

export const InlineFailed: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "error",
      embedData: inlineEmbedData,
    },
    children: "forklaring",
  },
};
