/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Context } from './Context';

interface Props  {
  id: number;
  fallback?: boolean;
}

export const Variant: React.FC<Props> = ({ id, fallback, children }) => {
  const { Consumer } = Context;
  return (
    <Consumer>
      {value => ((value === id || value === null && fallback) ? children : null)}
    </Consumer>
  )
};