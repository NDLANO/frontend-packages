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
import t from './t';

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}

interface TFunctionValue {
  [key: string]: number | string;
}

export function injectT<P>(
  WrappedComponent: React.ComponentType<P & t>,
  prefix: string = '',
): React.ComponentType<P> {
  const getDisplayName = (component: ComponentType<P & t>): string =>
    component.displayName || component.name || 'Component';

  const InjectT = (props: P, context: Context): React.ReactElement<P> => {
    const composedProps = {
      ...props,
      t: (id: string, value: TFunctionValue = {}): string =>
        context.formatMessage(prefix + id, value),
    } as P & t;

    return <WrappedComponent {...composedProps} />;
  };

  InjectT.contextTypes = {
    formatMessage: PropTypes.func.isRequired,
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
}

export default injectT;
