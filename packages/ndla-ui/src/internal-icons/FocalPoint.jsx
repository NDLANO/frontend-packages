/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const FocalPoint = ({ className }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path d="M16 12c2.188 0 4 1.813 4 4s-1.813 4-4 4-4-1.813-4-4 1.813-4 4-4zM25.313 25.313v-5.313h2.688v5.313c0 1.438-1.25 2.688-2.688 2.688h-5.313v-2.688h5.313zM25.313 4c1.438 0 2.688 1.25 2.688 2.688v5.313h-2.688v-5.313h-5.313v-2.688h5.313zM6.688 6.688v5.313h-2.688v-5.313c0-1.438 1.25-2.688 2.688-2.688h5.313v2.688h-5.313zM6.688 20v5.313h5.313v2.688h-5.313c-1.438 0-2.688-1.25-2.688-2.688v-5.313h2.688z" />
  </svg>
);

FocalPoint.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FocalPoint;
