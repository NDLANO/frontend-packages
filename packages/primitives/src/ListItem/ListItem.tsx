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

// TODO: Focus ring on current items is not visible

export const listItemRecipe = sva({
  slots: ["root", "title", "content", "image"],
  base: {
    root: {
      borderWidth: "1px",
      borderInlineColor: "transparent",
      color: "text.default",
      position: "relative",
      display: "flex",
      gap: "xsmall",
      alignItems: "center",
      paddingBlock: "xsmall",
      paddingInline: "xsmall",
      transitionProperty: "background-color, border-color, color",
      transitionDuration: "superFast",
      transitionTimingFunction: "ease-in-out",
      _hover: {
        background: "var(--background-hover)",
      },
      _highlighted: {
        background: "var(--background-hover)",
      },
      '&[aria-current="true"], &[aria-current="page"]': {
        background: "var(--background-current)",
        color: "text.onAction",
        _hover: {
          background: "var(--background-hover)",
          color: "text.default",
        },
        _highlighted: {
          background: "var(--background-hover)",
          color: "text.default",
        },
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
    colorTheme: "brand1",
    borderVariant: "solid",
  },
  variants: {
    borderVariant: {
      solid: {
        root: {
          borderStyle: "solid",
        },
      },
      dashed: {
        root: {
          borderStyle: "dashed",
        },
      },
    },
    colorTheme: {
      brand1: {
        root: {
          "--background-hover": "colors.surface.brand.1.subtle",
          "--background-current": "colors.surface.actionSubtle.selected",
          "--border-hover": "colors.stroke.hover",
        },
      },
      brand2: {
        root: {
          "--background-hover": "colors.surface.brand.2.moderate",
          // TODO: Not a semantic color
          "--background-current": "colors.blue.800",
          "--border-hover": "colors.surface.brand.2.strong",
        },
      },
    },
    variant: {
      standalone: {
        root: {
          borderBlockColor: "stroke.subtle",
          _hover: {
            borderBlockColor: "var(--border-hover)",
          },
          _highlighted: {
            borderBlockColor: "var(--border-hover)",
          },
        },
      },
      list: {
        root: {
          borderBlockStartColor: "stroke.subtle",
          borderBlockEndColor: "transparent",
          marginBlockStart: "-1px",
          _first: {
            borderBlockStartColor: "transparent",
            _hover: {
              borderBlockStartColor: "var(--border-hover)",
            },
            _highlighted: {
              borderBlockStartColor: "var(--border-hover)",
            },
          },
          _last: {
            borderBlockEndColor: "stroke.subtle",
          },
          "&:hover + &": {
            borderBlockStartColor: "var(--border-hover)",
          },
          "&[data-highlighted] + &": {
            borderBlockStartColor: "var(--border-hover)",
          },
          _hover: {
            borderBlockEndColor: "transparent",
            borderBlockStartColor: "var(--border-hover)",
            _last: {
              borderBlockEndColor: "var(--border-hover)",
            },
          },
          _highlighted: {
            borderBlockStartColor: "var(--border-hover)",
            _last: {
              borderBlockEndColor: "var(--border-hover)",
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
