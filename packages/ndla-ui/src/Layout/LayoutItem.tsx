/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

// TODO: Refactor this. This is a copy of our old layout.
const layoutRecipe = cva({
  variants: {
    layout: {
      center: {
        position: "relative!",
        width: "83.333%",
        right: "auto !important",
        left: "8.333%",
      },
      extend: {
        tablet: {
          position: "relative!",
          width: "83.333%",
          right: "auto!",
          left: "8.333%",
        },
      },
    },
  },
});

type LayoutVariantProps = RecipeVariantProps<typeof layoutRecipe>;

const StyledLayout = styled(ark.section, {}, { baseComponent: true });

export const LayoutItem = forwardRef<HTMLElement, HTMLArkProps<"section"> & JsxStyleProps & LayoutVariantProps>(
  ({ layout, css: cssProp, ...props }, ref) => {
    return <StyledLayout css={css.raw(layoutRecipe.raw({ layout }), cssProp)} {...props} ref={ref} />;
  },
);

export default LayoutItem;
