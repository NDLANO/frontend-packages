/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { forwardRef, ReactNode } from 'react';
import { ButtonStyleProps, iconButtonStyle } from '@ndla/button';
import SafeLink, { SafeLinkProps } from './SafeLink';

interface Props extends SafeLinkProps, ButtonStyleProps {
  children: ReactNode;
  to: string;
  className?: string;
}

const SafeLinkIconButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, inverted, to, size, colorTheme, variant, fontWeight, ...rest }, ref) => (
    <SafeLink to={to} ref={ref} css={iconButtonStyle({ colorTheme, size, variant, inverted, fontWeight })} {...rest}>
      {children}
    </SafeLink>
  ),
);

export default SafeLinkIconButton;
