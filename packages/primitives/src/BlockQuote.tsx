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

const blockQuoteRecipe = cva({
  base: {
    borderInlineStart: "4px solid",
    paddingInline: "medium",
  },
  variants: {
    variant: {
      neutral: {
        borderColor: "stroke.subtle",
        // TODO: Figure out if this should have a background color.
      },
      brand1: {
        background: "surface.brand.1.subtle",
        borderColor: "surface.brand.1.strong",
      },
      brand2: {
        background: "surface.brand.2.subtle",
        borderColor: "surface.brand.2.strong",
      },
    },
  },
  defaultVariants: {
    variant: "neutral",
  },
});

export type BlockQuoteVariantProps = RecipeVariantProps<typeof blockQuoteRecipe>;

export type BlockQuoteProps = ComponentPropsWithoutRef<"blockquote"> & BlockQuoteVariantProps;

export const BlockQuote = ({ className, variant, ...rest }: BlockQuoteProps) => (
  <styled.blockquote className={cx(blockQuoteRecipe({ variant }), className)} {...rest} />
);
