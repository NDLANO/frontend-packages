/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Breadcrumb, IndexedBreadcrumbItem } from '@ndla/ui';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { ChevronRight } from '@ndla/icons/src/common';
import { Home } from '@ndla/icons/lib/common';

const items = [
  {
    name: 'Fag',
    to: '#1',
  },
  {
    name: 'Hovedemne tittel',
    to: '#2',
  },
  {
    name: 'Underemne tittel',
    to: '#3',
  },
  {
    name: 'Tittel på side/ressursen',
    to: '#4',
  },
];

export const BreadcrumbDefault = () => <Breadcrumb items={items} />;

const StyledHeaderSafeLink = styled(SafeLink)`
  ${fonts.sizes(14)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
`;

const StyledIconSafeLink = styled(SafeLink)`
  box-shadow: none;
  border-bottom: none;
`;

export const BreadcrumbWithHeader = () => {
  const StyledRightChevron = styled(ChevronRight)`
    color: ${colors.brand.primary};
    margin: ${spacing.xxsmall};
  `;
  const StyledBreadcrumbSpan = styled.span`
    color: ${colors.brand.primary};
  `;
  const StyledBreadcrumbSafeLink = styled(SafeLink)`
    color: ${colors.brand.primary};
  `;

  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledBreadcrumbSpan>{item.name}</StyledBreadcrumbSpan>;
    }
    return <StyledBreadcrumbSafeLink to={item.to}>{item.name}</StyledBreadcrumbSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    return <StyledRightChevron />;
  };

  return (
    <>
      <StyledHeaderSafeLink to={items[0].to}>{items[0].name}</StyledHeaderSafeLink>
      <Breadcrumb items={items.slice(1)} renderItem={renderItem} renderSeparator={renderSeparator} />
    </>
  );
};

export const BreadcrumbWithHome = () => {
  const StyledSeparator = styled.div`
    ${fonts.sizes('14px')};
    margin: 0 ${spacing.small};
    user-select: none;
  `;
  const StyledHome = styled(Home)`
    width: 20px;
    height: 20px;
    color: ${colors.text.primary};
  `;
  const StyledRightChevron = styled(ChevronRight)`
    color: ${colors.text.primary};
    margin: ${spacing.xxsmall};
  `;
  const StyledBreadcrumbSpan = styled.span`
    color: ${colors.text.primary};
  `;
  const StyledBreadcrumbSafeLink = styled(SafeLink)`
    color: ${colors.text.primary};
  `;

  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledBreadcrumbSpan>{item.name}</StyledBreadcrumbSpan>;
    }
    if (item.index === 0) {
      return (
        <StyledIconSafeLink to={item.to}>
          <StyledHome />
        </StyledIconSafeLink>
      );
    }
    return <StyledBreadcrumbSafeLink to={item.to}>{item.name}</StyledBreadcrumbSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    if (item.index === 0) {
      return <StyledSeparator>|</StyledSeparator>;
    }
    return <StyledRightChevron />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default BreadcrumbDefault;
