/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const ResourceContainer = ({ children }) => (
  <div className="c-resources">
    <section>
      {children}
    </section>
  </div>
);

ResourceContainer.propTypes = {
  children: PropTypes.node,
};

export default ResourceContainer;
