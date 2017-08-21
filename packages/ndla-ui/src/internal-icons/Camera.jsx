/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Camera = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="25"
    viewBox="0 0 32 25"
    className={className}>
    <path
      fill="none"
      stroke="#444"
      d="M9.389 1v3.056H2a1.5 1.5 0 0 0-1.5 1.5v17.333a1.5 1.5 0 0 0 1.5 1.5h28a1.5 1.5 0 0 0 1.5-1.5V5.556a1.5 1.5 0 0 0-1.5-1.5h-7.389V1a.5.5 0 0 0-.5-.5H9.89a.5.5 0 0 0-.5.5zM16 21.333a7.111 7.111 0 1 1 0-14.222 7.111 7.111 0 0 1 0 14.222zm9.389-13.722h2.555v1H25.39v-1z"
    />
  </svg>;

Camera.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Camera;
