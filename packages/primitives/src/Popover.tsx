/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Popover, popoverAnatomy, usePopover as _usePopover } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { forwardRef, type RefAttributes } from "react";
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
const InternalPopoverRoot = withRootProvider(Popover.Root);

export const PopoverRoot = ({ lazyMount = true, unmountOnExit = true, ...props }: PopoverRootProps) => (
  <InternalPopoverRoot lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
);

export const PopoverAnchor = withContext(Popover.Anchor, "anchor", { baseComponent: true });

export const PopoverArrowStandalone = withContext(Popover.Arrow, "arrow", { baseComponent: true });

interface PopoverArrowProps extends Popover.ArrowTipProps, StyledProps {}

export const PopoverArrow = (props: PopoverArrowProps) => (
  <PopoverArrowStandalone>
    <PopoverArrowTip {...props} />
  </PopoverArrowStandalone>
);

export const PopoverArrowTip = withContext(Popover.ArrowTip, "arrowTip", { baseComponent: true });

export const PopoverCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger", { baseComponent: true });

export const PopoverContentStandalone = withContext(Popover.Content, "content", { baseComponent: true });

interface PopoverContentProps extends Popover.ContentProps, StyledProps {}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => (
  <PopoverPositioner>
    <PopoverContentStandalone {...props} ref={ref} />
  </PopoverPositioner>
));

export const PopoverDescription = withContext(Popover.Description, "description", { baseComponent: true });

export const PopoverIndicator = withContext(Popover.Indicator, "indicator", { baseComponent: true });

export const PopoverPositioner = withContext(Popover.Positioner, "positioner", { baseComponent: true });

const InternalPopoverTitle = withContext(Popover.Title, "title", { baseComponent: true });

interface PopoverTitleProps
  extends Omit<Popover.TitleProps, "color">, TextProps, StyledProps, RefAttributes<HTMLHeadingElement> {}

export const PopoverTitle = ({ textStyle = "title.medium", children, ...rest }: PopoverTitleProps) => (
  <Heading textStyle={textStyle} {...rest} asChild consumeCss>
    <InternalPopoverTitle>{children}</InternalPopoverTitle>
  </Heading>
);

export const PopoverTrigger = withContext(Popover.Trigger, "trigger", { baseComponent: true });

export const PopoverRootProvider = withRootProvider(Popover.RootProvider);

export const usePopover = _usePopover;
