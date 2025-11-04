/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { type RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

const badgeRecipe = cva({
  base: {
    paddingInline: "xsmall",
    borderRadius: "xsmall",
    border: "1px solid",
    width: "fit-content",
    color: "text.default",
  },
  defaultVariants: {
    colorTheme: "neutral",
    size: "medium",
  },
  variants: {
    size: {
      small: {
        textStyle: "label.small",
      },
      medium: {
        textStyle: "label.medium",
      },
    },
    colorTheme: {
      brand1: {
        backgroundColor: "surface.brand.1.moderate",
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
        borderColor: "stroke.info",
      },
      danger: {
        backgroundColor: "surface.dangerSubtle",
        borderColor: "surface.danger",
      },
      success: {
        backgroundColor: "surface.successSubtle",
        borderColor: "surface.success",
      },
      warning: {
        backgroundColor: "surface.warningSubtle",
        borderColor: "surface.warning",
      },
    },
  },
});

export type BadgeVariantProps = NonNullable<RecipeVariantProps<typeof badgeRecipe>>;

export type BadgeVariant = NonNullable<BadgeVariantProps>["colorTheme"];

export interface BadgeProps extends StyledProps, HTMLArkProps<"div">, BadgeVariantProps {}

const StyledBadge = styled(ark.div, {}, { baseComponent: true });

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({ colorTheme, size, css: cssProp, ...props }, ref) => (
  <StyledBadge css={css.raw(badgeRecipe.raw({ colorTheme, size }), cssProp)} {...props} ref={ref} />
));
