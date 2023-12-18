/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef, useImperativeHandle, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { mq, spacing, breakpoints } from '@ndla/core';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';

export interface SimpleBreadcrumbItem {
  to: string | Partial<Location>;
  name: ReactNode;
}

export interface IndexedBreadcrumbItem extends SimpleBreadcrumbItem {
  index: number;
}

export interface BreadcrumbRenderProps {
  item: IndexedBreadcrumbItem;
  totalCount: number;
}

interface AutoCollapseProps {
  autoCollapse?: boolean;
}

const StyledListItem = styled.li<AutoCollapseProps>`
  padding-bottom: 0;
  padding-left: 0;
  display: inline-flex;
  align-items: center;
  :before {
    display: none;
  }

  ${({ autoCollapse }) =>
    !autoCollapse &&
    css`
      ${mq.range({ until: breakpoints.tablet })} {
        display: block;
      }
    `}
`;

const CollapseContainer = styled.div<AutoCollapseProps>`
  display: inline-block;
  color: inherit;
  ${({ autoCollapse }) =>
    autoCollapse &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
    `}
`;

const StyledChevron = styled(ChevronRight)`
  margin: ${spacing.xxsmall};
  color: inherit;
`;

const StyledSafeLink = styled(SafeLink)`
  color: inherit;
`;

interface Props {
  item: IndexedBreadcrumbItem;
  autoCollapse?: boolean;
  totalCount: number;
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<any, Props>(
  ({ renderItem, renderSeparator, item, totalCount, autoCollapse }, ref) => {
    const liRef = useRef<any>();

    useImperativeHandle(ref, () => ({
      setMaxWidth: (maxWidth: number) => {
        liRef.current.children[0].style.maxWidth = maxWidth;
      },
    }));

    const { to, name, index } = item;
    const isLast = index === totalCount - 1;
    return (
      <StyledListItem ref={liRef} autoCollapse={autoCollapse} aria-current={isLast ? 'page' : undefined}>
        <CollapseContainer autoCollapse={autoCollapse}>
          {renderItem ? (
            renderItem(item, totalCount)
          ) : isLast ? (
            <span>{name}</span>
          ) : (
            <StyledSafeLink to={to}>
              <span>{name}</span>
            </StyledSafeLink>
          )}
        </CollapseContainer>
        {renderSeparator ? renderSeparator(item, totalCount) : !isLast && <StyledChevron />}
      </StyledListItem>
    );
  },
);

export default BreadcrumbItem;
