/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '@ndla/util';

const ContentLoader = ({
  children,
  width,
  height,
  preserveAspectRatio,
  className,
  primaryColor,
  secondaryColor,
  speed,
  ...rest
}) => {
  const idClip = uuid();
  const idGradient = uuid();

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      {...rest}>
      <rect
        style={{ fill: `url(#${idGradient})` }}
        clipPath={`url(#${idClip})`}
        x="0"
        y="0"
        width={width}
        height={height}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient id={idGradient}>
          <stop offset="0%" stopColor={primaryColor}>
            <animate attributeName="offset" values="-2; 1" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor={secondaryColor}>
            <animate attributeName="offset" values="-1.5; 1.5" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor={primaryColor}>
            <animate attributeName="offset" values="-1; 2" dur={`${speed}s`} repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

ContentLoader.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  preserveAspectRatio: PropTypes.string,
  className: PropTypes.string,
};

ContentLoader.defaultProps = {
  speed: 2,
  width: 400,
  height: 130,
  primaryColor: '#f0f0f0',
  secondaryColor: '#e0e0e0',
  preserveAspectRatio: 'xMidYMid meet',
  className: '',
};
export default ContentLoader;
