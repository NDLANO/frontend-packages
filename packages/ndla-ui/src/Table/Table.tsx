/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';

import { uuid } from '@ndla/util';

const classes = BEMHelper('c-table');

interface Props {
  id?: string;
  messages: {
    dialogCloseButton: string;
    expandButtonLabel: string;
  };
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const Table = ({ children, messages, id, ...rest }: Props) => {
  const tableId = id || uuid();
  const dialogId = `dialog-${tableId}`;

  return (
    <div {...classes('wrapper')}>
      <div {...classes('content')}>
        <div {...classes('left-shadow')} />
        <table id={tableId} {...classes({ extra: ['o-table'] })} {...rest}>
          {children}
        </table>
        <div {...classes('right-shadow')} />
      </div>
    </div>
  );
};

export default Table;
