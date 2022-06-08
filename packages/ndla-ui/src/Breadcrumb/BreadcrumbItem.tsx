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
import { spacing } from '@ndla/core/src';

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

const StyledListItem = styled.li`
  margin-bottom: 0;
  margin-left: 0;
  display: inline-flex;
  align-items: center;
  :before {
    display: none;
  }
`;

const StyledChevron = styled(ChevronRight)`
  margin: ${spacing.xxsmall};
`;

const StyledSafeLink = styled(SafeLink)`
  color: inherit;
`;

interface Props {
  item: IndexedBreadcrumbItem;
  totalCount: number;
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<any, Props>(({ renderItem, renderSeparator, item, totalCount }, ref) => {
  const liRef = useRef<any>();
  useImperativeHandle(ref, () => ({
    setMaxWidth: (maxWidth: number) => {
      liRef.current.children[0].style.maxWidth = maxWidth;
    },
  }));
  const { to, name, index } = item;
  const isLast = index === totalCount - 1;
  return (
    <StyledListItem ref={liRef}>
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
});

export default BreadcrumbItem;
