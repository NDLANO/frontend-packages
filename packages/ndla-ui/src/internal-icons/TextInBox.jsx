/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const TextInBox = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="32"
    viewBox="0 0 29 32"
    className={className}>
    <path
      fill="none"
      stroke="#444"
      d="M.5.5h28v31H.5V.5zM7 7.778h16M7 13.11h16M7 18.444h16M7 23.778h16"
    />
  </svg>;

TextInBox.propTypes = {
  className: PropTypes.string.isRequired,
};

export default TextInBox;
