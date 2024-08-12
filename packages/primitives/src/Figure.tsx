/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariant } from "@ndla/styled-system/types";

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
        paddingInlineEnd: "medium",
      },
    },
    {
      float: "right",
      size: ["medium", "small", "xsmall"],
      css: {
        paddingInlineStart: "medium",
      },
    },
    {
      float: ["left", "right"],
      size: ["full"],
      css: {
        paddingInlineStart: "0",
        paddingInlineEnd: "0",
      },
    },
  ],
});

export type FigureVariantProps = RecipeVariantProps<typeof figureRecipe>;

export type FigureSize = RecipeVariant<typeof figureRecipe>["size"];

export type FigureFloat = RecipeVariant<typeof figureRecipe>["float"];

export type FigureProps = HTMLArkProps<"figure"> & JsxStyleProps & FigureVariantProps;

const StyledFigure = styled(ark.figure, {}, { baseComponent: true });

export const Figure = forwardRef<HTMLElement, FigureProps>(({ size, float, css: cssProp, ...props }, ref) => {
  return <StyledFigure css={css.raw(figureRecipe.raw({ size, float }), cssProp)} {...props} ref={ref} />;
});
