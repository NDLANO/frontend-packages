/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { ArrowDownShortLine } from "@ndla/icons";
import { IconButton } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";

interface Props extends ComponentProps<"aside"> {
  children?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const StyledAside = styled("aside", {
  base: {
    position: "relative",
    padding: "medium",
    display: "grid",
    gridTemplateRows: "0fr",
    transitionProperty: "grid-template-rows",
    transitionDuration: "slow",
    transitionTimingFunction: "ease-in-out",
    justifyItems: "center",
    border: "1px solid",
    borderColor: "stroke.default",
    borderRadius: "xsmall",
    clear: "both",
    _open: {
      gridTemplateRows: "1fr",
    },
    _closed: {
      _print: {
        overflow: "visible",
        maxHeight: "500vh",
      },
    },
    "& > div": {
      minHeight: "surface.3xsmall",
      overflow: "hidden",
    },
  },
});

const StyledContent = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    // Reset the top margin of the very first child.
    "& :first-child": {
      marginBlockStart: "0",
    },
    _after: {
      content: '""',
      textAlign: "center",
      position: "absolute",
      inset: "0",
      transitionProperty: "opacity",
      transitionDuration: "slow",
      transitionTimingFunction: "ease-in-out",
      gradientFrom: "surface.default/20",
      gradientTo: "surface.default/95",
      backgroundGradient: "to-b",
      opacity: "1",
      zIndex: "base",
      pointerEvents: "none",
    },
    _print: {
      overflow: "visible",
      _after: {
        display: "none",
      },
    },
    _open: {
      paddingBlockEnd: "xsmall",
      _after: {
        opacity: "0",
      },
    },
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    position: "absolute",
    bottom: "-medium",
    zIndex: "base",
    "& svg": {
      transitionProperty: "transform",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "fast",
    },
    _open: {
      "& svg": {
        transform: "rotate(180deg)",
      },
    },
    _print: {
      display: "none",
    },
  },
});

// TODO: Consider moving the open trigger depending on whether the content is open or closed.

const FactBox = forwardRef<HTMLElement, Props>(
  ({ children, open, onOpenChange, defaultOpen = false, ...rest }, ref) => {
    const { t } = useTranslation();
    const [state, setState] = useState<"open" | "closed">(defaultOpen ? "open" : "closed");
    const contentId = useId();
    // Inert has existed since early 2023. It allows us to disable tabindex inside the content if it is closed, allowing us to be accessible for users with newish browsers. React 18 removes this because it doesn't recognize the attribute. This is a workaround for that.
    // TODO: Remove this hack when we upgrade to React 19.
    const inertAttribute = useMemo(() => {
      return state === "closed" ? { inert: "" } : {};
    }, [state]);

    useEffect(() => {
      if (open !== undefined) {
        setState(open ? "open" : "closed");
      }
    }, [open]);

    const onClick = useCallback(() => {
      const newState = state === "open" ? "closed" : "open";
      setState(newState);
      onOpenChange?.(newState === "open");
    }, [state, onOpenChange]);

    return (
      <StyledAside data-state={state} data-embed-type="factbox" {...rest} ref={ref}>
        <StyledIconButton
          data-state={state}
          onClick={onClick}
          aria-expanded={state === "open"}
          aria-controls={contentId}
          aria-label={t(`factbox.${state === "open" ? "close" : "open"}`)}
        >
          <ArrowDownShortLine />
        </StyledIconButton>
        <StyledContent id={contentId} data-state={state} aria-hidden={state === "closed"} {...inertAttribute}>
          {children}
        </StyledContent>
      </StyledAside>
    );
  },
);

export default FactBox;
