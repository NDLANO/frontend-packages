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
        // TODO: Remove this once itemText is aware of checked state
        "& [data-part='item-text']": {
          textDecoration: "underline",
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

type ComboboxVariantProps = RecipeVariantProps<typeof comboboxRecipe>;

export type ComboboxRootProps<T extends Combobox.CollectionItem> = Combobox.RootProps<T> & ComboboxVariantProps;

const InternalComboboxRoot = withProvider<HTMLDivElement, ComboboxRootProps<Combobox.CollectionItem>>(
  Combobox.Root,
  "root",
);

export const ComboboxRoot = <T extends Combobox.CollectionItem>({ ...props }: ComboboxRootProps<T>) => {
  return (
    //@ts-expect-error - withProvider swallows the generic that Combobox.Root expects.
    <InternalComboboxRoot {...props} />
  );
};

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
  children,
  textStyle = "label.small",
  fontWeight = "bold",
  ...props
}: Combobox.ItemGroupLabelProps & TextProps) => (
  <InternalComboboxItemGroupLabel forwardCssProp asChild>
    <Text asChild forwardCssProp textStyle={textStyle} fontWeight={fontWeight} {...props}>
      <div>{children}</div>
    </Text>
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
  <InternalComboboxItemText forwardCssProp asChild>
    <Text {...props} />
  </InternalComboboxItemText>
);

const InternalComboboxLabel = withContext<HTMLLabelElement, Assign<JsxStyleProps, Combobox.LabelProps>>(
  Combobox.Label,
  "label",
);

export const ComboboxLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: Combobox.LabelProps & TextProps) => (
  <InternalComboboxLabel forwardCssProp asChild>
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
