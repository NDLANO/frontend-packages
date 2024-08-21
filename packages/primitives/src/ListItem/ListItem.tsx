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
      minHeight: "3xlarge",
      borderBlockWidth: "1px",
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
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "xsmall",
      width: "100%",
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
    borderVariant: "solid",
    nonInteractive: false,
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
    nonInteractive: {
      false: {
        root: {
          '&[aria-current="true"], &[aria-current="page"]': {
            background: "var(--background-current)",
            borderBlockStartColor: "transparent",
            borderBlockEndColor: "transparent",
            color: "var(--color-current-hover)",
            _hover: {
              background: "var(--background-hover)",
              color: "text.default",
            },
            _highlighted: {
              background: "var(--background-hover)",
              color: "text.default",
            },
            "& a:focus-visible": {
              _focusVisible: {
                outlineColor: "var(--color-current-hover)",
              },
            },
            "& button:focus-visible": {
              _focusVisible: {
                boxShadowColor: "var(--color-current-hover)",
              },
            },
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
    colorTheme: {
      brand1: {
        root: {
          "--background-hover": "colors.surface.brand.1.subtle",
          "--background-current": "colors.surface.actionSubtle.selected",
          "--border-hover": "colors.stroke.hover",
          "--color-current-hover": "colors.text.onAction",
        },
      },
      brand2: {
        root: {
          "--background-hover": "colors.surface.brand.2.moderate",
          // TODO: Not a semantic color
          "--background-current": "colors.blue.800",
          "--border-hover": "colors.surface.brand.2.strong",
          "--color-current-hover": "colors.text.onAction",
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
          },
          _last: {
            borderBlockEndColor: "stroke.subtle",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "list",
      nonInteractive: false,
      css: {
        root: {
          _first: {
            _hover: {
              borderBlockStartColor: "var(--border-hover)",
            },
            _highlighted: {
              borderBlockStartColor: "var(--border-hover)",
            },
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
  ],
});

const { withProvider, withContext } = createStyleContext(listItemRecipe);

export type ListItemVariantProps = NonNullable<RecipeVariantProps<typeof listItemRecipe>>;

type NonInteractiveListItemVariantProps = Omit<ListItemVariantProps, "colorTheme">;

interface BaseListItemProps extends HTMLArkProps<"div">, JsxStyleProps {
  nonInteractive?: true | false;
}

interface NonInteractiveListItemProps extends BaseListItemProps, NonInteractiveListItemVariantProps {
  nonInteractive: true;
}

interface InteractiveListItemProps extends BaseListItemProps, ListItemVariantProps {
  nonInteractive?: false;
}

export type ListItemProps = NonInteractiveListItemProps | InteractiveListItemProps;

const InternalListItemRoot = withProvider<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps & ListItemVariantProps>(
  ark.div,
  "root",
  {
    baseComponent: true,
  },
);

export const ListItemRoot = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => (
  <InternalListItemRoot
    {...props}
    colorTheme={props.nonInteractive ? undefined : props.colorTheme ?? "brand1"}
    ref={ref}
  />
));

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
