/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useState } from 'react';
import { resizeObserver } from '@ndla/util';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

function getSize(el?: HTMLElement | null) {
  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

interface Ref {
  current: HTMLElement | undefined | null;
}

export function useComponentSize(ref: Ref = { current: undefined }) {
  let [componentSize, setComponentSize] = useState(getSize(ref.current));
  const handleResize = useCallback(
    function handleResize() {
      if (ref.current) {
        setComponentSize(getSize(ref.current));
      }
    },
    [ref],
  );
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    handleResize();
    return resizeObserver(ref.current, handleResize);
  }, [ref.current]);
  return componentSize;
}
