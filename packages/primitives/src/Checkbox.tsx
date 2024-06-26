/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { checkboxAnatomy } from "@ark-ui/anatomy";
import { Checkbox } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Text, TextProps } from "./Text";

const checkboxRecipe = sva({
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      _disabled: {
        color: "text.disabled",
        cursor: "not-allowed",
        _hover: {
          color: "text.disabled",
        },
      },
    },
    group: {
      display: "flex",
      gap: "xxsmall",
      flexDirection: "column",
    },
    control: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      width: "medium",
      height: "medium",
      color: "text.strong",
      transitionDuration: "normal",
      transitionProperty: "border-color, background, box-shadow, color",
      transitionTimingFunction: "default",
    },
  },
  defaultVariants: {
    variant: "checkbox",
  },
  variants: {
    variant: {
      checkbox: {
        root: {
          gap: "xxsmall",
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
          border: "2px solid",
          borderColor: "stroke.subtle",
          borderRadius: "xsmall",
          background: "surface.default",
          _hover: {
            boxShadow: "0 0 0 4px var(--shadow-color)",
            boxShadowColor: "surface.actionSubtle.hover.strong",
          },
          _checked: {
            backgroundColor: "surface.action",
            borderColor: "surface.action",
            color: "icon.onAction",
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
      chip: {
        root: {
          width: "fit-content",
          color: "text.default",
          gap: "4xsmall",
          background: "surface.actionSubtle",
          border: "1px solid",
          borderColor: "stroke.subtle",
          outlineColor: "stroke.subtle",
          paddingInline: "xsmall",
          paddingBlock: "4xsmall",
          borderRadius: "large",
          minHeight: "large",
          transitionDuration: "normal",
          transitionProperty: "border-color, background, box-shadow, color",
          transitionTimingFunction: "default",
          _disabled: {
            color: "text.disabled",
            borderColor: "stroke.disabled",
            background: "surface.disabled",
            _hover: {
              color: "text.disabled",
              borderColor: "stroke.disabled",
              background: "surface.disabled",
            },
            _checked: {
              color: "text.disabled",
              borderColor: "stroke.disabled",
              background: "surface.disabled",
              _hover: {
                color: "text.disabled",
                borderColor: "stroke.disabled",
                background: "surface.disabled",
              },
            },
          },
          _hover: {
            background: "surface.actionSubtle.hover",
            borderColor: "stroke.hover",
            outlineColor: "stroke.hover",
            _invalid: {
              backgroundColor: "surface.dangerSubtle",
            },
          },
          _checked: {
            color: "text.onAction",
            background: "surface.actionSubtle.selected",
            borderColor: "surface.actionSubtle.selected",
            outlineColor: "icon.onAction",
            _focus: {
              outlineOffset: "-4px",
            },
            _hover: {
              outlineOffset: "-2px",
              background: "surface.actionSubtle.hover",
              color: "text.default",
              borderColor: "stroke.hover",
              outlineColor: "stroke.hover",
            },
          },
          _invalid: {
            borderColor: "stroke.error",
            outlineColor: "stroke.error",
            background: "surface.dangerSubtle",
            outlineOffset: "-2px",
            _checked: {
              color: "text.default",
              borderColor: "stroke.error",
              outlineColor: "stroke.error",
              background: "surface.dangerSubtle",
              outlineOffset: "-2px",
              _hover: {
                borderColor: "stroke.hover",
                outlineColor: "stroke.hover",
              },
            },
          },
          _focus: {
            outlineStyle: "solid",
            outlineWidth: "2px",
            outlineOffset: "-2px",
          },
        },
        control: {
          display: "none",
          _checked: {
            display: "flex",
            color: "text.onAction",
            _hover: {
              color: "stroke.hover",
            },
          },
          _disabled: {
            color: "stroke.disabled",
            _hover: {
              color: "stroke.disabled",
            },
          },
          _invalid: {
            _checked: {
              color: "stroke.error",
            },
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(checkboxRecipe);

export type CheckboxVariantProps = RecipeVariantProps<typeof checkboxRecipe>;

export type CheckboxRootProps = Checkbox.RootProps & CheckboxVariantProps & JsxStyleProps;

export const CheckboxRoot = withProvider<HTMLLabelElement, CheckboxRootProps>(Checkbox.Root, "root");

export const CheckboxIndicator = withContext<HTMLDivElement, Checkbox.IndicatorProps & JsxStyleProps>(
  Checkbox.Indicator,
  "indicator",
);

const InternalCheckboxLabel = withContext<HTMLSpanElement, JsxStyleProps & Checkbox.LabelProps>(
  Checkbox.Label,
  "label",
);

export const CheckboxLabel = ({
  textStyle = "label.medium",
  children,
  ...props
}: Checkbox.LabelProps & TextProps & JsxStyleProps) => (
  <InternalCheckboxLabel {...props} asChild>
    <Text textStyle={textStyle}>{children}</Text>
  </InternalCheckboxLabel>
);

export const CheckboxControl = withContext<HTMLDivElement, JsxStyleProps & Checkbox.ControlProps>(
  Checkbox.Control,
  "control",
);

export const CheckboxGroup = withProvider<HTMLDivElement, JsxStyleProps & Checkbox.GroupProps>(Checkbox.Group, "group");

export const CheckboxHiddenInput = Checkbox.HiddenInput;
