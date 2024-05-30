/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { RecipeVariantProps, cva, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";

export const spinnerRecipe = cva({
  base: {
    borderRadius: "full",
    animation: "spin",
    display: "block",
    borderStyle: "solid",
    borderBlockColor: "background.subtle",
    borderInlineStartColor: "background.subtle",
    borderInlineEndColor: "stroke.default",
    marginBlock: "medium",
    marginInline: "auto",
  },
  defaultVariants: {
    size: "large",
  },
  variants: {
    size: {
      medium: {
        borderWidth: "4px",
        height: "large",
        width: "large",
      },
      large: {
        borderWidth: "8px",
        height: "xxlarge",
        width: "xxlarge",
      },
    },
  },
});

export type SpinnerVariantProps = RecipeVariantProps<typeof spinnerRecipe>;

export type SpinnerProps = ComponentPropsWithoutRef<"div"> & SpinnerVariantProps;

export const Spinner = ({ size, className, ...props }: SpinnerProps) => (
  <styled.div className={cx(spinnerRecipe({ size }), className)} {...props} />
);
