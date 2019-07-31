/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

export function useWindowSize(wait?: number) {
  let [windowSize, setWindowSize] = useState({
    innerHeight: -1,
    innerWidth: -1,
    outerHeight: -1,
    outerWidth: -1,
  });

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    if (windowSize.innerWidth === -1) {
      setWindowSize(getSize());
    }
    // Throttle if wait param is provided
    const fn = wait ? throttle(handleResize, wait) : handleResize;
    window.addEventListener('resize', fn);
    return () => {
      window.removeEventListener('resize', fn);
    };
  }, []);

  return windowSize;
}
