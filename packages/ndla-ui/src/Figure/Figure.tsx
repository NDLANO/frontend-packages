/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These components is used to render static markup serverside

import { ComponentPropsWithRef, forwardRef, useMemo } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";

const StyledFigure = styled.figure`
  position: relative;
  width: 100%;
  transition:
    transform 0.4s,
    width 0.4s,
    height 0.4s;
  img {
    width: 100%;
  }
  iframe {
    display: block;
    border: 0;
  }
  &[data-sizetype="full"][data-float=""] {
    margin: ${spacing.normal} 0 ${spacing.normal};
  }
  &[data-sizetype="full"] {
    margin-bottom: ${spacing.normal};
  }
`;

const fullColumnStyle = css`
  left: auto !important;
  right: auto !important;
  width: auto !important;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: ${spacing.large};
  margin-bottom: 0;
`;

const rightStyle = css`
  float: right;
`;

const smallTypes = ["small-right", "xsmall-right"];

const Figure = forwardRef<HTMLElement, Props>(({ children, type = "full", className, ...rest }, ref) => {
  const floatClass = type === "full-column" ? undefined : `u-float-${type}`;

  const styles = useMemo(() => {
    const styles = [];
    if (!floatClass) styles.push(fullColumnStyle);
    if (smallTypes.includes(type)) styles.push(rightStyle);
    return styles;
  }, [floatClass, type]);

  const classes = floatClass ? `${floatClass} ${className ?? ""}` : className;

  return (
    <StyledFigure data-sizetype={type} css={styles} className={classes} {...rest} ref={ref}>
      {children}
    </StyledFigure>
  );
});

export type FigureType =
  | "full"
  | "full-column"
  | "left"
  | "small-left"
  | "right"
  | "small-right"
  | "xsmall-right"
  | "xsmall-left";

interface Props extends Omit<ComponentPropsWithRef<"figure">, "type"> {
  type?: FigureType;
  noFigcaption?: boolean;
}

export default Figure;
