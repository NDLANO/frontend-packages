/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  ":root": {
    // Applied to html in preflight (css reset)
    "--global-font-body": "fonts.sans",
    // Code, kbd, pre, samp
    "--global-font-mono": "fonts.code",
  },
  html: {
    minHeight: "100%",
    fontFeatureSettings: "'ss03' on, 'liga' off, 'clig' off",
  },
  body: {
    background: "background.default",
    color: "text.default",
  },
  "a, summary,[tabindex]:not([tabindex='-1'])": {
    outline: "none",
    _focusVisible: {
      outline: "3px",
      borderRadius: "xsmall",
      outlineColor: "stroke.default",
      outlineOffset: "3px",
      outlineStyle: "solid",
    },
  },
  code: {
    background: "background.subtle",
    whiteSpace: "pre-wrap",
  },
  /* Hide default zendesk launcher so that we can provide our own. */
  "iframe#launcher": {
    display: "none",
  },
  // For future readers: Life here would be much simpler if we could use flex.
  // However, our usage of float within the article content forces us to use margins.
  ".ndla-article": {
    h1: {
      textStyle: "heading.medium",
    },
    h2: {
      textStyle: "heading.small",
    },
    h3: {
      textStyle: "title.medium",
    },
    "h4, h5, h6": {
      textStyle: "title.small",
    },
    '& p[data-align="center"]': {
      textAlign: "center",
    },
    '& p:has(span[dir="rtl"])': {
      direction: "rtl",
    },
    textStyle: "body.article",
    width: "100%",

    // Non-figure block elements that should have margin above and below.
    '& details, blockquote, [data-embed-type="framed-content"], [data-embed-type="factbox"], table, [data-embed-type="related-content-list"], [data-embed-type="link-block-list"], [data-embed-type="blog-post"], [data-embed-type="campaign-block"], [data-embed-type="key-figure"], [data-embed-type="grid"], [data-embed-type="contact-block"], [data-embed-type="file-list"], [data-embed-type="uu-disclaimer"]':
      {
        marginBlockStart: "xxlarge",
        marginBlockEnd: "xxlarge",
      },

    // Article content is usually wrapped in a section. The rest of the elements in this list contains other elements, and should add margin to them no matter where they are placed in the DOM.
    '& section:not([class]), section:not([class]) > div:not([class]), [data-embed-type="framed-content"], [data-embed-type="grid"] > div, [data-embed-type="grid-parallax"] > div, [data-embed-type="factbox"] > div, [data-embed-type="copyright"], [data-embed-type="uu-disclaimer"], details, blockquote':
      {
        '& > :is(h2, [data-embed-type="copy-heading"])': {
          marginBlockStart: "xlarge",
          marginBlockEnd: "small",
        },
        "& > h3": {
          marginBlockStart: "large",
          marginBlockEnd: "xsmall",
        },
        "& > :is(h4, h5, h6)": {
          marginBlockStart: "medium",
          marginBlockEnd: "xsmall",
        },
        "& > :is(figure)": {
          marginBlockStart: "xxlarge",
          marginBlockEnd: "xxlarge",
        },
        '& > :is(p, ul, ol, dl, [data-embed-type="speech"])': {
          marginBlockStart: "xsmall",
          marginBlockEnd: "xsmall",
        },
        "& > :is(:first-child)": {
          marginBlockStart: "xxlarge",
        },
      },
    '& [data-embed-type="framed-content"], [data-embed-type="grid"] > div, [data-embed-type="grid-parallax"] > div, [data-embed-type="factbox"] > div, [data-embed-type="copyright"], [data-embed-type="uu-disclaimer"], details, blockquote':
      {
        "& > :first-child": {
          marginBlockStart: "0",
        },
        "& > :last-child": {
          marginBlockEnd: "0",
        },
      },
    "& section:not([class]), section:not([class]) > div:not([class])": {
      "& > :first-child": {
        marginBlockStart: "xxlarge",
      },
      "& > :last-child": {
        marginBlockEnd: "xxlarge",
      },
    },
  },
  // Adds default link styling to links without classes
  'a:not([class]):not([data-unstyled]), a[class=""]:not([data-unstyled])': {
    color: "text.link",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
    _visited: {
      color: "text.linkVisited",
    },
  },
});
