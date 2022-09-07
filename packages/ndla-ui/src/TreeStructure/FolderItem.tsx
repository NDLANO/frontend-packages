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
import { ArrowDropDownRounded } from '@ndla/icons/common';
import { Done } from '@ndla/icons/editor';
import { ButtonV2 as Button, MenuButton } from '@ndla/button';
import { colors, spacing, animations, spacingUnit, misc, fonts } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { CommonFolderItemsProps, FolderType } from './types';
import { arrowNavigation } from './arrowNavigation';

const OpenButton = styled.span<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  color: ${colors.brand.tertiary};
  ${misc.transition.default};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.primary};
  }
  svg {
    width: 24px;
    height: 24px;
    transform: rotate(${({ isOpen }) => (isOpen ? '0' : '-90')}deg);
  }
`;

const StyledName = styled.span`
  grid-column-start: 2;
  text-align: left;
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
  isCreatingFolder?: boolean;
}

const FolderName = styled(Button, { shouldForwardProp })<FolderNameProps>`
  display: grid;
  grid-template-columns: ${spacing.medium} 1fr auto;

  padding-left: ${({ level }) => 0.75 * spacingUnit * level}px;
  gap: ${spacing.xxsmall};
  border: none;
  outline: none;
  background: ${({ selected, isCreatingFolder }) => selected && !isCreatingFolder && colors.brand.lighter};
  color: ${({ isCreatingFolder, selected }) =>
    isCreatingFolder && selected ? colors.brand.primary : colors.text.primary};
  transition: ${animations.durations.superFast};
  line-height: 1;
  word-break: break-word;
  &:hover,
  &:focus {
    box-shadow: none;
    outline: none;
    background: ${({ selected }) => (selected ? colors.brand.light : colors.brand.lightest)};
    color: ${colors.text.primary};
  }
`;

const StyledDone = styled(Done)`
  color: ${colors.support.green};
`;

const FolderNameLink = styled(SafeLink, { shouldForwardProp })<FolderNameProps>`
  display: grid;
  align-items: center;
  grid-template-columns: ${spacing.medium} 1fr auto;
  padding: ${spacing.small} ${spacing.xxsmall};
  margin-left: ${({ level }) => 0.75 * spacingUnit * level}px;
  gap: ${spacing.xxsmall};
  cursor: pointer;

  border: none;
  box-shadow: none;
  color: ${({ selected }) => (selected ? colors.brand.primary : colors.text.primary)};
  font-weight: ${({ selected }) => selected && fonts.weight.semibold};
  font-size: ${fonts.sizes('16px')};
  transition: ${animations.durations.superFast};
  line-height: 1;
  word-break: break-word;
  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: FolderType;
  isCreatingFolder?: boolean;
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
  isCreatingFolder,
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
    if (focusedFolderId === id && !isCreatingFolder) {
      ref.current?.focus();
    }
  }, [focusedFolderId, ref, id, isCreatingFolder]);

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
      variant="ghost"
      shape="sharp"
      fontWeight="normal"
      colorTheme="light"
      ref={ref}
      level={level}
      fullWidth={framed}
      onKeyDown={(e) => arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)}
      noArrow={hideArrow}
      tabIndex={selected || focused ? 0 : -1}
      selected={selected}
      disabled={loading}
      onFocus={() => setFocusedId(id)}
      onClick={handleClickFolder}
      isCreatingFolder={isCreatingFolder}>
      {!hideArrow && (
        <OpenButton
          aria-hidden
          tabIndex={-1}
          isOpen={isOpen}
          onClick={() => {
            ref.current?.focus();
            if (isOpen) {
              onCloseFolder(id);
            } else {
              onOpenFolder(id);
            }
          }}>
          <ArrowDropDownRounded />
        </OpenButton>
      )}
      <StyledName>{name}</StyledName>
      <WrapperForFolderChild>
        {containsResource && <StyledDone title={t('myNdla.alreadyInFolder')} />}
        {actions && (
          <MenuButton
            onClick={(e) => {
              e.stopPropagation();
            }}
            size="xsmall"
            alignRight
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
      tabIndex={selected || focused ? 0 : -1}
      selected={selected}
      onFocus={() => setFocusedId(id)}
      onClick={handleClickFolder}>
      {(!hideArrow || level === 0) && (
        <OpenButton
          aria-hidden
          tabIndex={-1}
          isOpen={isOpen}
          onClick={() => {
            ref.current?.focus();
            if (isOpen) {
              onCloseFolder(id);
            } else {
              onOpenFolder(id);
            }
          }}>
          <ArrowDropDownRounded />
        </OpenButton>
      )}
      <StyledName>{name}</StyledName>
    </FolderNameLink>
  );
};

export default FolderItem;
