/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { popoverAnatomy } from "@ark-ui/anatomy";
import { Popover } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "./createStyleContext";
import { JsxStyleProps } from "@ndla/styled-system/types";

const popoverRecipe = sva({
  slots: popoverAnatomy.keys(),
  base: {
    positioner: {
      position: "relative",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      padding: "medium",
      background: "surface.default",
      borderRadius: "xsmall",
      boxShadow: "xlarge",
      zIndex: "popover",
      maxWidth: "var(--available-width)",
      _open: {
        animation: "fade-shift-in 0.2s ease-out",
      },
      _closed: {
        animation: "fade-shift-out 0.2s ease-out",
      },
    },
    arrow: {
      "--arrow-size": "sizes.xxsmall",
      "--arrow-background": "colors.surface.default",
    },
  },
});

const { withRootProvider, withContext } = createStyleContext(popoverRecipe);

export type PopoverRootProps = Popover.RootProps;
const InternalPopoverRoot = withRootProvider<PopoverRootProps>(Popover.Root);

export const PopoverRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: PopoverRootProps) => (
  <InternalPopoverRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const PopoverAnchor = withContext<HTMLDivElement, Popover.AnchorProps & JsxStyleProps>(Popover.Anchor, "anchor");

export const PopoverArrowStandalone = withContext<HTMLDivElement, Popover.ArrowProps & JsxStyleProps>(
  Popover.Arrow,
  "arrow",
);

export const PopoverArrow = (props: Popover.ArrowTipProps & JsxStyleProps) => (
  <PopoverArrowStandalone>
    <PopoverArrowTip {...props} />
  </PopoverArrowStandalone>
);

export const PopoverArrowTip = withContext<HTMLDivElement, Popover.ArrowTipProps & JsxStyleProps>(
  Popover.ArrowTip,
  "arrowTip",
);

export const PopoverCloseTrigger = withContext<HTMLButtonElement, Popover.CloseTriggerProps & JsxStyleProps>(
  Popover.CloseTrigger,
  "closeTrigger",
);

export const PopoverContentStandalone = withContext<HTMLDivElement, Popover.ContentProps & JsxStyleProps>(
  Popover.Content,
  "content",
);

export const PopoverContent = (props: Popover.ContentProps & JsxStyleProps) => (
  <PopoverPositioner>
    <PopoverContentStandalone {...props} />
  </PopoverPositioner>
);

export const PopoverDescription = withContext<HTMLParagraphElement, Popover.DescriptionProps & JsxStyleProps>(
  Popover.Description,
  "description",
);

export const PopoverIndicator = withContext<HTMLDivElement, Popover.IndicatorProps & JsxStyleProps>(
  Popover.Indicator,
  "indicator",
);

export const PopoverPositioner = withContext<HTMLDivElement, Popover.PositionerProps & JsxStyleProps>(
  Popover.Positioner,
  "positioner",
);

export const PopoverTitle = withContext<HTMLDivElement, Popover.TitleProps & JsxStyleProps>(Popover.Title, "title");

export const PopoverTrigger = withContext<HTMLButtonElement, Popover.TriggerProps & JsxStyleProps>(
  Popover.Trigger,
  "trigger",
);
