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
import { JsxStyleProps } from "@ndla/styled-system/types";

const figureRecipe = cva({
  base: {
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "transform, width, height",
    transitionTimingFunction: "default",
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
          paddingInlineEnd: "medium",
        },
      },
      right: {
        tablet: {
          float: "right",
          clear: "right",
          paddingInlineStart: "medium",
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
  ],
});

export type FigureVariantProps = RecipeVariantProps<typeof figureRecipe>;

export type FigureProps = HTMLArkProps<"figure"> & JsxStyleProps & FigureVariantProps;

const StyledFigure = styled(ark.figure, {}, { baseComponent: true });

export const Figure = forwardRef<HTMLElement, FigureProps>(({ size, float, css: cssProp, ...props }, ref) => (
  <StyledFigure css={css.raw(figureRecipe.raw({ size, float }), cssProp)} {...props} ref={ref} />
));
