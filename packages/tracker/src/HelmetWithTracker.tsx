/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { usePrevious } from "@ndla/util";
import { type ReactNode, useEffect } from "react";
import warning from "tiny-warning";
import { useTracker } from "./useTracker";

interface Props {
  title: string;
  children?: ReactNode;
}

/**
 * Convenience component for including Helmet and page view tracking to a component.
 *
 * Since we only can track a page once, changes to the title prop will trigger a warning.
 */

export const HelmetWithTracker = ({ title, children }: Props) => {
  const { hasTracked, trackPageView } = useTracker();
  const previousTitle = usePrevious(title);

  useEffect(() => {
    if (hasTracked && title !== previousTitle) {
      warning(
        true,
        "N.B! Title changes are not supported because of page view tracking. \n\n Please use trackPageView provided by useTracker for more lowlevel control over when to track a page view.",
      );
    } else {
      trackPageView({ title });
    }
  }, [hasTracked, previousTitle, title, trackPageView]);

  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
};
