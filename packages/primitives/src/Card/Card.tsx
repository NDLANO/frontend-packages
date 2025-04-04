/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import type { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { createStyleContext } from "../createStyleContext";
import { type ImageProps, Image } from "../Image";
import { Heading, type TextProps } from "../Text";

const cardRecipe = sva({
  slots: ["root", "title", "content", "image"],
  base: {
    root: {
      position: "relative",
      border: "1px solid",
      borderRadius: "xsmall",
      borderColor: "stroke.subtle",
      transitionDuration: "fast",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      background: "surface.default",
      overflow: "hidden",
      _hover: {
        borderColor: "stroke.hover",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
      paddingBlock: "xsmall",
      paddingInline: "medium",
    },
    title: {
      textDecoration: "underline",
      _hover: {
        textDecoration: "none",
      },
    },
    image: {
      height: "200px",
      objectFit: "cover",
      width: "100%",
    },
  },
  defaultVariants: {
    variant: "intense",
  },
  variants: {
    variant: {
      subtle: {},
      intense: {
        root: {
          _hover: {
            background: "surface.actionSubtle.hover",
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(cardRecipe);

export type CardVariantProps = RecipeVariantProps<typeof cardRecipe>;

export type CardRootProps = HTMLArkProps<"article"> & JsxStyleProps & CardVariantProps;

export const CardRoot = withProvider<HTMLElement, CardRootProps>(ark.article, "root", {
  baseComponent: true,
});

const InternalCardHeading = forwardRef<HTMLHeadingElement, TextProps>(
  ({ textStyle = "label.large", fontWeight = "bold", ...props }, ref) => (
    <Heading textStyle={textStyle} fontWeight={fontWeight} {...props} ref={ref} />
  ),
);

export const CardHeading = withContext<HTMLHeadingElement, TextProps & HTMLArkProps<"p"> & JsxStyleProps>(
  InternalCardHeading,
  "title",
);

export const CardContent = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(ark.div, "content", {
  baseComponent: true,
});

export const CardImage = withContext<HTMLImageElement, ImageProps>(Image, "image");
