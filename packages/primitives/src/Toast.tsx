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

export interface RootProps extends Toast.RootProps {}
export const ToastRoot = withProvider<HTMLDivElement, RootProps>(Toast.Root, "root");

export const ToastActionTrigger = withContext<HTMLButtonElement, Toast.ActionTriggerProps>(
  Toast.ActionTrigger,
  "actionTrigger",
);

export const ToastCloseTrigger = withContext<HTMLDivElement, Toast.CloseTriggerProps>(
  Toast.CloseTrigger,
  "closeTrigger",
);

export const InternalToastDescription = withContext<HTMLDivElement, Toast.DescriptionProps>(
  Toast.Description,
  "description",
);

export const ToastDescription = ({ textStyle = "label.medium", ...props }: Toast.DescriptionProps & TextProps) => (
  <InternalToastDescription asChild>
    <Text as="div" textStyle={textStyle} {...props} />
  </InternalToastDescription>
);

export const InternalToastTitle = withContext<HTMLDivElement, Toast.TitleProps>(Toast.Title, "title");

export const ToastTitle = ({
  textStyle = "label.medium",
  fontWeight = "semibold",
  ...props
}: Toast.TitleProps & TextProps) => (
  <InternalToastTitle asChild>
    <Text as="div" fontWeight={fontWeight} textStyle={textStyle} {...props} />
  </InternalToastTitle>
);
