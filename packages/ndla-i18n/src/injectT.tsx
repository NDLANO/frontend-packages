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
import { Subtract } from 'utility-types';

export interface InjectedProps {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}

export function injectT<P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P & InjectedProps>,
  prefix: string = '',
): React.ComponentType<P> {
  const getDisplayName = (
    component: ComponentType<P & InjectedProps>,
  ): string => component.displayName || component.name || 'Component';

  const InjectT = (
    props: P,
    context: Context,
  ): React.ReactElement<Omit<P, 't'>> => {
    const composedProps = {
      ...props,
      t: (id: string, value: TFunctionValue = {}): string =>
        context.formatMessage(prefix + id, value),
    } as P & InjectedProps;
    return <WrappedComponent {...composedProps} />;
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return InjectT;
}

export default injectT;
