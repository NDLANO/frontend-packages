/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { TFunctionValue } from 't';

interface Props {
  [key: string]: any;
}

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}

export const injectT = (
  WrappedComponent: React.ComponentType<Props>,
  prefix: string = '',
) => {
  const getDisplayName = (component: React.ComponentType) =>
    component.displayName || component.name || 'Component';

  const InjectT = (props: Props, context: Context) => (
    <WrappedComponent
      {...props}
      t={(id: string, value: TFunctionValue = {}): string =>
        context.formatMessage(prefix + id, value)
      }
    />
  );

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
};

export default injectT;
