/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { FootnoteData, FootnoteEmbedData } from "@ndla/types-embed";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ArticleByline } from "../Article/ArticleByline";
import { FootnoteEmbed } from "./FootnoteEmbed";

/**
 * Kildehenvisninger benytter [APA-stilen](https://sokogskriv.no/kildebruk-og-referanser/referansestiler/apa-6th/) for utlistning nederst på siden.
 *
 * I teksten brukes en enkel nummerering for å henvise til referanse. Tallet lenkes til den aktuelle referansen.
 *
 * I referanselisten nederst lenkes hver referanse igjen til hvor de opptrer i teksten
 */
export default {
  title: "Embeds/FootnoteEmbed",
  tags: ["autodocs"],
  component: FootnoteEmbed,
  parameters: {
    inlineStories: true,
  },
  args: {
    embed: {
      resource: "footnote",
      status: "success",
      embedData: {
        resource: "footnote",
        title: "Hanseatene kommer tilbake.",
        type: "",
        year: "2013",
        edition: "",
        publisher: "Aftenposten",
        authors: "Eva Røyrane",
      },
      data: {
        entryNum: 1,
        authors: ["Eva Røyrane"],
        year: "2013",
      },
    },
  },
  render: ({ ...args }) => (
    <div>
      <p>
        Her kan det ligge en fotnote
        <FootnoteEmbed {...args} />
      </p>
    </div>
  ),
} as Meta<typeof FootnoteEmbed>;

export const Default: StoryObj<typeof FootnoteEmbed> = {};

export const WithFootnoteBox: StoryFn<typeof FootnoteEmbed> = ({ ...args }) => (
  <div>
    <p>
      Her kan det ligge en fotnote
      <FootnoteEmbed {...args} />
    </p>
    <ArticleByline
      footnotes={
        args.embed.status === "success"
          ? [
              {
                ...args.embed.embedData,
                ref: args.embed.data.entryNum,
                authors: args.embed.data.authors,
                year: args.embed.data.year,
              },
            ]
          : []
      }
    />
  </div>
);

const otherFootnoteEmbedData: FootnoteEmbedData = {
  title: "Ingen tok Ketil Bjørnstad på alvor",
  authors: "Sturle Scholz Nærø",
  publisher: "Aftenposten",
  year: "2013",
  edition: "",
  resource: "footnote",
  type: "",
};

const otherFootnoteMeta: FootnoteData = {
  entryNum: 2,
  authors: ["Sturle Scholz Nærø"],
  year: "2013",
};

export const WithSeveralFootnotes: StoryFn<typeof FootnoteEmbed> = ({ ...args }) => (
  <div>
    <p>
      Her kan det ligge en fotnote <FootnoteEmbed {...args} /> for eksempel. Her kan det ligge en til
      <FootnoteEmbed
        embed={{
          resource: "footnote",
          status: "success",
          data: otherFootnoteMeta,
          embedData: otherFootnoteEmbedData,
        }}
      />
      .
    </p>
    <ArticleByline
      footnotes={
        args.embed.status === "success"
          ? [
              {
                ...args.embed.embedData,
                ref: args.embed.data.entryNum,
                authors: args.embed.data.authors,
                year: args.embed.data.year,
              },
              {
                ...otherFootnoteEmbedData,
                ref: otherFootnoteMeta.entryNum,
                authors: otherFootnoteMeta.authors,
                year: otherFootnoteMeta.year,
              },
            ]
          : []
      }
    />
  </div>
);
