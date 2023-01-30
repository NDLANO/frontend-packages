/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-table');

interface Props {
  id?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Table = ({ children, id, ...rest }: Props) => {
  return (
    <div {...classes('wrapper')}>
      <div {...classes('content')}>
        <div {...classes('left-shadow')} />
        <table id={id} {...classes({ extra: ['o-table'] })} {...rest}>
          {children}
        </table>
        <div {...classes('right-shadow')} />
      </div>
    </div>
  );
};

export default Table;
