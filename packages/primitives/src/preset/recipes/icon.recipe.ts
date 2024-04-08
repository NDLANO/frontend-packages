/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineRecipe } from "@pandacss/dev";

export const icon = defineRecipe({
  className: "icon",
  base: {
    display: "inline-block",
    fill: "currentcolor",
    verticalAlign: "middle",
    lineHeight: "1em",
    flexShrink: "0",
  },
  defaultVariants: {
    size: "nsmall",
  },
  variants: {
    size: {
      xsmall: {
        width: "xsmall",
        height: "xsmall",
      },
      small: {
        width: "small",
        height: "small",
      },
      nsmall: {
        width: "nsmall",
        height: "nsmall",
      },
      normal: {
        width: "normal",
        height: "normal",
      },
      large: {
        width: "large",
        height: "large",
      },
    },
  },
});
