/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode, useMemo } from "react";
import { css } from "@emotion/react";
import { mq, breakpoints } from "@ndla/core";

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  layout?: "extend" | "center";
}

const centerCss = css`
  position: relative !important;
  width: 83.333%;
  right: auto !important;
  left: 8.333%;
`;

const extendCss = css`
  ${mq.range({ from: breakpoints.tablet })} {
    position: relative !important;
    width: 83.333%;
    right: auto !important;
    left: 8.333%;
  }
`;

export const LayoutItem = ({ children, layout, ...rest }: Props) => {
  const style = useMemo(() => {
    if (layout === "extend") {
      return extendCss;
    } else if (layout === "center") {
      return centerCss;
    }
    return undefined;
  }, [layout]);

  return (
    <section css={style} {...rest}>
      {children}
    </section>
  );
};

export default LayoutItem;
