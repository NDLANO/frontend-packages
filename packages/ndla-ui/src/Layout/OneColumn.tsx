/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { HTMLAttributes, ReactNode, useMemo } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper({
  prefix: 'o-',
  name: 'wrapper',
  outputIsString: true,
});

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  cssModifier?: string;
  wide?: boolean;
  noPadding?: boolean;
  extraPadding?: boolean;
}

export const OneColumn = ({ children, className, cssModifier, wide, noPadding, extraPadding, ...rest }: Props) => {
  const modifiers = useMemo(() => {
    const mod = [];
    if (cssModifier) {
      mod.push(cssModifier);
    }

    if (wide) {
      mod.push('wide');
    }

    if (noPadding) {
      mod.push('no-padding');
    }

    if (extraPadding) {
      mod.push('extra-padding');
    }
    return mod;
  }, [cssModifier, extraPadding, noPadding, wide]);

  const cls = useMemo(() => `${classes('', modifiers)} ${className}`, [modifiers, className]);

  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
};

export default OneColumn;
