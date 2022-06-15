/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface ThemeProps {
  light: boolean | undefined;
}

const StyledHeaderSafeLink = styled(SafeLink)<ThemeProps>`
  ${fonts.sizes(14)};
  font-weight: ${fonts.weight.bold};
  color: ${({ light }) => (light ? colors.white : colors.brand.primary)};
`;

const StyledRightChevron = styled(ChevronRight)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.brand.primary)};
  margin: ${spacing.xxsmall};
`;
const StyledSpan = styled.span<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.brand.primary)};
`;
const StyledSafeLink = styled(SafeLink)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.brand.primary)};
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HeaderBreadcrumb = ({ items, light }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledSpan light={light}>{item.name}</StyledSpan>;
    }
    return (
      <StyledSafeLink light={light} to={item.to}>
        {item.name}
      </StyledSafeLink>
    );
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    return <StyledRightChevron light={light} />;
  };

  return (
    <div>
      <StyledHeaderSafeLink light={light} to={items[0]?.to}>
        {items[0]?.name}
      </StyledHeaderSafeLink>
      <Breadcrumb
        items={items.slice(1)}
        renderItem={renderItem}
        renderSeparator={renderSeparator}
        autoCollapse
        collapseFirst
      />
    </div>
  );
};

export default HeaderBreadcrumb;
