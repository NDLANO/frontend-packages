/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { radioGroupAnatomy } from "@ark-ui/anatomy";
import { RadioGroup } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "./createStyleContext";
import { useFormControl } from "./FormControl";
import { Label } from "./Label";
import { Text, TextProps } from "./Text";

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

export interface RadioGroupRootProps extends RadioGroup.RootProps {}

const InternalRadioGroupRoot = withProvider<HTMLDivElement, RadioGroupRootProps>(RadioGroup.Root, "root");

export const RadioGroupRoot = forwardRef<HTMLDivElement, RadioGroupRootProps>((props, ref) => {
  const field = useFormControl(props);
  return <InternalRadioGroupRoot {...field} ref={ref} />;
});

export const RadioGroupIndicator = withContext<HTMLDivElement, RadioGroup.IndicatorProps>(
  RadioGroup.Indicator,
  "indicator",
);

export const RadioGroupItemControl = withContext<HTMLDivElement, RadioGroup.ItemControlProps>(
  RadioGroup.ItemControl,
  "itemControl",
);

export const RadioGroupItem = withContext<HTMLLabelElement, RadioGroup.ItemProps>(RadioGroup.Item, "item");

const InternalRadioGroupItemText = withContext<HTMLSpanElement, RadioGroup.ItemTextProps>(
  RadioGroup.ItemText,
  "itemText",
);

export const RadioGroupItemText = ({ textStyle = "label.medium", ...props }: RadioGroup.ItemTextProps & TextProps) => (
  <InternalRadioGroupItemText asChild>
    <Text as="span" textStyle={textStyle} {...props} />
  </InternalRadioGroupItemText>
);

export const InternalRadioGroupLabel = withContext<HTMLLabelElement, RadioGroup.LabelProps>(RadioGroup.Label, "label");

export const RadioGroupLabel = forwardRef<HTMLLabelElement, RadioGroup.LabelProps & TextProps>(
  ({ textStyle = "label.large", ...props }, ref) => (
    <InternalRadioGroupLabel ref={ref} asChild>
      <Label textStyle={textStyle} {...props} />
    </InternalRadioGroupLabel>
  ),
);

export const RadioGroupItemHiddenInput = RadioGroup.ItemHiddenInput;