/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type HTMLArkProps, ark } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";

const heroRecipe = sva({
  slots: ["root", "background", "content"],
  base: {
    root: {
      width: "100%",
      position: "relative",
    },
    background: {
      height: "350px",
      width: "100%",
      zIndex: "hide",
      overflow: "hidden",
      clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%)",
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
      brand2Bold: {
        background: {
          background: "surface.brand.2.bold",
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
      brand2Moderate: {
        background: {
          background: "surface.brand.2.moderate",
        },
      },
      brand1: {
        background: {
          background: "surface.brand.1",
        },
      },
      brand1Moderate: {
        background: {
          background: "surface.brand.1.moderate",
        },
      },
      brand3Moderate: {
        background: {
          background: "surface.brand.3.moderate",
        },
      },
      brand4Moderate: {
        background: {
          background: "surface.brand.4.moderate",
        },
      },
      brand5Moderate: {
        background: {
          background: "surface.brand.5.moderate",
        },
      },
      neutral: {
        background: {
          background: "surface.infoSubtle",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(heroRecipe);

export type HeroVariantProps = RecipeVariantProps<typeof heroRecipe>;

export type HeroVariant = NonNullable<HeroVariantProps>["variant"];

export type HeroProps = HTMLArkProps<"div"> & JsxStyleProps & HeroVariantProps;

export const Hero = withProvider(ark.div, "root", { baseComponent: true });

export type HeroBackgroundProps = HTMLArkProps<"div"> & JsxStyleProps;

export const HeroBackground = withContext(ark.div, "background", { baseComponent: true });

export type HeroContentProps = HTMLArkProps<"div"> & JsxStyleProps;

export const HeroContent = withContext(ark.div, "content", { baseComponent: true });
