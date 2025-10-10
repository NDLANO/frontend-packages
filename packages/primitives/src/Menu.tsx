/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type RefAttributes } from "react";
import { Menu, menuAnatomy } from "@ark-ui/react";
import { css, cva, sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { RecipeVariantProps, StyledProps, SystemStyleObject } from "@ndla/styled-system/types";
import { Text, type TextProps } from "./Text";

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
      color: "text.default",
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

const InternalMenuRoot = withRootProvider(Menu.Root);

export const MenuRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: MenuRootProps) => (
  <InternalMenuRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const MenuContentStandalone = withContext(Menu.Content, "content", { baseComponent: true });

interface MenuContentProps extends Menu.ContentProps, StyledProps {}

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>((props, ref) => (
  <MenuPositioner>
    <MenuContentStandalone ref={ref} {...props} />
  </MenuPositioner>
));

const InternalMenuItemGroupLabel = withContext(Menu.ItemGroupLabel, "itemGroupLabel");

interface MenuItemGroupLabelProps
  extends Omit<Menu.ItemGroupLabelProps, "color">,
    StyledProps,
    TextProps,
    RefAttributes<HTMLDivElement> {}

export const MenuItemGroupLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  children,
  ...props
}: MenuItemGroupLabelProps) => (
  <InternalMenuItemGroupLabel {...props} asChild>
    <Text textStyle={textStyle} fontWeight={fontWeight}>
      {children}
    </Text>
  </InternalMenuItemGroupLabel>
);

export const MenuItemGroup = withContext(Menu.ItemGroup, "itemGroup", { baseComponent: true });

const InternalMenuItem = withContext(Menu.Item, "item", { baseComponent: true });

export type MenuItemVariantProps = NonNullable<RecipeVariantProps<typeof itemCva>>;
export interface MenuItemProps
  extends Menu.ItemProps,
    StyledProps,
    MenuItemVariantProps,
    RefAttributes<HTMLDivElement> {}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(({ css: cssProp = {}, variant, ...props }, ref) => (
  <InternalMenuItem
    css={[itemCva.raw({ variant }), ...(Array.isArray(cssProp) ? cssProp : [cssProp])]}
    {...props}
    ref={ref}
  />
));

export const MenuPositioner = withContext(Menu.Positioner, "positioner", { baseComponent: true });

const InternalMenuTriggerItem = withContext(Menu.TriggerItem, "triggerItem", { baseComponent: true });

interface MenuTriggerItemProps
  extends Menu.TriggerItemProps,
    StyledProps,
    MenuItemVariantProps,
    RefAttributes<HTMLButtonElement> {}

export const MenuTriggerItem = forwardRef<HTMLDivElement, MenuTriggerItemProps>(
  ({ css: cssProp = {}, variant, ...props }, ref) => (
    <InternalMenuTriggerItem
      css={[itemCva.raw({ variant }), ...(Array.isArray(cssProp) ? cssProp : [cssProp])]}
      {...props}
      ref={ref}
    />
  ),
);

export const MenuTrigger = withContext(Menu.Trigger, "trigger", { baseComponent: true });

export const MenuSeparator = withContext(Menu.Separator, "separator", { baseComponent: true });

export const MenuItemText = withContext(Menu.ItemText, "itemText", { baseComponent: true });
