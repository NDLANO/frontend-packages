/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Popover, popoverAnatomy, usePopover as _usePopover, type PopoverRootProviderProps } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import type { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Heading, type TextProps } from "./Text";

const popoverRecipe = sva({
  slots: popoverAnatomy.keys(),
  base: {
    positioner: {
      maxHeight: "inherit",
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

export const PopoverAnchor = withContext<HTMLDivElement, Popover.AnchorProps & JsxStyleProps>(
  Popover.Anchor,
  "anchor",
  { baseComponent: true },
);

export const PopoverArrowStandalone = withContext<HTMLDivElement, Popover.ArrowProps & JsxStyleProps>(
  Popover.Arrow,
  "arrow",
  { baseComponent: true },
);

export const PopoverArrow = (props: Popover.ArrowTipProps & JsxStyleProps) => (
  <PopoverArrowStandalone>
    <PopoverArrowTip {...props} />
  </PopoverArrowStandalone>
);

export const PopoverArrowTip = withContext<HTMLDivElement, Popover.ArrowTipProps & JsxStyleProps>(
  Popover.ArrowTip,
  "arrowTip",
  { baseComponent: true },
);

export const PopoverCloseTrigger = withContext<HTMLButtonElement, Popover.CloseTriggerProps & JsxStyleProps>(
  Popover.CloseTrigger,
  "closeTrigger",
  { baseComponent: true },
);

export const PopoverContentStandalone = withContext<HTMLDivElement, Popover.ContentProps & JsxStyleProps>(
  Popover.Content,
  "content",
  { baseComponent: true },
);

export const PopoverContent = forwardRef<HTMLDivElement, Popover.ContentProps & JsxStyleProps>((props, ref) => (
  <PopoverPositioner>
    <PopoverContentStandalone {...props} ref={ref} />
  </PopoverPositioner>
));

export const PopoverDescription = withContext<HTMLParagraphElement, Popover.DescriptionProps & JsxStyleProps>(
  Popover.Description,
  "description",
  { baseComponent: true },
);

export const PopoverIndicator = withContext<HTMLDivElement, Popover.IndicatorProps & JsxStyleProps>(
  Popover.Indicator,
  "indicator",
  { baseComponent: true },
);

export const PopoverPositioner = withContext<HTMLDivElement, Popover.PositionerProps & JsxStyleProps>(
  Popover.Positioner,
  "positioner",
  { baseComponent: true },
);

const InternalPopoverTitle = withContext<HTMLDivElement, Popover.TitleProps & JsxStyleProps>(Popover.Title, "title", {
  baseComponent: true,
});

export const PopoverTitle = ({
  textStyle = "title.medium",
  children,
  ...rest
}: Popover.TitleProps & TextProps & JsxStyleProps) => (
  <Heading textStyle={textStyle} {...rest} asChild consumeCss>
    <InternalPopoverTitle>{children}</InternalPopoverTitle>
  </Heading>
);

export const PopoverTrigger = withContext<HTMLButtonElement, Popover.TriggerProps & JsxStyleProps>(
  Popover.Trigger,
  "trigger",
  { baseComponent: true },
);

export const PopoverRootProvider = withRootProvider<PopoverRootProviderProps>(Popover.RootProvider);

export const usePopover = _usePopover;
