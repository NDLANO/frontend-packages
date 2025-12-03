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
    // this is included in the css reset we use. We don't want it.
    "& h1, h2, h3, h4, h5, h6": {
      textWrap: "unset",
    },
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
    // TODO: This is not an actual text style. Should it be?
    blockquote: {
      textStyle: "body.medium",
      fontFamily: "serif",
    },
    '& p:has(span[dir="rtl"])': {
      direction: "rtl",
    },
    textStyle: "body.article",
    width: "100%",

    // Non-figure block elements that should have margin above and below.
    '& details, :not(li) > blockquote, [data-embed-type="expandable-box"], [data-embed-type="framed-content"], [data-embed-type="factbox"], table, [data-embed-type="related-content-list"], [data-embed-type="link-block-list"], [data-embed-type="pitch"], [data-embed-type="campaign-block"], [data-embed-type="key-figure"], [data-embed-type="grid"], [data-embed-type="contact-block"], [data-embed-type="file-list"], [data-embed-type="uu-disclaimer"]':
      {
        marginBlockStart: "xxlarge",
        marginBlockEnd: "xxlarge",
        tabletDown: {
          marginBlockStart: "xlarge",
          marginBlockEnd: "xlarge",
        },
      },

    // Article content is usually wrapped in a section. The rest of the elements in this list contains other elements, and should add margin to them no matter where they are placed in the DOM.
    '& section:not([class]), section:not([class]) > div:not([class]), [data-embed-type="framed-content"], [data-embed-type="grid"] > div, [data-embed-type="grid-parallax"] > div, [data-embed-type="factbox"] > div, [data-embed-type="copyright"] > [data-copyright-content], [data-embed-type="uu-disclaimer"] > [data-uu-content], [data-embed-wrapper], details, [data-embed-type="expandable-box"], blockquote':
      {
        '& > :is(h2, [data-embed-type="copy-heading"])': {
          marginBlockStart: "xlarge",
          marginBlockEnd: "small",
          tabletDown: {
            marginBlockStart: "large",
          },
        },
        "& > h3": {
          marginBlockStart: "large",
          marginBlockEnd: "xsmall",
          tabletDown: {
            marginBlockStart: "medium",
          },
        },
        "& > :is(h4, h5, h6)": {
          marginBlockStart: "medium",
          marginBlockEnd: "xsmall",
          tabletDown: {
            marginBlockStart: "small",
          },
        },
        "& > :is(figure)": {
          marginBlockStart: "xxlarge",
          marginBlockEnd: "xxlarge",
          tabletDown: {
            marginBlockStart: "xlarge",
          },
        },
        '& > :is(p, ul, ol, dl, [data-embed-type="speech"])': {
          marginBlockStart: "xsmall",
          marginBlockEnd: "xsmall",
        },
        '& > :is([data-embed-type="ordered-list"])': {
          marginInlineStart: "small",
        },
      },
    '& [data-embed-type="framed-content"], [data-embed-type="grid"] > div, [data-embed-type="grid-parallax"] > div, [data-embed-type="factbox"] > div, [data-embed-type="copyright"] > [data-copyright-content], [data-embed-type="uu-disclaimer"] > [data-uu-content], details, blockquote':
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
        tabletDown: {
          marginBlockStart: "xlarge",
        },
      },
      "& > :last-child": {
        marginBlockEnd: "xxlarge",
        tabletDown: {
          marginBlockStart: "xlarge",
        },
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
  ".codeblock": {
    border: "1px solid",
    borderColor: "stroke.subtle",
    borderLeft: "4px solid",
    borderLeftColor: "stroke.default",
    borderRadius: "xsmall",
    boxSizing: "border-box",
    overflowX: "auto",
    textStyle: "label.medium",
    fontFamily: "code",
    display: "block",
    whiteSpace: "pre",
    "& .linenumber": {
      display: "inline-block",
      paddingBlock: "0",
      paddingInline: "small",
      borderRight: "1px solid",
      borderColor: "stroke.subtle",
      width: "xxlarge",
      textAlign: "right",
      marginInlineEnd: "xsmall",
    },
    "& :nth-child(1 of .linenumber)": {
      paddingBlockStart: "xsmall",
    },
    "& :nth-last-child(1 of .linenumber)": {
      paddingBlockEnd: "xsmall",
    },
    // The remaining css is copied from the coy theme in prismjs. A lot of css is omitted due to styling clashes. TODO: Consider moving this
    "& .token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
      color: "#7d8b99",
    },
    "& .token.punctuation": {
      color: "#5f6364",
    },
    "& .token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol, .token.deleted":
      {
        color: "#c92c2c",
      },
    "& .token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.builtin, .token.inserted":
      {
        color: "#2f9c0a",
      },
    "& .token.operator, .token.entity, .token.url, .token.variable": {
      color: "#a67f59",
      background: "rgba(255, 255, 255, 0.5)",
    },
    "& .token.atrule, .token.attr-value, .token.keyword, .token.class-name": {
      color: "#1990b8",
    },
    "& .token.regex, .token.important": {
      color: "#e90",
    },
    "& .language-css .token.string, .style .token.string": {
      color: "#a67f59",
      background: "rgba(255, 255, 255, 0.5)",
    },
    "& .token.important": {
      fontWeight: "normal",
    },
    "& .token.bold": {
      fontWeight: "bold",
    },
    "& .token.italic": {
      fontStyle: "italic",
    },
    "& .token.entity": {
      cursor: "help",
    },
    "& .token.namespace": {
      opacity: "0.7",
    },
  },
});
