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
  },
  body: {
    background: "background.default",
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
  // TODO: Remove these again once they're no longer needed.
  // Some text elements don't have a styling class, and therefor no margin. Handled with generic fallbacks in old global css, and now temporarily handled by these selectors.
  "h1:not([class])": {
    margin: "24px 0 12px 0",
  },
  "h2:not([class])": {
    margin: "48px 0 12px 0",
  },
  "h3:not([class]), h4:not([class]), h5:not([class])": {
    margin: "36px 0 6px 0",
  },
  "p:not([class])": {
    marginBottom: "24px",
  },
  "blockquote:not([class])": {
    margin: "30px 0",
  },
  h1: {
    textStyle: "heading.medium",
  },
  h2: {
    textStyle: "heading.small",
  },
  h3: {
    textStyle: "title.large",
  },
  "h4, h5, h6": {
    textStyle: "title.medium",
  },
  p: {
    textStyle: "body.medium",
  },
  "a:not([class])": {
    color: "text.link",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  },
});
