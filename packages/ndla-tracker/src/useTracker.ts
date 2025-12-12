/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router";

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
  const hasTracked = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    hasTracked.current = false;
  }, [pathname]);

  const trackPageView = useCallback(({ title, dimensions = {} }: TrackPageViewProps) => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      window._mtm?.push({
        page_title: title,
        event: "Pageview",
        ...dimensions,
      });
    }
  }, []);

  return { trackPageView, hasTracked: hasTracked.current };
};
