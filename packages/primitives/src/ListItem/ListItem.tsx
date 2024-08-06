/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import type { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { createStyleContext } from "../createStyleContext";
import { Image, type ImageProps } from "../Image";
import { Heading, type TextProps } from "../Text";

export const listItemRecipe = sva({
  slots: ["root", "title", "content", "image"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      gap: "xsmall",
      alignItems: "center",
      paddingBlock: "xsmall",
      paddingInline: "xsmall",
      transitionProperty: "background-color, border-color",
      transitionDuration: "superFast",
      transitionTimingFunction: "ease-in-out",
      _hover: {
        background: "surface.brand.1.subtle",
      },
      _highlighted: {
        background: "surface.brand.1.subtle",
      },
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "xsmall",
      width: "100%",
    },
    title: {
      textDecoration: "underline",
      _hover: {
        textDecoration: "none",
      },
    },
    image: {
      minHeight: "40px",
      maxHeight: "40px",
      minWidth: "56px",
      maxWidth: "56px",
      borderRadius: "xsmall",
      objectFit: "cover",
    },
  },
  defaultVariants: {
    variant: "standalone",
  },
  variants: {
    variant: {
      standalone: {
        root: {
          borderBlock: "1px solid",
          borderColor: "stroke.subtle",
          _hover: {
            borderColor: "stroke.hover",
          },
          _highlighted: {
            borderColor: "stroke.hover",
          },
        },
      },
      list: {
        root: {
          borderTop: "1px solid",
          borderTopColor: "stroke.subtle",
          borderBottom: "1px solid",
          borderBottomColor: "transparent",
          marginTop: "-1px",
          _first: {
            borderTopColor: "transparent",
            _hover: {
              borderTopColor: "stroke.hover",
            },
            _highlighted: {
              borderTopColor: "stroke.hover",
            },
          },
          _last: {
            borderBottomColor: "stroke.subtle",
          },
          "&:hover + &": {
            borderTopColor: "stroke.hover",
          },
          "&[data-highlighted] + &": {
            borderTopColor: "stroke.hover",
          },
          _hover: {
            borderBottomColor: "transparent",
            borderTopColor: "stroke.hover",
            _last: {
              borderBottomColor: "stroke.hover",
            },
          },
          _highlighted: {
            borderTopColor: "stroke.hover",
            _last: {
              borderBottomColor: "stroke.hover",
            },
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(listItemRecipe);

export type ListItemVariantProps = RecipeVariantProps<typeof listItemRecipe>;

export type ListItemProps = HTMLArkProps<"div"> & JsxStyleProps & ListItemVariantProps;

export const ListItemRoot = withProvider<HTMLDivElement, ListItemProps>(ark.div, "root", {
  baseComponent: true,
});

const InternalListItemHeading = forwardRef<HTMLHeadingElement, TextProps>(
  ({ textStyle = "label.medium", ...props }, ref) => <Heading textStyle={textStyle} {...props} ref={ref} />,
);

export const ListItemHeading = withContext<HTMLHeadingElement, TextProps & HTMLArkProps<"p"> & JsxStyleProps>(
  InternalListItemHeading,
  "title",
);

export const ListItemContent = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(ark.div, "content", {
  baseComponent: true,
});

export const ListItemImage = withContext<HTMLImageElement, ImageProps>(Image, "image");
