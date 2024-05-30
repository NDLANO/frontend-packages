/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    textStyle: "body.medium",
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
});
