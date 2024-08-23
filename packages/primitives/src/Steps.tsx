/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Steps } from "@ark-ui/react";
// TODO: Refactor this when ark exposes their own steps anatomy. I've opened a PR.
import { anatomy as stepsAnatomy } from "@zag-js/steps";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

// TODO: Consider creating a PR for lazy-loading step content.

const stepsRecipe = sva({
  slots: stepsAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      width: "100%",
      height: "100%",
      gap: "medium",
      _horizontal: {
        flexDirection: "column",
      },
    },
    list: {
      display: "flex",
      whiteSpace: "nowrap",
      _horizontal: {
        alignItems: "center",
      },
      _vertical: {
        flexDirection: "column",
      },
    },
    item: {
      position: "relative",
      display: "flex",
      flex: "1 0",
      alignItems: "center",
      _vertical: {
        flexDirection: "column",
      },
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "xxsmall",
      textAlign: "start",
      cursor: "pointer",
      _hover: {
        "& [data-part='indicator']": {
          background: "surface.actionSubtle.hover",
        },
      },
      _active: {
        "& [data-part='indicator']": {
          background: "surface.actionSubtle.hover.strong",
        },
      },
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid",
      borderColor: "stroke.default",
      background: "surface.default",
      flexShrink: "0",
      width: "medium",
      height: "medium",
      borderRadius: "full",
      textStyle: "label.medium",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      transitionDuration: "normal",
      "&[data-current]": {
        background: "surface.actionSubtle.active",
      },
    },
    separator: {
      background: "stroke.default",
      _vertical: {
        height: "100%",
        minHeight: "medium",
        marginBlock: "xxsmall",
        width: "1px",
      },
      _horizontal: {
        width: "100%",
        minWidth: "medium",
        height: "1px",
        marginInline: "xxsmall",
      },
    },
    content: {
      width: "100%",
    },
  },
});

const { withContext, withProvider } = createStyleContext(stepsRecipe);

export const StepsRoot = withProvider<HTMLDivElement, Steps.RootProps & JsxStyleProps>(Steps.Root, "root", {
  baseComponent: true,
});

export const StepsList = withContext<HTMLOListElement, Steps.ListProps & JsxStyleProps>(Steps.List, "list", {
  baseComponent: true,
});

export const StepsItem = withContext<HTMLLIElement, Steps.ItemProps & JsxStyleProps>(Steps.Item, "item", {
  baseComponent: true,
});

export const StepsTrigger = withContext<HTMLButtonElement, Steps.TriggerProps & JsxStyleProps>(
  Steps.Trigger,
  "trigger",
  { baseComponent: true },
);

export const StepsIndicator = withContext<HTMLDivElement, Steps.IndicatorProps & JsxStyleProps>(
  Steps.Indicator,
  "indicator",
  { baseComponent: true },
);

export const StepsSeparator = withContext<HTMLDivElement, Steps.SeparatorProps & JsxStyleProps>(
  Steps.Separator,
  "separator",
  { baseComponent: true },
);

export const StepsContent = withContext<HTMLDivElement, Steps.ContentProps & JsxStyleProps>(Steps.Content, "content", {
  baseComponent: true,
});

export const StepsNextTrigger = withContext<HTMLButtonElement, Steps.NextTriggerProps & JsxStyleProps>(
  Steps.NextTrigger,
  "nextTrigger",
  { baseComponent: true },
);

export const StepsPrevTrigger = withContext<HTMLButtonElement, Steps.PrevTriggerProps & JsxStyleProps>(
  Steps.PrevTrigger,
  "prevTrigger",
  { baseComponent: true },
);

export const StepsProgress = withContext<HTMLDivElement, Steps.ProgressProps & JsxStyleProps>(
  Steps.Progress,
  "progress",
  { baseComponent: true },
);
