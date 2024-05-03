/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { ConceptData, ConceptEmbedData } from "@ndla/types-embed";
import ConceptEmbed from "./ConceptEmbed";
import StoryFavoriteButton from "../../../../stories/StoryFavoriteButton";
import { OneColumn } from "../Layout";

const blockEmbedData: ConceptEmbedData = {
  contentId: "35",
  resource: "concept",
  type: "block",
  linkText: "",
};

const glossBlockEmbedData: ConceptEmbedData = {
  contentId: "4942",
  resource: "concept",
  type: "block",
  linkText: "",
};

const inlineEmbedData: ConceptEmbedData = {
  contentId: "2318",
  linkText: "forklaring",
  resource: "concept",
  type: "inline",
};

const glossInlineEmbedData: ConceptEmbedData = {
  contentId: "23",
  linkText: "glose",
  resource: "concept",
  type: "inline",
};

const conceptMetaData: ConceptData["concept"] = {
  id: 110,
  revision: 16,
  title: { title: "skin – formasjonsskade", language: "nb" },
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
    creators: [{ type: "Writer", name: "Sissel Paaske" }],
    processors: [
      { type: "Processor", name: "Totaltekst" },
      { type: "Correction", name: "Arbeidets art" },
    ],
    rightsholders: [],
    processed: false,
  },
  source: "",
  metaImage: {
    url: "https://api.test.ndla.no/image-api/raw/id/52863",
    alt: "Eksempel på hvordan borevæsken kan trenge ut i formasjonen fra borehullet og skade formasjonens permeabilitet. Illustrasjon.",
    language: "nb",
  },
  tags: { tags: ["Brønn:Reservoar:"], language: "nb" },
  subjectIds: ["urn:subject:6"],
  created: "2018-07-02T10:53:40Z",
  updated: "2020-11-18T08:58:33Z",
  updatedBy: ["sPHJn0BEtfxw2d2DUpIuS3iY", "KBAJskRqPXZUv9LFjAbz8btB", "eEIRDzflTh9oUp_3CgpuIMOg"],
  supportedLanguages: ["nb", "nn"],
  articleIds: [],
  status: { current: "PUBLISHED", other: [] },
  visualElement: {
    visualElement:
      '<ndlaembed data-resource="image" data-resource_id="52863" data-alt="Eksempel på hvordan borevæsken kan trenge ut i formasjonen fra borehullet og skade formasjonens permeabilitet. Illustrasjon." data-size="full" data-align="" data-url="https://api.test.ndla.no/image-api/v2/images/52863"></ndlaembed>',
    language: "nb",
  },
  conceptType: "concept",
};

const glossMetaData: ConceptData["concept"] = {
  id: 4942,
  revision: 6,
  title: {
    title: "Ma Hong",
    language: "nb",
  },
  content: {
    content: "Hei",
    htmlContent: "Hei",
    language: "nb",
  },
  copyright: {
    creators: [],
    processors: [],
    rightsholders: [],
    processed: false,
  },
  source: "",
  metaImage: {
    url: "",
    alt: "",
    language: "und",
  },
  created: "2023-07-19T09:30:40.000Z",
  updated: "2023-09-19T17:13:56.573Z",
  updatedBy: ["XxnkdI7rApMl58MeG3p4g4B8", "hd5ZL5Lm4kKkumWgN2gjy9wx"],
  supportedLanguages: ["nb"],
  articleIds: [],
  status: {
    current: "IN_PROGRESS",
    other: [],
  },
  responsible: {
    responsibleId: "XxnkdI7rApMl58MeG3p4g4B8",
    lastUpdated: "2023-07-19T09:30:40.000Z",
  },
  conceptType: "gloss",
  glossData: {
    gloss: "马红",
    wordClass: "personal-pronoun",
    originalLanguage: "zh",
    transcriptions: {},
    examples: [
      [
        {
          example: "我叫马红",
          language: "zh",
          transcriptions: {
            pinyin: "wo jiao ma hong ",
          },
        },
        {
          example: "Jeg heter ma hong",
          language: "nb",
          transcriptions: {},
        },
      ],
    ],
  },
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
          type: "Illustrator",
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

const glossBlockData: ConceptData = {
  concept: glossMetaData,
};

const meta: Meta<typeof ConceptEmbed> = {
  title: "Embeds/ConceptEmbed",
  component: ConceptEmbed,
  tags: ["autodocs"],
  args: {
    fullWidth: false,
  },
  decorators: [
    (Story) => (
      <OneColumn>
        <article className="c-article c-article--clean">
          <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
            <section>
              <Story />
            </section>
          </section>
        </article>
      </OneColumn>
    ),
  ],
};

export default meta;

export const Block: StoryObj<typeof ConceptEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "concept",
      status: "success",
      embedData: blockEmbedData,
      data: blockMetaData,
    },
  },
};
export const GlossBlock: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: glossBlockEmbedData,
      data: glossBlockData,
    },
  },
};

export const BlockFailed: StoryObj<typeof ConceptEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "concept",
      status: "error",
      embedData: blockEmbedData,
    },
  },
};

export const Inline: StoryObj<typeof ConceptEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "concept",
      status: "success",
      embedData: inlineEmbedData,
      data: blockMetaData,
    },
  },
};

export const GlossInline: StoryObj<typeof ConceptEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: glossInlineEmbedData,
      data: glossBlockData,
    },
  },
};

export const InlineFailed: StoryObj<typeof ConceptEmbed> = {
  args: {
    heartButton: StoryFavoriteButton,
    embed: {
      resource: "concept",
      status: "error",
      embedData: inlineEmbedData,
    },
  },
};
