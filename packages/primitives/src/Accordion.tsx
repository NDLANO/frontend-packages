/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Accordion, accordionAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { RecipeVariantProps, StyledProps } from "@ndla/styled-system/types";
import type { RefAttributes } from "react";

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
      transitionDuration: "fast",
      transitionTimingFunction: "default",
      transitionProperty: "background, border-color, border, border-radius",
      _closed: {
        transitionProperty: "background, border-color, border, border-radius",
      },
      _disabled: {
        cursor: "not-allowed",
        background: "surface.disabled.subtle",
        boxShadowColor: "stroke.disabled",
        color: "text.disabled",
        _hover: {
          background: "surface.disabled.subtle",
          boxShadowColor: "stroke.disabled",
          color: "text.disabled",
        },
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
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
    itemContent: {
      overflow: "hidden",
      // TODO: Is this needed?
      transitionProperty: "padding-bottom",
      transitionDuration: "normal",
      transitionTimingFunction: "default",
      paddingBlock: "xsmall",
      paddingInline: "small",
      _open: {
        animation: "collapse-in",
        _motionReduce: {
          animation: "none",
        },
      },
      _closed: {
        animation: "collapse-out",
        _motionReduce: {
          animation: "none",
        },
      },
    },
    item: {
      width: "100%",
    },
  },
  defaultVariants: {
    variant: "bordered",
  },
  variants: {
    variant: {
      clean: {},
      bordered: {
        itemTrigger: {
          paddingInline: "medium",
          paddingBlock: "medium",
          width: "100%",
          borderRadius: "xsmall",
          boxShadowColor: "stroke.subtle",
          boxShadow: "inset 0 0 0 1px var(--shadow-color)",
          _hover: {
            background: "surface.actionSubtle.hover",
            boxShadowColor: "stroke.hover",
          },
          _open: {
            background: "surface.actionSubtle.active",
            boxShadowColor: "stroke.default",
            borderBottomRadius: "sharp",
          },
          _focusVisible: {
            outline: "none",
            boxShadowColor: "stroke.default",
            boxShadow: "inset 0 0 0 3px var(--shadow-color)",
          },
        },
        itemContent: {
          borderBottomRadius: "xsmall",
          borderWidth: "0 1px 1px",
          borderStyle: "solid",
          borderColor: "stroke.default",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(accordionRecipe);

export type AccordionVariantProps = NonNullable<RecipeVariantProps<typeof accordionRecipe>>;

export interface AccordionRootProps
  extends StyledProps, Accordion.RootProps, RefAttributes<HTMLDivElement>, AccordionVariantProps {}

export const InternalAccordionRoot = withProvider(Accordion.Root, "root", { baseComponent: true });

export const AccordionRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: AccordionRootProps) => (
  <InternalAccordionRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const AccordionItemContent = withContext(Accordion.ItemContent, "itemContent", { baseComponent: true });

export const AccordionItemIndicator = withContext(Accordion.ItemIndicator, "itemIndicator", { baseComponent: true });

export interface AccordionItemProps extends StyledProps, Accordion.ItemProps {}

export const AccordionItem = withContext(Accordion.Item, "item", { baseComponent: true });

export const AccordionItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger", { baseComponent: true });
