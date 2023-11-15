/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/*
 * This file in its entirety is from [Chakra-ui](https://github.com/chakra-ui/chakra-ui).
 */

/**
 * MIT License
 *
 * Copyright (c) 2019 Segun Adebayo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
 * From [Chakra-ui](https://github.com/chakra-ui/chakra-ui/blob/86dd065351d4c5b6a612ae804dbf09cd7fe45799/packages/core/system/src/forward-ref.tsx)
 * This solves two problems:
 * 1. forwardRef does not play nicely with generics. This does.
 * 2. Simpler solutions, such as the one proposed by [Matt Pocock](https://github.com/total-typescript/react-typescript-tutorial/blob/main/src/08-advanced-patterns/72-as-prop-with-forward-ref.solution.tsx#L12) are too inefficient, as they slow TypeScript to a crawl.
 */
export function polymorphicForwardRef<Props extends object, Component extends ElementType>(
  component: ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props> & { element?: ElementType }>,
) {
  return forwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}
