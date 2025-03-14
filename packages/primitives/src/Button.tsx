/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { ark, type HTMLArkProps } from "@ark-ui/react";
import { type RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { JsxStyleProps, RecipeVariant } from "@ndla/styled-system/types";

export const buttonBaseRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xxsmall",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    transitionProperty: "all",
    transitionDuration: "fast",
    transitionTimingFunction: "default",
    textAlign: "center",
    borderRadius: "xsmall",
    outline: "none",
    boxShadowColor: "stroke.default",
    _disabled: {
      cursor: "not-allowed",
      color: "text.onAction",
      background: "surface.disabled",
      boxShadowColor: "surface.disabled",
      "& svg": {
        color: "text.onAction",
      },
      _hover: {
        color: "text.onAction",
        background: "surface.disabled",
      },
    },
    _focusVisible: {
      boxShadow: "inset 0 0 0 var(--shadow-width, 3px) var(--shadow-color)",
    },
    _motionReduce: {
      transition: "none",
      transitionDuration: "0s",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        color: "text.onAction",
        background: "surface.action",
        _hover: {
          color: "text.onAction",
          background: "surface.action.hover",
        },
        _active: {
          color: "text.onAction",
          background: "surface.action.active",
        },
        _focusVisible: {
          boxShadow:
            "inset 0 0 0 var(--shadow-width, 3px) var(--shadow-color), inset 0px 0px 0px calc(var(--shadow-width, 3px) * 2) currentcolor",
        },
        _on: {
          background: "surface.action.selected",
        },
      },
      secondary: {
        color: "text.strong",
        background: "surface.default",
        boxShadow: "inset 0 0 0 1px var(--shadow-color)",
        _hover: {
          background: "surface.actionSubtle.hover",
        },
        _active: {
          background: "surface.actionSubtle.hover.strong",
        },
        _on: {
          background: "surface.actionSubtle.active",
        },
      },
      tertiary: {
        color: "text.strong",
        background: "transparent",
        _hover: {
          boxShadow: "inset 0 0 0 1px var(--shadow-color)",
          background: "surface.actionSubtle.hover",
          _focusVisible: {
            boxShadow: "inset 0 0 0 var(--shadow-width, 3px) var(--shadow-color)",
          },
        },
        _active: {
          borderColor: "stroke.default",
          background: "surface.actionSubtle.hover.strong",
        },
        _on: {
          background: "surface.actionSubtle.active",
          boxShadow: "inset 0 0 0 1px var(--shadow-color)",
        },
      },
      clear: {
        background: "transparent",
        color: "text.strong",
        _hover: {
          color: "stroke.hover",
        },
      },
      clearSubtle: {
        background: "transparent",
        color: "text.onAction",
        _hover: {
          color: "surface.actionSubtle.hover.strong",
        },
      },
      danger: {
        background: "surface.danger",
        color: "text.onAction",
        _hover: {
          background: "surface.danger.hover",
        },
        _active: {
          background: "surface.danger.active",
        },
        _focusVisible: {
          boxShadowColor: "surface.danger",
          boxShadow:
            "inset 0 0 0 var(--shadow-width, 3px) var(--shadow-color), inset 0px 0px 0px calc(var(--shadow-width, 3px) * 2) currentcolor",
        },
      },
      success: {
        background: "surface.success",
        color: "text.onAction",
        _hover: {
          background: "surface.success.hover",
        },
        _active: {
          background: "surface.success.active",
        },
        _focusVisible: {
          boxShadowColor: "surface.success",
          boxShadow:
            "inset 0 0 0 var(--shadow-width, 3px) var(--shadow-color), inset 0px 0px 0px calc(var(--shadow-width, 3px) * 2) currentcolor",
        },
      },
      link: {
        background: "transparent",
        color: "text.link",
        fontWeight: "normal",
        textDecoration: "underline",
        transitionProperty: "unset",
        transitionTimingFunction: "unset",
        transitionDuration: "unset",
        _hover: {
          textDecoration: "none",
        },
        _focusVisible: {
          boxShadow: "none",
          outline: "3px",
          borderRadius: "xsmall",
          outlineColor: "stroke.default",
          outlineOffset: "3px",
          outlineStyle: "solid",
        },
      },
    },
  },
});

export const buttonRecipe = cva({
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      medium: {
        textStyle: "label.medium",
        paddingInline: "small",
        paddingBlock: "xxsmall",
        minHeight: "24",
        "& svg": {
          marginInline: "0",
          marginBlock: "0",
          width: "medium",
          height: "medium",
        },
      },
      small: {
        textStyle: "label.small",
        minHeight: "large",
        paddingInline: "xsmall",
        paddingBlock: "4xsmall",
        "& svg": {
          marginInline: "0",
          marginBlock: "0",
          width: "small",
          height: "small",
        },
      },
    },
  },
});

export const iconButtonRecipe = cva({
  base: {
    lineHeight: "1",
    minHeight: "unset",
  },
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      medium: {
        "--shadow-width": "3px",
        height: "xxlarge",
        width: "xxlarge",
        "& svg": {
          marginInline: "0",
          marginBlock: "0",
          width: "medium",
          height: "medium",
        },
        paddingInline: "xsmall",
        paddingBlock: "xsmall",
      },
      small: {
        "--shadow-width": "2px",
        height: "large",
        width: "large",
        "& svg": {
          marginInline: "0",
          marginBlock: "0",
          width: "small",
          height: "small",
        },
        paddingInline: "xxsmall",
        paddingBlock: "xxsmall",
      },
    },
  },
});

const StyledButton = styled(ark.button, {}, { baseComponent: true, defaultProps: { type: "button" } });

type Variant = RecipeVariant<typeof buttonBaseRecipe>["variant"];

type ButtonVariant = Exclude<Variant, "clear" | "clearSubtle">;

export type ButtonVariantProps = { variant?: ButtonVariant } & RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = HTMLArkProps<"button"> & JsxStyleProps & ButtonVariantProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, css: cssProp, ...props }, ref) => (
  <StyledButton
    {...props}
    css={css.raw(
      buttonBaseRecipe.raw({ variant }),
      variant !== "link" ? buttonRecipe.raw({ size }) : undefined,
      cssProp,
    )}
    ref={ref}
  />
));

type IconButtonVariant = Exclude<Variant, "link">;

export type IconButtonVariantProps = { variant?: IconButtonVariant } & RecipeVariantProps<typeof iconButtonRecipe>;

export type IconButtonProps = HTMLArkProps<"button"> & JsxStyleProps & IconButtonVariantProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, css: cssProp, size, ...props }, ref) => (
    <StyledButton
      {...props}
      css={css.raw(buttonBaseRecipe.raw({ variant }), iconButtonRecipe.raw({ size }), cssProp)}
      ref={ref}
    />
  ),
);
