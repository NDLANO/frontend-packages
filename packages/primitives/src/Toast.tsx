/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { toastAnatomy } from "@ark-ui/anatomy";
import { Toast } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Text, TextProps } from "./Text";

const toastRecipe = sva({
  slots: toastAnatomy.keys(),
  base: {
    root: {
      position: "relative",
      background: "surface.action",
      color: "text.onAction",
      borderRadius: "xsmall",
      boxShadow: "medium",
      minWidth: "20rem",
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
    },
    closeTrigger: {
      position: "absolute",
      top: "xxsmall",
      right: "xxsmall",
    },
  },
});

const { withProvider, withContext } = createStyleContext(toastRecipe);

export interface RootProps extends Toast.RootProps, JsxStyleProps {}
export const ToastRoot = withProvider<HTMLDivElement, RootProps>(Toast.Root, "root");

export const ToastActionTrigger = withContext<HTMLButtonElement, JsxStyleProps & Toast.ActionTriggerProps>(
  Toast.ActionTrigger,
  "actionTrigger",
);

export const ToastCloseTrigger = withContext<HTMLDivElement, JsxStyleProps & Toast.CloseTriggerProps>(
  Toast.CloseTrigger,
  "closeTrigger",
);

const InternalToastDescription = withContext<HTMLDivElement, JsxStyleProps & Toast.DescriptionProps>(
  Toast.Description,
  "description",
);

export const ToastDescription = ({
  textStyle = "label.medium",
  children,
  ...props
}: Toast.DescriptionProps & TextProps & JsxStyleProps) => (
  <InternalToastDescription asChild>
    <Text asChild textStyle={textStyle} {...props}>
      <div>{children}</div>
    </Text>
  </InternalToastDescription>
);

const InternalToastTitle = withContext<HTMLDivElement, JsxStyleProps & Toast.TitleProps>(Toast.Title, "title");

export const ToastTitle = ({
  textStyle = "label.medium",
  fontWeight = "semibold",
  children,
  ...props
}: JsxStyleProps & Toast.TitleProps & TextProps) => (
  <InternalToastTitle asChild>
    <Text asChild fontWeight={fontWeight} textStyle={textStyle} {...props}>
      <div>{children}</div>
    </Text>
  </InternalToastTitle>
);
