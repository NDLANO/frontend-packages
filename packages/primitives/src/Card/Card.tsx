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
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { Image } from "../Image";
import { Heading, type TextProps } from "../Text";

const cardRecipe = sva({
  slots: ["root", "title", "content", "image"],
  base: {
    root: {
      position: "relative",
      outline: "1px solid",
      borderRadius: "xsmall",
      outlineColor: "transparent",
      outlineOffset: "-1px",
      height: "100%",
      boxShadow: "xsmall",
      transitionDuration: "fast",
      transitionProperty: "background, color, outline-color",
      transitionTimingFunction: "default",
      background: "surface.default",
      overflow: "hidden",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "small",
      paddingBlockStart: "small",
      paddingBlockEnd: "medium",
      paddingInline: "small",
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
    nonInteractive: false,
  },
  variants: {
    nonInteractive: {
      true: {},
      false: {
        root: {
          _hover: {
            background: "surface.hover",
            outlineColor: "stroke.hover",
          },
          _active: {
            background: "surface.active",
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(cardRecipe);

export type CardVariantProps = NonNullable<RecipeVariantProps<typeof cardRecipe>>;

export interface CardRootProps extends HTMLArkProps<"article">, StyledProps, CardVariantProps {}

export const CardRoot = withProvider(ark.article, "root", { baseComponent: true });

interface CardHeadingProps extends StyledProps, Omit<HTMLArkProps<"p">, "color">, TextProps {}

const InternalCardHeading = forwardRef<HTMLHeadingElement, CardHeadingProps>(
  ({ textStyle = "label.large", fontWeight = "bold", ...props }, ref) => (
    <Heading textStyle={textStyle} fontWeight={fontWeight} {...props} ref={ref} />
  ),
);

export const CardHeading = withContext(InternalCardHeading, "title");

export const CardContent = withContext(ark.div, "content", { baseComponent: true });

export const CardImage = withContext(Image, "image");
