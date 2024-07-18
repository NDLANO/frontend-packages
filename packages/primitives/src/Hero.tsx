/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type HTMLArkProps, ark } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { type JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const heroRecipe = sva({
  slots: ["root", "background", "content"],
  base: {
    root: {
      width: "100%",
      position: "relative",
      zIndex: "base",
    },
    background: {
      height: "350px",
      width: "100%",
      zIndex: "hide",
      overflow: "hidden",
      clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
    },
    content: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      paddingBlock: "xsmall",
      tablet: {
        paddingBlockStart: "xxlarge",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    absolute: true,
  },
  variants: {
    absolute: {
      true: {
        background: {
          position: "absolute",
        },
      },
    },
    variant: {
      primary: {
        background: {
          background: "primary",
        },
        content: {
          color: "text.onAction",
        },
      },
      brand2Strong: {
        background: {
          // TODO: This is not a semantic token.
          background: "blue.800",
        },
        content: {
          color: "text.onAction",
        },
      },
      brand2: {
        background: {
          background: "surface.brand.2",
        },
      },
      brand1: {
        background: {
          background: "surface.brand.1",
        },
      },
      brand1Subtle: {
        background: {
          background: "surface.brand.1.subtle",
        },
      },
      neutral: {
        background: {
          background: "surface.infoSubtle",
        },
      },
      brand4: {
        background: {
          // TODO: This needs a proper color...
          background: "surface.brand.4",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(heroRecipe);

export type HeroVariantProps = RecipeVariantProps<typeof heroRecipe>;

export type HeroVariant = NonNullable<HeroVariantProps>["variant"];

export type HeroProps = HTMLArkProps<"div"> & JsxStyleProps & HeroVariantProps;

export const Hero = withProvider<HTMLDivElement, HeroProps>(ark.div, "root", {
  baseComponent: true,
});

export type HeroBackgroundProps = HTMLArkProps<"div"> & JsxStyleProps;

export const HeroBackground = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(ark.div, "background", {
  baseComponent: true,
});

export type HeroContentProps = HTMLArkProps<"div"> & JsxStyleProps;

export const HeroContent = withContext<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps>(ark.div, "content", {
  baseComponent: true,
});
