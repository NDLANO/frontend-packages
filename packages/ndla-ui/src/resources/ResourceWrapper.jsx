/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import OneColumn from '../layout/OneColumn';


const ResourceContainer = ({ children }) => (
  <div className="c-resources u-margin-top-large">
    <OneColumn cssModifier="narrow">
      <section>
        {children}
      </section>
    </OneColumn>
  </div>
);

ResourceContainer.propTypes = {
  children: PropTypes.node,
};

export default ResourceContainer;
