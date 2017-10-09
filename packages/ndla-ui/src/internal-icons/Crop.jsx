/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Crop = ({ className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path d="M26 8l6-6-2-2-6 6h-14v-6h-4v6h-6v4h6v16h16v6h4v-6h6v-4h-6v-14zM10 10h10l-10 10v-10zM12 22l10-10v10h-10z" />
  </svg>
);

Crop.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Crop;
