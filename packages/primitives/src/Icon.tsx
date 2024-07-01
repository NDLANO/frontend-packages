/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef } from "react";
import { type RecipeVariantProps, cva, css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps } from "@ndla/styled-system/types";

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
      xsmall: {
        width: "xsmall",
        height: "xsmall",
      },
      small: {
        width: "small",
        height: "small",
      },
      medium: {
        width: "medium",
        height: "medium",
      },
      large: {
        width: "large",
        height: "large",
      },
    },
  },
});

export type IconVariantProps = RecipeVariantProps<typeof iconRecipe>;

interface BaseIconProps extends ComponentPropsWithRef<"svg"> {
  title?: string;
  description?: string;
}

export type IconProps = BaseIconProps & IconVariantProps & JsxStyleProps;

const StyledSvg = styled("svg");

// TODO: Move this component over to ndla/icons
export const Icon = ({
  children,
  size,
  role,
  title,
  description,
  width,
  height,
  css: cssProp,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) => {
  return (
    <StyledSvg
      data-icon=""
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
      css={css.raw(iconRecipe.raw({ size }), cssProp)}
      {...props}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </StyledSvg>
  );
};
