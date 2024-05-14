/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { UuDisclaimerEmbedData } from "@ndla/types-embed";
import H5pEmbed from "./H5pEmbed";
import IframeEmbed from "./IframeEmbed";
import UuDisclaimerEmbed from "./UuDisclaimerEmbed";
import { ArticleWrapper } from "../Article";
import FactBox from "../FactBox";
import FramedContent from "../FramedContent";
import { OneColumn } from "../Layout";

const embedData: UuDisclaimerEmbedData = {
  resource: "uu-disclaimer",
  disclaimer: "Dette inholdet er ikke tastaturvennlig.",
  articleId: "123",
};

const meta: Meta<typeof UuDisclaimerEmbed> = {
  title: "Embeds/UuDisclaimerEmbed",
  component: UuDisclaimerEmbed,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <OneColumn>
        <ArticleWrapper modifier="clean">
          <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">
            <section>
              <Story />
            </section>
          </section>
        </ArticleWrapper>
      </OneColumn>
    ),
  ],
};

export default meta;

export const Regular: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {},
    },
  },
};

export const WithLink: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {
        disclaimerLink: {
          href: "https://ndla.no/article/123",
          text: "Navn på artikkel med innhold",
        },
      },
    },
  },
};

export const WithIframe: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {},
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
      embedData: embedData,
      data: {},
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
      embedData: embedData,
      data: {},
    },
    children: (
      <>
        <p>Dette er html med en ekspanderboks</p>
        <details>
          <summary>Tittel</summary>
          <p>innhold</p>
        </details>
      </>
    ),
  },
};

export const WithFramedContent: StoryObj<typeof UuDisclaimerEmbed> = {
  args: {
    embed: {
      resource: "uu-disclaimer",
      status: "success",
      embedData: embedData,
      data: {},
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
      embedData: embedData,
      data: {},
    },
    children: (
      <FactBox>
        <p>Dette er faktaboks</p>
      </FactBox>
    ),
  },
};
