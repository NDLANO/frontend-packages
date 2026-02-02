/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { RecipeVariant, StyledProps } from "@ndla/styled-system/types";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { type RecipeVariantProps, css, cva } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import { type ReactNode, forwardRef, useMemo } from "react";
import { Spinner } from "./Spinner";

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

type Variant = RecipeVariant<typeof buttonBaseRecipe>["variant"];

type ButtonVariant = Exclude<Variant, "clear" | "clearSubtle">;

export interface ButtonVariantProps extends NonNullable<RecipeVariantProps<typeof buttonRecipe>> {
  variant?: ButtonVariant;
}

export interface BaseButtonProps extends HTMLArkProps<"button">, StyledProps {
  loading?: boolean;
  loadingContent?: ReactNode;
  replaceContent?: boolean;
}

export interface ButtonProps extends BaseButtonProps, ButtonVariantProps {}

const StyledButton = styled(ark.button, {}, { baseComponent: true, defaultProps: { type: "button" } });

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ loading, loadingContent: loadingContentProp, replaceContent, onClick: _onClick, children, ...props }, ref) => {
    const ariaDisabled = loading ? { "aria-disabled": true } : {};

    const onClick = useMemo(() => (loading ? undefined : _onClick), [_onClick, loading]);

    const loadingContent = useMemo(() => {
      return replaceContent ? (
        loadingContentProp
      ) : (
        <>
          {loadingContentProp}
          {children}
        </>
      );
    }, [children, loadingContentProp, replaceContent]);

    return (
      <StyledButton onClick={onClick} {...ariaDisabled} {...props} ref={ref}>
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
      css={css.raw(
        buttonBaseRecipe.raw({ variant }),
        variant !== "link" ? buttonRecipe.raw({ size }) : undefined,
        cssProp,
      )}
      ref={ref}
    />
  ),
);

type IconButtonVariant = Exclude<Variant, "link">;

export interface IconButtonVariantProps extends NonNullable<RecipeVariantProps<typeof iconButtonRecipe>> {
  variant?: IconButtonVariant;
}

export interface IconButtonProps extends BaseButtonProps, IconButtonVariantProps {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, css: cssProp, loadingContent, size, replaceContent = true, ...props }, ref) => (
    <BaseButton
      {...props}
      css={css.raw(buttonBaseRecipe.raw({ variant }), iconButtonRecipe.raw({ size }), cssProp)}
      loadingContent={loadingContent ?? <Spinner size="small" />}
      replaceContent={replaceContent}
      ref={ref}
    />
  ),
);
