/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Menu, menuAnatomy } from "@ark-ui/react";
import { css, cva, sva } from "@ndla/styled-system/css";
import { JsxStyleProps, RecipeVariantProps, SystemStyleObject } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Text, TextProps } from "./Text";

const itemStyle: SystemStyleObject = css.raw({
  display: "flex",
  alignItems: "center",
  borderRadius: "xsmall",
  cursor: "pointer",
  textStyle: "label.medium",
  paddingBlock: "4xsmall",
  paddingInline: "xsmall",
  gap: "xsmall",
  transitionDuration: "fast",
  transitionProperty: "background, color",
  transitionTimingFunction: "default",
  outline: "none",
  _hover: {
    textDecoration: "underline",
  },
  _highlighted: {
    textDecoration: "underline",
  },
  _disabled: {
    color: "text.disabled",
    cursor: "not-allowed",
    "& svg": {
      color: "stroke.disabled",
    },
    _hover: {
      color: "text.disabled",
      textDecoration: "none",
      background: "surface.default",
      "& svg": {
        color: "stroke.disabled",
      },
    },
  },
});

const itemCva = cva({
  defaultVariants: {
    variant: "action",
  },
  variants: {
    variant: {
      action: {
        _hover: {
          background: "surface.hover",
        },
        _highlighted: {
          background: "surface.hover",
        },
        _active: {
          background: "surface.active",
        },
      },
      destructive: {
        color: "text.error",
        "& svg": {
          color: "icon.error",
        },
        _hover: {
          color: "text.default",
          "& svg": {
            color: "icon.default",
          },
          background: "surface.errorSubtle.hover",
        },
        _highlighted: {
          color: "text.default",
          "& svg": {
            color: "icon.default",
          },
          background: "surface.errorSubtle.hover",
        },
        _active: {
          background: "surface.errorSubtle.active",
        },
      },
    },
  },
});

const menuRecipe = sva({
  slots: menuAnatomy.keys(),
  base: {
    item: itemStyle,
    triggerItem: itemStyle,
    content: {
      display: "flex",
      flexDirection: "column",
      width: "fit-content",
      minWidth: "surface.xxsmall",
      padding: "3xsmall",
      gap: "3xsmall",
      background: "surface.default",
      boxShadow: "small",
      borderRadius: "xsmall",
      outline: "none",
      zIndex: "dropdown",
      _open: {
        animation: "fade-shift-in 0.25s ease-out",
      },
      _closed: {
        animation: "fade-shift-out 0.25s ease-out",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
    positioner: {
      zIndex: "dropdown",
    },
  },
});

const { withRootProvider, withContext } = createStyleContext(menuRecipe);

export type MenuRootProps = Menu.RootProps;

const InternalMenuRoot = withRootProvider<MenuRootProps>(Menu.Root);

export const MenuRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: MenuRootProps) => (
  <InternalMenuRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const MenuContent = withContext<HTMLDivElement, JsxStyleProps & Menu.ContentProps>(Menu.Content, "content");

const InternalMenuItemGroupLabel = withContext<HTMLDivElement, JsxStyleProps & Menu.ItemGroupLabelProps>(
  Menu.ItemGroupLabel,
  "itemGroupLabel",
);

export const MenuItemGroupLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  children,
  ...props
}: Menu.ItemGroupLabelProps & JsxStyleProps & TextProps) => (
  <InternalMenuItemGroupLabel {...props} asChild>
    <Text textStyle={textStyle} fontWeight={fontWeight}>
      {children}
    </Text>
  </InternalMenuItemGroupLabel>
);

export const MenuItemGroup = withContext<HTMLDivElement, JsxStyleProps & Menu.ItemGroupProps>(
  Menu.ItemGroup,
  "itemGroup",
);

const InternalMenuItem = withContext<HTMLDivElement, JsxStyleProps & Menu.ItemProps>(Menu.Item, "item");

export type MenuItemVariantProps = RecipeVariantProps<typeof itemCva>;
export type MenuItemProps = Menu.ItemProps & JsxStyleProps & MenuItemVariantProps;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(({ css: cssProp = {}, variant, ...props }, ref) => (
  <InternalMenuItem
    css={[itemCva.raw({ variant }), ...(Array.isArray(cssProp) ? cssProp : [cssProp])]}
    {...props}
    ref={ref}
  />
));

export const MenuPositioner = withContext<HTMLDivElement, JsxStyleProps & Menu.PositionerProps>(
  Menu.Positioner,
  "positioner",
);

const InternalMenuTriggerItem = withContext<HTMLDivElement, JsxStyleProps & Menu.TriggerItemProps>(
  Menu.TriggerItem,
  "triggerItem",
);

export const MenuTriggerItem = forwardRef<HTMLDivElement, Menu.TriggerItemProps & JsxStyleProps & MenuItemVariantProps>(
  ({ css: cssProp = {}, variant, ...props }, ref) => (
    <InternalMenuTriggerItem
      css={[itemCva.raw({ variant }), ...(Array.isArray(cssProp) ? cssProp : [cssProp])]}
      {...props}
      ref={ref}
    />
  ),
);

export const MenuTrigger = withContext<HTMLDivElement, JsxStyleProps & Menu.TriggerProps>(Menu.Trigger, "trigger");

export const MenuSeparator = withContext<HTMLHRElement, JsxStyleProps & Menu.SeparatorProps>(
  Menu.Separator,
  "separator",
);
