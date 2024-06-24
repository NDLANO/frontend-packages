/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps, ark } from "@ark-ui/react";
import { RecipeVariantProps, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

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

export type BlockQuoteProps = HTMLArkProps<"blockquote"> & JsxStyleProps & BlockQuoteVariantProps;

export const BlockQuote = styled(ark.blockquote, blockQuoteRecipe);
