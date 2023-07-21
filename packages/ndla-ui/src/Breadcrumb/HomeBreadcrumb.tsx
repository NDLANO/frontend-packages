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
import React, { useCallback } from 'react';
import Breadcrumb from './Breadcrumb';
import { IndexedBreadcrumbItem, SimpleBreadcrumbItem } from './BreadcrumbItem';

const StyledSeparator = styled.div`
  ${fonts.sizes('14px')};
  margin: 0 ${spacing.small};
  user-select: none;
  color: ${colors.text.primary};
  &[data-light='true'] {
    color: ${colors.white};
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledIconSafeLink = styled(SafeLink)`
  box-shadow: none;
  border-bottom: none;
`;
const StyledHome = styled(Home)`
  width: 20px;
  height: 20px;
  color: ${colors.text.primary};
  &[data-light='true'] {
    color: ${colors.white};
  }
`;
const StyledRightChevron = styled(ChevronRight)`
  color: ${colors.text.primary};
  &[data-light='true'] {
    color: ${colors.white};
  }
  margin: ${spacing.xxsmall};
`;
const StyledSpan = styled.span`
  color: ${colors.text.primary};
  &[data-light='true'] {
    color: ${colors.white};
  }
`;
const StyledSafeLink = styled(SafeLink)`
  color: ${colors.text.primary};
  &[data-light='true'] {
    color: ${colors.white};
  }
`;

interface Props {
  items: SimpleBreadcrumbItem[];
  light?: boolean;
}

const HomeBreadcrumb = ({ items, light }: Props) => {
  const renderItem = useCallback(
    (item: IndexedBreadcrumbItem, totalCount: number) => {
      if (item.index === totalCount - 1) {
        return <StyledSpan data-light={light}>{item.name}</StyledSpan>;
      }
      if (item.index === 0) {
        return (
          <StyledIconSafeLink aria-label={item.name} to={item.to}>
            <StyledHome title={item.name} data-light={light} />
          </StyledIconSafeLink>
        );
      }
      return (
        <StyledSafeLink data-light={light} to={item.to}>
          {item.name}
        </StyledSafeLink>
      );
    },
    [light],
  );

  const renderSeparator = useCallback(
    (item: IndexedBreadcrumbItem, totalCount: number) => {
      if (item.index === totalCount - 1) {
        return null;
      }
      if (item.index === 0) {
        return <StyledSeparator data-light={light}>|</StyledSeparator>;
      }
      return <StyledRightChevron data-light={light} />;
    },
    [light],
  );

  return <Breadcrumb items={items} renderItem={renderItem} renderSeparator={renderSeparator} />;
};

export default HomeBreadcrumb;
