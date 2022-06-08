/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { FolderOutlined } from '@ndla/icons/contentType';
import { FileDocumentOutline } from '@ndla/icons/common';
import { fonts, spacing, colors, mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';
import { MoreButton } from '@ndla/button';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';

const FolderElementWrapper = styled(SafeLink)<{ layout: LayoutType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.light};
  border-radius: 2px;
  height: 64px;
  margin-bottom: ${spacing.xsmall};
  font-family: ${fonts.sans};
  transition-duration: 0.2s;
  gap: 5px;
  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
  }
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
`;
const FoldersWrapper = styled.div<{ layout?: LayoutType }>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  ${(props) =>
    props.layout === 'block' &&
    css`
      opacity: 0;
      margin-right: 5px;
      p {
        margin-right: 0px;
      }
    `}
  ${FolderElementWrapper}:hover & {
    ${(props) =>
      props.layout === 'block' &&
      css`
        opacity: 1;
      `}
  }
`;

const FolderIconCircle = styled.div<{ layout?: LayoutType }>`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  background-color: ${colors.brand.greyLighter};
  svg {
    width: 18px;
    height: 18px;
  }
  ${(props) =>
    props.layout === 'block' &&
    css`
      background-color: transparent;
    `}

  ${FolderElementWrapper}:hover & {
    ${(props) =>
      props.layout === 'block' &&
      css`
        background-color: ${colors.brand.light};
        transition-duration: 0.5s;
      `}
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    background-color: transparent;
  }
`;

const FolderTitle = styled.h2<{ layout: LayoutType }>`
  ${fonts.sizes('18')};
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  ${FolderElementWrapper}:hover & {
    transition-duration: 0.5s;
    color: ${colors.brand.primary};
    text-decoration: underline;
  }
`;

const FolderLeftSide = styled.div<{ layout?: LayoutType }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.small};
`;
const FolderRightSide = styled.div<{ layout?: LayoutType }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${spacing.normal};
  :last-child {
    gap: ${spacing.xsmall};
  }
  ${(props) =>
    props.layout === 'block' &&
    css`
      gap: ${spacing.xxsmall};
    `}
`;

const FoldersText = styled.p<{ layout: LayoutType }>`
  margin: 0;
  ${fonts.sizes(16)};
  display: flex;
  align-items: center;
  gap: ${spacing.xsmall};

  ${mq.range({ until: breakpoints.tabletWide })} {
    span {
      display: none;
    }
  }

  span {
    ${(props) =>
      props.layout === 'block' &&
      css`
        display: none;
      `}
  }
`;

interface FolderElementProps {
  title: string;
  subFolders?: number;
  subResources?: number;
  description?: string;
  children?: ReactElement;
  link: string;
  layout: LayoutType;
}

export type LayoutType = 'list' | 'listLarger' | 'block';

const FolderElement = ({ link, title, subFolders, subResources, children, layout }: FolderElementProps) => {
  const { t } = useTranslation();
  return (
    <FolderElementWrapper to={link} layout={layout}>
      <FolderLeftSide layout={layout}>
        <FolderIconCircle layout={layout}>
          <FolderOutlined aria-label={t('myNdla.folders')} />
        </FolderIconCircle>
        <FolderTitle layout={layout}>{title}</FolderTitle>
        {children}
      </FolderLeftSide>
      <FolderRightSide layout={layout}>
        <FoldersWrapper layout={layout}>
          <FolderOutlined aria-label={t('myNdla.folders')} />
          <FoldersText layout={layout}>
            {subFolders}
            <span>{t('myNdla.folders')}</span>
          </FoldersText>
        </FoldersWrapper>
        <FoldersWrapper layout={layout}>
          <FileDocumentOutline aria-label={t('myNdla.resources')} />
          <FoldersText layout={layout}>
            {subResources}
            <span>{t('myNdla.resources')}</span>
          </FoldersText>
        </FoldersWrapper>
        <MoreButton />
      </FolderRightSide>
    </FolderElementWrapper>
  );
};

export default FolderElement;
