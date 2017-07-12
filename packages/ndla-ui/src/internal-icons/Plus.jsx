/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" className={className}>
    <path stroke="#000" strokeWidth="1.4" d="M8 1v14m7-7h-14" fill="none" />
  </svg>

);

Plus.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Plus;
