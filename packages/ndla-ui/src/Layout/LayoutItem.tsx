/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  layout?: string;
}

export const LayoutItem = ({ children, layout, ...rest }: Props) => {
  switch (layout) {
    case "extend": {
      return (
        <section className="u-10/12@desktop u-push-1/12@desktop u-10/12@tablet u-push-1/12@tablet">{children}</section>
      );
    }
    case "center": {
      return (
        <section className="u-4/6@desktop u-push-1/6@desktop u-10/12@tablet u-push-1/12@tablet">{children}</section>
      );
    }
    case "full": {
      return <section className="u-1/1@desktop">{children}</section>;
    }
    default: {
      return (
        <section className="o-layout__item" {...rest}>
          {children}
        </section>
      );
    }
  }
};

export default LayoutItem;
