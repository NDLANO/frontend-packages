/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefRenderFunction,
  ValidationMap,
  WeakValidationMap,
  forwardRef,
} from 'react';

export type PropsOf<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  element?: ElementType;
};

export type RightJoinProps<SourceProps extends object = {}, OverrideProps extends object = {}> = Omit<
  SourceProps,
  keyof OverrideProps
> &
  OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends ElementType = ElementType,
> = (RightJoinProps<ComponentProps, AdditionalProps> | RightJoinProps<AsProps, AdditionalProps>) & {
  element?: AsComponent;
};

export type ComponentWithAs<Component extends ElementType, Props extends object = {}> = {
  <AsComponent extends ElementType = Component>(
    props: MergeWithAs<ComponentProps<Component>, ComponentProps<AsComponent>, Props, AsComponent>,
  ): JSX.Element;
  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export type PolymorphicProps<T extends ElementType> = Omit<PropsOf<T>, 'ref'> & { element?: ElementType };

/**
 * A super complicated type that allows us to wrap polymorphic components in a forwardRef.
 * Taken from [Chakra-ui](https://github.com/chakra-ui/chakra-ui/blob/main/packages/core/system/src/forward-ref.tsx)
 * This solves two problems:
 * 1. forwardRef does not play nicely with generics. This does.
 * 2. Simpler solutions, such as the one proposed by [Matt Pocock](https://github.com/total-typescript/react-typescript-tutorial/blob/main/src/08-advanced-patterns/72-as-prop-with-forward-ref.solution.tsx#L12) are too inefficient, as they slow TypeScript to a crawl.
 */
export function polymorphicForwardRef<Props extends object, Component extends ElementType>(
  component: ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & { element?: ElementType }>,
) {
  return forwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}
