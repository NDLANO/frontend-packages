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
import { MenuButton } from '@ndla/button';
import { MenuItemProps } from '@ndla/button';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

const StyledRightChevron = styled(ChevronRight)`
  color: ${colors.text.primary};
  margin: ${spacing.xxsmall};
  height: 24px;
  width: 24px;
`;

const StyledSpan = styled.span`
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.bold};
`;

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.text.primary};
  box-shadow: none;
  font-weight: ${fonts.weight.bold};
  :hover {
    color: ${colors.brand.primary};
  }
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  actionItems: MenuItemProps[];
}

const ActionBreadcrumb = ({ items, actionItems }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return (
        <MenuButton menuItems={actionItems} size="small">
          <StyledSpan title={item.name}>{item.name}</StyledSpan>
        </MenuButton>
      );
    }
    return (
      <StyledSafeLink title={item.name} to={item.to}>
        {item.name}
      </StyledSafeLink>
    );
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }

    return <StyledRightChevron />;
  };

  return (
    <Breadcrumb
      autoCollapse
      collapseLast={false}
      items={items}
      renderItem={renderItem}
      renderSeparator={renderSeparator}
    />
  );
};

export default ActionBreadcrumb;
