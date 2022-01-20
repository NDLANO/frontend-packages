/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import { ZoomOutMap } from '@ndla/icons/common';

import { uuid } from '@ndla/util';
import Dialog from '../Dialog';

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
        <button
          type="button"
          data-dialog-trigger-id={dialogId}
          data-dialog-source-id={tableId}
          data-table-id={tableId}
          {...classes('expand-button')}
          aria-label={messages.expandButtonLabel}>
          <ZoomOutMap />
        </button>
        <div {...classes('right-shadow')} />
      </div>
      <Dialog
        id={dialogId}
        label={messages.expandButtonLabel}
        messages={{
          close: messages.dialogCloseButton,
        }}
        modifier="fullscreen">
        <div {...classes('dialog')}>
          <div {...classes('expanded-table-wrapper')}>
            <div {...classes('content')} />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Table;
