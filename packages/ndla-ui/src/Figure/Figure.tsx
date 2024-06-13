/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B These components is used to render static markup serverside

/** @jsxImportSource @emotion/react */
import { ComponentPropsWithRef, forwardRef, useMemo } from "react";
import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, mq, spacing } from "@ndla/core";

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

const floatSizes: Record<FigureType, SerializedStyles> = {
  left: css`
    margin-top: ${spacing.xsmall};
    --float: left;
    --width: 50%;
    --width-desktop: 65%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-right: ${spacing.small};
      }
    }
  `,
  right: css`
    margin-top: ${spacing.xsmall};
    --float: right;
    --width: 50%;
    --width-desktop: 65%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-left: ${spacing.small};
      }
    }
  `,
  "small-left": css`
    margin-top: ${spacing.xsmall};
    --float: left;
    --width: 25%;
    --width-desktop: 50%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-right: ${spacing.small};
      }
    }
  `,
  "small-right": css`
    margin-top: ${spacing.xsmall};
    --float: right;
    --width: 25%;
    --width-desktop: 50%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-left: ${spacing.small};
      }
    }
  `,
  "xsmall-left": css`
    --float: left;
    --width: 25%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-right: ${spacing.small};
        margin: ${spacing.xsmall} 0 ${spacing.medium};
      }
    }
  `,
  "xsmall-right": css`
    --float: right;
    --width: 25%;
    & {
      ${mq.range({ from: breakpoints.tablet })} {
        padding-left: ${spacing.small};
        margin: ${spacing.xsmall} 0 ${spacing.normal} ${spacing.xsmall};
      }
    }
  `,
  full: css`
    margin-top: ${spacing.xsmall};
  `,
  "full-column": css`
    left: auto !important;
    right: auto !important;
    width: auto !important;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: ${spacing.large};
    margin-bottom: 0;
  `,
};

const floatStyle = css`
  ${mq.range({ from: breakpoints.tablet })} {
    float: var(--float);
    clear: var(--float);
    width: var(--width) !important;
    z-index: 1;
    left: auto !important;
    padding: 0;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    width: var(--width-desktop, var(--width)) !important;
  }
`;

const Figure = forwardRef<HTMLElement, Props>(({ children, type = "full", ...rest }, ref) => {
  const styles = useMemo(() => {
    const styles = [];
    const floatCss = floatSizes[type];
    if (type !== "full-column" && type !== "full") {
      styles.push(floatStyle);
    }
    if (floatCss) {
      styles.push(floatCss);
    }
    return styles;
  }, [type]);

  return (
    <StyledFigure data-sizetype={type} css={styles} {...rest} ref={ref}>
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
