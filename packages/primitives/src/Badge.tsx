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
        backgroundColor: "surface.brand.2.subtle",
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

export type BadgeProps = BadgeVariantProps & ComponentPropsWithoutRef<"div">;

export const Badge = ({ colorTheme, className, ...rest }: BadgeProps) => (
  <styled.div className={cx(badgeRecipe({ colorTheme }), className)} {...rest} />
);
