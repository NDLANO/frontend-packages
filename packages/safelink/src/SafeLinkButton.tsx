/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react";
import { buttonStyleV2, ButtonStyleProps } from "@ndla/button";
import SafeLink, { SafeLinkProps } from "./SafeLink";

interface Props extends SafeLinkProps, ButtonStyleProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const SafeLinkButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, inverted, to, size, colorTheme, variant, shape, fontWeight, ...rest }, ref) => (
    <SafeLink
      to={to}
      ref={ref}
      css={buttonStyleV2({
        colorTheme,
        size,
        variant,
        inverted,
        shape,
        fontWeight,
      })}
      {...rest}
    >
      {children}
    </SafeLink>
  ),
);

export default SafeLinkButton;
