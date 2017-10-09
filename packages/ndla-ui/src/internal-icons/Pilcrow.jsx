/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Pilcrow = ({ className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path d="M12 0h16v4h-4v28h-4v-28h-4v28h-4v-16c-4.418 0-8-3.582-8-8s3.582-8 8-8z" />
  </svg>
);

Pilcrow.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Pilcrow;
