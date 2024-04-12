/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef } from "react";
import { RecipeVariantProps, cva, cx } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xsmall",
    color: "colorPalette.buttonForeground",
    background: "colorPalette.buttonBackground",
    border: "2px solid",
    borderColor: "colorPalette.buttonBackground",
    outlineWidth: "0",
    cursor: "pointer",
    textDecoration: "none",
    textStyle: "button",
    transitionProperty: "all",
    transitionDuration: "fast",
    transitionTimingFunction: "default",
    boxShadow: "none",
    textAlign: "center",
    "&:hover, &:focus-visible": {
      color: "colorPalette.buttonHoverForeground",
      background: "colorPalette.buttonHoverBackground",
      borderColor: "colorPalette.buttonHoverBackground",
    },
    _disabled: {
      color: "brand.grey",
      backgroundColor: "background.dark",
      borderColor: "transparent",
      cursor: "not-allowed",
    },
  },
  defaultVariants: {
    size: "normal",
    shape: "normal",
    variant: "solid",
    colorTheme: "primary",
  },
  variants: {
    size: {
      xsmall: {
        paddingX: "xsmall",
        paddingY: "xxsmall",
        minHeight: "24px",
        borderWidth: "1px",
      },
      small: {
        paddingX: "xsmall",
        paddingY: "xxsmall",
        minHeight: "32px",
        borderWidth: "1px",
      },
      normal: {
        paddingX: "small",
        paddingY: "xxsmall",
        minHeight: "40px",
      },
      medium: {
        paddingX: "nsmall",
        paddingY: "xxsmall",
        minHeight: "48px",
      },
      large: {
        paddingX: "normal",
        paddingY: "xxsmall",
        minHeight: "52px",
      },
    },
    shape: {
      pill: {
        borderRadius: "lg",
      },
      sharp: {
        borderRadius: "sharp",
      },
      normal: {
        borderRadius: "small",
      },
      full: {
        borderRadius: "full",
      },
    },
    variant: {
      // This is the default. We rely on it in some other styles.
      solid: {},
      link: {
        borderRadius: "0",
        padding: "0",
        fontSize: "inherit",
        lineHeight: "inherit",
        color: "brand.primary",
        boxShadow: "link",
        background: "none",
        border: "none",
        fontWeight: "normal",
        minHeight: "unset",
        "&:hover, &:active, &:disabled, &focus-visible": {
          outlineWidth: "2px",
          boxShadow: "none",
          color: "brand.primary",
          background: "none",
          border: "none",
        },
      },
      stripped: {
        padding: "0",
        borderRadius: "0",
        color: "inherit",
        fontSize: "inherit",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
        fontWeight: "normal",
        "&:hover, &:active, &:disabled, &focus-visible": {
          boxShadow: "none",
          color: "brand.primary",
          backgroundColor: "transparent",
          border: "none",
        },
        _focusVisible: {
          outlineWidth: "medium",
        },
      },
      outline: {
        color: "colorPalette.buttonBackground",
        background: "transparent",
        borderColor: "colorPalette.buttonBackground",
        _hover: {
          color: "colorPalette.buttonForeground",
          background: "colorPalette.buttonBackground",
          borderColor: "colorPalette.buttonBackground",
        },
        _disabled: {
          background: "transparent",
          color: "brand.grey",
          borderColor: "brand.grey",
        },
      },
      ghost: {
        outlineWidth: "2px",
        color: "colorPalette.buttonForeground",
        background: "transparent",
        borderColor: "transparent",
        "&:hover, &:active, &:focus-visible": {
          // Unfortunate important caused by compound variants overriding the condition.
          color: "colorPalette.buttonForeground !important",
          background: "colorPalette.buttonBackground",
          borderColor: "colorPalette.buttonBackground",
        },
        _disabled: {
          color: "brand.grey",
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
      },
    },
    colorTheme: {
      primary: {
        colorPalette: "button.primary",
      },
      light: {
        colorPalette: "button.light",
      },
      lighter: {
        colorPalette: "button.lighter",
      },
      greyLighter: {
        colorPalette: "button.greyLighter",
      },
      greyLightest: {
        colorPalette: "button.greyLightest",
      },
      danger: {
        colorPalette: "button.danger",
      },
      darker: {
        colorPalette: "button.darker",
      },
    },
    inverted: {
      true: {
        background: "transparent",
        color: "white",
        borderColor: "transparent",
        _hover: {
          color: "colorPalette.buttonForeground",
          background: "colorPalette.buttonBackground",
          borderColor: "transparent",
        },
      },
    },
  },
  compoundVariants: [
    // Handle white text in ghost
    {
      colorTheme: ["danger", "darker", "primary"],
      variant: "ghost",
      css: {
        color: "colorPalette.buttonBackground",
      },
    },
    // Handle weird inverted case
    {
      variant: "outline",
      inverted: true,
      css: {
        borderColor: "white",
        _hover: {
          borderColor: "colorPalette.buttonBackground",
        },
      },
    },
  ],
});

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = ComponentPropsWithRef<"button"> & ButtonVariantProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", size, className, shape, variant, colorTheme, inverted, ...props }, ref) => (
    <styled.button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      className={cx(buttonRecipe({ size, shape, variant, colorTheme, inverted }), className)}
      {...props}
    />
  ),
);
