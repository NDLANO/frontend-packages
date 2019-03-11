/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ children, modifier }) => (
  <div className={`modal-header ${modifier}`}>{children}</div>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default ModalHeader;
