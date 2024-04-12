/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { RecipeVariantProps, cva, cx } from "@ndla/styled-system/css";

export const spinnerRecipe = cva({
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

export type SpinnerVariantProps = RecipeVariantProps<typeof spinnerRecipe>;

export type SpinnerProps = ComponentPropsWithoutRef<"div"> & SpinnerVariantProps;

export const Spinner = ({ size, inverted, className, ...props }: SpinnerProps) => (
  <div {...props} className={cx(spinnerRecipe({ size, inverted }), className)} />
);
