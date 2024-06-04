/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { accordionAnatomy } from "@ark-ui/anatomy";
import type { Assign } from "@ark-ui/react";
import { Accordion } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { SystemProperties } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const accordionRecipe = sva({
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "3xsmall",
    },
    itemTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "surface.default",
      cursor: "pointer",
      border: "1px solid",
      paddingInline: "medium",
      paddingBlock: "medium",
      borderColor: "stroke.subtle",
      borderRadius: "xsmall",
      transitionDuration: "fast",
      transitionTimingFunction: "default",
      transitionProperty: "background, border-color, border, border-radius",
      width: "100%",
      _closed: {
        transitionProperty: "background, border-color, border, border-radius",
      },
      _disabled: {
        cursor: "not-allowed",
        background: "surface.actionSubtle.disabled",
        borderColor: "stroke.disabled",
        color: "text.disabled",
        _hover: {
          background: "surface.actionSubtle.disabled",
          borderColor: "stroke.disabled",
          color: "text.disabled",
        },
      },
      _hover: {
        background: "surface.actionSubtle.hover",
        borderColor: "stroke.hover",
      },
      _open: {
        backgroundColor: "surface.actionSubtle.active",
        borderColor: "stroke.default",
        borderBottom: "1px solid",
        borderBottomRadius: "sharp",
      },
    },
    itemIndicator: {
      color: "icon.strong",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(180deg)",
      },
    },
    itemContent: {
      overflow: "hidden",
      transitionProperty: "padding-bottom",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      paddingBlock: "xsmall",
      paddingInline: "small",
      borderBottomRadius: "xsmall",
      borderWidth: "0 1px 1px",
      borderStyle: "solid",
      borderColor: "stroke.default",
      _open: {
        animation: "collapse-in",
      },
      _closed: {
        animation: "collapse-out",
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(accordionRecipe);

export interface AccordionRootProps extends Assign<SystemProperties, Accordion.RootProps> {}
export const AccordionRoot = withProvider<HTMLDivElement, AccordionRootProps>(Accordion.Root, "root");

export const AccordionItemContent = withContext<HTMLDivElement, Assign<SystemProperties, Accordion.ItemContentProps>>(
  Accordion.ItemContent,
  "itemContent",
);

export const AccordionItemIndicator = withContext<
  HTMLDivElement,
  Assign<SystemProperties, Accordion.ItemIndicatorProps>
>(Accordion.ItemIndicator, "itemIndicator");

export const AccordionItem = withContext<HTMLDivElement, Assign<SystemProperties, Accordion.ItemProps>>(
  Accordion.Item,
  "item",
);

export const AccordionItemTrigger = withContext<
  HTMLButtonElement,
  Assign<SystemProperties, Accordion.ItemTriggerProps>
>(Accordion.ItemTrigger, "itemTrigger");
