/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Tabs } from "@ark-ui/react";
import { RecipeVariantProps, cx, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const tabsRecipe = sva({
  // TODO: This still doesn't work. Need to figure out why we need to pass keys manually.
  // slots: tabsAnatomy.keys(),
  slots: ["root", "list", "trigger", "content", "indicator"],
  base: {
    root: {
      position: "relative",
      display: "flex",
      width: "100%",
      _horizontal: {
        flexDirection: "column",
      },
      _vertical: {
        flexDirection: "row",
      },
    },
    list: {
      position: "relative",
      display: "flex",
      flexShrink: "0",
      flexWrap: "wrap",
      _horizontal: {
        flexDirection: "row",
      },
      _vertical: {
        flexDirection: "column",
      },
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      cursor: "pointer",
      textStyle: "label.small",
      fontWeight: "bold",
      transitionDuration: "normal",
      transitionProperty: "color, background, border-color",
      transitionTimingFunction: "default",
      whiteSpace: "nowrap",
      paddingInline: "small",
      paddingBlock: "3xsmall",
      zIndex: "1",
      _hover: {
        color: "text.action",
      },
      _selected: {
        color: "text.strong",
      },
      _disabled: {
        color: "text.subtle",
        cursor: "not-allowed",
        _hover: {
          color: "text.subtle",
        },
      },
      _motionReduce: {
        transition: "none",
        transitionDuration: "0s",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "xsmall",
    },
  },
  defaultVariants: {
    variant: "line",
  },
  variants: {
    variant: {
      line: {
        trigger: {
          borderColor: "stroke.default",
          _hover: {
            borderColor: "stroke.hover",
            _focusVisible: {
              borderColor: "stroke.default",
            },
          },
          _horizontal: {
            borderBottom: "1px solid",
          },
          _disabled: {
            borderColor: "stroke.default",
            _hover: {
              borderColor: "stroke.default",
            },
          },
          _vertical: {
            borderLeft: "1px solid",
            justifyContent: "flex-start",
          },
          _focusVisible: {
            outline: "none",
            borderRadius: "unset",
          },
        },
        indicator: {
          background: "transparent",
          outline: "3px solid",
          outlineColor: "stroke.default",
          outlineOffset: "-3px",
          _peerFocusVisible: {
            height: "var(--height)",
            width: "var(--width)",
            _horizontal: {
              borderTopRadius: "xsmall",
            },
            _vertical: {
              borderRightRadius: "xsmall",
            },
          },
          _horizontal: {
            top: "calc(var(--top) + var(--height) - 6px)",
            _peerFocusVisible: { top: "var(--top)" },
            height: "3",
            width: "var(--width)",
          },
          _vertical: {
            height: "var(--height)",
            left: "0",
            width: "3",
          },
        },
        content: {
          zIndex: "1",
          _horizontal: {
            paddingBlockStart: "xsmall",
          },
          _vertical: {
            paddingInlineStart: "xsmall",
          },
          _focusVisible: {
            outline: "none",
            boxShadow: "0 0 0 3px var(--shadow-color)",
            boxShadowColor: "stroke.default",
          },
        },
      },
      outline: {
        list: {
          _horizontal: {
            marginBlockEnd: "-1px",
          },
          _vertical: {
            marginInlineEnd: "-1px",
          },
        },
        trigger: {
          borderColor: "transparent",
          borderWidth: "1px",
          _horizontal: {
            borderTopRadius: "xsmall",
          },
          _vertical: {
            borderTopLeftRadius: "xsmall",
            borderBottomLeftRadius: "xsmall",
          },
          _selected: {
            background: "surface.default",
            borderColor: "stroke.subtle",
            _horizontal: {
              borderBottomColor: "transparent",
            },
            _vertical: {
              borderRightColor: "transparent",
            },
          },
          _focusVisible: {
            outline: "3px solid",
            outlineOffset: "-3px",
            outlineColor: "stroke.default",
          },
        },
        content: {
          borderWidth: "1px",
          borderColor: "stroke.subtle",
          background: "surface.default",
          width: "100%",
          padding: "xsmall",
          _focusVisible: {
            outline: "3px solid",
            outlineOffset: "-3px",
            outlineColor: "stroke.default",
          },
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(tabsRecipe);

export type TabsVariantProps = RecipeVariantProps<typeof tabsRecipe>;

interface RootProps extends Tabs.RootProps {
  translations: Tabs.RootProps["translations"];
}

export type TabsRootProps = RootProps & TabsVariantProps & JsxStyleProps;

const InternalTabsRoot = withProvider<HTMLDivElement, TabsRootProps>(Tabs.Root, "root", { baseComponent: true });

export const TabsRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: TabsRootProps) => (
  <InternalTabsRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const TabsContent = withContext<HTMLDivElement, Tabs.ContentProps & JsxStyleProps>(Tabs.Content, "content", {
  baseComponent: true,
});

export const TabsIndicator = withContext<HTMLDivElement, Tabs.IndicatorProps & JsxStyleProps>(
  Tabs.Indicator,
  "indicator",
  { baseComponent: true },
);

export const TabsList = withContext<HTMLDivElement, Tabs.ListProps & JsxStyleProps>(Tabs.List, "list", {
  baseComponent: true,
});

const InternalTabsTrigger = withContext<HTMLButtonElement, Tabs.TriggerProps & JsxStyleProps>(Tabs.Trigger, "trigger", {
  baseComponent: true,
});

export const TabsTrigger = ({ className, ...props }: Tabs.TriggerProps & JsxStyleProps) => (
  <InternalTabsTrigger className={cx("peer", className)} {...props} />
);
