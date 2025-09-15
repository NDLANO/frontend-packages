/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type ComponentType } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";
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
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "xsmall",
      width: "100%",
    },
    image: {
      minHeight: "40px",
      maxHeight: "40px",
      minWidth: "56px",
      maxWidth: "56px",
      objectFit: "cover",
    },
  },
  defaultVariants: {
    variant: "intense",
    context: "standalone",
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
          "--background-hover": "colors.surface.action.brand.1.hover",
          "--border-hover": "colors.stroke.hover",
          "--border-color-current": "colors.stroke.default",
        },
      },
      brand2: {
        root: {
          "--background-hover": "colors.surface.brand.2.moderate",
          "--border-hover": "colors.surface.brand.2.strong",
          "--border-color-current": "colors.surface.brand.2.strong",
        },
      },
      brand3: {
        root: {
          "--background-hover": "colors.surface.action.myNdla.hover",
          "--border-hover": "colors.stroke.subtle",
          "--border-color-current": "colors.stroke.subtle",
        },
      },
      neutral: {
        root: {
          "--background-hover": "colors.surface.hover",
          "--border-hover": "colors.stroke.subtle",
          "--border-color-current": "colors.stroke.discrete",
        },
      },
    },
    variant: {
      intense: {
        root: {
          _hover: {
            background: "var(--background-hover)",
          },
          _highlighted: {
            background: "var(--background-hover)",
          },
        },
      },
      subtle: {},
    },
    context: {
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
          borderBlockStartColor: "transparent",
          borderBlockEndColor: "stroke.subtle",
          marginBlockStart: "-1px",
        },
      },
    },
  },
  compoundVariants: [
    {
      context: "list",
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

const InternalListItemRoot = withProvider(ark.div, "root", { baseComponent: true });

export const ListItemRoot = forwardRef<HTMLDivElement, ListItemProps>((props, ref) => (
  <InternalListItemRoot
    {...props}
    colorTheme={props.nonInteractive ? undefined : (props.colorTheme ?? "brand1")}
    ref={ref}
  />
));

const InternalListItemHeading = forwardRef<HTMLHeadingElement, TextProps>(
  ({ textStyle = "label.medium", ...props }, ref) => <Heading textStyle={textStyle} {...props} ref={ref} />,
);

export const ListItemHeading = withContext<ComponentType<HTMLArkProps<"p"> & TextProps>>(
  InternalListItemHeading,
  "title",
);

export const ListItemContent = withContext(ark.div, "content", { baseComponent: true });

const InternalListItemImage = withContext(Image, "image");

export const ListItemImage = forwardRef<HTMLImageElement, ImageProps>(({ variant = "rounded", ...props }, ref) => (
  <InternalListItemImage variant={variant} {...props} ref={ref} />
));
