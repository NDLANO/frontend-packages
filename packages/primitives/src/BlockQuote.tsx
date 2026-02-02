/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { StyledProps } from "@ndla/styled-system/types";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { type RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { forwardRef } from "react";

const blockQuoteRecipe = cva({
  base: {
    borderInlineStart: "4px solid",
    paddingInline: "medium",
  },
  variants: {
    variant: {
      neutral: {
        borderColor: "stroke.subtle",
        background: "surface.default",
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

export type BlockQuoteVariantProps = NonNullable<RecipeVariantProps<typeof blockQuoteRecipe>>;

export interface BlockQuoteProps extends HTMLArkProps<"blockquote">, StyledProps, BlockQuoteVariantProps {}

const StyledBlockQuote = styled(ark.blockquote, {}, { baseComponent: true });

export const BlockQuote = forwardRef<HTMLQuoteElement, BlockQuoteProps>(({ variant, css: cssProp, ...props }, ref) => (
  <StyledBlockQuote css={css.raw(blockQuoteRecipe.raw({ variant }), cssProp)} {...props} ref={ref} />
));
