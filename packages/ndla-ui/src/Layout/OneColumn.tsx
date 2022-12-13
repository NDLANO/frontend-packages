/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'o-',
  name: 'wrapper',
  outputIsString: true,
});

interface Props {
  children?: ReactNode;
  className?: string;
  cssModifier?: string;
  wide?: boolean;
  noPadding?: boolean;
  extraPadding?: boolean;
}

export const OneColumn = ({ children, className, cssModifier, wide, noPadding, extraPadding }: Props) => {
  const modifiers = [];

  if (cssModifier) {
    modifiers.push(cssModifier);
  }

  if (wide) {
    modifiers.push('wide');
  }

  if (noPadding) {
    modifiers.push('no-padding');
  }

  if (extraPadding) {
    modifiers.push('extra-padding');
  }

  return <div className={`${classes('', modifiers)} ${className}`}>{children}</div>;
};

export default OneColumn;
