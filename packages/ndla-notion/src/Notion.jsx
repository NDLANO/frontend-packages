/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { createUniversalPortal } from '@ndla/util';
import { colors } from '@ndla/core';
import NotionDialog from './NotionDialog';

const NotionWrapper = styled.span`
  display: inline;
`;
const NotionButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-style: inherit;
  line-height: 1em;
  padding: 0 0 4px 0;
  margin-bottom: -4px;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${props =>
    props.isList && {
      padding: '2px 0',
      margin: '4px 0',
      lineHeight: '1.1em',
      height: '32px',
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      textTransform: 'capitalize',
      fontFamily: 'Source Sans Pro',
      fontWeight: '600',
      fontSize: '16px',
      color: `${colors.brand.primary}`,
    }}

  &:before {
    content: '';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZmlsbD0iI0E1QkNEMyIgZD0iTTQgOWgxNnYySDRWOXptMCA0aDEwdjJINHYtMnoiLz48L3N2Zz4K);
    background-repeat: no-repeat;
    background-size: 32px 32px;
    position: absolute;
    margin: calc(1em - 10px) 0 0 -2px;
    width: 32px;
    height: 32px;
    ${props =>
      props.isList && {
        position: 'relative',
        margin: '0',
        backgroundPosition: '0 0',
        width: '32px',
        height: '24px',
      }}
  }
`;

const Notion = ({
  id,
  ariaLabel,
  content,
  children,
  isList = false,
  ...rest
}) => (
  <NotionWrapper id={id} data-notion>
    <NotionButton
      isList={isList}
      type="button"
      aria-label={ariaLabel}
      className={'link'}
      data-notion-link>
      {children}
    </NotionButton>
    {createUniversalPortal(
      <NotionDialog {...rest} id={id}>
        {content}
      </NotionDialog>,
      'body',
    )}
  </NotionWrapper>
);

Notion.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.node,
  isList: PropTypes.bool,
};

export default Notion;
