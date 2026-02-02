/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ConceptData, ConceptEmbedData } from "@ndla/types-embed";
import type { Meta, StoryObj } from "@storybook/react";
import { wordClass } from "../model/WordClass";
import { GlossEmbed } from "./GlossEmbed";

const glossBlockEmbedData: ConceptEmbedData = {
  contentId: "4942",
  resource: "concept",
  type: "block",
};

const glossInlineEmbedData: ConceptEmbedData = {
  contentId: "23",
  resource: "concept",
  type: "inline",
};

const glossMetaData: ConceptData["concept"] = {
  id: 4942,
  revision: 6,
  title: {
    title: "Ma Hong",
    htmlTitle: "Ma Hong",
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
  created: "2023-07-19T09:30:40.000Z",
  updated: "2023-09-19T17:13:56.573Z",
  updatedBy: ["XxnkdI7rApMl58MeG3p4g4B8", "hd5ZL5Lm4kKkumWgN2gjy9wx"],
  supportedLanguages: ["nb"],
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
    wordClass: ["personal-pronoun", wordClass.verb],
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

const glossBlockData: ConceptData = {
  concept: glossMetaData,
};

export default {
  title: "Embeds/GlossEmbed",
  component: GlossEmbed,
  tags: ["autodocs"],
  argTypes: {
    children: { control: false },
  },
  render: (args) => <GlossEmbed {...args} />,
} satisfies Meta<typeof GlossEmbed>;

export const Block: StoryObj<typeof GlossEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: glossBlockEmbedData,
      data: glossBlockData,
    },
  },
};

export const BlockFailed: StoryObj<typeof GlossEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "error",
      embedData: glossBlockEmbedData,
    },
  },
};

export const Inline: StoryObj<typeof GlossEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "success",
      embedData: glossInlineEmbedData,
      data: glossBlockData,
    },
    children: "glose",
  },
};

export const InlineFailed: StoryObj<typeof GlossEmbed> = {
  args: {
    embed: {
      resource: "concept",
      status: "error",
      embedData: glossInlineEmbedData,
    },
    children: "glose",
  },
};
