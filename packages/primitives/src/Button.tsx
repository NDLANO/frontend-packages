/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, forwardRef } from "react";
import { HTMLArkProps, ark } from "@ark-ui/react";
import { RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { JsxStyleProps, RecipeVariant } from "@ndla/styled-system/types";
import { Spinner } from "./Spinner";

// TODO: Consider if any of the backgrounds should actually be transparent
// TODO: Figure out sizing for link variant.
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
      boxShadow: "inset 0 0 0 3px var(--shadow-color)",
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
          boxShadow: "inset 0 0 0 3px var(--shadow-color), inset 0px 0px 0px 6px currentcolor",
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
          background: "surface.actionSubtle.hover.strong",
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
        _active: {
          background: "surface.hover",
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
        paddingInline: "xsmall",
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
});

type Variant = RecipeVariant<typeof buttonBaseRecipe>["variant"];

type ButtonVariant = Exclude<Variant, "clear" | "clearSubtle">;

export type ButtonVariantProps = { variant?: ButtonVariant } & RecipeVariantProps<typeof buttonRecipe>;

interface BaseButtonProps extends HTMLArkProps<"button">, JsxStyleProps {
  loading?: boolean;
  loadingContent?: ReactNode;
  replaceContent?: boolean;
}

export type ButtonProps = BaseButtonProps & ButtonVariantProps;

const StyledButton = styled(ark.button, {}, { baseComponent: true, defaultProps: { type: "button" } });

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ loading, loadingContent: loadingContentProp, replaceContent, onClick, children, ...props }, ref) => {
    const ariaDisabled = loading ? { "aria-disabled": true } : {};
    const loadingContent = replaceContent ? (
      loadingContentProp
    ) : (
      <>
        {loadingContentProp}
        {children}
      </>
    );

    return (
      <StyledButton onClick={loading ? undefined : onClick} {...ariaDisabled} {...props} ref={ref}>
        {loading ? loadingContent : children}
      </StyledButton>
    );
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, loadingContent, size, css: cssProp, ...props }, ref) => (
    <BaseButton
      {...props}
      loadingContent={loadingContent ?? <Spinner size="small" />}
      css={css.raw(buttonBaseRecipe.raw({ variant }), buttonRecipe.raw({ size }), cssProp)}
      ref={ref}
    />
  ),
);

type IconButtonVariant = Exclude<Variant, "link">;

export type IconButtonVariantProps = { variant?: IconButtonVariant };

export type IconButtonProps = BaseButtonProps & IconButtonVariantProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, css: cssProp, loadingContent, replaceContent = true, ...props }, ref) => (
    <BaseButton
      {...props}
      css={css.raw(buttonBaseRecipe.raw({ variant }), iconButtonRecipe.raw(), cssProp)}
      loadingContent={loadingContent ?? <Spinner size="small" />}
      replaceContent={replaceContent}
      ref={ref}
    />
  ),
);
