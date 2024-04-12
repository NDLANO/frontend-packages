/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import deepmerge from "deepmerge";
import { defineRecipe } from "@pandacss/dev";
import { button } from "./button.recipe";

export const iconButton = deepmerge(
  button,
  defineRecipe({
    className: "icon-button",
    base: {
      borderRadius: "full",
      lineHeight: "1",
      borderColor: "transparent",
      minHeight: "unset",
      "& svg": {
        margin: "0",
      },
    },
    defaultVariants: {
      size: "small",
    },
    variants: {
      size: {
        xsmall: {
          padding: "xsmall",
          "& svg": {
            width: "nsmall",
            height: "nsmall",
          },
        },
        small: {
          padding: "xsmall",
          "& svg": {
            width: "normal",
            height: "normal",
          },
        },
        normal: {
          padding: "small",
          "& svg": {
            width: "medium",
            height: "medium",
          },
        },
        medium: {
          padding: "small",
          "& svg": {
            width: "large",
            height: "large",
          },
        },
        large: {
          padding: "small",
          "& svg": {
            width: "xlarge",
            height: "xlarge",
          },
        },
      },
    },
  }),
);
