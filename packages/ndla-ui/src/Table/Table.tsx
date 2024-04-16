/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import throttle from "lodash.throttle";
import { ReactNode, UIEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";

type ScrollPosition = "start" | "end" | "center";

const MARGIN = 5;

interface Props {
  id?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  lang?: string;
}

const ScrollBorder = styled.div`
  position: absolute;
  top: 0;
  height: calc(100% - ${spacing.mediumlarge});
  width: 3px;
  background: ${colors.background.dark};
  display: none;

  &[data-block="true"] {
    display: block;
  }
`;

const RightScrollBorder = styled(ScrollBorder)`
  right: 0;
`;

const LeftScrollBorder = styled(ScrollBorder)`
  left: 0;
`;

export const TableStyling = css`
  &::-webkit-scrollbar {
    height: ${spacing.xsmall};
  }
  &::-webkit-scrollbar-track-piece {
    background: ${colors.brand.lighter};
    border-radius: ${spacing.xsmall};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.brand.dark};
    border-radius: ${spacing.xsmall};
  }
  display: inline-block;

  font-size: 85%;
  max-width: 100%;

  padding-left: ${spacing.xxsmall};
  padding-right: ${spacing.xxsmall};

  vertical-align: top;
  table-layout: fixed;
  overflow-x: auto;

  // optional - enable iOS momentum scrolling
  -webkit-overflow-scrolling: touch;

  // scrolling shadows on left/right
  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }

  > caption {
    background-color: transparent;
    font-weight: ${fonts.weight.bold};
    font-family: ${fonts.sans};
    ${fonts.sizes("16px", "20px")}
    text-align: left;
    text-transform: uppercase;
    margin-bottom: ${spacing.small};
  }

  thead {
    overflow: hidden;
  }

  thead tr td,
  th {
    font-weight: ${fonts.weight.bold};
    border-bottom: 3px solid ${colors.brand.tertiary};
    font-family: ${fonts.sans};
    vertical-align: text-top;

    ${fonts.sizes("16px", "22px")};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes("16px", "30px")};
    }
  }

  tbody th {
    border-bottom: 0;
    border-right: 3px solid ${colors.brand.tertiary};
    padding: ${spacing.xsmall};
  }

  thead tr:nth-child(2) th {
    border: 1px solid ${colors.brand.lighter};
    text-transform: none;

    ${fonts.sizes("14px", "18px")};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes("15px", "26px")};
    }

    font-weight: ${fonts.weight.semibold};
    height: 40px;
    background-color: ${colors.brand.lighter};
    padding: ${spacing.xxsmall} ${spacing.normal} ${spacing.xxsmall} ${spacing.xsmall};

    &:empty {
      background-color: transparent;
    }
  }

  td {
    border: 1px solid ${colors.brand.lighter};
    vertical-align: top;

    ${fonts.sizes("14px", "22px")};
    ${mq.range({ from: breakpoints.tablet })} {
      ${fonts.sizes("15px", "30px")};
    }

    ol,
    ul {
      li,
      li p {
        ${fonts.sizes("14px", "22px")};
        ${mq.range({ from: breakpoints.tablet })} {
          ${fonts.sizes("15px", "30px")};
        }
        margin: ${spacing.xsmall} 0 !important;
      }
    }

    p {
      line-height: 1.6em;
    }

    p:last-child {
      margin: 0;
    }

    img {
      max-width: 100%;
      min-width: 120px;
    }
  }

  td,
  th {
    display: table-cell;
    padding: ${spacing.xsmall} ${spacing.small};

    p {
      margin: 0;
    }
  }

  // Remove excess spacing on headings inside table
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
  }

  ul {
    padding: 0 0 0 ${spacing.nsmall};
  }

  .c-figure {
    margin: 0;
    padding: 0;
    width: 100% !important;
    left: 0 !important;
  }
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const OverflowWrapper = styled.div`
  position: relative;
  overflow-x: auto;
`;

const Table = ({ children, id, ...rest }: Props) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition | undefined>(undefined);
  const tableRef = useRef<HTMLTableElement>(null);

  const checkScrollPosition = useCallback((el: HTMLTableElement) => {
    const { scrollLeft, offsetWidth, scrollWidth, clientWidth } = el;
    const hasScrollbar = scrollWidth > clientWidth;

    if (!hasScrollbar) {
      setScrollPosition(undefined);
      return;
    }

    const isStart = scrollLeft <= MARGIN;
    const isEnd = offsetWidth + scrollLeft >= scrollWidth - MARGIN;

    if (isStart) {
      setScrollPosition("start");
    } else if (isEnd) {
      setScrollPosition("end");
    } else {
      setScrollPosition("center");
    }
  }, []);

  const onScroll = useMemo(
    () =>
      throttle((event: UIEvent<HTMLTableElement>) => {
        const el = event.target as HTMLTableElement | undefined;
        if (el) {
          checkScrollPosition(el);
        }
      }, 100),
    [checkScrollPosition],
  );

  useEffect(() => {
    const el = tableRef.current;
    if (el) {
      checkScrollPosition(el);
    }
  }, [checkScrollPosition]);

  return (
    <TableWrapper>
      <OverflowWrapper>
        <LeftScrollBorder data-block={scrollPosition === "end" || scrollPosition === "center"} />
        <table ref={tableRef} id={id} onScroll={onScroll} css={TableStyling} {...rest}>
          {children}
        </table>
        <RightScrollBorder data-block={scrollPosition === "start" || scrollPosition === "center"} />
      </OverflowWrapper>
    </TableWrapper>
  );
};

export default Table;
