/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithoutRef } from "react";
import { cva, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { RecipeVariantProps } from "@ndla/styled-system/types";

const framedContentRecipe = cva({
  base: {
    padding: "medium",
    border: "1px solid",
    borderRadius: "small",
    boxShadow: "4px 4px 0px 0px var(--shadow-color)",
  },
  variants: {
    colorTheme: {
      neutral: {
        backgroundColor: "surface.default",
        borderColor: "stroke.subtle",
        boxShadowColor: "stroke.subtle",
      },
      brand1: {
        backgroundColor: "surface.brand.1.subtle",
        borderColor: "surface.brand.1.strong",
        boxShadowColor: "surface.brand.1.strong",
      },
      brand2: {
        backgroundColor: "surface.brand.2.subtle",
        borderColor: "surface.brand.2.strong",
        boxShadowColor: "surface.brand.2.strong",
      },
    },
  },
  defaultVariants: {
    colorTheme: "neutral",
  },
});

export type FramedContentVariantProps = RecipeVariantProps<typeof framedContentRecipe>;

export type FramedContentProps = ComponentPropsWithoutRef<"div"> & FramedContentVariantProps;

export const FramedContent = ({ className, colorTheme, ...rest }: FramedContentProps) => (
  <styled.div className={cx(framedContentRecipe({ colorTheme }), className)} {...rest} />
);
