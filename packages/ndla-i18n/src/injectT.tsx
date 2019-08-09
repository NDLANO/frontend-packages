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
import { any } from 'prop-types';

/*export type ConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P]
};*/

/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 */

export interface InjectedProps {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

interface Context {
  [key: string]: any;
  formatMessage: (...args: ConstructorParameters<any>) => any;
}
export type WithRouterProps<
  C extends React.ComponentType<any>
> = C extends React.ComponentClass
  ? { wrappedComponentRef?: React.Ref<InstanceType<C>> }
  : {};

export interface WithRouterStatics<C extends React.ComponentType<any>> {
  WrappedComponent: C;
}
export type Omit<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export function injectT<P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P>,
  prefix: string = '',
): React.ComponentType<Omit<P, keyof InjectedProps>> {
  const getDisplayName = (component: ComponentType<P>) =>
    component.displayName || component.name || 'Component';

  const InjectT = (props: P, context: Context) => {
    return (
      <WrappedComponent
        {...props as P}
        t={(id: string, value: TFunctionValue = {}): string =>
          context.formatMessage(prefix + id, value)
        }
      />
    );
  };

  InjectT.displayName = `InjectT(${getDisplayName(WrappedComponent)})`;
  return hoistNonReactStatics(InjectT, WrappedComponent);
}

export default injectT;

/*function injectT<P extends {}>(
  Component: ComponentType<P>,
  prefix: string = '',
) {
  return function(props: any, context: any) {
    return (
      <Component
        {...props}
        t={(id: string, value: TFunctionValue = {}): string =>
          context.formatMessage(prefix + id, value)
        }
      />
    );
  };
}
export default injectT;*/
