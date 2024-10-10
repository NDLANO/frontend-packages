/**
 * Copyright (c) 2024-present, NDLA.
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

const embedWrapperRecipe = cva({
  base: {
    position: "relative",
  },
  defaultVariants: {
    noClear: false,
  },
  variants: {
    noClear: {
      true: {
        "& + [data-embed-wrapper]": {
          clear: "both",
        },
      },
      false: {
        clear: "both",
      },
    },
  },
});

export type EmbedWrapperVariantProps = RecipeVariantProps<typeof embedWrapperRecipe>;

export type EmbedWrapperProps = HTMLArkProps<"div"> & JsxStyleProps & EmbedWrapperVariantProps;

const StyledEmbedWrapper = styled(ark.div, {}, { baseComponent: true });

export const EmbedWrapper = forwardRef<HTMLDivElement, EmbedWrapperProps>(
  ({ noClear, css: cssProp, ...props }, ref) => (
    <StyledEmbedWrapper
      css={css.raw(embedWrapperRecipe.raw({ noClear }), cssProp)}
      data-embed-wrapper=""
      {...props}
      ref={ref}
    />
  ),
);
