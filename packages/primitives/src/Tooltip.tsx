/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Tooltip, tooltipAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";

const tooltipRecipe = sva({
  slots: tooltipAnatomy.keys(),
  base: {
    content: {
      background: "surface.action",
      textStyle: "label.small",
      color: "text.onAction",
      paddingInline: "xxsmall",
      paddingBlock: "4xsmall",
      "--arrow-size": "spacing.xxsmall",
      "--arrow-background": "colors.surface.action",
      _open: {
        animation: "fade-shift-in 0.2s ease-out",
        _motionReduce: {
          animation: "none",
        },
      },
      _closed: {
        animation: "fade-shift-out 0.2s ease-out",
        _motionReduce: {
          animation: "none",
        },
      },
    },
  },
});

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

export type TooltipRootProps = Tooltip.RootProps;
export const TooltipRoot = withRootProvider<TooltipRootProps>(Tooltip.Root);

export const TooltipArrow = withContext<HTMLDivElement, JsxStyleProps & Tooltip.ArrowProps>(Tooltip.Arrow, "arrow", {
  baseComponent: true,
});

export const TooltipArrowTip = withContext<HTMLDivElement, JsxStyleProps & Tooltip.ArrowTipProps>(
  Tooltip.ArrowTip,
  "arrowTip",
  { baseComponent: true },
);

export const TooltipContentStandalone = withContext<HTMLDivElement, JsxStyleProps & Tooltip.ContentProps>(
  Tooltip.Content,
  "content",
  { baseComponent: true },
);

export const TooltipContent = forwardRef<HTMLDivElement, JsxStyleProps & Tooltip.ContentProps>(
  ({ children, ...props }, ref) => (
    <TooltipPositioner>
      <TooltipContentStandalone {...props} ref={ref}>
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
        {children}
      </TooltipContentStandalone>
    </TooltipPositioner>
  ),
);

export const TooltipPositioner = withContext<HTMLDivElement, JsxStyleProps & Tooltip.PositionerProps>(
  Tooltip.Positioner,
  "positioner",
  { baseComponent: true },
);

export const TooltipTrigger = withContext<HTMLButtonElement, JsxStyleProps & Tooltip.TriggerProps>(
  Tooltip.Trigger,
  "trigger",
  { baseComponent: true },
);
