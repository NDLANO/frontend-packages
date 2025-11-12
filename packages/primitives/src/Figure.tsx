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
import type { RecipeVariant, StyledProps } from "@ndla/styled-system/types";

const figureRecipe = cva({
  base: {
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "transform, width, height",
    transitionTimingFunction: "default",
    _motionReduce: {
      transition: "none",
      transitionDuration: "0s",
    },
  },
  variants: {
    size: {
      full: {
        width: "100%",
      },
      medium: {
        tablet: {
          width: "50%",
        },
        desktop: {
          width: "65%",
        },
      },
      small: {
        tablet: {
          width: "35%",
        },
        desktop: {
          width: "50%",
        },
      },
      xsmall: {
        tablet: {
          width: "25%",
        },
        desktop: {
          width: "35%",
        },
      },
    },
    float: {
      left: {
        tablet: {
          float: "left",
          clear: "left",
        },
      },
      right: {
        tablet: {
          float: "right",
          clear: "right",
        },
      },
    },
  },
  defaultVariants: {
    size: "full",
  },
  compoundVariants: [
    {
      float: ["left", "right"],
      css: {
        zIndex: "base",
        left: "auto",
        marginBlock: "xsmall",
      },
    },
    {
      float: "left",
      size: ["medium", "small", "xsmall"],
      css: {
        marginInlineEnd: "medium",
        tabletDown: { marginInlineEnd: "0" },
      },
    },
    {
      float: "right",
      size: ["medium", "small", "xsmall"],
      css: {
        marginInlineStart: "medium",
        tabletDown: { marginInlineStart: "0" },
      },
    },
  ],
});

export type FigureVariantProps = NonNullable<RecipeVariantProps<typeof figureRecipe>>;

export type FigureSize = RecipeVariant<typeof figureRecipe>["size"];

export type FigureFloat = RecipeVariant<typeof figureRecipe>["float"];

export interface FigureProps extends HTMLArkProps<"figure">, StyledProps, FigureVariantProps {}

const StyledFigure = styled(ark.figure, {}, { baseComponent: true });

export const Figure = forwardRef<HTMLElement, FigureProps>(({ size, float, css: cssProp, ...props }, ref) => {
  return <StyledFigure css={css.raw(figureRecipe.raw({ size, float }), cssProp)} {...props} ref={ref} />;
});
