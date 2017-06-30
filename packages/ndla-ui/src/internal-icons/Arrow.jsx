/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const arrowRotations = {
  up: 180,
  down: 0,
  left: 90,
  right: 270,
};

const Arrow = ({ className, direction }) => {
  const degrees = arrowRotations[direction] ? arrowRotations[direction] : 180;
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
      <path
        d="M13.8,14.6l8.8-8.6c0.4-0.4,1-0.4,1.4,0l1.5,1.5c0.4,0.4,0.4,1,0,1.4l-11,10.9c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3
      L2.1,9c-0.4-0.4-0.4-1,0-1.4l1.5-1.5c0.4-0.4,1-0.4,1.4,0L13.8,14.6z" transform={`rotate(${degrees}, 14, 14)`}
      />
    </svg>
  );
};

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default Arrow;
