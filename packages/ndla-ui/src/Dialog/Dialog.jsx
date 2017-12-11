/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These component is used to render static markup serverside
// Any interactivty is added by scripts located in the ndla-article-scripts package

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from './createUniversalPortal';

const classes = new BEMHelper({
  name: 'dialog',
  prefix: 'c-',
});

export const Dialog = ({ children, messages, id, labelledby, ...rest }) =>
  createUniversalPortal(
    <div
      className="c-dialog"
      data-dialog-id={id}
      role="dialog"
      aria-hidden="true"
      aria-labelledby={labelledby}
      {...rest}>
      <div {...classes('content')}>
        <button {...classes('close')}>{messages.close}</button>
        {children}
      </div>
      <div key="backdrop" className="o-backdrop" />
    </div>,
    'body',
  );

Dialog.propTypes = {
  id: PropTypes.string.isRequired,
  labelledby: PropTypes.string.isRequired,
  children: PropTypes.node,
  messages: PropTypes.shape({
    close: PropTypes.string.isRequired,
  }).isRequired,
};
