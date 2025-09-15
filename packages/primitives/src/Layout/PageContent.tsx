/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";

const pageRecipe = cva({
  base: {
    display: "grid",
    transitionProperty: "all",
    transitionDuration: "default",
    transitionTimingFunction: "default",
    alignContent: "start",
    /**
     * var(--size) is the max width of the content
     * calc(100% - (var(--gutter, 0) * 2)) is the max width of the page, minus the gutters (inline padding without being actual padding).
     * In effect, this will center the content on the page, and constrain it to either the content width or the page width, whichever is smaller.
     */
    gridColumnGap: "var(--gutter, 0)",
    gridTemplateColumns: "1fr min(var(--size), calc(100% - (var(--gutter, 0) * 2))) 1fr",
    "& > *": {
      gridColumnStart: "2",
      gridColumnEnd: "2",
    },
  },
  defaultVariants: {
    variant: "page",
    gutters: "always",
  },
  variants: {
    variant: {
      content: {
        "--size": "sizes.surface.contentMax",
      },
      article: {
        "--size": "sizes.surface.articleMax",
      },
      page: {
        "--size": "sizes.surface.pageMax",
      },
      wide: {
        "--size": "sizes.surface.wideMax",
      },
    },
    gutters: {
      never: {
        "--gutter": "0px",
      },
      mobileUp: {
        "--gutter": "0px",
        mobileWide: {
          "--gutter": "spacing.medium",
        },
      },
      tabletUp: {
        "--gutter": "0px",
        tablet: {
          "--gutter": "spacing.medium",
        },
      },
      always: {
        "--gutter": "spacing.small",
        tablet: {
          "--gutter": "spacing.medium",
        },
      },
    },
  },
});

const StyledPageContent = styled(ark.div, {}, { baseComponent: true });

export type PageContentVariantProps = RecipeVariantProps<typeof pageRecipe>;

export const PageContent = forwardRef<HTMLDivElement, HTMLArkProps<"div"> & PageContentVariantProps & StyledProps>(
  ({ variant, gutters, css: cssProp, ...props }, ref) => (
    <StyledPageContent css={css.raw(pageRecipe.raw({ variant, gutters }), cssProp)} ref={ref} {...props} />
  ),
);

export const BleedPageContent = styled(
  ark.div,
  {
    base: {
      "& ": {
        width: "100%",
        gridColumnStart: "1",
        gridColumnEnd: "-1",
      },
    },
  },
  { baseComponent: true },
);
