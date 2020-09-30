import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { ChevronRight, ChevronDown } from '@ndla/icons/common';
// @ts-ignore
import Button from '@ndla/button';

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
  totalCount: number;
  pageSize: number;
  page: number;
};

type Props = {
  onNavigate: (page: number) => void;
  onSelectSubjectType: () => void;
  pagination: PaginationType;
};

const ResultNavigation = ({
  onNavigate,
  onSelectSubjectType,
  pagination,
}: Props) => {
  const { totalCount, pageSize, page } = pagination;
  const nextPage = page + 1;
  const currentItems = nextPage * pageSize;
  const isMore = currentItems < totalCount;
  return (
    <ResultNav>
      <NavInfo>
        Viser 1 til {currentItems > totalCount ? totalCount : currentItems} av{' '}
        {totalCount}
      </NavInfo>
      {isMore && (
        <Button className="nav" link onClick={() => onNavigate(nextPage)}>
          Vis mer <ChevronDown />
        </Button>
      )}
      <Button link className="nav" onClick={() => onSelectSubjectType()}>
        Vis alle <ChevronRight />
      </Button>
    </ResultNav>
  );
};

export default ResultNavigation;
