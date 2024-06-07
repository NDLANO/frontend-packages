/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { comboboxAnatomy } from "@ark-ui/anatomy";
import { Assign, Combobox } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps, RecipeVariantProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import { Text, TextProps } from "./Text";

const comboboxRecipe = sva({
  slots: comboboxAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "xxsmall",
      width: "100%",
    },
    control: {
      display: "flex",
      gap: "4xsmall",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "xsmall",
      gap: "4xsmall",
      background: "surface.default",
      padding: "xsmall",
      boxShadow: "large",
      zIndex: "dropdown",
      _open: {
        animation: "fade-shift-in 0.2s ease-out",
      },
      _closed: {
        animation: "fade-shift-out 0.2s ease-out",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4xsmall",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      borderRadius: "xsmall",
      transitionDuration: "fast",
      transitionProperty: "background, color, border-color",
      transitionTimingFunction: "default",
      background: "surface.default",
      _disabled: {
        background: "surface.disabled",
        color: "text.disabled",
        _hover: {
          background: "surface.disabled",
          color: "text.disabled",
        },
      },
      _hover: {
        background: "surface.hover",
      },
      _highlighted: {
        background: "surface.hover",
      },
      _checked: {
        background: "surface.selected",
        _highlighted: {
          background: "surface.hover",
        },
      },
    },
    itemText: {
      textDecoration: "underline solid transparent",
      transitionDuration: "fast",
      transitionProperty: "text-decoration",
      transitionTimingFunction: "default",
      _hover: {
        textDecorationColor: "inherit",
      },
      _highlighted: {
        textDecorationColor: "inherit",
      },
      _checked: {
        textDecorationColor: "inherit",
      },
      _disabled: {
        textDecorationColor: "transparent",
        _hover: {
          textDecorationColor: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    variant: "simple",
  },
  variants: {
    variant: {
      simple: {
        item: {
          padding: "xsmall",
        },
      },
      bordered: {
        item: {
          paddingInline: "small",
          paddingBlock: "xsmall",
          border: "1px solid",
          borderColor: "stroke.subtle",
          _hover: {
            borderColor: "stroke.hover",
            background: "surface.default",
          },
          _highlighted: {
            borderColor: "stroke.default",
          },
          _checked: {
            borderColor: "stroke.default",
          },
          _disabled: {
            borderColor: "stroke.disabled",
            _hover: {
              borderColor: "stroke.disabled",
            },
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(comboboxRecipe);

type ComboboxVariantProps = RecipeVariantProps<typeof comboboxRecipe>;

export type ComboboxRootProps<T extends Combobox.CollectionItem> = Combobox.RootProps<T> & ComboboxVariantProps;

export const ComboboxRoot = withProvider<HTMLDivElement, ComboboxRootProps<Combobox.CollectionItem>>(
  Combobox.Root,
  "root",
);

export const ComboboxClearTrigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Combobox.ClearTriggerProps>>(
  Combobox.ClearTrigger,
  "clearTrigger",
);

export const ComboboxContent = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ContentProps>>(
  Combobox.Content,
  "content",
);

export const ComboboxControl = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ControlProps>>(
  Combobox.Control,
  "control",
);

export const ComboboxInput = withContext<HTMLInputElement, Assign<JsxStyleProps, Combobox.InputProps>>(
  Combobox.Input,
  "input",
);

const InternalComboboxItemGroupLabel = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemGroupLabelProps>>(
  Combobox.ItemGroupLabel,
  "itemGroupLabel",
);

export const ComboboxItemGroupLabel = ({
  textStyle = "label.small",
  fontWeight = "bold",
  ...props
}: Combobox.ItemGroupLabelProps & TextProps) => (
  <InternalComboboxItemGroupLabel asChild>
    <Text as="div" textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalComboboxItemGroupLabel>
);

export const ComboboxItemGroup = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemGroupProps>>(
  Combobox.ItemGroup,
  "itemGroup",
);

export const ComboboxItemIndicator = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemIndicatorProps>>(
  Combobox.ItemIndicator,
  "itemIndicator",
);

export const ComboboxItem = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemProps>>(
  Combobox.Item,
  "item",
);

const InternalComboboxItemText = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemTextProps>>(
  Combobox.ItemText,
  "itemText",
);

export const ComboboxItemText = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: Combobox.ItemTextProps & TextProps) => (
  <InternalComboboxItemText asChild>
    <Text {...props} />
  </InternalComboboxItemText>
);

const InternalComboboxLabel = withContext<HTMLLabelElement, Assign<JsxStyleProps, Combobox.LabelProps>>(
  Combobox.Label,
  "label",
);

export const ComboboxLabel = ({
  textStyle = "label.large",
  fontWeight = "bold",
  ...props
}: Combobox.LabelProps & TextProps) => (
  <InternalComboboxLabel asChild>
    <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalComboboxLabel>
);

export const ComboboxPositioner = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.PositionerProps>>(
  Combobox.Positioner,
  "positioner",
);

export const ComboboxTrigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, Combobox.TriggerProps>>(
  Combobox.Trigger,
  "trigger",
);
