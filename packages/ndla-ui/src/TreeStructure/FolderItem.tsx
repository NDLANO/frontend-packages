/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@ndla/icons/common';
import { Done } from '@ndla/icons/editor';
import { MenuButton } from '@ndla/button';
import { colors, spacing, animations, spacingUnit, misc, fonts } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { CommonFolderItemsProps, FolderType } from './types';
import { arrowNavigation } from './arrowNavigation';

const OpenButton = styled.span<{ isOpen: boolean }>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => (isOpen ? '0' : '-90')}deg);
  display: flex;
  padding: 0 ${spacing.xsmall};
  color: ${colors.brand.tertiary};
  ${misc.transition.default};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.primary};
  }
  svg {
    width: 18px;
    height: 18px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(3px)' : 'translateY(3px)')};
  }
`;

const WrapperForFolderChild = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
  margin-left: auto;
`;

const shouldForwardProp = (name: string) => !['selected', 'noArrow', 'fullWidth', 'level'].includes(name);

interface FolderNameProps {
  selected?: boolean;
  noArrow?: boolean;
  fullWidth?: boolean;
  level: number;
}

const FolderName = styled('button', { shouldForwardProp })<FolderNameProps>`
  flex-grow: ${({ fullWidth }) => fullWidth && 1};
  display: flex;
  align-items: center;

  cursor: pointer;
  padding: ${spacing.xsmall};
  padding-left: ${({ level, noArrow }) => 0.75 * spacingUnit * level + (noArrow && level > 1 ? spacingUnit : 0)}px;
  margin: 0;
  outline-offset: -2px;
  outline-color: ${colors.brand.primary};
  gap: ${spacing.xxsmall};
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: ${({ selected }) => (selected ? colors.brand.lighter : 'transparent')};
  color: ${colors.text.primary};
  transition: ${animations.durations.superFast};
  text-align: left;
  ${fonts.sizes(16)};
  line-height: 1;
  word-break: break-word;
  &:hover,
  &:focus {
    background: ${({ selected }) => (selected ? colors.brand.light : colors.brand.lightest)};
    color: ${colors.brand.primary};
    + ${WrapperForFolderChild} {
      opacity: 1;
    }
  }
`;

const StyledDone = styled(Done)`
  color: ${colors.support.green};
`;

const FolderNameLink = FolderName.withComponent(SafeLink);

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: FolderType;
}

const FolderItem = ({
  focusedFolderId,
  menuItems,
  folder,
  isOpen,
  level,
  loading,
  selectedFolder,
  onCloseFolder,
  onOpenFolder,
  onSelectFolder,
  openOnFolderClick,
  setFocusedId,
  setSelectedFolder,
  targetResource,
  visibleFolders,
  framed,
  maxLevel,
}: Props) => {
  const { t } = useTranslation();
  const { id, name } = folder;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const selected = selectedFolder && selectedFolder.id === id;
  const focused = focusedFolderId === id;

  const handleClickFolder = () => {
    if (openOnFolderClick) {
      if (selected) {
        if (isOpen) {
          onCloseFolder(id);
        } else {
          onOpenFolder(id);
        }
      }
    }
    if (!selected) {
      setSelectedFolder(folder);
      setFocusedId(id);
    }
    onSelectFolder?.(id);
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

  const linkPath = `/minndla${level > 0 ? '/folders' : ''}/${id}`;

  const containsResource =
    targetResource && folder.resources.some((resource) => resource.resourceId === targetResource.resourceId);

  const emptyFolder = folder.subfolders.length === 0;

  const isMaxDepth = level > maxLevel;

  const hideArrow = isMaxDepth || emptyFolder;

  return onSelectFolder ? (
    <FolderName
      ref={ref}
      level={level}
      fullWidth={framed}
      onKeyDown={(e) => arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)}
      noArrow={hideArrow}
      tabIndex={selected || focused ? 0 : -1}
      selected={selected}
      disabled={loading}
      onFocus={() => setFocusedId(id)}
      onClick={handleClickFolder}>
      {!hideArrow && (
        <OpenButton tabIndex={-1} isOpen={isOpen} onClick={() => (isOpen ? onCloseFolder(id) : onOpenFolder(id))}>
          <ArrowDropDown />
        </OpenButton>
      )}
      {name}
      <WrapperForFolderChild>
        {containsResource && <StyledDone title={t('myNdla.alreadyInFolder')} />}
        {actions && (
          <MenuButton
            onClick={(e) => e.stopPropagation()}
            size="xsmall"
            menuItems={actions}
            tabIndex={selected || id === focusedFolderId ? 0 : -1}
          />
        )}
      </WrapperForFolderChild>
    </FolderName>
  ) : (
    <FolderNameLink
      ref={ref}
      level={level}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
        arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)
      }
      noArrow={!isMaxDepth}
      to={loading ? '' : linkPath}
      tabIndex={selected || focused || level === 0 ? 0 : -1}
      selected={selected}
      onFocus={() => setFocusedId(id)}
      onClick={handleClickFolder}>
      {(!hideArrow || level === 0) && (
        <OpenButton tabIndex={-1} isOpen={isOpen} onClick={() => (isOpen ? onCloseFolder(id) : onOpenFolder(id))}>
          <ArrowDropDown />
        </OpenButton>
      )}
      {name}
    </FolderNameLink>
  );
};

export default FolderItem;
