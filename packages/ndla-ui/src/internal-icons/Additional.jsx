/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Additional = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    className={className}>
    <circle fill="#CEDDE9" cx="25" cy="25" r="24.7" />
    <g>
      <path
        fill="#21588F"
        className="st1"
        d="M22.5,21.1h-5V17h15v4.2h-5v14.7h-5V21.1z"
      />
    </g>
  </svg>;

Additional.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Additional;
