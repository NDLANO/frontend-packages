/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Assign, Combobox, comboboxAnatomy } from "@ark-ui/react";
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
      gap: "3xsmall",
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "4xsmall",
    },
    content: {
      display: "flex",
      gap: "4xsmall",
      flexDirection: "column",
      zIndex: "dropdown",
      background: "surface.default",
      borderRadius: "xsmall",
      boxShadow: "large",
      padding: "xsmall",
      overflowY: "auto",
      maxHeight: "surface.xsmall",
      _open: {
        animation: "fade-shift-in 0.25s ease-out",
      },
      _closed: {
        animation: "fade-shift-out 0.25s ease-out",
      },
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
        cursor: "not-allowed",
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
    trigger: {
      "& svg": {
        color: "icon.default",
        transformOrigin: "center",
        transitionDuration: "normal",
        transitionProperty: "transform",
        transitionTimingFunction: "default",
      },
      _open: {
        "& svg": {
          transform: "rotate(180deg)",
        },
      },
    },
    itemIndicator: {
      color: "stroke.default",
    },
    itemText: {
      _checked: {
        textDecoration: "underline",
      },
      _highlighted: {
        textDecoration: "underline",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4xsmall",
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

export type ComboboxVariantProps = RecipeVariantProps<typeof comboboxRecipe>;

export type ComboboxRootProps<T extends Combobox.CollectionItem> = Combobox.RootProps<T> &
  ComboboxVariantProps & { translations: Combobox.RootProps<T>["translations"] };

const InternalComboboxRoot = withProvider<HTMLDivElement, ComboboxRootProps<Combobox.CollectionItem>>(
  Combobox.Root,
  "root",
  { baseComponent: true },
);

export const ComboboxRoot = <T extends Combobox.CollectionItem>({ ...props }: ComboboxRootProps<T>) => {
  return (
    //@ts-expect-error - withProvider swallows the generic that Combobox.Root expects.
    <InternalComboboxRoot {...props} />
  );
};

export type ComboboxClearTriggerProps = Combobox.ClearTriggerProps & JsxStyleProps;

export const ComboboxClearTrigger = withContext<HTMLButtonElement, ComboboxClearTriggerProps>(
  Combobox.ClearTrigger,
  "clearTrigger",
  { baseComponent: true },
);

export type ComboboxContentProps = Combobox.ContentProps & JsxStyleProps;

export const ComboboxContent = withContext<HTMLDivElement, ComboboxContentProps>(Combobox.Content, "content", {
  baseComponent: true,
});

export type ComboboxControlProps = Combobox.ControlProps & JsxStyleProps;

export const ComboboxControl = withContext<HTMLDivElement, ComboboxControlProps>(Combobox.Control, "control", {
  baseComponent: true,
});

export type ComboboxInputProps = Combobox.InputProps & JsxStyleProps;

export const ComboboxInput = withContext<HTMLInputElement, ComboboxInputProps>(Combobox.Input, "input", {
  baseComponent: true,
});

const InternalComboboxItemGroupLabel = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemGroupLabelProps>>(
  Combobox.ItemGroupLabel,
  "itemGroupLabel",
);

export type ComboboxItemGroupLabelProps = Combobox.ItemGroupLabelProps & TextProps & JsxStyleProps;

export const ComboboxItemGroupLabel = ({
  children,
  textStyle = "label.small",
  fontWeight = "bold",
  ...props
}: ComboboxItemGroupLabelProps) => (
  <InternalComboboxItemGroupLabel asChild>
    <Text asChild consumeCss textStyle={textStyle} fontWeight={fontWeight} {...props}>
      <div>{children}</div>
    </Text>
  </InternalComboboxItemGroupLabel>
);

export type ComboboxItemGroupProps = Combobox.ItemGroupProps & JsxStyleProps;

export const ComboboxItemGroup = withContext<HTMLDivElement, ComboboxItemGroupProps>(Combobox.ItemGroup, "itemGroup", {
  baseComponent: true,
});

export type ComboboxItemIndicatorProps = Combobox.ItemIndicatorProps & JsxStyleProps;

export const ComboboxItemIndicator = withContext<HTMLDivElement, ComboboxItemIndicatorProps>(
  Combobox.ItemIndicator,
  "itemIndicator",
  { baseComponent: true },
);

export type ComboboxItemProps = Combobox.ItemProps & JsxStyleProps;

export const ComboboxItem = withContext<HTMLDivElement, ComboboxItemProps>(Combobox.Item, "item", {
  baseComponent: true,
});

const InternalComboboxItemText = withContext<HTMLDivElement, Assign<JsxStyleProps, Combobox.ItemTextProps>>(
  Combobox.ItemText,
  "itemText",
);

export type ComboboxItemTextProps = Combobox.ItemTextProps & TextProps & JsxStyleProps;

export const ComboboxItemText = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  children,
  ...props
}: ComboboxItemTextProps) => (
  <InternalComboboxItemText asChild>
    <Text {...props} asChild consumeCss>
      <div>{children}</div>
    </Text>
  </InternalComboboxItemText>
);

const InternalComboboxLabel = withContext<HTMLLabelElement, Assign<JsxStyleProps, Combobox.LabelProps>>(
  Combobox.Label,
  "label",
);

export type ComboboxLabelProps = Combobox.LabelProps & TextProps & JsxStyleProps;

export const ComboboxLabel = ({ textStyle = "label.medium", fontWeight = "bold", ...props }: ComboboxLabelProps) => (
  <InternalComboboxLabel asChild>
    <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalComboboxLabel>
);

export type ComboboxPositionerProps = Combobox.PositionerProps & JsxStyleProps;

export const ComboboxPositioner = withContext<HTMLDivElement, ComboboxPositionerProps>(
  Combobox.Positioner,
  "positioner",
  { baseComponent: true },
);

export type ComboboxTriggerProps = Combobox.TriggerProps & JsxStyleProps;

export const ComboboxTrigger = withContext<HTMLButtonElement, ComboboxTriggerProps>(Combobox.Trigger, "trigger", {
  baseComponent: true,
});
