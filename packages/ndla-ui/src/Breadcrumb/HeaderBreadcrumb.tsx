/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ChevronRight } from '@ndla/icons/src/common';
import SafeLink from '@ndla/safelink/src';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

const StyledHeaderSafeLink = styled(SafeLink)`
  ${fonts.sizes(14)};
  font-weight: ${fonts.weight.bold};
  color: ${colors.brand.primary};
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

interface Props {
  items: SimpleBreadcrumbItem[];
}

const HeaderBreadcrumb = ({ items }: Props) => {
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

export default HeaderBreadcrumb;
