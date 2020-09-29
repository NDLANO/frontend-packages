/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ComponentType } from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

export type WithInjectedTProps<P> = P & InjectedProps;

export interface InjectedProps {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

interface Context {
  [key: string]: any;
  formatMessage: Function;
}

export function injectT<P>(
  WrappedComponent: React.ComponentType<WithInjectedTProps<P>>,
  prefix: string = '',
) {
  const getDisplayName = (component: ComponentType<WithInjectedTProps<P>>) =>
    component.displayName || component.name || 'Component';

  const InjectT = (props: P, context: Context) => (
    <WrappedComponent
      {...props}
      t={(id, value = {}) => context.formatMessage(prefix + id, value)}
    />
  );

  InjectT.contextTypes = {
    formatMessage: PropTypes.func.isRequired,
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
}

export default injectT;
