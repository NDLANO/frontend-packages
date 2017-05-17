/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import { Link } from 'react-router-dom';

import SafeLink from '../common/SafeLink';
import { stepNumbers } from './pagerHelpers';

const createQueryString = obj => Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');

export const PageItem = ({ children, page, query: currentQuery, pathname, onClick, modifier, pageItemComponentClass: Component }) => {
  const modifierClass = modifier ? `pager_step--${modifier}` : '';
  const classes = classNames('pager_step', modifierClass);

  const query = { ...currentQuery, page };
  const linkToPage = {
    pathname,
    search: createQueryString(query),
  };

  const handleClick = () => onClick(query);

  if (Component === SafeLink || Component === Link) {
    return <SafeLink className={classes} onClick={handleClick} to={linkToPage} >{children}</SafeLink>;
  }
  return <Component className={classes} onClick={handleClick}>{children}</Component>;
};

PageItem.propTypes = {
  pageItemComponentClass: elementType.isRequired,
  children: PropTypes.node.isRequired,
  page: PropTypes.number.isRequired,
  query: PropTypes.object.isRequired, // eslint-disable-line
  pathname: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  modifier: PropTypes.string,
};

export default function Pager(props) {
  const { page, lastPage, ...rest } = props;

  const steps = stepNumbers(page, lastPage);

  const PageItems = steps.map((n) => {
    if (n === page) {
      return <span key={n} className="pager_step pager_step--active">{n}</span>;
    }
    return <PageItem key={n} page={n} {...rest}>{n}</PageItem>;
  });

  const prevPageItem = steps[0] < page ? <PageItem modifier="back" page={page - 1} {...rest}> {'<'} </PageItem> : null;
  const nextPageItem = page < lastPage ? <PageItem modifier="forward" page={page + 1} {...rest}> {'>'} </PageItem> : null;

  return (
    <div className="pager">
      {prevPageItem}
      {PageItems}
      {nextPageItem}
    </div>
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
