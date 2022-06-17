/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ChevronRight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import React from 'react';
import { MenuButton } from '@ndla/button';
import { MenuItemProps } from '@ndla/button';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface ThemeProps {
  light: boolean | undefined;
}

const StyledRightChevron = styled(ChevronRight)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  margin: ${spacing.xxsmall};
  height: 24px;
  width: 24px;
`;
const StyledSpan = styled.span<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  font-weight: 700;
`;
const StyledSafeLink = styled(SafeLink)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  box-shadow: none;
  font-weight: 700;
  :hover {
    color: ${colors.brand.primary};
  }
`;
const LastElementWrapper = styled.span<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  display: flex;
  flex-direction: row;
  gap: ${spacing.small};

  p,
  button {
    margin: 0;
    padding: 0;
  }
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
  actionItems: MenuItemProps[];
}

const ActionBreadcrumb = ({ items, light, actionItems }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return (
        <LastElementWrapper light>
          <MenuButton menuItems={actionItems}>
            <StyledSpan light={light}>{item.name}</StyledSpan>
          </MenuButton>
        </LastElementWrapper>
      );
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

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default ActionBreadcrumb;
