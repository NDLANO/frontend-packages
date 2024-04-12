/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { RecipeVariantProps, css, cva, cx } from "@ndla/styled-system/css";
import { ButtonVariantProps, buttonRecipe } from "./Button";

export const iconButtonRecipe = cva({
  base: {
    borderRadius: "full",
    lineHeight: "1",
    borderColor: "transparent",
    minHeight: "unset",
    "& svg": {
      marginX: "0",
      marginY: "0",
    },
  },
  defaultVariants: {
    size: "small",
  },
  variants: {
    size: {
      xsmall: {
        paddingX: "xsmall",
        paddingY: "xsmall",
        "& svg": {
          width: "nsmall",
          height: "nsmall",
        },
      },
      small: {
        paddingX: "xsmall",
        paddingY: "xsmall",
        "& svg": {
          width: "normal",
          height: "normal",
        },
      },
      normal: {
        paddingX: "small",
        paddingY: "small",
        "& svg": {
          width: "medium",
          height: "medium",
        },
      },
      medium: {
        paddingX: "small",
        paddingY: "small",
        "& svg": {
          width: "large",
          height: "large",
        },
      },
      large: {
        paddingX: "small",
        paddingY: "small",
        "& svg": {
          width: "xlarge",
          height: "xlarge",
        },
      },
    },
  },
});

interface _IconButtonProps extends ComponentPropsWithRef<"button"> {
  ["aria-label"]: string;
}

export type IconButtonVariantProps = ButtonVariantProps & RecipeVariantProps<typeof iconButtonRecipe>;

export type IconButtonProps = _IconButtonProps & IconButtonVariantProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ type = "button", shape = "full", size, className, variant, colorTheme, inverted, ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      {...props}
      className={cx(
        css(buttonRecipe.raw({ size, variant, colorTheme, inverted, shape }), iconButtonRecipe.raw({ size })),
        className,
      )}
    />
  ),
);
