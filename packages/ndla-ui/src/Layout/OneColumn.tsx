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

// TODO: This is a rewrite of our old layout. Refactor this.
const oneColumnRecipe = cva({
  base: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    paddingLeft: "18px",
    paddingRight: "18px",
    mobileWide: {
      paddingLeft: "medium",
      paddingRight: "medium",
    },
    _after: {
      content: '""!',
      display: "block!",
      clear: "both!",
    },
  },
  variants: {
    wide: {
      true: {
        maxWidth: "1150px",
      },
      false: {
        maxWidth: "1024px",
      },
    },
  },
});

type OneColumnVariantProps = RecipeVariantProps<typeof oneColumnRecipe>;

const StyledOneColumn = styled(ark.div, {}, { baseComponent: true });

export const OneColumn = forwardRef<HTMLDivElement, HTMLArkProps<"div"> & JsxStyleProps & OneColumnVariantProps>(
  ({ wide, css: cssProp, ...props }, ref) => (
    <StyledOneColumn css={css.raw(oneColumnRecipe.raw({ wide }), cssProp)} {...props} ref={ref} />
  ),
);

export default OneColumn;
