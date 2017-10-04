/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

export const injectT = (WrappedComponent, prefix = '') => {
  const getDisplayName = component =>
    component.displayName || component.name || 'Component';

  const InjectT = (props, context) =>
    <WrappedComponent
      {...props}
      t={(id, value = {}) => context.formatMessage(prefix + id, value)}
    />;

  InjectT.contextTypes = {
    formatMessage: PropTypes.func.isRequired,
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;

  return hoistNonReactStatics(InjectT, WrappedComponent);
};

export default injectT;
