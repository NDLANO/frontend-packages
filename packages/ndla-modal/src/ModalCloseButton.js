/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@ndla/button';

const ModalClose = ({ title, onClick, className }) => (
  <Button onClick={onClick} link className={className}>
    {title}
  </Button>
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
