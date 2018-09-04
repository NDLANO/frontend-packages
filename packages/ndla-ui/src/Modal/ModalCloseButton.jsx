/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const ModalClose = ({ title, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`c-button c-button--link ${className}`}>
    {title}
  </button>
);

ModalClose.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ModalClose.defaultProps = {
  className: '',
};

export default ModalClose;
