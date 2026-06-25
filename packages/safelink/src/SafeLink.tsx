/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { forwardRef, useContext, type RefObject } from "react";
import { Link, type LinkProps } from "react-router";
import { MissingRouterContext } from "./MissingRouterContext";

const oldNdlaRegex = /(.*)\/?node\/(\d+).*/;

const isExternalLink = (to?: LinkProps["to"]) =>
  typeof to === "string" &&
  (to.startsWith("https://") || to.startsWith("http://") || to.startsWith("mailto:") || to.endsWith(".xml"));

export const isOldNdlaLink = (to?: LinkProps["to"]) => typeof to === "string" && to.match(oldNdlaRegex) !== null;

export interface UnstyledSafeLinkProps extends LinkProps {
  ref?: RefObject<HTMLAnchorElement | null>;
  asAnchor?: boolean;
  disabled?: boolean;
}

export interface SafeLinkProps extends UnstyledSafeLinkProps, StyledProps {}

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link
export const UnstyledSafeLink = forwardRef<HTMLAnchorElement, UnstyledSafeLinkProps>(
  ({ to, replace, state, disabled, children, tabIndex, asAnchor, reloadDocument, ...rest }, ref) => {
    const isMissingRouterContext = useContext(MissingRouterContext);

    if (isMissingRouterContext || isExternalLink(to) || isOldNdlaLink(to) || asAnchor || disabled) {
      const href = typeof to === "string" ? to : "#";
      return (
        <a
          href={disabled ? undefined : href}
          role={disabled ? "link" : undefined}
          aria-disabled={disabled}
          ref={ref}
          tabIndex={tabIndex}
          data-unstyled={rest.className?.length ? undefined : ""}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      // RR6 link immediately fails if to is somehow undefined, so we provide an empty fallback to recover.
      <Link
        ref={ref}
        tabIndex={tabIndex ?? 0}
        to={to ?? ""}
        state={state}
        reloadDocument={reloadDocument}
        replace={replace}
        data-unstyled={rest.className?.length ? undefined : ""}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

export const SafeLink = styled(
  UnstyledSafeLink,
  {
    base: {
      color: "text.link",
      textDecoration: "underline",
      textDecorationThickness: "max(0.0625em, 1px)",
      textUnderlineOffset: "0.27em",
      _hover: {
        textDecoration: "none",
      },
      _visited: {
        color: "text.linkVisited",
      },
    },
  },
  { baseComponent: true },
);
