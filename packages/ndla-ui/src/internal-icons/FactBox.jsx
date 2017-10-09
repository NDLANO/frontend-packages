/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const FactBox = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="23"
    viewBox="0 0 30 23"
    className={className}>
    <path
      fill="#444"
      fillRule="evenodd"
      stroke="#444"
      strokeLinecap="square"
      d="M7 7.84h16.552M15 20l-3-6h6l-3 6zM.5.5v16-16zm0 16h10M.5.5h29m0 0v16m0 0h-10M15 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
    />
  </svg>
);

FactBox.propTypes = {
  className: PropTypes.string.isRequired,
};

export default FactBox;
