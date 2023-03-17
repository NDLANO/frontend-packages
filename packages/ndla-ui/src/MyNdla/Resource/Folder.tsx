/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';
import { FolderOutlined, FolderShared } from '@ndla/icons/contentType';
import { FileDocumentOutline, Share } from '@ndla/icons/common';
import { fonts, spacing, colors, mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { MenuButton, MenuItemProps } from '@ndla/button';
import { ResourceTitleLink } from '../../Resource/resourceComponents';

type LayoutType = 'list' | 'listLarger' | 'block';
interface LayoutProps {
  type: LayoutType;
}

const FolderWrapper = styled.div<LayoutProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  ${mq.range({ until: breakpoints.mobileWide })} {
    ${({ type }) =>
      type !== 'list' &&
      css`
        flex-direction: column;
        align-items: unset;
      `}
  }

  ${({ type }) =>
    type === 'block' &&
    css`
      flex-direction: column;
      align-items: unset;
    `}

  border: 1px solid ${colors.brand.neutral7};
  cursor: pointer;
  border-radius: 2px;
  box-shadow: none;
  text-decoration: none;
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
  }
`;

const TitleWrapper = styled.div<LayoutProps>`
  display: flex;
  margin: ${spacing.nsmall};
  margin-bottom: ${({ type }) => type === 'block' && 0};
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  border-radius: 100%;
  color: ${colors.brand.primary};
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FolderTitle = styled.h2`
  ${fonts.sizes('16px', '20px')};
  font-weight: ${fonts.weight.semibold};
  margin: 0;
  flex: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;

  ${FolderWrapper}:hover & {
    color: ${colors.brand.primary};
    text-decoration: underline;
  }
`;

const MenuWrapper = styled.div`
  overflow: hidden;
  display: flex;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CountContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  min-height: 44px;
  gap: ${spacing.small};
  margin: 0 ${spacing.small} 0 ${spacing.nsmall};
`;

const IconTextWrapper = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  color: ${colors.brand.grey};
  white-space: nowrap;
  svg {
    width: 13px;
    height: 13px;
  }
  ${fonts.sizes(16)};
  ${mq.range({ until: breakpoints.mobileWide })} {
    ${({ type }) =>
      type === 'list' &&
      css`
        display: none;
      `}
  }
`;

interface IconCountProps {
  type: 'resource' | 'folder';
  count?: number;
  layoutType: LayoutType;
}

const Count = ({ type, count, layoutType }: IconCountProps) => {
  const Icon = type === 'resource' ? FileDocumentOutline : FolderOutlined;
  const { t } = useTranslation();
  if (!count) return null;

  return (
    <IconTextWrapper type={layoutType}>
      <Icon />
      <span>{t(`myNdla.${type}s`, { count })}</span>
    </IconTextWrapper>
  );
};

interface Props {
  id: string;
  title: string;
  subFolders?: number;
  subResources?: number;
  description?: string;
  link: string;
  type: LayoutType;
  menuItems?: MenuItemProps[];
  isShared?: boolean;
}

const Folder = ({ id, link, title, subFolders, subResources, type = 'list', menuItems, isShared }: Props) => {
  const { t } = useTranslation();
  const Icon = isShared ? FolderShared : FolderOutlined;

  return (
    <FolderWrapper type={type} id={id}>
      <TitleWrapper type={type}>
        <IconWrapper>
          <Icon aria-label={t('myNdla.folder.folder')} />
        </IconWrapper>
        <ResourceTitleLink to={link}>
          <FolderTitle title={title}>{title}</FolderTitle>
        </ResourceTitleLink>
      </TitleWrapper>
      <MenuWrapper>
        {isShared && (
          <IconTextWrapper type={type}>
            <Share />
            <span>{t('myNdla.folder.sharing.shared')}</span>
          </IconTextWrapper>
        )}
        <CountContainer>
          <Count layoutType={type} type={'folder'} count={subFolders} />
          <Count layoutType={type} type={'resource'} count={subResources} />
        </CountContainer>
        {menuItems && menuItems.length > 0 && <MenuButton align="end" size="small" menuItems={menuItems} />}
      </MenuWrapper>
    </FolderWrapper>
  );
};

export default Folder;
