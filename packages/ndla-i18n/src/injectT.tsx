/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ComponentType, SFC, ReactElement } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { TFunctionValue } from 't';

export interface InjectedProps {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

export type WithInjectedTProps<P> = P & InjectedProps;

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}

export function injectT<P>(
  WrappedComponent: React.ComponentType<WithInjectedTProps<P>>,
  prefix: string = '',
): React.ComponentType<P> {
  const getDisplayName = (
    component: ComponentType<WithInjectedTProps<P>>,
  ): string => component.displayName || component.name || 'Component';

  const InjectT = (props: P, context: Context): React.ReactElement<P> => {
    const composedProps = {
      ...props,
      t: (id: string, value: TFunctionValue = {}): string =>
        context.formatMessage(prefix + id, value),
    } as P & InjectedProps;
    return <WrappedComponent {...composedProps} />;
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
}

export default injectT;
