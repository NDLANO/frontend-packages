/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Switch, switchAnatomy } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Text, type TextProps } from "./Text";

const switchRecipe = sva({
  slots: switchAnatomy.keys(),
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      gap: "xxsmall",
      _focus: {
        outline: "2px solid",
        outlineOffset: "4xsmall",
        outlineColor: "stroke.default",
        borderRadius: "xsmall",
      },
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      background: "surface.disabled.strong",
      width: "xxlarge",
      padding: "1",
      borderRadius: "medium",
      cursor: "pointer",
      flexShrink: "0",
      transitionDuration: "fast",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _checked: {
        background: "surface.action.active",
      },
      _disabled: {
        background: "surface.disabled",
        cursor: "not-allowed",
      },
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
    thumb: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "icon.onAction",
      borderRadius: "full",
      boxShadow: "small",
      transitionDuration: "fast",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      width: "10",
      height: "10",
      textStyle: "label.xsmall",
      fontWeight: "bold",
      _hover: {
        transform: "translateX(20%)",
        _disabled: {
          transform: "translateX(0)",
        },
        _motionReduce: {
          transform: "translateX(0)",
        },
      },
      _checked: {
        transform: "translateX(120%)",
        _hover: {
          transform: "translateX(100%)",
          _disabled: {
            transform: "translateX(120%)",
          },
          _motionReduce: {
            transform: "translateX(120%)",
          },
        },
      },
    },
    label: {
      color: "text.strong",
      transitionDuration: "fast",
      transitionProperty: "color",
      transitionTimingFunction: "default",
      _hover: {
        color: "text.action",
      },
      _disabled: {
        color: "text.disabled",
        _hover: {
          color: "text.disabled",
        },
      },
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(switchRecipe);

export type SwitchVariantProps = RecipeVariantProps<typeof switchRecipe>;

export type SwitchRootProps = Switch.RootProps & StyledProps & SwitchVariantProps;

export const SwitchRoot = withProvider(Switch.Root, "root", { baseComponent: true });

export const SwitchControl = withContext(Switch.Control, "control", { baseComponent: true });

export const SwitchThumb = withContext(Switch.Thumb, "thumb", { baseComponent: true });

const InternalSwitchLabel = withContext(Switch.Label, "label");

export const SwitchLabel = ({
  textStyle = "label.medium",
  children,
  ...props
}: Switch.LabelProps & TextProps & StyledProps) => (
  <InternalSwitchLabel asChild {...props}>
    <Text asChild consumeCss textStyle={textStyle}>
      <span>{children}</span>
    </Text>
  </InternalSwitchLabel>
);

export const SwitchHiddenInput = Switch.HiddenInput;
