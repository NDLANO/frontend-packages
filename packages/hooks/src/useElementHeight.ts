/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from "react";
import { resizeObserver } from "@ndla/util";

export const useElementHeight = (elementId: string) => {
  const [height, setHeight] = useState<number>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const element = document.getElementById(elementId);

      const handleHeightChange = (el: HTMLElement) => {
        const newHeight = el.getBoundingClientRect().height;
        setHeight(newHeight);
      };

      if (element) {
        resizeObserver(element, handleHeightChange);
      }
    }
  }, [mounted, elementId]);

  return {
    height,
  };
};
