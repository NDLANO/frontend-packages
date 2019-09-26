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
  name: 'container',
  prefix: 'o-',
});

export const PageContainer = ({
  children,
  background,
  backgroundWide,
  ndlaFilm,
  learningPath,
}) => (
  <div {...classes('', { background, backgroundWide, ndlaFilm, learningPath })}>
    {children}
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node,
  background: PropTypes.bool,
  backgroundWide: PropTypes.bool,
  ndlaFilm: PropTypes.bool,
};

PageContainer.defaultProps = {
  background: false,
  backgroundWide: false,
  ndlaFilm: false,
};

export default PageContainer;
