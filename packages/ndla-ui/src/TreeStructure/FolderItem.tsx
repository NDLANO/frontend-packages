/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { ArrowDropDownRounded } from '@ndla/icons/common';
import { FolderOutlined, FolderShared } from '@ndla/icons/contentType';
import { Done } from '@ndla/icons/editor';
import { ButtonV2 as Button } from '@ndla/button';
import { colors, spacing, animations, spacingUnit, misc, fonts } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { IFolder } from '@ndla/types-backend/learningpath-api';
import { CommonFolderItemsProps } from './types';
import { arrowNavigation } from './arrowNavigation';
import { treestructureId } from './helperFunctions';

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  grid-column-start: 2;
  text-align: left;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const FolderIconWrapper = styled.div`
  svg {
    height: 24px;
    width: 24px;
  }
`;

const shouldForwardProp = (name: string) => !['selected', 'level', 'focused', 'isCreatingFolder'].includes(name);

interface FolderNameProps {
  selected?: boolean;
  level: number;
  isCreatingFolder?: boolean;
  focused?: boolean;
}

const FolderName = styled(Button, { shouldForwardProp })<FolderNameProps>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-left: ${({ level }) => 0.75 * spacingUnit * level}px;
  gap: ${spacing.xxsmall};
  border: none;
  outline: none;
  background: ${({ selected, isCreatingFolder, focused }) =>
    isCreatingFolder ? 'none' : selected ? colors.brand.lighter : focused && colors.brand.lightest};
  color: ${({ isCreatingFolder, focused }) =>
    isCreatingFolder && focused ? colors.brand.primary : colors.text.primary};
  transition: ${animations.durations.superFast};
  word-break: break-word;

  &:hover {
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
  word-break: break-word;
  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: IFolder;
  isCreatingFolder?: boolean;
  index: number;
}

const FolderItem = ({
  focusedFolder,
  folder,
  isOpen,
  level,
  loading,
  selectedFolder,
  onCloseFolder,
  onOpenFolder,
  setFocusedFolder,
  setSelectedFolder,
  targetResource,
  visibleFolders,
  maxLevel,
  isCreatingFolder,
  type,
  closeTree,
  index,
}: Props) => {
  const { t } = useTranslation();
  const { id, name } = folder;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const selected = selectedFolder ? selectedFolder.id === id : false;

  const focused = focusedFolder?.id === id;

  const handleClickFolder = () => {
    if (!selected) {
      setSelectedFolder(folder);
    }
    setFocusedFolder(folder);
    if (type === 'picker') {
      if (selected) {
        closeTree();
      }
    }
  };

  useEffect(() => {
    if (focusedFolder?.id === id && !isCreatingFolder) {
      if (type === 'navigation') {
        ref.current?.focus();
      }
      if (type === 'picker') {
        ref.current?.focus();
        ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [focusedFolder, ref, id, isCreatingFolder, type]);

  const linkPath = `/minndla/folders/${id}`;

  const containsResource =
    targetResource && folder.resources.some((resource) => resource.resourceId === targetResource.resourceId);

  const emptyFolder = folder.subfolders.length === 0;
  const isMaxDepth = level > maxLevel;
  const hideArrow = isMaxDepth || emptyFolder;

  const FolderIcon = folder.status === 'shared' ? FolderShared : FolderOutlined;

  const tabable = selected || focused || (!focusedFolder && !folder.parentId && index === 0);

  return type === 'navigation' ? (
    <FolderNameLink
      role="treeitem"
      aria-owns={folder.subfolders.length ? treestructureId(type, `subfolders-${folder.id}`) : undefined}
      aria-expanded={isMaxDepth || emptyFolder ? undefined : isOpen}
      aria-current={selected ? 'page' : undefined}
      aria-describedby={containsResource ? `alreadyAdded-${folder.id}` : undefined}
      ref={ref}
      level={level}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
          setSelectedFolder(folder);
          return;
        }
        arrowNavigation(e, id, visibleFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
      }}
      to={loading ? '' : linkPath}
      tabIndex={tabable ? 0 : -1}
      selected={selected}
      onFocus={() => setFocusedFolder(folder)}
      onClick={handleClickFolder}
    >
      {!hideArrow && (
        <OpenButton
          aria-hidden
          tabIndex={-1}
          isOpen={isOpen}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            ref.current?.focus();
            if (isOpen) {
              onCloseFolder(id);
            } else {
              onOpenFolder(id);
            }
          }}
        >
          <ArrowDropDownRounded />
        </OpenButton>
      )}
      <StyledName>{name}</StyledName>
    </FolderNameLink>
  ) : (
    <FolderName
      tabIndex={-1}
      role="treeitem"
      id={treestructureId(type, folder.id)}
      aria-expanded={isMaxDepth || emptyFolder ? undefined : isOpen}
      aria-selected={selected}
      focused={focusedFolder?.id === folder.id}
      aria-describedby={containsResource ? `alreadyAdded-${folder.id}` : undefined}
      aria-label={`${name}${folder.status === 'shared' ? `, ${t('myNdla.folder.sharing.shared')}` : ''}`}
      variant="ghost"
      shape="sharp"
      fontWeight="normal"
      colorTheme="light"
      ref={ref}
      level={level}
      selected={selected}
      disabled={loading}
      onFocus={(e) => {
        setFocusedFolder(focusedFolder || folder);
      }}
      onClick={handleClickFolder}
      isCreatingFolder={isCreatingFolder}
    >
      <IconWrapper>
        {!hideArrow && (
          <OpenButton
            aria-hidden
            tabIndex={-1}
            isOpen={isOpen}
            onClick={(e) => {
              e.stopPropagation();
              setFocusedFolder(folder);
              if (isOpen) {
                onCloseFolder(id);
              } else {
                onOpenFolder(id);
              }
            }}
          >
            <ArrowDropDownRounded />
          </OpenButton>
        )}
        <FolderIconWrapper>
          <FolderIcon />
        </FolderIconWrapper>
      </IconWrapper>
      <StyledName>{name}</StyledName>
      {containsResource && (
        <StyledDone
          aria-label={t('myNdla.alreadyInFolder')}
          id={`alreadyAdded-${folder.id}`}
          title={t('myNdla.alreadyInFolder')}
        />
      )}
    </FolderName>
  );
};

export default FolderItem;
