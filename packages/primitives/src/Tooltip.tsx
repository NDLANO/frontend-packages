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
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";

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
export const TooltipRoot = withRootProvider(Tooltip.Root);

export const TooltipArrow = withContext(Tooltip.Arrow, "arrow", { baseComponent: true });

export const TooltipArrowTip = withContext(Tooltip.ArrowTip, "arrowTip", { baseComponent: true });

export const TooltipContentStandalone = withContext(Tooltip.Content, "content", { baseComponent: true });

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

export const TooltipPositioner = withContext(Tooltip.Positioner, "positioner", { baseComponent: true });

export const TooltipTrigger = withContext(Tooltip.Trigger, "trigger", { baseComponent: true });
