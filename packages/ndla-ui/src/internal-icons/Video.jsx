/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className={className}>
    <path fill="none" stroke="#444" d="M31.06 16L.942 31.06V.94z" />
  </svg>
);

Video.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Video;
