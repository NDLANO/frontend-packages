/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import { forwardRef } from "react";
import { Image, type ImageProps } from "../Image";
import { Heading, type TextProps } from "../Text";

export const listItemRecipe = sva({
  slots: ["root", "title", "content", "image"],
  base: {
    root: {
      minHeight: "3xlarge",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "stroke.subtle",
      backgroundColor: "background.default",
      color: "text.default",
      position: "relative",
      display: "flex",
      gap: "small",
      alignItems: "center",
      paddingBlock: "xsmall",
      paddingInline: "xxsmall",
      transitionProperty: "background-color, border-color, color",
      transitionDuration: "superFast",
      transitionTimingFunction: "ease-in-out",
      boxShadow: "xsmall",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "xsmall",
      width: "100%",
    },
    image: {
      minHeight: "50px",
      maxHeight: "50px",
      minWidth: "70px",
      maxWidth: "70px",
      objectFit: "cover",
    },
  },
  defaultVariants: {
    nonInteractive: false,
  },
  variants: {
    nonInteractive: {
      false: {
        root: {
          _highlighted: {
            borderColor: "stroke.hover",
            backgroundColor: "surface.hover",
          },
          _hover: {
            borderColor: "stroke.hover",
            backgroundColor: "surface.hover",
          },
          _active: {
            borderColor: "stroke.hover",
            backgroundColor: "surface.active",
          },
        },
        title: {
          textDecoration: "underline",
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(listItemRecipe);

export type ListItemVariantProps = NonNullable<RecipeVariantProps<typeof listItemRecipe>>;

export interface ListItemProps extends HTMLArkProps<"div">, StyledProps, ListItemVariantProps {}

export const ListItemRoot = withProvider(ark.div, "root", { baseComponent: true });

interface ListItemHeadingProps extends Omit<HTMLArkProps<"p">, "color">, TextProps {}

const InternalListItemHeading = forwardRef<HTMLHeadingElement, ListItemHeadingProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", ...props }, ref) => (
    <Heading textStyle={textStyle} fontWeight={fontWeight} {...props} ref={ref} />
  ),
);

export const ListItemHeading = withContext(InternalListItemHeading, "title");

export const ListItemContent = withContext(ark.div, "content", { baseComponent: true });

const InternalListItemImage = withContext(Image, "image");

export const ListItemImage = forwardRef<HTMLImageElement, ImageProps>(({ variant = "rounded", ...props }, ref) => (
  <InternalListItemImage variant={variant} {...props} ref={ref} />
));
