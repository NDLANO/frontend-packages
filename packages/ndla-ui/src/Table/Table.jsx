/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ZoomOutMap } from 'ndla-icons/common';

import Dialog from '../Dialog';

const classes = BEMHelper('c-table');

const Table = ({ children, messages, id, ...rest }) => {
  const dialogId = `dialog-${id}`;

  return (
    <div {...classes('wrapper')}>
      <div {...classes('content')}>
        <div {...classes('left-shadow')} />
        <table id={id} {...classes({ extra: ['o-table'] })} {...rest}>
          {children}
        </table>
        <button
          data-dialog-trigger-id={dialogId}
          data-dialog-source-id={id}
          data-table-id={id}
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

Table.propTypes = {
  id: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    dialogCloseButton: PropTypes.string.isRequired,
    expandButtonLabel: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default Table;
