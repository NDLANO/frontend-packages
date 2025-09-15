/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";

const framedContentRecipe = cva({
  base: {
    padding: "medium",
    border: "1px solid",
    borderRadius: "small",
    clear: "both",
    overflow: "hidden",
  },
  variants: {
    colorTheme: {
      neutral: {
        backgroundColor: "surface.default",
        borderColor: "stroke.subtle",
      },
      brand1: {
        backgroundColor: "surface.brand.1.subtle",
        borderColor: "surface.brand.1.strong",
      },
      brand2: {
        backgroundColor: "surface.brand.2.subtle",
        borderColor: "surface.brand.2.strong",
      },
    },
  },
  defaultVariants: {
    colorTheme: "neutral",
  },
});

export type FramedContentVariantProps = RecipeVariantProps<typeof framedContentRecipe>;

export type FramedContentProps = HTMLArkProps<"div"> & StyledProps & FramedContentVariantProps;

const StyledFramedContent = styled(ark.div, {}, { baseComponent: true });

export const FramedContent = forwardRef<HTMLDivElement, FramedContentProps>(
  ({ colorTheme, css: cssProp, ...props }, ref) => (
    <StyledFramedContent
      data-embed-type="framed-content"
      css={css.raw(framedContentRecipe.raw({ colorTheme }), cssProp)}
      {...props}
      ref={ref}
    />
  ),
);
