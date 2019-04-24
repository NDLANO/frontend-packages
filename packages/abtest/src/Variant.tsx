/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Context } from './Context';
import { VariationsShape } from './Experiment';

interface Props  {
  name: string;
  original?: boolean;
  children: React.ReactNode[];
}

export const Variant: React.FC<Props> = ({ name, original, children }) => {
  const { Consumer } = Context;
  return (
    <Consumer>
      {(value: VariationsShape) => (
        ((value.name && value.name.localeCompare(name, undefined, { sensitivity: 'base' }) === 0) ||
        (!value.name && original))
        ? children : null
      )}
    </Consumer>
  )
};