/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}>
    <path
      fill="none"
      stroke="#444"
      d="M.708 22.449l.664.665L12 12.486l10.628 10.628.664-.665-10.628-10.628L23.292 1.193l-.664-.664L12 11.157 1.372.529l-.664.664 10.628 10.628z"
    />
  </svg>;

Cross.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Cross;
