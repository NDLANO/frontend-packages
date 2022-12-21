/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ButtonStyleProps, buttonStyleV2 } from '@ndla/button';
import SafeLink, { SafeLinkProps } from './SafeLink';

interface Props extends SafeLinkProps, ButtonStyleProps {}

const SafeLinkButton = ({ children, inverted, to, colorTheme, size, variant, shape, fontWeight, ...rest }: Props) => {
  return (
    <SafeLink to={to} css={buttonStyleV2({ colorTheme, size, variant, inverted, shape, fontWeight })} {...rest}>
      {children}
    </SafeLink>
  );
};

export default SafeLinkButton;
