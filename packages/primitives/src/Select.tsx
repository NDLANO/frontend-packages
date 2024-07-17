/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Select, selectAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import { TextProps } from "./Text";

const selectRecipe = sva({
  slots: selectAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
    control: {
      display: "flex",
      gap: "4xsmall",
      alignItems: "center",
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
      _focusVisible: {
        outlineOffset: "-1",
      },
      _open: {
        animation: "fade-shift-in 0.25s ease-out",
      },
      _closed: {
        animation: "fade-shift-out 0.25s ease-out",
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "xsmall",
      background: "surface.default",
      borderRadius: "xsmall",
      cursor: "pointer",
      transitionDuration: "fast",
      transitionProperty: "background, color",
      transitionTimingFunction: "default",
      _hover: {
        background: "surface.hover",
      },
      _selected: {
        background: "surface.selected",
        _hover: {
          background: "surface.hover",
        },
        _highlighted: {
          background: "surface.hover",
        },
      },
      _highlighted: {
        background: "surface.hover",
        _hover: {
          background: "surface.hover",
        },
      },
      _disabled: {
        cursor: "not-allowed",
        color: "text.disabled",
        background: "surface.disabled",
        _highlighted: {
          color: "text.disabled",
          background: "surface.disabled",
        },
        _selected: {
          color: "text.disabled",
          background: "surface.disabled",
        },
        _hover: {
          color: "text.disabled",
          background: "surface.disabled",
        },
      },
    },
    indicator: {
      color: "icon.default",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(180deg)",
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
    trigger: {
      justifyContent: "space-between",
      width: "surface.small",
      _ariaInvalid: {
        boxShadowColor: "stroke.error",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4xsmall",
    },
  },
});

const { withProvider, withContext } = createStyleContext(selectRecipe);

export type SelectRootProps<T extends Select.CollectionItem> = Select.RootProps<T> & JsxStyleProps;
const InternalSelectRoot = withProvider<HTMLDivElement, SelectRootProps<Select.CollectionItem>>(Select.Root, "root", {
  baseComponent: true,
});

export const SelectRoot = <T extends Select.CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: SelectRootProps<T>) => (
  //@ts-expect-error -- T does not necessarily match Select.CollectionItem. However, we prefer to use T over Select.CollectionItem to get the correct type during use.
  <InternalSelectRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const SelectClearTrigger = withContext<HTMLButtonElement, Select.ClearTriggerProps & JsxStyleProps>(
  Select.ClearTrigger,
  "clearTrigger",
  { baseComponent: true },
);

export const SelectContent = withContext<HTMLDivElement, Select.ContentProps & JsxStyleProps>(
  Select.Content,
  "content",
  { baseComponent: true },
);

export const SelectControl = withContext<HTMLDivElement, Select.ControlProps & JsxStyleProps>(
  Select.Control,
  "control",
  { baseComponent: true },
);

export const SelectIndicator = withContext<HTMLDivElement, Select.IndicatorProps & JsxStyleProps>(
  Select.Indicator,
  "indicator",
  { baseComponent: true },
);

export const SelectItemGroupLabel = forwardRef<HTMLDivElement, Select.ItemGroupLabelProps & JsxStyleProps & TextProps>(
  ({ children, ...props }, ref) => (
    <InternalSelectItemGroupLabel asChild ref={ref} {...props}>
      <Label asChild consumeCss>
        <div>{children}</div>
      </Label>
    </InternalSelectItemGroupLabel>
  ),
);

const InternalSelectItemGroupLabel = withContext<HTMLDivElement, Select.ItemGroupLabelProps & JsxStyleProps>(
  Select.ItemGroupLabel,
  "itemGroupLabel",
);

export const SelectItemGroup = withContext<HTMLDivElement, Select.ItemGroupProps & JsxStyleProps>(
  Select.ItemGroup,
  "itemGroup",
  { baseComponent: true },
);

export const SelectItemIndicator = withContext<HTMLDivElement, Select.ItemIndicatorProps & JsxStyleProps>(
  Select.ItemIndicator,
  "itemIndicator",
  { baseComponent: true },
);

export const SelectItem = withContext<HTMLDivElement, Select.ItemProps & JsxStyleProps>(Select.Item, "item", {
  baseComponent: true,
});

export const SelectItemText = withContext<HTMLDivElement, Select.ItemTextProps & JsxStyleProps>(
  Select.ItemText,
  "itemText",
  { baseComponent: true },
);

const InternalSelectLabel = withContext<HTMLLabelElement, Select.LabelProps & JsxStyleProps>(Select.Label, "label");

export const SelectLabel = forwardRef<HTMLLabelElement, Select.LabelProps & JsxStyleProps & TextProps>(
  ({ children, ...props }, ref) => (
    <InternalSelectLabel asChild ref={ref} {...props}>
      <Label>{children}</Label>
    </InternalSelectLabel>
  ),
);

export const SelectPositioner = withContext<HTMLDivElement, Select.PositionerProps & JsxStyleProps>(
  Select.Positioner,
  "positioner",
  { baseComponent: true },
);

export const SelectTrigger = withContext<HTMLButtonElement, Select.TriggerProps & JsxStyleProps>(
  Select.Trigger,
  "trigger",
  { baseComponent: true },
);

export const SelectValueText = withContext<HTMLSpanElement, Select.ValueTextProps & JsxStyleProps>(
  Select.ValueText,
  "valueText",
  { baseComponent: true },
);

export const SelectList = withContext<HTMLDivElement, Select.ListProps & JsxStyleProps>(Select.List, "list", {
  baseComponent: true,
});
