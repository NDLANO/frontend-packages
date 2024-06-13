/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Checkbox } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "./createStyleContext";
import { useFormControl } from "./FormControl";
import { Text, TextProps } from "./Text";

const checkboxRecipe = sva({
  // TODO: Something is wrong with @ark-ui/anatomy here. Group is not styled if using tabsAnatomy.keys(),
  slots: ["root", "control", "indicator", "label", "group"],
  base: {
    group: {
      display: "flex",
      flexDirection: "column",
      gap: "xxsmall",
    },
    root: {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: "xxsmall",
      _disabled: {
        color: "text.disabled",
        cursor: "not-allowed",
      },
      _hover: {
        color: "text.action",
      },
      _focus: {
        outline: "2px solid",
        outlineOffset: "4xsmall",
        outlineColor: "stroke.default",
        borderRadius: "xsmall",
      },
    },
    control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "medium",
      height: "medium",
      background: "surface.default",
      borderRadius: "xsmall",
      border: "2px solid",
      borderColor: "stroke.subtle",
      color: "text.strong",
      transitionDuration: "normal",
      transitionProperty: "border-color, background, box-shadow, color",
      transitionTimingFunction: "default",
      _hover: {
        boxShadow: "0 0 0 4px var(--shadow-color)",
        boxShadowColor: "surface.actionSubtle.hover.strong",
      },
      _checked: {
        color: "icon.onAction",
        backgroundColor: "surface.action",
        borderColor: "surface.action",
      },
      _disabled: {
        borderColor: "stroke.disabled",
        _hover: {
          borderColor: "stroke.disabled",
          boxShadow: "none",
        },
        _checked: {
          background: "surface.disabled",
        },
      },
      _invalid: {
        borderColor: "stroke.error",
        _checked: {
          color: "stroke.error",
          borderColor: "stroke.error",
          backgroundColor: "surface.default",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(checkboxRecipe);

export type CheckboxRootProps = Checkbox.RootProps;

const InternalCheckboxRoot = withProvider<HTMLLabelElement, Checkbox.RootProps>(Checkbox.Root, "root");

export const CheckboxRoot = forwardRef<HTMLLabelElement, Checkbox.RootProps>((props, ref) => {
  const field = useFormControl(props);
  return (
    <InternalCheckboxRoot
      {...field}
      invalid={field.invalid ?? !!field["aria-invalid"]}
      ref={ref}
      aria-invalid={undefined}
    />
  );
});

export const CheckboxIndicator = withContext<HTMLDivElement, Checkbox.IndicatorProps>(Checkbox.Indicator, "indicator");

const InternalCheckboxLabel = withContext<HTMLSpanElement, Checkbox.LabelProps>(Checkbox.Label, "label");

export const CheckboxLabel = ({ textStyle = "label.medium", children, ...props }: Checkbox.LabelProps & TextProps) => (
  <InternalCheckboxLabel {...props} asChild>
    <Text textStyle={textStyle}>{children}</Text>
  </InternalCheckboxLabel>
);

export const CheckboxControl = withContext<HTMLDivElement, Checkbox.ControlProps>(Checkbox.Control, "control");

export const CheckboxHiddenInput = Checkbox.HiddenInput;

export const CheckboxGroup = withProvider<HTMLDivElement, Checkbox.GroupProps>(Checkbox.Group, "group");
