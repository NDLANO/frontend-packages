/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  layout?: "extend" | "center";
}

export const LayoutItem = ({ children, layout, ...rest }: Props) => {
  const className = useMemo(() => {
    if (layout === "extend") {
      return "u-10/12@desktop u-push-1/12@desktop u-10/12@tablet u-push-1/12@tablet";
    }
    if (layout === "center") {
      return "u-10/12 u-push-1/12";
    }
    return undefined;
  }, [layout]);

  return (
    <section className={className} {...rest}>
      {children}
    </section>
  );
};

export default LayoutItem;
