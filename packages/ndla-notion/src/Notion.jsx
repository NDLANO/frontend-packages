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
import BEMHelper from 'react-bem-helper';
import { createUniversalPortal } from 'ndla-util';
import { colors, spacing, fonts, mq, breakpoints } from 'ndla-core';
import NotionDialog from './NotionDialog';

const NotionCSS = css`
  display: inline;
  .link {
    background: none;
    border: none;
    font-family: $font-serif;
    line-height: 1.3em;
    padding: 0;
    text-decoration: none;
    color: #000;
    border-bottom: 1px solid ${colors.brand.primary};
    transition: border 0.2s ease-out;
    position: relative;
    cursor: pointer;
    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      margin: auto;
      margin-top: 21px;
      @include mq(tablet) {
        margin-top: 24px;
      }
      left: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid ${colors.brand.primary};
      transition: border 0.2s ease-out;
    }
    &:hover,
    &:focus {
      border-bottom: 1px solid ${colors.brand.primary};
      outline: none;
      &:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${colors.brand.primary};
      }
    }
  }
`;

const classes = new BEMHelper({
  name: 'concept',
  prefix: 'c-',
});

const Notion = ({ id, messages, children, ...rest }) => (
  <span className={NotionCSS} id={id}>
    <button
      type="button"
      aria-label={messages.ariaLabel}
      className={cx('link')}>
      {children}
    </button>
    {createUniversalPortal(
      <NotionDialog {...rest} id={id} messages={messages} />,
      'body',
    )}
  </span>
);

Notion.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string),
  source: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  messages: PropTypes.shape({
    ariaLabel: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
  }),
  license: PropTypes.string,
  children: PropTypes.string,
  linkTo: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};

export default Notion;
