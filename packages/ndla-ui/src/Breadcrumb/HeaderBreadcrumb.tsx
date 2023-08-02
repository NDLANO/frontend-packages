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
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface ThemeProps {
  light: boolean | undefined;
}

const HeaderBreadcrumbWrapper = styled.div<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.brand.primary)};
`;

const StyledHeaderSafeLink = styled(SafeLink)`
  ${fonts.sizes(14)};
  font-weight: ${fonts.weight.bold};
  color: inherit;
`;

const StyledRightChevron = styled(ChevronRight)`
  margin: ${spacing.xxsmall};
  color: inherit;
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HeaderBreadcrumb = ({ items, light }: Props) => {
  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    return <StyledRightChevron />;
  };

  return (
    <HeaderBreadcrumbWrapper light={light}>
      <StyledHeaderSafeLink to={items[0]?.to}>{items[0]?.name}</StyledHeaderSafeLink>
      <Breadcrumb items={items.slice(1)} renderSeparator={renderSeparator} autoCollapse collapseFirst />
    </HeaderBreadcrumbWrapper>
  );
};

export default HeaderBreadcrumb;
