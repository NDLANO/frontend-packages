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

type LayoutType = 'list' | 'listLarger' | 'block';
interface LayoutProps {
  type: LayoutType;
}

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
  }
`;

const TitleWrapper = styled.div`
  display: flex;
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

const StyledLink = styled(SafeLink)`
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

  ${FolderWrapper}:hover & {
    color: ${colors.brand.primary};
    text-decoration: underline;
  }
`;

interface MenuWrapperProps {
  hasMenuButton: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  justify-content: space-between;
  margin: -${spacing.nsmall} -${(props) => (props.hasMenuButton ? spacing.nsmall : 0)} -${spacing.nsmall} 0;
`;

const CountContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  gap: ${spacing.small};
`;

const IconCountWrapper = styled.div<LayoutProps>`
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
    <IconCountWrapper type={layoutType}>
      <Icon aria-label={t(`myNdla.${type}s`)} />
      <span>{t(`myNdla.${type}s`, { count })}</span>
    </IconCountWrapper>
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
}

const Folder = ({ id, link, title, subFolders, subResources, type = 'list', menuItems }: Props) => {
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const onClick = () => {
    linkRef?.current?.click();
  };

  return (
    <FolderWrapper type={type} onClick={onClick} id={id}>
      <TitleWrapper>
        <IconWrapper>
          <FolderOutlined aria-label={t('myNdla.folder.folder')} />
        </IconWrapper>
        <StyledLink to={link} ref={linkRef}>
          <FolderTitle title={title}>{title}</FolderTitle>
        </StyledLink>
      </TitleWrapper>
      <MenuWrapper hasMenuButton={!!menuItems?.length}>
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
