/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import React, {
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
    _print: {
      gridTemplateRows: "1fr",
      overflow: "visible",
      maxHeight: "500vh",
    },
    "& > div": {
      minHeight: "surface.3xsmall",
    },
  },
  variants: {
    overflowHidden: {
      true: {
        "& > div": {
          overflow: "hidden",
          _print: {
            overflow: "visible",
          },
        },
      },
    },
  },
});

const StyledContent = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    // Reset the top margin of the very first child.
    "& :first-child": {
      marginBlockStart: "0",
    },
    _print: {
      overflow: "visible",
    },
    _open: {
      paddingBlockEnd: "xsmall",
    },
  },
});

const StyledButton = styled(Button, {
  base: {
    position: "absolute",
    bottom: "-medium",
    zIndex: "base",
    _print: {
      display: "none",
    },
  },
});

// TODO: Consider moving the open trigger depending on whether the content is open or closed.

export const FactBox = forwardRef<HTMLElement, Props>(
  ({ children, open, onOpenChange, defaultOpen = false, ...rest }, ref) => {
    const { t } = useTranslation();
    const [state, setState] = useState<"open" | "closed">(defaultOpen ? "open" : "closed");
    const [overflowHidden, setOverflowHidden] = useState(!defaultOpen);
    const contentId = useId();
    // Inert has existed since early 2023. It allows us to disable tabindex inside the content if it is closed, allowing us to be accessible for users with newish browsers. React 18 removes this because it doesn't recognize the attribute. This is a workaround for that.
    // When running in React 18, we need to use an empty string instead of true.
    // TODO: Remove this hack once we upgrade to React 19 as a peer dep.
    const inertAttribute = useMemo(() => {
      return state === "closed" ? { inert: typeof React.use === "function" ? true : "" } : {};
    }, [state]) as { inert?: boolean };

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
      <StyledAside
        data-state={state}
        data-embed-type="factbox"
        {...rest}
        ref={ref}
        overflowHidden={overflowHidden}
        onTransitionStart={(e) => {
          if (e.target === e.currentTarget && state === "closed") {
            setOverflowHidden(true);
          }
        }}
        onTransitionEnd={(e) => {
          if (e.target === e.currentTarget && state === "open") {
            setOverflowHidden(false);
          }
        }}
      >
        <StyledButton
          data-state={state}
          onClick={onClick}
          contentEditable={false}
          aria-expanded={state === "open"}
          variant="secondary"
          aria-controls={contentId}
        >
          {t(`factbox.${state === "open" ? "showLess" : "showMore"}`)}
        </StyledButton>
        <StyledContent id={contentId} data-state={state} aria-hidden={state === "closed"} {...inertAttribute}>
          {children}
        </StyledContent>
      </StyledAside>
    );
  },
);
