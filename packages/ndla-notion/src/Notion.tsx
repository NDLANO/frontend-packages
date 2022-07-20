/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled, { Interpolation } from '@emotion/styled';
import { ShortText } from '@ndla/icons/common';
import { createUniversalPortal } from '@ndla/util';
import { colors } from '@ndla/core';
import NotionDialog from './NotionDialog';

const BaselineIcon = styled(ShortText)`
  content: '';
  display: inline-block;
  position: absolute;
  margin: calc(0.5em + 4px) auto 0;
  left: 0;
  color: rgba(165, 188, 211, 1);
  transition: transform 0.1s ease;
`;
const NotionSpan = styled.span`
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
    position: relative;

    cursor: pointer;

    &:focus {
      border-color: ${colors.brand.primary};
      outline: none;
      &:after {
        transform: scale(1.4) translateY(1px);
      }
    }
  }
`;

interface Props {
  id: string;
  title: string;
  ariaLabel: string;
  subTitle?: string;
  children?: ReactNode;
  content?: ReactNode;
  headerContent?: ReactNode;
  customCSS?: Interpolation;
  hideBaselineIcon?: boolean;
}
const Notion = ({
  id,
  ariaLabel,
  content,
  children,
  title,
  subTitle,
  customCSS,
  headerContent,
  hideBaselineIcon,
}: Props) => (
  <NotionSpan id={id} data-notion>
    <button type="button" aria-label={ariaLabel} className={'link'} data-notion-link>
      {children}
      {!hideBaselineIcon && <BaselineIcon />}
    </button>

    {createUniversalPortal(
      <NotionDialog id={id} title={title} subTitle={subTitle} customCSS={customCSS} headerContent={headerContent}>
        {content}
      </NotionDialog>,
      'body',
    )}
  </NotionSpan>
);
export default Notion;
