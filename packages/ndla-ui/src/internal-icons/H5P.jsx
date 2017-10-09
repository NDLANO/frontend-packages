/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const H5P = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="15"
    viewBox="0 0 31 15"
    className={className}>
    <path
      fillRule="evenodd"
      d="M0 14.732h.695V7.188h8.03v7.544h.694V0h-.694v6.563H.695V0H0v14.732zM16.451 15c2.17 0 4.34-1.696 4.34-4.732 0-3.125-1.866-4.51-4.21-4.51-1.085 0-1.866.336-2.604.804l.477-5.49h5.6V.445h-6.207l-.521 6.608.564.357c.825-.58 1.563-.982 2.648-.982 2.17 0 3.56 1.473 3.56 3.883 0 2.411-1.694 4.063-3.604 4.063-1.996 0-3.081-.893-3.906-1.786l-.434.491c.868.893 2.083 1.92 4.297 1.92zm5.998-.268V0h3.43C29.133 0 31 1.071 31 4.018c0 2.812-1.823 4.196-5.035 4.196h-2.822v6.518h-.694zm.694-7.143h2.561c3.082 0 4.558-1.027 4.558-3.571 0-2.59-1.52-3.393-4.644-3.393h-2.475v6.964z"
    />
  </svg>
);

H5P.propTypes = {
  className: PropTypes.string.isRequired,
};

export default H5P;
