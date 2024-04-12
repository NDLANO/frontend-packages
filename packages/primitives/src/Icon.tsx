/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef } from "react";
import { type RecipeVariantProps, cva, cx } from "@ndla/styled-system/css";

export const iconRecipe = cva({
  base: {
    display: "inline-block",
    fill: "currentcolor",
    verticalAlign: "middle",
    lineHeight: "1em",
    flexShrink: "0",
  },
  defaultVariants: {
    size: "nsmall",
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
      nsmall: {
        width: "nsmall",
        height: "nsmall",
      },
      normal: {
        width: "normal",
        height: "normal",
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

export type IconProps = BaseIconProps & IconVariantProps;

export const Icon = ({
  children,
  size,
  role,
  title,
  description,
  width,
  height,
  className,
  "aria-hidden": ariaHidden = true,
  ...props
}: IconProps) => {
  return (
    <svg
      data-icon=""
      aria-hidden={ariaHidden}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      className={cx(iconRecipe({ size }), className)}
    >
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
};
