/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef, useImperativeHandle, ReactNode, forwardRef } from 'react';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { mq, spacing, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';

export interface SimpleBreadcrumbItem {
  to: string | Partial<Location>;
  name: string;
}

export interface IndexedBreadcrumbItem extends SimpleBreadcrumbItem {
  index: number;
}

export interface BreadcrumbRenderProps {
  item: IndexedBreadcrumbItem;
  totalCount: number;
}

interface StyledListItemprops {
  autoCollapse?: boolean;
}

const StyledListItem = styled.li<StyledListItemprops>`
  margin-bottom: 0;
  margin-left: 0;
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

const StyledChevron = styled(ChevronRight)`
  margin: ${spacing.xxsmall};
`;

const StyledSafeLink = styled(SafeLink)`
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
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
      <StyledListItem ref={liRef} autoCollapse={autoCollapse}>
        {renderItem ? (
          renderItem(item, totalCount)
        ) : isLast ? (
          <span>{name}</span>
        ) : (
          <StyledSafeLink to={to}>
            <span>{name}</span>
          </StyledSafeLink>
        )}
        {renderSeparator ? renderSeparator(item, totalCount) : !isLast && <StyledChevron />}
      </StyledListItem>
    );
  },
);

export default BreadcrumbItem;
