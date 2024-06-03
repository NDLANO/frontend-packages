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
  "a, summary, button, [tabindex]:not([tabindex='-1'])": {
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
  a: {
    color: "text.link",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
    },
  },
});
