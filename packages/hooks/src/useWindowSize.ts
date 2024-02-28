/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import throttle from "lodash/throttle";
import { useState, useEffect } from "react";

function getSize() {
  if (window) {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    };
  } else {
    return {
      innerHeight: 600,
      innerWidth: 800,
      outerHeight: 600,
      outerWidth: 800,
    };
  }
}

export function useWindowSize(wait?: number) {
  const [windowSize, setWindowSize] = useState({
    innerHeight: -1,
    innerWidth: -1,
    outerHeight: -1,
    outerWidth: -1,
  });

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    setWindowSize(getSize());
    // Throttle if wait param is provided
    const fn = wait ? throttle(handleResize, wait) : handleResize;
    window && window.removeEventListener("resize", fn);
    window && window.addEventListener("resize", fn);
    return () => {
      window && window.removeEventListener("resize", fn);
    };
  }, [wait]);

  return windowSize;
}
