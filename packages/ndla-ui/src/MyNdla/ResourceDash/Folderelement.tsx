/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { HorizontalMenu, FolderOutlined } from '@ndla/icons/contentType';
import { FileDocumentOutline } from '@ndla/icons/common';
import { fonts, spacing, colors } from '@ndla/core';
import { mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { IconButton } from '@ndla/button';

const FolderTitle = styled.h2`
  ${fonts.sizes('18')};
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const FoldersWrapper = styled.div<{ layout: LayoutProps }>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const FolderIconCircle = styled.div<{ layout: LayoutProps }>`
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
  ${mq.range({ until: breakpoints.tabletWide })} {
    background-color: transparent;
  }
`;
const FolderElementWrapper = styled(SafeLink)<{ layout: LayoutProps }>`
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
    box-shadow: 1px 1px 6px 2px ${colors.brand.neutral7};
    transition-duration: 0.2s;
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

const FolderLeftSide = styled.div<{ layout: LayoutProps }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const FolderRightSide = styled.div<{ layout: LayoutProps }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  :last-child {
    gap: 10px;
  }
  ${(props) =>
    props.layout === 'block' &&
    css`
      gap: 5px;
    `}
`;

const MoreIcon = styled(IconButton)<{ layout: LayoutProps }>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  border: none;

  &:hover,
  :active,
  :focus {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  svg {
    fill: ${colors.brand.light};
    &:hover {
      fill: ${colors.brand.primary};
    }
    ${(props) =>
      props.layout === 'block' &&
      css`
        padding: 0;
      `}
  }
`;

const FoldersText = styled.p<{ layout: LayoutProps }>`
  margin: 0;
  ${fonts.sizes(16)};
  display: flex;
  align-items: center;
  gap: 5px;

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
          <FolderOutlined aria-label={t('myNdla.folders')} />
        </FolderIconCircle>
        <FolderTitle>{title}</FolderTitle>
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

        <MoreIcon layout={layout} aria-label={t('myNdla.more')} size="xsmall">
          <HorizontalMenu />
        </MoreIcon>
      </FolderRightSide>
    </FolderElementWrapper>
  );
};

export default FolderElement;
