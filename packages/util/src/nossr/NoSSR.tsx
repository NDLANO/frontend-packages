/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, useSyncExternalStore } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode | null;
}

/**
 * A component that makes children not run on the server
 * Useful for not rendering private stuff on the server which will then be cached.
 */
export const NoSSR = ({ children, fallback = null }: Props): ReactNode => {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => typeof window !== "undefined",
    () => false,
  );

  if (!mounted) {
    return fallback;
  }

  return children;
};
