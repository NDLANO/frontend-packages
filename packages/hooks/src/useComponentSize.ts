/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { RefObject, useCallback, useMemo, useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

function getSize(el: HTMLElement | null) {
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

export const useComponentSize = (element: RefObject<HTMLElement> | HTMLElement | null | string) => {
  const [componentSize, setComponentSize] = useState({ width: 0, height: 0 });

  const htmlElement = useMemo(() => {
    if (!element) {
      return null;
    }
    if (typeof element === "string") {
      if (typeof window !== "undefined") {
        return document.getElementById(element);
      }
      return null;
    }
    if ("current" in element) {
      return element.current;
    }
    return element;
  }, [element]);

  const handleResize = useCallback((element: HTMLElement) => {
    setComponentSize(getSize(element));
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!htmlElement) {
      return;
    }
    handleResize(htmlElement);
    const observer = new ResizeObserver(() => handleResize(htmlElement));
    observer.observe(htmlElement);

    return () => observer.disconnect();
  }, [htmlElement]);

  return componentSize;
};
