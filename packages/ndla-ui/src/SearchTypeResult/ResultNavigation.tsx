import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronRight, ChevronDown } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';
import { injectT, tType } from '@ndla/i18n';

const ResultNav = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  button.nav {
    margin-right: 8px;
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
  margin-bottom: 12px;
`;

export type PaginationType = {
  onShowMore: () => void;
  onShowAll: () => void;
  totalCount: number;
  pageSize: number;
  page: number;
};

const ResultNavigation = ({
  onShowMore,
  onShowAll,
  totalCount,
  pageSize,
  page,
  t,
}: PaginationType & tType) => {
  const nextPage = page + 1;
  const currentItems = nextPage * pageSize;
  const isMore = currentItems < totalCount;
  const toCount = currentItems > totalCount ? totalCount : currentItems;
  return (
    <ResultNav>
      <NavInfo>
        {t('searchPage.resultType.showing', {
          fromCount: 1,
          toCount,
          totalCount,
        })}
      </NavInfo>
      {isMore && (
        <>
          <Button className="nav" link onClick={onShowMore}>
            {t('searchPage.resultType.showMore')} <ChevronDown />
          </Button>
          <Button link className="nav" onClick={onShowAll}>
            {t('searchPage.resultType.showAll')} <ChevronRight />
          </Button>
        </>
      )}
    </ResultNav>
  );
};

export default injectT(ResultNavigation);
