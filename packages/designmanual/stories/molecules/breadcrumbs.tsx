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
    name: 'Tittel på side/ressurseqwe wqe wqe wqe wqe qwe wqe n',
    to: '#4',
  },
];

interface BreadcrumbDefaultProps {
  autoCollapse?: boolean;
}

export const BreadcrumbDefault = ({ autoCollapse }: BreadcrumbDefaultProps) => (
  <Breadcrumb autoCollapse={autoCollapse} items={[...items]} />
);

const StyledHeaderSafeLink = styled(SafeLink)`
  ${fonts.sizes(14)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
`;

const StyledIconSafeLink = styled(SafeLink)`
  box-shadow: none;
  border-bottom: none;
`;
const StyledBlueRightChevron = styled(ChevronRight)`
  color: ${colors.brand.primary};
  margin: ${spacing.xxsmall};
`;
const StyledBlueSpan = styled.span`
  color: ${colors.brand.primary};
`;
const StyledBlueSafeLink = styled(SafeLink)`
  color: ${colors.brand.primary};
`;

export const BreadcrumbWithHeader = () => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledBlueSpan>{item.name}</StyledBlueSpan>;
    }
    return <StyledBlueSafeLink to={item.to}>{item.name}</StyledBlueSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    return <StyledBlueRightChevron />;
  };

  return (
    <>
      <StyledHeaderSafeLink to={items[0].to}>{items[0].name}</StyledHeaderSafeLink>
      <Breadcrumb items={items.slice(1)} renderItem={renderItem} renderSeparator={renderSeparator} autoCollapse />
    </>
  );
};

const StyledPipeSeparator = styled.div`
  content: '|';
  ${fonts.sizes('14px')};
  margin: 0 ${spacing.small};
  user-select: none;
`;
const StyledHome = styled(Home)`
  width: 20px;
  height: 20px;
  color: ${colors.text.primary};
`;
const StyledDarkRightChevron = styled(ChevronRight)`
  color: ${colors.text.primary};
  margin: ${spacing.xxsmall};
`;
const StyledDarkSpan = styled.span`
  color: ${colors.text.primary};
`;
const StyledDarkSafeLink = styled(SafeLink)`
  color: ${colors.text.primary};
`;

export const BreadcrumbWithHome = () => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledDarkSpan>{item.name}</StyledDarkSpan>;
    }
    if (item.index === 0) {
      return (
        <StyledIconSafeLink to={item.to}>
          <StyledHome />
        </StyledIconSafeLink>
      );
    }
    return <StyledDarkSafeLink to={item.to}>{item.name}</StyledDarkSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    if (item.index === 0) {
      return <StyledPipeSeparator />;
    }
    return <StyledDarkRightChevron />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

const StyledWhiteSeparator = styled.div`
  ${fonts.sizes('14px')};
  margin: 0 ${spacing.small};
  user-select: none;
  color: ${colors.white};
`;
const StyledWhiteHome = styled(Home)`
  width: 20px;
  height: 20px;
  color: ${colors.white};
`;
const StyledWhiteRightChevron = styled(ChevronRight)`
  color: ${colors.white};
  margin: ${spacing.xxsmall};
`;
const StyledWhiteSpan = styled.span`
  color: ${colors.white};
`;
const StyledWhiteSafeLink = styled(SafeLink)`
  color: ${colors.white};
`;

export const BreadcrumbWhiteWithHome = () => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledWhiteSpan>{item.name}</StyledWhiteSpan>;
    }
    if (item.index === 0) {
      return (
        <StyledIconSafeLink to={item.to}>
          <StyledWhiteHome />
        </StyledIconSafeLink>
      );
    }
    return <StyledWhiteSafeLink to={item.to}>{item.name}</StyledWhiteSafeLink>;
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    if (item.index === 0) {
      return <StyledWhiteSeparator>|</StyledWhiteSeparator>;
    }
    return <StyledWhiteRightChevron />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default BreadcrumbDefault;
