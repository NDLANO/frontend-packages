/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, ComponentType } from 'react';
import NoSSR from './NoSSR';

/** Basic HoC to wrap your component in `NoSSR`, see `NoSSR.tsx` */
function withNoSSR<TProps extends object>(
  WrappedComponent: ComponentType<any>,
  fallback: ReactNode | null = null,
): ComponentType<TProps> {
  return (props: TProps) => (
    <NoSSR fallback={fallback}>
      <WrappedComponent {...(props as TProps)} />
    </NoSSR>
  );
}

export default withNoSSR;
