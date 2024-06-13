/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLArkProps, ark } from "@ark-ui/react";
import { RecipeVariantProps, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariant, StyledComponent } from "@ndla/styled-system/types";

export const buttonBaseRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "xsmall",
    cursor: "pointer",
    textDecoration: "none",
    textStyle: "label.medium",
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
      _hover: {
        color: "text.onAction",
        background: "surface.disabled",
      },
    },
    _focusVisible: {
      boxShadow: "inset 0 0 0 3px var(--shadow-color)",
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
          boxShadow: "inset 0 0 0 3px var(--shadow-color), inset 0px 0px 0px 6px currentcolor",
        },
      },
      secondary: {
        color: "text.strong",
        background: "transparent",
        boxShadow: "inset 0 0 0 1px var(--shadow-color)",
        _hover: {
          background: "surface.actionSubtle.hover",
        },
        _active: {
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
            boxShadow: "inset 0 0 0 3px var(--shadow-color)",
          },
        },
        _active: {
          borderColor: "stroke.default",
          background: "surface.actionSubtle.active",
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
        background: "surface.error",
        color: "text.onAction",
        _hover: {
          background: "surface.error.hover",
        },
        _active: {
          background: "surface.error.active",
        },
        _focusVisible: {
          boxShadowColor: "surface.error",
          boxShadow: "inset 0 0 0 3px var(--shadow-color), inset 0px 0px 0px 6px currentcolor",
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
          boxShadow: "inset 0 0 0 3px var(--shadow-color), inset 0px 0px 0px 6px currentcolor",
        },
      },
      link: {
        background: "transparent",
        color: "text.link",
        textDecoration: "underline",
        textDecorationThickness: "1px",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export const buttonRecipe = cva({
  defaultVariants: {
    size: "default",
  },
  variants: {
    size: {
      default: {
        paddingInline: "medium",
        paddingBlock: "xxsmall",
        minHeight: "24",
      },
      small: {
        textStyle: "label.small",
        minHeight: "19",
        paddingInline: "small",
        paddingBlock: "3xsmall",
      },
    },
  },
});

export const iconButtonRecipe = cva({
  base: {
    lineHeight: "1",
    minHeight: "unset",
    height: "fit-content",
    "& svg": {
      marginInline: "0",
      marginBlock: "0",
      width: "medium",
      height: "medium",
    },
    paddingInline: "xsmall",
    paddingBlock: "xsmall",
  },
});

type Variant = RecipeVariant<typeof buttonBaseRecipe>["variant"];

type ButtonVariant = Exclude<Variant, "clear" | "clearSubtle">;

export type ButtonVariantProps = { variant?: ButtonVariant } & RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = HTMLArkProps<"button"> & JsxStyleProps & ButtonVariantProps;

const BaseButton = styled(ark.button, buttonBaseRecipe, { defaultProps: { type: "button" } });

export const Button: StyledComponent<"button", NonNullable<ButtonVariantProps>> = styled(BaseButton, buttonRecipe);

type IconButtonVariant = Exclude<Variant, "link">;

export type IconButtonVariantProps = { variant?: IconButtonVariant };

export type IconButtonProps = HTMLArkProps<"button"> & IconButtonVariantProps & JsxStyleProps;

export const IconButton: StyledComponent<"button", NonNullable<IconButtonVariantProps>> = styled(
  BaseButton,
  iconButtonRecipe,
);
