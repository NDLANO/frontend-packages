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
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import SafeLink from '@ndla/safelink';
import { MenuButton, MenuItemProps } from '@ndla/button';

interface LayoutProps {
  type: LayoutType;
}

const FolderIconWrapper = styled.div<LayoutProps>`
  display: flex;
  border-radius: 100%;
  color: ${colors.brand.primary};
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FolderTitleLink = styled(SafeLink)`
  box-shadow: none;
  color: ${colors.brand.primary};
  flex: 1;
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
`;

const FolderWrapper = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.nsmall};
  gap: ${spacing.small};

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

const IconCountWrapper = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${colors.brand.grey};
  white-space: nowrap;
  ${fonts.sizes(16)};
  ${mq.range({ until: breakpoints.mobileWide })} {
    ${({ type }) =>
      type === 'list' &&
      css`
        display: none;
      `}
  }
`;

const IconCount = ({ type, count, layoutType }: IconCountProps) => {
  const Icon = type === 'resource' ? FileDocumentOutline : FolderOutlined;
  const { t } = useTranslation();
  if (!count) return null;

  return (
    <IconCountWrapper type={layoutType}>
      <Icon aria-label={t(`myNdla.${type}s`)} />
      <span>{t(`myNdla.${type}s`, { count })}</span>
    </IconCountWrapper>
  );
};

type LayoutType = 'list' | 'listLarger' | 'block';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  justify-content: space-between;
`;

const IconAndMenuWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  justify-content: space-between;
  margin: -${spacing.nsmall};
  margin-left: 0;
`;

const ResourceCountContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: ${spacing.small};
`;

const Folder = ({ id, link, title, subFolders, subResources, type = 'list', menuItems }: Props) => {
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const onClick = () => {
    linkRef?.current?.click();
  };

  return (
    <FolderWrapper type={type} onClick={onClick} id={id}>
      <Row>
        <FolderIconWrapper type={type}>
          <FolderOutlined aria-label={t('myNdla.folder.folder')} />
        </FolderIconWrapper>
        <FolderTitleLink to={link} ref={linkRef}>
          <FolderTitle>{title}</FolderTitle>
        </FolderTitleLink>
      </Row>
      <IconAndMenuWrapper>
        <ResourceCountContainer>
          <IconCount layoutType={type} type={'folder'} count={subFolders} />
          <IconCount layoutType={type} type={'resource'} count={subResources} />
        </ResourceCountContainer>
        {menuItems && menuItems.length > 0 && <MenuButton alignRight size="small" menuItems={menuItems} />}
      </IconAndMenuWrapper>
    </FolderWrapper>
  );
};

export default Folder;
