/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M20,20v-8h2v0L12,3L2,12v0h2v8c0,0.6,0.4,1,1,1h5v-7h4v7h5C19.6,21,20,20.6,20,20z" />
  </svg>
);

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Home;
