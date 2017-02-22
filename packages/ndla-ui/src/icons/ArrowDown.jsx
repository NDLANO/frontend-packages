/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';

const ArrowDown = ({ className }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
    <circle cx="24" cy="24" r="19" />
    <polygon points="35.1,22.1 32,19 23.9,27 16,19 12.9,22.1 23.9,33.1 " />
  </svg>
);

ArrowDown.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ArrowDown;
