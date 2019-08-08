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

export interface ExternalProps {
  [key: string]: any;
}

export interface InjectedProps {
  t: (id: string, value: TFunctionValue) => string;
}

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}

export function injectT<OriginalProps extends ExternalProps>(
  WrappedComponent: React.ComponentType<OriginalProps & ExternalProps>,
  prefix: string = '',
) {
  const getDisplayName = (
    component: React.ComponentType<OriginalProps & ExternalProps>,
  ) => component.displayName || component.name || 'Component';

  const InjectT = (props: OriginalProps & ExternalProps, context: Context) => (
    <WrappedComponent
      {...props as any}
      t={(id: string, value: TFunctionValue = {}): string =>
        context.formatMessage(prefix + id, value)
      }
    />
  );

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
}

export default injectT;
