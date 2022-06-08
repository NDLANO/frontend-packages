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

export interface BreadcrumbItemI {
  to: string | Partial<Location>;
  name: string;
  index: number;
}

const StyledBreadcrumbItem = styled.li`
  margin-bottom: 0;
  margin-left: 0;
  display: inline-block;
  :before {
    display: none;
  }
`;

const StyledChevron = styled(ChevronRight)`
  margin: 5px;
`;

interface Props {
  item: BreadcrumbItemI;
  totalCount: number;
  renderItem?: (item: BreadcrumbItemI, totalCount: number) => ReactNode;
  renderSeparator?: (item: BreadcrumbItemI, totalCount: number) => ReactNode;
}

const BreadcrumbItem = forwardRef<any, Props>(({ renderItem, item, totalCount }, ref) => {
  const liRef = useRef<any>();
  useImperativeHandle(ref, () => ({
    setMaxWidth: (maxWidth: number) => {
      liRef.current.children[0].style.maxWidth = maxWidth;
    },
  }));
  const { to, name, index } = item;
  const isLast = index === totalCount - 1;
  return (
    <StyledBreadcrumbItem ref={liRef}>
      {renderItem ? (
        renderItem(item, totalCount)
      ) : isLast ? (
        <span>{name}</span>
      ) : (
        <SafeLink to={to}>
          <span>{name}</span>
        </SafeLink>
      )}
      {!isLast && <StyledChevron />}
    </StyledBreadcrumbItem>
  );
});

export default BreadcrumbItem;
