/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { RefAttributes } from "react";
import { Toast, toastAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { Text, type TextProps } from "./Text";

const toastRecipe = sva({
  slots: toastAnatomy.keys(),
  base: {
    root: {
      position: "relative",
      borderRadius: "xsmall",
      boxShadow: "medium",
      minWidth: "20rem",
      maxWidth: "30rem",
      height: "var(--height)",
      opacity: "var(--opacity)",
      overflowWrap: "anywhere",
      padding: "small",
      scale: "var(--scale)",
      translate: "var(--x) var(--y) 0",
      willChange: "translate, scale, opacity, height",
      zIndex: "var(--z-index)",
      transitionDuration: "slow",
      transitionProperty: "translate, scale, opacity, height",
      transitionTimingFunction: "default",
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
    title: {
      paddingInlineEnd: "xxlarge",
    },
    closeTrigger: {
      position: "absolute",
      top: "xxsmall",
      right: "xxsmall",
    },
    description: {
      paddingInlineEnd: "xxlarge",
    },
  },
  defaultVariants: {
    variant: "light",
  },
  variants: {
    variant: {
      light: {
        root: {
          background: "surface.brand.1.moderate",
          color: "text.default",
        },
      },
      dark: {
        root: {
          background: "surface.brand.1.strong",
          color: "text.onAction",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(toastRecipe);

export type ToastRootVariantProps = NonNullable<RecipeVariantProps<typeof toastRecipe>>;

export interface ToastRootProps extends Toast.RootProps, StyledProps, ToastRootVariantProps {}
export const ToastRoot = withProvider(Toast.Root, "root", { baseComponent: true });

export const ToastActionTrigger = withContext(Toast.ActionTrigger, "actionTrigger", { baseComponent: true });

export const ToastCloseTrigger = withContext(Toast.CloseTrigger, "closeTrigger", { baseComponent: true });

const InternalToastDescription = withContext(Toast.Description, "description");

interface ToastDescriptionProps
  extends Omit<Toast.DescriptionProps, "color">, TextProps, StyledProps, RefAttributes<HTMLDivElement> {}

export const ToastDescription = ({ textStyle = "label.medium", children, ...props }: ToastDescriptionProps) => (
  <InternalToastDescription asChild>
    <Text asChild consumeCss textStyle={textStyle} {...props}>
      <div>{children}</div>
    </Text>
  </InternalToastDescription>
);

const InternalToastTitle = withContext(Toast.Title, "title");

interface ToastTitleProps
  extends Omit<Toast.TitleProps, "color">, TextProps, StyledProps, RefAttributes<HTMLDivElement> {}

export const ToastTitle = ({
  textStyle = "label.medium",
  fontWeight = "semibold",
  children,
  ...props
}: ToastTitleProps) => (
  <InternalToastTitle asChild>
    <Text asChild consumeCss fontWeight={fontWeight} textStyle={textStyle} {...props}>
      <div>{children}</div>
    </Text>
  </InternalToastTitle>
);
