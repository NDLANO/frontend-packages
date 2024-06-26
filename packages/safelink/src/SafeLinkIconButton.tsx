/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react";
import { ButtonStyleProps, iconButtonStyle } from "@ndla/button";
import SafeLink, { SafeLinkProps } from "./SafeLink";

interface Props extends SafeLinkProps, ButtonStyleProps {
  children: ReactNode;
}

const SafeLinkIconButton = forwardRef<HTMLAnchorElement, Props>(
  ({ inverted, size, colorTheme, variant, fontWeight, ...rest }, ref) => (
    <SafeLink css={iconButtonStyle({ colorTheme, size, variant, inverted, fontWeight })} {...rest} ref={ref} />
  ),
);

export default SafeLinkIconButton;
