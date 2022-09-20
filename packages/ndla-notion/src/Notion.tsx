/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ShortText } from '@ndla/icons/common';
import { InterpolationWithTheme } from '@emotion/core';
import { createUniversalPortal } from '@ndla/util';
import { colors } from '@ndla/core';
import NotionDialog from './NotionDialog';

const BaselineIcon = styled(ShortText)`
  content: '';
  display: inline-block;
  position: absolute;
  margin: calc(0.5em + 1px) auto 0;
  left: 0;
  color: ${colors.brand.secondary};
  transition: transform 0.1s ease;
  height: 1.25em;
  width: 1.1em;
`;
const NotionCSS = styled.span`
  display: inline;
`;
const StyledButton = styled.button`
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
  &:focus,
  &:hover {
    color: ${colors.brand.primary};
    outline: none;
    ${BaselineIcon} {
      color: ${colors.brand.primary};
    }
    &:after {
      transform: scale(1.4) translateY(1px);
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
  customCSS?: InterpolationWithTheme<any>;
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
  <NotionCSS css={NotionCSS} id={id} data-notion>
    <StyledButton type="button" aria-label={ariaLabel} data-notion-link>
      {children}
      {!hideBaselineIcon && <BaselineIcon />}
    </StyledButton>

    {createUniversalPortal(
      <NotionDialog id={id} title={title} subTitle={subTitle} customCSS={customCSS} headerContent={headerContent}>
        {content}
      </NotionDialog>,
      'body',
    )}
  </NotionCSS>
);
export default Notion;
