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
import Button from '@ndla/button';
import { fonts, spacing, colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';

const ResultNav = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: ${spacing.medium} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button.nav {
    font-weight: 600;
    border-width: 1px;
    &:disabled {
      opacity: 0.8;
    }
  }
`;

const NavInfo = styled.div`
  ${fonts.sizes('16px', '24px')};
  font-weight: 400;
  margin-bottom: ${spacing.small};
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 2px;
  background: ${colors.brand.tertiary};
  margin: 0 0 ${spacing.small};
`;

type ProgressType = {
  width: number;
};
const Progress = styled.span<ProgressType>`
  display: block;
  background: ${colors.brand.primary};
  height: 2px;
  width: ${(props) => props.width}%;
`;

export type PaginationType = {
  onShowMore: () => void;
  totalCount: number;
  toCount: number;
  contentType?: string;
};

const ResultNavigation = ({ onShowMore, totalCount, toCount, contentType = '' }: PaginationType) => {
  const { t } = useTranslation();
  const isMore = toCount < totalCount;
  const progress = Math.ceil((toCount / totalCount) * 100);

  const onToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ResultNav>
      <NavInfo>
        {isMore
          ? t('searchPage.resultType.showing', {
              count: toCount,
              totalCount,
              contentType,
            })
          : t('searchPage.resultType.showingAll')}
      </NavInfo>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
      {isMore ? (
        <Button className="nav" outline onClick={onShowMore}>
          {t('searchPage.resultType.showMore')}
        </Button>
      ) : (
        <Button className="nav" outline onClick={onToTopHandler}>
          {t('searchPage.resultType.toTopOfPage')}
        </Button>
      )}
    </ResultNav>
  );
};

export default ResultNavigation;
