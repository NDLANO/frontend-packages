/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { tooltipAnatomy } from "@ark-ui/anatomy";
import { Tooltip } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
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
      },
      _closed: {
        animation: "fade-shift-out 0.2s ease-out",
      },
    },
  },
});

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

export type TooltipRootProps = Tooltip.RootProps;
export const TooltipRoot = withRootProvider<TooltipRootProps>(Tooltip.Root);

export const TooltipArrow = withContext<HTMLDivElement, Tooltip.ArrowProps>(Tooltip.Arrow, "arrow");

export const TooltipArrowTip = withContext<HTMLDivElement, Tooltip.ArrowTipProps>(Tooltip.ArrowTip, "arrowTip");

export const TooltipContentStandalone = withContext<HTMLDivElement, Tooltip.ContentProps>(Tooltip.Content, "content");

export const TooltipContent = forwardRef<HTMLDivElement, Tooltip.ContentProps>(({ children, ...props }, ref) => (
  <TooltipPositioner>
    <TooltipContentStandalone {...props} ref={ref}>
      <TooltipArrow>
        <TooltipArrowTip />
      </TooltipArrow>
      {children}
    </TooltipContentStandalone>
  </TooltipPositioner>
));

export const TooltipPositioner = withContext<HTMLDivElement, Tooltip.PositionerProps>(Tooltip.Positioner, "positioner");

export const TooltipTrigger = withContext<HTMLButtonElement, Tooltip.TriggerProps>(Tooltip.Trigger, "trigger");
