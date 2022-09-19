/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { FolderOutlined } from '@ndla/icons/contentType';
import { FileDocumentOutline } from '@ndla/icons/common';
import { fonts, spacing, colors, mq, breakpoints } from '@ndla/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { MenuButton, MenuItemProps } from '@ndla/button';

interface FolderIconWrapperProps {
  type?: LayoutType;
}

const FolderIconWrapper = styled.div<FolderIconWrapperProps>`
  display: flex;
  border-radius: 100%;
  padding: ${spacing.small};
  background-color: ${colors.brand.greyLighter};
  svg {
    width: 18px;
    height: 18px;
  }
  ${(p) =>
    p.type === 'block' &&
    css`
    background-color: transparent;
    ${FolderWrapper}:hover & {
      background-color: ${colors.brand.light};
      transition-duration 0.5s;
    }
  `};
`;

const FolderTitleLink = styled(SafeLink)`
  box-shadow: none;
  color: ${colors.text.primary};
  flex: 1;
`;

const FolderTitle = styled.h2`
  ${fonts.sizes(18)};
  font-weight: ${fonts.weight.normal};
  margin: 0;
  flex: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  // Unfortunate css needed for multi-line text overflow ellipsis.
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const FolderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.neutral7};
  cursor: pointer;
  border-radius: 2px;
  box-shadow: none;
  text-decoration: none;
  color: ${colors.brand.greyDark};
  font-family: ${fonts.sans};
  transition-duration: 0.2s;
  gap: ${spacing.small};
  &:hover {
    box-shadow: 1px 1px 6px 2px rgba(9, 55, 101, 0.08);
    transition-duration: 0.2s;
    ${FolderTitle} {
      color: ${colors.brand.primary};
      text-decoration: underline;
    }
  }
`;

interface Props {
  id: string;
  title: string;
  subFolders?: number;
  subResources?: number;
  description?: string;
  link: string;
  type: LayoutType;
  menuItems?: MenuItemProps[];
}

interface IconCountProps {
  type: 'resource' | 'folder';
  count?: number;
  layoutType: LayoutType;
}

interface IconCountWrapperProps {
  type: LayoutType;
}

const IconCountWrapper = styled.div<IconCountWrapperProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  ${fonts.sizes(16)};
  ${(p) =>
    p.type === 'block' &&
    css`
      opacity: 0;
      ${FolderWrapper}:hover & {
        opacity: 1;
      }
    `};

  ${mq.range({ until: breakpoints.tabletWide })} {
    display: none;
  }
`;

const IconCount = ({ type, count, layoutType }: IconCountProps) => {
  const Icon = type === 'resource' ? FileDocumentOutline : FolderOutlined;
  const { t } = useTranslation();
  if (!count) return null;

  return (
    <IconCountWrapper type={layoutType}>
      <Icon aria-label={t(`myNdla.${type}s`)} />
      <span>{layoutType === 'block' ? count : t(`myNdla.${type}s`, { count })}</span>
    </IconCountWrapper>
  );
};

type LayoutType = 'list' | 'block';

const Folder = ({ id, link, title, subFolders, subResources, type = 'list', menuItems }: Props) => {
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const onClick = () => {
    linkRef?.current?.click();
  };

  return (
    <FolderWrapper onClick={onClick} id={id}>
      <FolderIconWrapper type={type}>
        <FolderOutlined aria-label={t('myNdla.folder.folder')} />
      </FolderIconWrapper>
      <FolderTitleLink to={link} ref={linkRef}>
        <FolderTitle>{title}</FolderTitle>
      </FolderTitleLink>
      <IconCount layoutType={type} type={'folder'} count={subFolders} />
      <IconCount layoutType={type} type={'resource'} count={subResources} />
      {menuItems && menuItems.length > 0 && <MenuButton alignRight size="small" menuItems={menuItems} />}
    </FolderWrapper>
  );
};

export default Folder;
