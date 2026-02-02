/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { UUDisclaimerData, UuDisclaimerEmbedData } from "@ndla/types-embed";
import type { Meta, StoryObj } from "@storybook/react";
import { ExpandableBox, ExpandableBoxSummary, FramedContent, PageContent } from "@ndla/primitives";
import { AnchorHeading } from "../AnchorHeading/AnchorHeading";
import { ArticleWrapper, ArticleContent } from "../Article/Article";
import { FactBox } from "../FactBox/FactBox";
import { H5pEmbed } from "./H5pEmbed";
import { IframeEmbed } from "./IframeEmbed";
import { UuDisclaimerEmbed } from "./UuDisclaimerEmbed";

const embedData: UuDisclaimerEmbedData = {
  resource: "uu-disclaimer",
  disclaimer: "Dette inholdet er ikke tastaturvennlig.",
};

const data: UUDisclaimerData = {
  transformedContent: "Dette inholdet er ikke tastaturvennlig.",
};

const meta: Meta<typeof UuDisclaimerEmbed> = {
  title: "Embeds/UuDisclaimerEmbed",
  component: UuDisclaimerEmbed,
  tags: ["autodocs"],
  args: { transformedDisclaimer: data.transformedContent },
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

export const Regular: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
  },
};

export const WithIframe: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <IframeEmbed
        embed={{
          resource: "iframe",
          status: "success",
          embedData: {
            resource: "iframe",
            type: "iframe",
            url: "https://embed.kahoot.it/2a51c481-d362-475b-862b-e4b47b96b3c9",
          },
          data: {},
        }}
      />
    ),
  },
};

export const WithH5p: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <H5pEmbed
        embed={{
          resource: "h5p",
          status: "success",
          embedData: {
            resource: "h5p",
            path: "/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e",
            url: "https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&cssUrl=https://test.ndla.no/static/h5p-custom-css.css",
          },
          data: {
            h5pUrl:
              "https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&cssUrl=https://test.ndla.no/static/h5p-custom-css.css",
            oembed: {
              type: "proxy",
              version: "1.0",
              title: "Sorter avfall",
              width: 600,
              height: 300,
              html: '<div><iframe width="600" height="300" allowfullscreen="allowfullscreen" src="https://h5p-test.ndla.no/resource/c56368d0-0432-4ec3-97bd-f4ba4badf55e?locale=nb-no&amp;cssUrl=https%3A%2F%2Ftest.ndla.no%2Fstatic%2Fh5p-custom-css.css" title="Sorter avfall"></iframe><script src="https://ca.h5p.ndla.no/h5p-php-library/js/h5p-resizer.js"></script></div>',
            },
          },
        }}
      />
    ),
  },
};

export const WithHtml: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <>
        <p>Dette er html med en ekspanderboks</p>
        <ExpandableBox>
          <ExpandableBoxSummary>Tittel</ExpandableBoxSummary>
          <p>innhold</p>
        </ExpandableBox>
      </>
    ),
  },
};

export const WithFramedContent: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <FramedContent>
        <p>Dette er tekst i ramme</p>
      </FramedContent>
    ),
  },
};

export const WithFactBox: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <FactBox>
        <p>Dette er faktaboks</p>
      </FactBox>
    ),
  },
};

export const WithAnchorHeading: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData,
      data,
    },
    children: (
      <AnchorHeading copyText="Dette er en overskrift" lang="no">
        Dette er en overskrift
      </AnchorHeading>
    ),
  },
};

export const Error: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "error",
      embedData,
    },
    children: (
      <AnchorHeading copyText="Dette er en overskrift" lang="no">
        Dette er en overskrift
      </AnchorHeading>
    ),
  },
};
