/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'react-prop-types/lib/elementType';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import rgba from 'polished/lib/color/rgba';
import { colors } from '@ndla/core';

import SafeLink from './SafeLink'; // TODO: find a solution for sharing common components
import { stepNumbers } from './pagerHelpers';

const createQueryString = obj =>
  Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
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

export const PageItem = ({
  children,
  page,
  query: currentQuery,
  pathname,
  onClick,
  pageItemComponentClass: Component,
}) => {
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
    <Component css={pageItemStyle} onClick={handleClick}>
      {children}
    </Component>
  );
};

PageItem.propTypes = {
  pageItemComponentClass: elementType.isRequired,
  children: PropTypes.node.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.object.isRequired, // eslint-disable-line
  pathname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyledPager = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1em;
`;

export default function Pager(props) {
  const { page, lastPage, ...rest } = props;

  const steps = stepNumbers(page, lastPage);

  const PageItems = steps.map(n => {
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
}

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  pathname: PropTypes.string,
  query: PropTypes.object, // eslint-disable-line
  onClick: PropTypes.func,
  pageItemComponentClass: elementType,
};

Pager.defaultProps = {
  onClick: () => {},
  pageItemComponentClass: SafeLink,
  query: {},
  pathname: '',
};
