/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useState } from 'react';

interface TrackPageViewProps {
  title: string;
  dimensions?: Record<string | number, any>;
}

const useTracker = () => {
  const [hasTracked, setHasTracked] = useState(false);

  const trackPageView = useCallback(
    ({ title, dimensions = {} }: TrackPageViewProps) => {
      if (!hasTracked) {
        setHasTracked(true);
        window._mtm?.push({ page_title: title, event: 'Pageview', ...dimensions });
      }
    },
    [hasTracked],
  );

  return { trackPageView, hasTracked };
};

export default useTracker;
