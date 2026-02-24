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
import type { StyledProps } from "@ndla/styled-system/types";

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
      _print: {
        background: "none",
      },
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
          "@media not print": {
            color: "text.onAction",
          },
        },
      },
      brand2Bold: {
        background: {
          background: "surface.brand.2.bold",
        },
        content: {
          "@media not print": {
            color: "text.onAction",
          },
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
      brand1Subtle: {
        background: {
          background: "surface.brand.1.subtle",
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

export type HeroVariantProps = NonNullable<RecipeVariantProps<typeof heroRecipe>>;

export type HeroVariant = NonNullable<HeroVariantProps>["variant"];

export interface HeroProps extends HTMLArkProps<"div">, StyledProps, HeroVariantProps {}

export const Hero = withProvider(ark.div, "root", { baseComponent: true });

export interface HeroBackgroundProps extends HTMLArkProps<"div">, StyledProps {}

export const HeroBackground = withContext(ark.div, "background", { baseComponent: true });

export interface HeroContentProps extends HTMLArkProps<"div">, StyledProps {}

export const HeroContent = withContext(ark.div, "content", { baseComponent: true });
