/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronDown } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
import { injectT, tType } from '@ndla/i18n';
import { spacing } from '@ndla/core';

const ResultNav = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: ${spacing.normal} 0;
  button.nav {
    margin-right: ${spacing.xsmall};
    font-size: 18px;
    font-weight: 600;
    &:disabled {
      opacity: 0.8;
    }
  }
`;

const NavInfo = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: ${spacing.small};
`;

export type PaginationType = {
  onShowMore: () => void;
  totalCount: number;
  fromCount?: number;
  toCount: number;
};

const ResultNavigation = ({ onShowMore, totalCount, fromCount = 1, toCount, t }: PaginationType & tType) => {
  const isMore = toCount < totalCount;
  return (
    <ResultNav>
      <NavInfo>
        {t('searchPage.resultType.showing', {
          fromCount,
          toCount,
          totalCount,
        })}
      </NavInfo>
      {isMore && (
        <Button className="nav" link onClick={onShowMore}>
          {t('searchPage.resultType.showMore')} <ChevronDown />
        </Button>
      )}
    </ResultNav>
  );
};

export default injectT(ResultNavigation);
