/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'portrait',
  prefix: 'c-',
});

interface Props {
  src: string;
  alt: string;
  className?: string;
  modifier?: 'small' | 'large';
}

const Portrait = ({ src, alt, modifier, className }: Props) => (
  <div {...classes('', modifier, className)}>
    <span role="img" aria-label={alt} style={{ backgroundImage: `url(${src})` }} />
  </div>
);

export default Portrait;
