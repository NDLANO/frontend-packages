/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { usePrevious } from "@ndla/util";

interface TrackPageViewProps {
  title: string;
  dimensions?: Record<string | number, any>;
}

declare global {
  interface Window {
    _mtm: any;
  }
}

export const useTracker = () => {
  const [hasTracked, setHasTracked] = useState(false);
  const { pathname } = useLocation();
  const previousPath = usePrevious(pathname);

  useEffect(() => {
    if (hasTracked && previousPath !== pathname) {
      setHasTracked(false);
    }
  }, [hasTracked, pathname, previousPath]);

  const trackPageView = useCallback(
    ({ title, dimensions = {} }: TrackPageViewProps) => {
      if (!hasTracked) {
        setHasTracked(true);
        window._mtm?.push({
          page_title: title,
          event: "Pageview",
          ...dimensions,
        });
      }
    },
    [hasTracked],
  );

  return { trackPageView, hasTracked };
};
