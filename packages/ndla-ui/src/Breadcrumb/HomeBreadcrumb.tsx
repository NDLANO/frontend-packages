/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, fonts, mq, spacing } from '@ndla/core';
import { ChevronRight, Home } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface ThemeProps {
  light: boolean | undefined;
}

const StyledWhiteSeparator = styled.div<ThemeProps>`
  ${fonts.sizes('14px')};
  margin: 0 ${spacing.small};
  user-select: none;
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledIconSafeLink = styled(SafeLink)`
  box-shadow: none;
  border-bottom: none;
`;
const StyledWhiteHome = styled(Home)<ThemeProps>`
  width: 20px;
  height: 20px;
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;
const StyledWhiteRightChevron = styled(ChevronRight)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  margin: ${spacing.xxsmall};
`;
const StyledWhiteSpan = styled.span<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;
const StyledWhiteSafeLink = styled(SafeLink)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HomeBreadcrumb = ({ items, light }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledWhiteSpan light={light}>{item.name}</StyledWhiteSpan>;
    }
    if (item.index === 0) {
      return (
        <StyledIconSafeLink to={item.to}>
          <StyledWhiteHome title={item.name} light={light} />
        </StyledIconSafeLink>
      );
    }
    return (
      <StyledWhiteSafeLink light={light} to={item.to}>
        {item.name}
      </StyledWhiteSafeLink>
    );
  };

  const renderSeparator = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return null;
    }
    if (item.index === 0) {
      return <StyledWhiteSeparator light={light}>|</StyledWhiteSeparator>;
    }
    return <StyledWhiteRightChevron light={light} />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default HomeBreadcrumb;
