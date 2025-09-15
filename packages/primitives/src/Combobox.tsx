/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type ElementType } from "react";
import { Combobox, comboboxAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";
import { Label } from "./Label";
import { Text, type TextProps } from "./Text";

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
      flexDirection: "column",
      zIndex: "dropdown",
      background: "surface.default",
      overflowY: "auto",
      maxHeight: "min(token(spacing.surface.xsmall), 45vh)",
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
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
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
        _motionReduce: {
          transition: "none",
          transitionDuration: "0s",
        },
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
    context: "standalone",
    variant: "simple",
  },
  variants: {
    context: {
      standalone: {
        content: {
          boxShadow: "large",
          borderRadius: "xsmall",
          padding: "xsmall",
        },
      },
      composite: {},
    },
    variant: {
      simple: {
        item: {
          padding: "xsmall",
          borderRadius: "xsmall",
        },
        content: {
          gap: "4xsmall",
        },
      },
      complex: {},
    },
  },
});

const { withProvider, withContext } = createStyleContext(comboboxRecipe);

export type ComboboxVariantProps = NonNullable<RecipeVariantProps<typeof comboboxRecipe>>;

export interface ComboboxRootProps<T extends Combobox.CollectionItem>
  extends StyledProps,
    Combobox.RootProps<T>,
    ComboboxVariantProps {
  translations: Combobox.RootProps<T>["translations"];
}

const InternalComboboxRoot = withProvider<ElementType<ComboboxRootProps<Combobox.CollectionItem>>>(
  Combobox.Root,
  "root",
  { baseComponent: true },
);

export const ComboboxRoot = <T extends Combobox.CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: ComboboxRootProps<T>) => {
  return <InternalComboboxRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />;
};

export interface ComboboxClearTriggerProps extends Combobox.ClearTriggerProps, StyledProps {}

export const ComboboxClearTrigger = withContext(Combobox.ClearTrigger, "clearTrigger", { baseComponent: true });

export interface ComboboxContentProps extends Combobox.ContentProps, StyledProps {}

export const ComboboxContentStandalone = withContext(Combobox.Content, "content", { baseComponent: true });

export const ComboboxContent = forwardRef<HTMLDivElement, ComboboxContentProps>((props, ref) => (
  <ComboboxPositioner>
    <ComboboxContentStandalone ref={ref} {...props} />
  </ComboboxPositioner>
));

export interface ComboboxControlProps extends Combobox.ControlProps, StyledProps {}

export const ComboboxControl = withContext(Combobox.Control, "control", { baseComponent: true });

export interface ComboboxInputProps extends Combobox.InputProps, StyledProps {}

export const ComboboxInput = withContext(Combobox.Input, "input", { baseComponent: true });

const InternalComboboxItemGroupLabel = withContext(Combobox.ItemGroupLabel, "itemGroupLabel");

export interface ComboboxItemGroupLabelProps
  extends Omit<Combobox.ItemGroupLabelProps, "color">,
    TextProps,
    StyledProps {}

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

export interface ComboboxItemGroupProps extends Combobox.ItemGroupProps, StyledProps {}

export const ComboboxItemGroup = withContext(Combobox.ItemGroup, "itemGroup", { baseComponent: true });

export interface ComboboxItemIndicatorProps extends Combobox.ItemIndicatorProps, StyledProps {}

export const ComboboxItemIndicator = withContext(Combobox.ItemIndicator, "itemIndicator", { baseComponent: true });

export interface ComboboxItemProps extends Combobox.ItemProps, StyledProps {}

export const ComboboxItem = withContext(Combobox.Item, "item", { baseComponent: true });

const InternalComboboxItemText = withContext(Combobox.ItemText, "itemText");

export interface ComboboxItemTextProps extends Omit<Combobox.ItemTextProps, "color">, TextProps, StyledProps {}

export const ComboboxItemText = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  children,
  ...props
}: ComboboxItemTextProps) => (
  <InternalComboboxItemText asChild>
    <Text {...props} textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
      <div>{children}</div>
    </Text>
  </InternalComboboxItemText>
);

const InternalComboboxLabel = withContext(Combobox.Label, "label");

export interface ComboboxLabelProps extends Omit<Combobox.LabelProps, "color">, TextProps, StyledProps {}

export const ComboboxLabel = ({ textStyle = "label.medium", fontWeight = "bold", ...props }: ComboboxLabelProps) => (
  <InternalComboboxLabel asChild>
    <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
  </InternalComboboxLabel>
);

export interface ComboboxPositionerProps extends Combobox.PositionerProps, StyledProps {}

export const ComboboxPositioner = withContext(Combobox.Positioner, "positioner", { baseComponent: true });

export interface ComboboxTriggerProps extends Combobox.TriggerProps, StyledProps {}

export const ComboboxTrigger = withContext(Combobox.Trigger, "trigger", { baseComponent: true });

export interface ComboboxListProps extends Combobox.ListProps, StyledProps {}

export const ComboboxList = withContext(Combobox.List, "list", { baseComponent: true });
