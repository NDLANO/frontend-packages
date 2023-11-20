/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any ? Omit<T, TOmitted> : never;

export type PolymorphicProps<T extends ElementType> = DistributiveOmit<ComponentPropsWithRef<T>, 'element'> & {
  element?: T;
};

/**
 * A forwardRef wrapper allowing for one to wrap polymorphic components in a forwardref.
 * Taken from [Matt Pocock](https://github.com/total-typescript/react-typescript-tutorial/blob/main/src/08-advanced-patterns/72-as-prop-with-forward-ref.solution.tsx#L12).
 * This approach is expensive, and might slow TypeScript down. Faster alternatives exist, but do not provide good enough typing.
 * Be on the lookout for better alternatives.
 */
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

export const polymorphicForwardRef = forwardRef as unknown as FixedForwardRef;
