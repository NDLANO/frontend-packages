/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}>
    <path fill="#000000" d="M3 2l10 6-10 6z" />
  </svg>;

Video.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Video;
