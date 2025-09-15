/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { ark, RadioGroup, radioGroupAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext, styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Text, type TextProps } from "./Text";

const radioGroupRecipe = sva({
  slots: radioGroupAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexWrap: "wrap",
      position: "relative",
      gap: "small",
      _vertical: {
        flexDirection: "column",
      },
      _horizontal: {
        flexDirection: "row",
      },
    },
    itemControl: {
      flexShrink: "0",
      background: "surface.default",
      borderColor: "stroke.subtle",
      borderRadius: "full",
      borderWidth: "2px",
      width: "medium",
      height: "medium",
      outlineStyle: "solid",
      outlineWidth: "4px",
      outlineOffset: "-6px",
      outlineColor: "surface.default",
      transitionDuration: "normal",
      transitionProperty: "background, border-color, box-shadow",
      transitionTimingFunction: "default",
      _hover: {
        boxShadow: "0 0 0 4px var(--shadow-color)",
        boxShadowColor: "surface.actionSubtle.hover.strong",
      },
      _checked: {
        background: "stroke.default",
        borderColor: "stroke.default",
      },
      _disabled: {
        borderColor: "stroke.disabled",
        _hover: {
          borderColor: "stroke.disabled",
          boxShadow: "none",
        },
      },
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "xxsmall",
      _disabled: {
        cursor: "not-allowed",
      },
      "&:has(input:focus-visible)": {
        outline: "2px solid",
        outlineOffset: "4xsmall",
        outlineColor: "stroke.default",
        borderRadius: "xsmall",
      },
    },
    itemText: {
      _hover: {
        color: "text.action",
      },
      _disabled: {
        color: "text.disabled",
        _hover: {
          color: "text.disabled",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

export interface RadioGroupRootProps extends RadioGroup.RootProps, StyledProps {}

export const RadioGroupRoot = withProvider(RadioGroup.Root, "root", {
  baseComponent: true,
});

export const RadioGroupIndicator = withContext(RadioGroup.Indicator, "indicator", { baseComponent: true });

export const RadioGroupItemControl = withContext(RadioGroup.ItemControl, "itemControl", { baseComponent: true });

export const RadioGroupItem = withContext(RadioGroup.Item, "item", { baseComponent: true });

const InternalRadioGroupItemText = withContext(RadioGroup.ItemText, "itemText");

const InnerRadioGroupItemText = styled(ark.span, {}, { baseComponent: true });

export const RadioGroupItemText = ({
  textStyle = "label.medium",
  children,
  asChild,
  consumeCss,
  ...props
}: RadioGroup.ItemTextProps & TextProps & StyledProps) => (
  <InternalRadioGroupItemText asChild>
    <Text asChild consumeCss textStyle={textStyle} {...props}>
      <InnerRadioGroupItemText asChild={asChild} consumeCss={consumeCss}>
        {children}
      </InnerRadioGroupItemText>
    </Text>
  </InternalRadioGroupItemText>
);

export const InternalRadioGroupLabel = withContext(RadioGroup.Label, "label");

const InnerRadioGroupLabel = styled(ark.div, {}, { baseComponent: true });

export const RadioGroupLabel = forwardRef<HTMLLabelElement, RadioGroup.LabelProps & TextProps & StyledProps>(
  ({ textStyle = "label.large", fontWeight = "bold", children, asChild, consumeCss, ...props }, ref) => (
    <InternalRadioGroupLabel {...props} asChild ref={ref}>
      <Text textStyle={textStyle} fontWeight={fontWeight} asChild>
        <InnerRadioGroupLabel asChild={asChild} consumeCss={consumeCss}>
          {children}
        </InnerRadioGroupLabel>
      </Text>
    </InternalRadioGroupLabel>
  ),
);

export const RadioGroupItemHiddenInput = RadioGroup.ItemHiddenInput;
