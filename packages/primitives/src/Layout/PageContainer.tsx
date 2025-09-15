/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { type HTMLArkProps } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { PageContent, type PageContentVariantProps } from "./PageContent";

const pageContainerRecipe = cva({
  defaultVariants: {
    padding: "medium",
  },
  variants: {
    padding: {
      none: {},
      small: {
        paddingBlockStart: "medium",
        paddingBlockEnd: "5xlarge",
      },
      medium: {
        paddingBlockStart: "xxlarge",
        paddingBlockEnd: "5xlarge",
      },
      large: {
        paddingBlockStart: "4xlarge",
        paddingBlockEnd: "5xlarge",
      },
    },
  },
});

export type PageContainerVariantProps = RecipeVariantProps<typeof pageContainerRecipe>;

export type PageContainerProps = HTMLArkProps<"div"> &
  StyledProps &
  PageContentVariantProps &
  PageContainerVariantProps;

export const PageContainer = forwardRef<HTMLDivElement, PageContainerProps>(
  ({ padding, css: cssProp, ...props }, ref) => (
    <PageContent css={css.raw(pageContainerRecipe.raw({ padding }), cssProp)} {...props} ref={ref} />
  ),
);
