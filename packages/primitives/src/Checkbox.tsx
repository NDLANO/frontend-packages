/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Checkbox, checkboxAnatomy, type HTMLArkProps } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";
import type { RefAttributes } from "react";
import { Text, type TextProps } from "./Text";

const checkboxRecipe = sva({
  slots: checkboxAnatomy.keys(),
  base: {
    root: {
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      width: "fit-content",
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
      flexShrink: "0",
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
      _disabled: {
        cursor: "not-allowed",
      },
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
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
          _focusVisible: {
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
              borderColor: "stroke.disabled",
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
            background: "surface.action.selected",
            borderColor: "surface.action.selected",
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

export type CheckboxVariantProps = NonNullable<RecipeVariantProps<typeof checkboxRecipe>>;

export interface CheckboxRootProps extends StyledProps, HTMLArkProps<"label">, CheckboxVariantProps {}

export const CheckboxRoot = withProvider(Checkbox.Root, "root", { baseComponent: true });

export const CheckboxIndicator = withContext(Checkbox.Indicator, "indicator", { baseComponent: true });

const InternalCheckboxLabel = withContext(Checkbox.Label, "label");

interface CheckboxLabelProps
  extends StyledProps, Omit<Checkbox.LabelProps, "color">, TextProps, RefAttributes<HTMLSpanElement> {}

export const CheckboxLabel = ({ textStyle = "label.medium", children, ...props }: CheckboxLabelProps) => (
  <InternalCheckboxLabel {...props} asChild>
    <Text textStyle={textStyle}>{children}</Text>
  </InternalCheckboxLabel>
);

export const CheckboxControl = withContext(Checkbox.Control, "control", { baseComponent: true });

export const CheckboxGroup = withProvider(Checkbox.Group, "group", { baseComponent: true });

export const CheckboxHiddenInput = Checkbox.HiddenInput;
