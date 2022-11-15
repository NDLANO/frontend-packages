/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ElementType, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { stepNumbers } from './pagerHelpers';

const createQueryString = (obj: Query) =>
  Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

const pageItemActiveStyle = css`
  border-top: 3px solid ${colors.brand.primary};
  background-color: 'rgba(222,235,246,0.5)';
`;

const pageItemStyle = css`
  display: inline;
  background: transparent;
  border: 0;
  border-top: 3px solid ${colors.background.dark};
  padding: 1em 1.45em;
  margin: 1em 0.3em 0;
  text-decoration: none;
  box-shadow: none;
  color: ${colors.brand.primary};
  cursor: pointer;
  &:hover {
    ${pageItemActiveStyle};
  }
`;

type Query = Record<string, any>;

interface PageItemProps<T extends Query> {
  pageItemComponentClass: ElementType;
  children: ReactNode;
  page: number;
  query: T;
  pathname: string;
  onClick: (query: T & { page: number }) => void;
  type?: string;
}

export const PageItem = <T extends Query>({
  children,
  page,
  query: currentQuery,
  pathname,
  onClick,
  pageItemComponentClass: Component,
  type,
}: PageItemProps<T>) => {
  const query = { ...currentQuery, page };
  const linkToPage = {
    pathname,
    search: createQueryString(query),
  };

  const handleClick = () => onClick(query);

  if (Component === SafeLink) {
    return (
      <SafeLink css={pageItemStyle} onClick={handleClick} to={linkToPage}>
        {children}
      </SafeLink>
    );
  }
  return (
    <Component css={pageItemStyle} onClick={handleClick} type={type}>
      {children}
    </Component>
  );
};

const StyledPager = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

interface Props<T extends Query> {
  page: number;
  lastPage: number;
  pathname?: string;
  query: T;
  onClick?: (query: T & { page: number }) => void;
  pageItemComponentClass?: ElementType;
}

const Pager = <T extends Query>({
  page,
  lastPage,
  onClick = (_) => {},
  pageItemComponentClass = SafeLink,
  query,
  pathname = '',
}: Props<T>) => {
  const steps = stepNumbers(page, lastPage);

  const rest = { onClick, pageItemComponentClass, query, pathname };

  const PageItems = steps.map((n) => {
    if (n === page) {
      return (
        <span key={n} aria-current="step" css={[pageItemStyle, pageItemActiveStyle]}>
          {n}
        </span>
      );
    }
    return (
      <PageItem key={n} page={n} {...rest}>
        {n}
      </PageItem>
    );
  });

  const prevPageItem =
    steps[0] < page ? (
      <PageItem page={page - 1} {...rest}>
        {'<'}
      </PageItem>
    ) : null;
  const nextPageItem =
    page < lastPage ? (
      <PageItem page={page + 1} {...rest}>
        {'>'}
      </PageItem>
    ) : null;

  return (
    <StyledPager data-testid="pager">
      {prevPageItem}
      {PageItems}
      {nextPageItem}
    </StyledPager>
  );
};

export default Pager;
