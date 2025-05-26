/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type HTMLAttributes, type MutableRefObject, type ReactNode, useContext } from "react";
import { Link, type LinkProps } from "react-router";
import { styled } from "@ndla/styled-system/jsx";
import type { JsxStyleProps } from "@ndla/styled-system/types";
import { MissingRouterContext } from "./MissingRouterContext";

const oldNdlaRegex = /(.*)\/?node\/(\d+).*/;

const isExternalLink = (to?: LinkProps["to"]) =>
  typeof to === "string" &&
  (to.startsWith("https://") || to.startsWith("http://") || to.startsWith("mailto:") || to.endsWith(".xml"));

export const isOldNdlaLink = (to?: LinkProps["to"]) => typeof to === "string" && to.match(oldNdlaRegex) !== null;

type Props = {
  ref?: MutableRefObject<HTMLAnchorElement | null>;
  asAnchor?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  unstyled?: boolean;
};

export type SafeLinkProps = Props & LinkProps & JsxStyleProps & HTMLAttributes<HTMLElement>;

const StyledLink = styled(Link, {}, { baseComponent: true });

// Fallback to normal link if app is missing RouterContext, link is external or is old ndla link

export const SafeLink = forwardRef<HTMLAnchorElement, SafeLinkProps>(
  ({ to, replace, state, disabled, unstyled, children, tabIndex, asAnchor, reloadDocument, ...rest }, ref) => {
    const isMissingRouterContext = useContext(MissingRouterContext);
    const unstyledProps = unstyled ? { "data-unstyled": "" } : {};

    if (isMissingRouterContext || isExternalLink(to) || isOldNdlaLink(to) || asAnchor || disabled) {
      const href = typeof to === "string" ? to : "#";
      return (
        <styled.a
          href={disabled ? undefined : href}
          role={disabled ? "link" : undefined}
          aria-disabled={disabled}
          ref={ref}
          tabIndex={tabIndex}
          {...unstyledProps}
          {...rest}
        >
          {children}
        </styled.a>
      );
    }

    return (
      // RR6 link immediately fails if to is somehow undefined, so we provide an empty fallback to recover.
      <StyledLink
        ref={ref}
        tabIndex={tabIndex ?? 0}
        to={to ?? ""}
        state={state}
        reloadDocument={reloadDocument}
        replace={replace}
        {...unstyledProps}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  },
);
