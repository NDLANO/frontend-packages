/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ArticleByline } from "./ArticleByline";

/**
 * Innholder informasjon om forfatter(e), lisensrettigheter, beskrivelse av regler ved bruk av innhold, ikon hvis artikkel er tilleggsstoff og dato for forrige oppdatering.
 */
export default {
  title: "Patterns/ArticleByline",
  component: ArticleByline,
  tags: ["autodocs"],
  parameters: {
    inlineStories: true,
  },
  args: {
    authors: [{ name: "Frida Forfatter" }, { name: "Fred Forfatter" }],
    published: "21.06.2018",
  },
} as Meta<typeof ArticleByline>;

export const ArticleBylineStory: StoryFn<typeof ArticleByline> = (args) => {
  return <ArticleByline {...args} />;
};

ArticleBylineStory.storyName = "ArticleByline";

export const SeveralAuthors: StoryObj<typeof ArticleByline> = {
  args: {
    published: "21.06.2018",
    authors: [{ name: "Frida Forfatter" }, { name: "Ida Illustratør" }, { name: "Fred Forfatter" }],
  },
};

export const SeveralSuppliers: StoryObj<typeof ArticleByline> = {
  args: {
    published: "21.06.2018",
    authors: [{ name: "Frida Forfatter" }, { name: "Ida Illustratør" }, { name: "Fred Forfatter" }],
    suppliers: [{ name: "NDLA" }, { name: "Norsk Tipping" }],
  },
};

export const WithoutCreators: StoryObj<typeof ArticleByline> = {
  args: {
    published: "21.06.2018",
    authors: [],
  },
};

export const LearningpathByline: StoryObj<typeof ArticleByline> = {
  args: {
    published: "21.06.2018",
    authors: [{ name: "Frida Forfatter" }],
    bylineType: "learningPath",
  },
};

export const LearningpathBylineCopied: StoryObj<typeof ArticleByline> = {
  args: {
    published: "21.06.2018",
    authors: [{ name: "Frida Forfatter" }],
    bylineType: "learningPath",
    learningpathCopiedFrom: "https://ndla.no/learningpath/123",
  },
};
