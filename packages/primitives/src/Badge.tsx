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

const badgeRecipe = cva({
  base: {
    paddingInline: "xsmall",
    borderRadius: "xsmall",
    border: "1px solid",
    width: "fit-content",
  },
  defaultVariants: {
    colorTheme: "neutral",
  },
  variants: {
    colorTheme: {
      brand1: {
        backgroundColor: "surface.brand.1.subtle",
        borderColor: "surface.brand.1.strong",
      },
      brand2: {
        backgroundColor: "surface.brand.2.moderate",
        borderColor: "surface.brand.2.strong",
      },
      brand3: {
        backgroundColor: "surface.brand.3.subtle",
        borderColor: "surface.brand.3.strong",
      },
      neutral: {
        backgroundColor: "surface.infoSubtle",
        borderColor: "stroke.default",
      },
    },
  },
});

export type BadgeVariantProps = RecipeVariantProps<typeof badgeRecipe>;

export type BadgeProps = HTMLArkProps<"div"> & JsxStyleProps & BadgeVariantProps;

export const Badge = styled(ark.div, badgeRecipe);
