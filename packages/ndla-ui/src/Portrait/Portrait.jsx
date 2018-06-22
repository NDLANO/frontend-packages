/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'portrait',
  prefix: 'c-',
});

const Portrait = ({ src, alt, modifier, className }) => (
  <div {...classes('', modifier, className)}>
    <span
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url(${src})` }}
    />
  </div>
);

Portrait.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  modifier: PropTypes.oneOf(['small', 'large']),
};

Portrait.defaultProps = {
  className: null,
  modifier: null,
};

export default Portrait;
