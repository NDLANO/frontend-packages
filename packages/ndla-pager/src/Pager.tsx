/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ElementType, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import rgba from 'polished/lib/color/rgba';
import { colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { stepNumbers } from './pagerHelpers';

const createQueryString = (obj: Record<string, any>) =>
  Object.entries(obj)
    .filter(([_, value]) => value !== undefined && value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

const pageItemActiveStyle = css`
  border-top: 3px solid ${colors.brand.primary};
  background-color: ${rgba(colors.brand.lighter, 0.5)};
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

interface PageItemProps {
  pageItemComponentClass: ElementType;
  children: ReactNode;
  page: number;
  query: object;
  pathname: string;
  onClick: (query: object) => void;
  type?: string;
}

export const PageItem = ({
  children,
  page,
  query: currentQuery,
  pathname,
  onClick,
  pageItemComponentClass: Component,
  type,
}: PageItemProps) => {
  const query = { ...currentQuery, page };
  const linkToPage = {
    pathname,
    search: createQueryString(query),
  };

  const handleClick = () => onClick(query);

  if (Component === SafeLink || Component === Link) {
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

interface Props {
  page: number;
  lastPage: number;
  pathname?: string;
  query?: object;
  onClick?: (query: object) => void;
  pageItemComponentClass?: ElementType;
}

const Pager = ({
  page,
  lastPage,
  onClick = (_) => {},
  pageItemComponentClass = SafeLink,
  query = {},
  pathname = '',
}: Props) => {
  const steps = stepNumbers(page, lastPage);

  const rest = { onClick, pageItemComponentClass, query, pathname };

  const PageItems = steps.map((n) => {
    if (n === page) {
      return (
        <span key={n} css={[pageItemStyle, pageItemActiveStyle]}>
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
        {' '}
        {'<'}{' '}
      </PageItem>
    ) : null;
  const nextPageItem =
    page < lastPage ? (
      <PageItem page={page + 1} {...rest}>
        {' '}
        {'>'}{' '}
      </PageItem>
    ) : null;

  return (
    <StyledPager>
      {prevPageItem}
      {PageItems}
      {nextPageItem}
    </StyledPager>
  );
};

export default Pager;
