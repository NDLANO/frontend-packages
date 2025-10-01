/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ComponentPropsWithRef } from "react";
import { type RecipeVariantProps, cva, css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

export const iconRecipe = cva({
  base: {
    display: "inline-block",
    fill: "currentcolor",
    verticalAlign: "middle",
    lineHeight: "1em",
    flexShrink: "0",
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      small: {
        width: "small",
        height: "small",
      },
      medium: {
        width: "medium",
        height: "medium",
      },
      large: {
        width: "xxlarge",
        height: "xxlarge",
      },
    },
  },
});

export type IconVariantProps = RecipeVariantProps<typeof iconRecipe>;

interface BaseIconProps extends ComponentPropsWithRef<"svg"> {
  title?: string;
  description?: string;
}

export type Props = BaseIconProps & IconVariantProps & StyledProps;

const StyledSvg = styled("svg");

export const Icon = ({
  children,
  size,
  title,
  description,
  css: cssProp,
  "aria-hidden": ariaHidden,
  ...props
}: Props) => {
  return (
    <StyledSvg
      data-icon=""
      aria-hidden={ariaHidden ?? (props["aria-label"] ? undefined : true)}
      preserveAspectRatio="xMidYMid meet"
      css={css.raw(iconRecipe.raw({ size }), cssProp)}
      {...props}
    >
      {!!title && <title>{title}</title>}
      {!!description && <desc>{description}</desc>}
      {children}
    </StyledSvg>
  );
};
