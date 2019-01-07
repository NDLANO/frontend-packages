/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { createUniversalPortal } from '@ndla/util';
import { colors } from '@ndla/core';
import NotionDialog from './NotionDialog';

const NotionCSS = css`
  display: inline;
  .link {
    background: none;
    border: none;
    font-family: inherit;
    font-style: inherit;
    line-height: 1em;
    padding: 0 0 4px 0;
    margin-bottom: -4px;
    text-decoration: none;
    color: #000;
    border-bottom: 1px solid ${colors.brand.tertiary};
    position: relative;
    cursor: pointer;
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      margin: calc(1em + 4px) auto 0;
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid ${colors.brand.primary};
      transition: transform 0.1s ease;
    }
    &:hover,
    &:focus {
      border-color: ${colors.brand.primary};
      outline: none;
      &:after {
        transform: scale(1.4) translateY(1px);
      }
    }
  }
`;

const Notion = ({ id, ariaLabel, content, children, ...rest }) => (
  <span className={NotionCSS} id={id} data-notion>
    <button
      type="button"
      aria-label={ariaLabel}
      className={cx('link')}
      data-notion-link>
      {children}
    </button>
    {createUniversalPortal(
      <NotionDialog {...rest} id={id}>
        {content}
      </NotionDialog>,
      'body',
    )}
  </span>
);

Notion.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.node.isRequired,
};

export default Notion;
