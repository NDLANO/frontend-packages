/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { defineRecipe } from "@pandacss/dev";

export const spinner = defineRecipe({
  className: "spinner",
  base: {
    borderRadius: "full",
    animation: "spin",
    display: "block",
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderBottomColor: "brand.primary",
    marginY: "normal",
    marginX: "auto",
  },
  variants: {
    inverted: {
      true: {
        borderBottomColor: "white",
      },
    },
    size: {
      xxsmall: {
        borderWidth: "0.615px",
        height: "xxsmall",
        width: "xxsmall",
      },
      xsmall: {
        borderWidth: "0.923px",
        height: "xsmall",
        width: "xsmall",
      },
      small: {
        borderWidth: "1.846px",
        height: "small",
        width: "small",
      },
      nsmall: {
        borderWidth: "2.461px",
        height: "nsmall",
        width: "nsmall",
      },
      normal: {
        borderWidth: "3.692px",
        height: "normal",
        width: "normal",
      },
      medium: {
        borderWidth: "4.615px",
        height: "medium",
        width: "medium",
      },
      mediumLarge: {
        borderWidth: "5.538px",
        height: "mediumLarge",
        width: "mediumLarge",
      },
      large: {
        borderWidth: "7.384px",
        height: "large",
        width: "large",
      },
    },
  },
});
