/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, forwardRef } from 'react';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';

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
  display: inline;
  list-style: none;
`;

const StyledChevron = styled(ChevronRight)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

const StyledSafeLink = styled(SafeLink)`
  color: inherit;
  box-shadow: none;
  text-decoration: underline;
  text-underline-offset: 4px;
  &:hover,
  &:focus,
  &:focus-within {
    text-decoration: none;
  }
`;

interface Props {
  item: IndexedBreadcrumbItem;
  autoCollapse?: boolean;
  totalCount: number;
  renderItem?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
  renderSeparator?: (item: IndexedBreadcrumbItem, totalCount: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<HTMLLIElement, Props>(({ renderItem, renderSeparator, item, totalCount }, ref) => {
  const { to, name, index } = item;
  const isLast = index === totalCount - 1;
  return (
    <StyledListItem aria-current={isLast ? 'page' : undefined} ref={ref}>
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
