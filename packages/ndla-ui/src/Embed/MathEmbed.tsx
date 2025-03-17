/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef, type ComponentProps } from "react";

interface Props extends ComponentProps<"span"> {
  mathContent: string;
}

export const MathEmbed = ({ mathContent, ...props }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    //@ts-expect-error - MathJax might exist!
    window.MathJax?.typesetPromise?.([ref.current]);
  }, []);

  return (
    <span ref={ref}>
      {/* @ts-expect-error - Math is not a valid HTML element according to react */}
      <math {...props} dangerouslySetInnerHTML={{ __html: mathContent }} />
    </span>
  );
};
