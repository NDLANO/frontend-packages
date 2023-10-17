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
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

interface ThemeProps {
  light: boolean | undefined;
}

const StyledSeparator = styled.div<ThemeProps>`
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
const StyledHome = styled(Home)<ThemeProps>`
  width: 20px;
  height: 20px;
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;
const StyledRightChevron = styled(ChevronRight)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
  margin: ${spacing.xxsmall};
`;
const StyledSpan = styled.span<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;
const StyledSafeLink = styled(SafeLink)<ThemeProps>`
  color: ${({ light }) => (light ? colors.white : colors.text.primary)};
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HomeBreadcrumb = ({ items, light }: Props) => {
  const renderItem = (item: IndexedBreadcrumbItem, totalCount: number) => {
    if (item.index === totalCount - 1) {
      return <StyledSpan light={light}>{item.name}</StyledSpan>;
    }
    if (item.index === 0) {
      return (
        <StyledIconSafeLink aria-label={item.name} to={item.to}>
          <StyledHome title={item.name} light={light} />
        </StyledIconSafeLink>
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
    if (item.index === 0) {
      return <StyledSeparator light={light}>|</StyledSeparator>;
    }
    return <StyledRightChevron light={light} />;
  };

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default HomeBreadcrumb;
