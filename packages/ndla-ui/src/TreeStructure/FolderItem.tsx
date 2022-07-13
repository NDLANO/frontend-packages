/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@ndla/icons/common';
import { MenuButton } from '@ndla/button';
import { FolderOutlined } from '@ndla/icons/contentType';
import { colors, spacing, misc, animations } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { CommonFolderItemsProps, FolderType } from './types';
import { arrowNavigation } from './arrowNavigation';

const OpenButton = styled.button<{ isOpen: boolean }>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => (isOpen ? '0' : '-90')}deg);
  padding: ${spacing.xsmall};
  display: flex;
  margin: 0;
  color: ${colors.brand.secondary};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.primary};
  }
  svg {
    width: 16px;
    height: 16px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(3px)' : 'translateY(3px)')};
  }
`;

const FolderItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperForFolderChild = styled.div<{ selected?: boolean }>`
  position: absolute;
  right: ${spacing.xsmall};
  opacity: ${({ selected }) => (selected ? 1 : 0.25)};
  &:hover,
  &:focus,
  &:focus-within {
    opacity: 1;
  }
`;

const shouldForwardProp = (name: string) => !['selected', 'noArrow'].includes(name);

interface FolderNameProps {
  selected?: boolean;
  noArrow?: boolean;
}

const FolderName = styled('button', { shouldForwardProp })<FolderNameProps>`
  line-height: 1;
  background: ${({ selected }) => (selected ? colors.brand.lighter : 'transparent')};
  color: ${colors.text.primary};
  &:hover,
  &:focus {
    background: ${({ selected }) => (selected ? colors.brand.light : colors.brand.lightest)};
    color: ${colors.brand.primary};
    + ${WrapperForFolderChild} {
      opacity: 1;
    }
  }
  transition: ${animations.durations.superFast};
  border: 0;
  border-radius: ${misc.borderRadius};
  display: flex;
  gap: ${spacing.xxsmall};
  align-items: center;
  cursor: pointer;
  padding: ${spacing.xsmall};
  margin: 0;
  margin-left: ${({ noArrow }) => (noArrow ? `29px` : `0px`)};
  flex-grow: 1;
  box-shadow: none;
  text-align: left;
`;

const FolderNameLink = FolderName.withComponent(SafeLink);

interface Props extends CommonFolderItemsProps {
  hideArrow?: boolean;
  isOpen: boolean;
  folder: FolderType;
  noPaddingWhenArrowIsHidden?: boolean;
}

const FolderItem = ({
  focusedFolderId,
  menuItems,
  hideArrow,
  folder,
  isOpen,
  level,
  loading,
  selectedFolder,
  noPaddingWhenArrowIsHidden,
  onCloseFolder,
  onOpenFolder,
  onSelectFolder,
  openOnFolderClick,
  setFocusedId,
  setSelectedFolder,
  visibleFolders,
}: Props) => {
  const { id, icon, name } = folder;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const selected = selectedFolder && selectedFolder.id === id;
  const focused = focusedFolderId === id;

  const handleClickFolder = () => {
    setSelectedFolder(folder);
    setFocusedId(id);
    onSelectFolder?.(id);
    if (openOnFolderClick) {
      if (isOpen) {
        onCloseFolder(id);
      } else {
        onOpenFolder(id);
      }
    }
  };

  useEffect(() => {
    if (focusedFolderId === id) {
      ref.current?.focus();
    }
  }, [focusedFolderId, ref, id]);

  const actions = menuItems?.map((item) => {
    const { onClick } = item;
    return {
      ...item,
      onClick: (e?: MouseEvent<HTMLDivElement>) => onClick(e, folder),
    };
  });

  const linkPath = `/minndla${level > 1 ? '/folders' : ''}/${id}`;

  return (
    <FolderItemWrapper>
      {!hideArrow && (
        <OpenButton
          tabIndex={-1}
          isOpen={isOpen}
          disabled={loading}
          onClick={() => (isOpen ? onCloseFolder(id) : onOpenFolder(id))}>
          <ArrowDropDown />
        </OpenButton>
      )}
      {onSelectFolder ? (
        <>
          <FolderName
            ref={ref}
            onKeyDown={(e) => arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)}
            noArrow={hideArrow && !noPaddingWhenArrowIsHidden}
            tabIndex={selected || focused ? 0 : -1}
            selected={selected}
            disabled={loading}
            onFocus={() => setFocusedId(id)}
            onClick={handleClickFolder}>
            {icon || <FolderOutlined />}
            {name}
          </FolderName>
          {actions && (
            <WrapperForFolderChild selected={selected}>
              <MenuButton size="xsmall" menuItems={actions} tabIndex={selected || id === focusedFolderId ? 0 : -1} />
            </WrapperForFolderChild>
          )}
        </>
      ) : (
        <FolderNameLink
          ref={ref}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
            arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)
          }
          noArrow={hideArrow}
          to={loading ? '' : linkPath}
          tabIndex={selected || focused || level === 1 ? 0 : -1}
          selected={selected}
          onFocus={() => setFocusedId(id)}
          onClick={handleClickFolder}>
          {icon || <FolderOutlined />}
          {name}
        </FolderNameLink>
      )}
    </FolderItemWrapper>
  );
};

export default FolderItem;
