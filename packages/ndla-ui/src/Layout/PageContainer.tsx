/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";

// TODO: Refactor this. It's a rewrite of our old layout.
const pageContainerRecipe = cva({
  base: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  variants: {
    backgroundWide: {
      true: {
        tablet: {
          backgroundColor: "#f8f8f8",
        },
      },
      false: {},
    },
  },
});

const StyledPageContainer = styled(ark.div, {}, { baseComponent: true });

type PageContainerVariantProps = RecipeVariantProps<typeof pageContainerRecipe>;

export const PageContainer = forwardRef<
  HTMLDivElement,
  HTMLArkProps<"div"> & JsxStyleProps & PageContainerVariantProps
>(({ backgroundWide, css: cssProp, ...props }, ref) => (
  <StyledPageContainer css={css.raw(pageContainerRecipe.raw({ backgroundWide }), cssProp)} {...props} ref={ref} />
));

export default PageContainer;
