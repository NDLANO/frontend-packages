/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useState, useLayoutEffect } from 'react';
import { resizeObserver } from '@ndla/util';

function getSize(el?: HTMLElement) {
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
  current?: HTMLElement;
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
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    handleResize();
    return resizeObserver(ref.current, handleResize);
  }, [ref.current]);
  return componentSize;
}
