/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type ElementType } from "react";
import { Select, selectAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";
import { Label } from "./Label";
import { type TextProps } from "./Text";

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
      maxHeight: "min(token(spacing.surface.xsmall), 45vh)",
      _focusVisible: {
        outlineOffset: "-1",
      },
      _open: {
        animation: "fade-shift-in 0.25s ease-out",
        _motionReduce: {
          animation: "none",
        },
      },
      _closed: {
        animation: "fade-shift-out 0.25s ease-out",
        _motionReduce: {
          animation: "none",
        },
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
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
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
    valueText: {
      textAlign: "start",
    },
  },
});

const { withProvider, withContext } = createStyleContext(selectRecipe);

export type SelectRootProps<T extends Select.CollectionItem> = Select.RootProps<T> & JsxStyleProps;
const InternalSelectRoot = withProvider<ElementType<SelectRootProps<Select.CollectionItem>>>(Select.Root, "root", {
  baseComponent: true,
});

export const SelectRoot = <T extends Select.CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: SelectRootProps<T>) => <InternalSelectRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />;

export const SelectClearTrigger = withContext(Select.ClearTrigger, "clearTrigger", { baseComponent: true });

export const SelectContentStandalone = withContext(Select.Content, "content", { baseComponent: true });

export const SelectContent = forwardRef<HTMLDivElement, Select.ContentProps & JsxStyleProps>((props, ref) => (
  <SelectPositioner>
    <SelectContentStandalone ref={ref} {...props} />
  </SelectPositioner>
));

export const SelectControl = withContext(Select.Control, "control", { baseComponent: true });

export const SelectIndicator = withContext(Select.Indicator, "indicator", { baseComponent: true });

export const SelectItemGroupLabel = forwardRef<HTMLDivElement, Select.ItemGroupLabelProps & JsxStyleProps & TextProps>(
  ({ children, ...props }, ref) => (
    <InternalSelectItemGroupLabel asChild ref={ref} {...props}>
      <Label asChild consumeCss>
        <div>{children}</div>
      </Label>
    </InternalSelectItemGroupLabel>
  ),
);

const InternalSelectItemGroupLabel = withContext(Select.ItemGroupLabel, "itemGroupLabel");

export const SelectItemGroup = withContext(Select.ItemGroup, "itemGroup", { baseComponent: true });

export const SelectItemIndicator = withContext(Select.ItemIndicator, "itemIndicator", { baseComponent: true });

export const SelectItem = withContext(Select.Item, "item", {
  baseComponent: true,
});

export const SelectItemText = withContext(Select.ItemText, "itemText", { baseComponent: true });

const InternalSelectLabel = withContext(Select.Label, "label");

export const SelectLabel = forwardRef<HTMLLabelElement, Select.LabelProps & JsxStyleProps & TextProps>(
  ({ children, ...props }, ref) => (
    <InternalSelectLabel asChild ref={ref} {...props}>
      <Label>{children}</Label>
    </InternalSelectLabel>
  ),
);

export const SelectPositioner = withContext(Select.Positioner, "positioner", { baseComponent: true });

export const SelectTrigger = withContext(Select.Trigger, "trigger", { baseComponent: true });

export const SelectValueText = withContext(Select.ValueText, "valueText", { baseComponent: true });

export const SelectList = withContext(Select.List, "list", {
  baseComponent: true,
});

export const SelectHiddenSelect = Select.HiddenSelect;
