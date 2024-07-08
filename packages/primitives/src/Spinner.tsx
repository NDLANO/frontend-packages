/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

export const spinnerRecipe = cva({
  base: {
    borderRadius: "full",
    animation: "spin",
    display: "block",
    borderStyle: "solid",
    borderBlockColor: "background.subtle",
    borderInlineStartColor: "background.subtle",
    borderInlineEndColor: "stroke.default",
    marginBlock: "medium",
    marginInline: "auto",
  },
  defaultVariants: {
    size: "large",
  },
  variants: {
    size: {
      medium: {
        borderWidth: "4px",
        height: "large",
        width: "large",
      },
      large: {
        borderWidth: "8px",
        height: "xxlarge",
        width: "xxlarge",
      },
    },
  },
});

export type SpinnerVariantProps = RecipeVariantProps<typeof spinnerRecipe>;

export type SpinnerProps = HTMLArkProps<"div"> & JsxStyleProps & SpinnerVariantProps;

const StyledSpinner = styled(ark.div, {}, { baseComponent: true });

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ size, css: cssProp, ...props }, ref) => (
  <StyledSpinner css={css.raw(spinnerRecipe.raw({ size }), cssProp)} {...props} ref={ref} />
));
