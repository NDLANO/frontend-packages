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
import { useTranslation } from 'react-i18next';
import Tooltip from '@ndla/tooltip';
import NotionDialog from './NotionDialog';

const BaselineIcon = styled(ShortText)`
  position: absolute;
  margin: calc(0.5em + 1px) auto 0;
  left: -2px;
  color: ${colors.brand.secondary};
  height: 1.1em;
  width: 1.1em;
  transition-duration: 0.5s;
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
      transform: scale(1.2, 1);
      transform-origin: top left;
    }
  }
`;

interface Props {
  id: string;
  title: string;
  subTitle?: string;
  children?: ReactNode;
  content?: ReactNode;
  headerContent?: ReactNode;
  customCSS?: InterpolationWithTheme<any>;
  hideBaselineIcon?: boolean;
}
const Notion = ({ id, content, children, title, subTitle, customCSS, headerContent, hideBaselineIcon }: Props) => {
  const { t } = useTranslation();
  return (
    <span id={id} data-notion>
      <StyledButton type="button" aria-label={t('concept.showDescription', { title: title })} data-notion-link>
        <Tooltip tooltip={t('searchPage.resultType.showNotion')}>
          {children}
          {!hideBaselineIcon && <BaselineIcon />}
        </Tooltip>
      </StyledButton>
      {createUniversalPortal(
        <NotionDialog id={id} title={title} subTitle={subTitle} customCSS={customCSS} headerContent={headerContent}>
          {content}
        </NotionDialog>,
        'body',
      )}
    </span>
  );
};
export default Notion;
