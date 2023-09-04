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
import { CSSProperties, useCallback, useMemo } from 'react';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

const StyledSeparator = styled.div`
  display: inline;
  ${fonts.sizes('14px')};
  margin-left: ${spacing.xsmall};
  margin-right: ${spacing.small};
  user-select: none;
  color: var(--breadcrumb-color);
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledIconSafeLink = styled(SafeLink)`
  display: inline;
  box-shadow: none;
`;

const StyledHome = styled(Home)`
  width: 23px;
  height: 23px;
  color: var(--breadcrumb-color);
`;
const StyledRightChevron = styled(ChevronRight)`
  width: 23px;
  height: 23px;
  color: var(--breadcrumb-color);
`;
const StyledSpan = styled.span`
  color: var(--breadcrumb-color);
`;
const StyledSafeLink = styled(SafeLink)`
  display: inline;
  box-shadow: none;
  text-decoration: underline;
  text-underline-offset: 4px;
  &:hover,
  &:focus,
  &:focus-within {
    text-decoration: none;
  }
  color: var(--breadcrumb-color);
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HomeBreadcrumb = ({ items, light }: Props) => {
  const vars = useMemo(
    () => ({ '--breadcrumb-color': light ? colors.white : colors.text.primary } as unknown as CSSProperties),
    [light],
  );

  const renderItem = useCallback(
    (item: IndexedBreadcrumbItem, totalCount: number) => {
      if (item.index === totalCount - 1) {
        return <StyledSpan style={vars}>{item.name}</StyledSpan>;
      }
      if (item.index === 0) {
        return (
          <StyledIconSafeLink aria-label={item.name} to={item.to}>
            <StyledHome title={item.name} style={vars} />
          </StyledIconSafeLink>
        );
      }
      return (
        <StyledSafeLink style={vars} to={item.to}>
          {item.name}
        </StyledSafeLink>
      );
    },
    [vars],
  );

  const renderSeparator = useCallback(
    (item: IndexedBreadcrumbItem, totalCount: number) => {
      if (item.index === totalCount - 1) {
        return null;
      }
      if (item.index === 0) {
        return <StyledSeparator style={vars}>|</StyledSeparator>;
      }
      return <StyledRightChevron style={vars} />;
    },
    [vars],
  );

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default HomeBreadcrumb;
