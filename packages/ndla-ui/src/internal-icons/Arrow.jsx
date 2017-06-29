/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ className, rotation }) => {
  let transform = '';
  switch (rotation) {
    case 'up':
      transform = 'rotate(180, 14, 14)';
      break;
    case 'down':
      transform = 'rotate(0, 14, 14)';
      break;
    case 'left':
      transform = 'rotate(90, 14, 14)';
      break;
    case 'right':
      transform = 'rotate(270, 14, 14)';
      break;
    default:
      transform = 'rotate(0, 14, 14)';
      break;
  }
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className={className}>
      <path
        d="M13.8,14.6l8.8-8.6c0.4-0.4,1-0.4,1.4,0l1.5,1.5c0.4,0.4,0.4,1,0,1.4l-11,10.9c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3
      L2.1,9c-0.4-0.4-0.4-1,0-1.4l1.5-1.5c0.4-0.4,1-0.4,1.4,0L13.8,14.6z" transform={transform}
      />
    </svg>
  );
};

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  rotation: PropTypes.string,
};

export default Arrow;
