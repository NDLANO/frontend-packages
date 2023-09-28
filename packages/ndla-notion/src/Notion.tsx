/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Interpolation } from '@emotion/react';
import { createUniversalPortal } from '@ndla/util';
import { colors } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import Tooltip from '@ndla/tooltip';
import NotionDialog from './NotionDialog';

const BaselineIcon = styled.span`
  display: block;
  border-bottom: 5px double currentColor;
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
  position: relative;
  text-align: left;
  display: inline;
  color: ${colors.notion.dark};
  cursor: pointer;
  &:focus,
  &:hover {
    background-color: ${colors.notion.dark};
    color: ${colors.white};
    outline: none;
    ${BaselineIcon} {
      border-color: transparent;
    }
  }

  &:active {
    color: ${colors.notion.dark};
    background-color: ${colors.notion.light};
    ${BaselineIcon} {
      border-color: currentColor;
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
  customCSS?: Interpolation<any>;
  hideBaselineIcon?: boolean;
}
const Notion = ({ id, content, children, title, subTitle, customCSS, headerContent, hideBaselineIcon }: Props) => {
  const { t } = useTranslation();
  return (
    <span id={id} data-notion>
      <StyledButton type="button" aria-label={t('concept.showDescription', { title: title })} data-notion-link>
        <Tooltip tooltip={t('searchPage.resultType.concept')}>
          <div>
            {children}
            {!hideBaselineIcon && <BaselineIcon />}
          </div>
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
