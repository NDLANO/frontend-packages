/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { Folder } from '@ndla/icons/editor';
import { HorizontalMenu } from '@ndla/icons/contentType';
import { FileDocumentOutline } from '@ndla/icons/common';
import { fonts, spacing, colors } from '@ndla/core';
import { mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';

const FolderTitle = styled.h2`
  position: relative;
  top: 25%;
  height: 100%;
  font-size: ${fonts.sizes('18')};
  font-weight: 400;
  margin: 0;
  margin-right: ${spacing.medium};
  margin-left: ${spacing.small};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  ${mq.range({ from: breakpoints.tabletWide })} {
    margin-left: ${spacing.xxsmall};
  }
`;
const FoldersWrapper = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
`;
const FolderIconCircle = styled.div<{ layout: LayoutProps }>`
  border-radius: 25px;
  background-color: ${colors.brand.greyLighter};
  ${(props) =>
    props.layout === 'block' &&
    css`
      background-color: transparent;
    `}
  ${mq.range({ until: breakpoints.tabletWide })} {
    background-color: transparent;
  }
`;
const FolderElementWrapper = styled(SafeLink)<{ layout: LayoutProps }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid rgba(209, 214, 219, 1);
  border-radius: 2px;
  height: 64px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${fonts.sans};
  transition-duration: 0.5s;
  &visited {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.5s;
    ${FolderTitle} {
      transition-duration: 0.5s;
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
    ${FolderIconCircle} {
      background-color: ${colors.brand.light};
      transition-duration: 0.5s;
    }
    ${FoldersWrapper} {
      ${(props) =>
        props.layout === 'block' &&
        css`
          opacity: 1;
        `}
    }
  }
  &active {
  }
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
  ${FoldersWrapper} {
    ${(props) =>
      props.layout === 'block' &&
      css`
        opacity: 0;
        margin-right: 5px;
        p {
          margin-right: 0px;
        }
      `}
  }
`;

const FolderIconLeft = styled(Folder)`
  height: 100%;
  margin-right: ${spacing.small};
  margin-left: ${spacing.small};
  stroke: rgba(68, 68, 68, 1);
  stroke-width: 1.5;
  fill: transparent;
`;
const FolderLeftSide = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 60%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 70%;
  }
  ${(props) =>
    props.layout === 'block' &&
    css`
      width: 70%;
    `}
`;
const FolderRightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
  ${mq.range({ until: breakpoints.tabletWide })} {
    width: 30%;
  }
`;

const FolderIconRight = styled(Folder)`
  height: 100%;
  stroke: rgba(68, 68, 68, 1);
  stroke-width: 1.5;
  fill: white;
  margin-right: ${spacing.xsmall};
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const FileIcon = styled(FileDocumentOutline)`
  height: 100%;
  margin-right: ${spacing.xsmall};
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const MoreIcon = styled(HorizontalMenu)<{ layout: LayoutProps }>`
  height: 100%;
  margin-right: ${spacing.small};
  fill: ${colors.brand.grey};
  transform: scale(1.5);
  ${(props) =>
    props.layout === 'block' &&
    css`
      margin-left: 10px;
    `}
`;

const FoldersText = styled.p<{ layout: LayoutProps }>`
  margin: 0;
  height: 100%;
  font-size: ${fonts.sizes(16)};
  display: flex;
  align-items: center;
  margin-right: ${spacing.medium};
  span {
    margin-left: ${spacing.xsmall};
  }

  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
  span {
    ${(props) =>
      props.layout === 'block' &&
      css`
        display: none;
      `}
  }
`;

type FolderElementProps = {
  title: string;
  subFolders?: number;
  subResources?: number;
  description?: string;
  children?: ReactElement;
  link: string;
  layout: LayoutProps;
};

type LayoutProps = 'list' | 'listLarger' | 'block';

const FolderElement = ({ link, title, subFolders, subResources, children, layout }: FolderElementProps) => {
  const { t } = useTranslation();
  return (
    <FolderElementWrapper to={link} layout={layout}>
      <FolderLeftSide layout={layout}>
        <FolderIconCircle layout={layout}>
          <FolderIconLeft aria-label={t('myNdla.folders')} />
        </FolderIconCircle>
        <FolderTitle>{title}</FolderTitle>
        {children}
      </FolderLeftSide>
      <FolderRightSide>
        <FoldersWrapper layout={layout}>
          <FolderIconRight aria-label={t('myNdla.folders')} />
          <FoldersText layout={layout}>
            {subFolders} <span>{t('myNdla.folders')}</span>
          </FoldersText>
        </FoldersWrapper>
        <FoldersWrapper layout={layout}>
          <FileIcon aria-label={t('myNdla.resources')} />
          <FoldersText layout={layout}>
            {subResources}
            <span>{t('myNdla.resources')}</span>
          </FoldersText>
        </FoldersWrapper>

        <MoreIcon layout={layout} aria-label={t('myNdla.more')} />
      </FolderRightSide>
    </FolderElementWrapper>
  );
};

export default FolderElement;
