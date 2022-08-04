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

const WrapperForFolderChild = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xsmall};
`;

const shouldForwardProp = (name: string) => !['selected', 'noArrow', 'fullWidth'].includes(name);

interface FolderNameProps {
  selected?: boolean;
  noArrow?: boolean;
  fullWidth?: boolean;
}

const FolderName = styled('button', { shouldForwardProp })<FolderNameProps>`
  cursor: pointer;
  padding: ${spacing.xsmall};
  margin: 0;
  outline-offset: -2px;
  outline-color: ${colors.brand.primary};
  margin-left: ${({ noArrow }) => (noArrow ? `29px` : `0px`)};
  flex-grow: ${({ fullWidth }) => fullWidth && 1};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: ${spacing.xxsmall};
  border: 0;
  border-radius: ${misc.borderRadius};
  box-shadow: none;
  background: ${({ selected }) => (selected ? colors.brand.lighter : 'transparent')};
  color: ${colors.text.primary};
  transition: ${animations.durations.superFast};
  text-align: left;
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
  targetResource,
  visibleFolders,
  framed,
}: Props) => {
  const { t } = useTranslation();
  const { id, icon, name } = folder;
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
            fullWidth={framed}
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
        </>
      ) : (
        <FolderNameLink
          ref={ref}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
            arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)
          }
          noArrow={hideArrow}
          to={loading ? '' : linkPath}
          tabIndex={selected || focused || level === 0 ? 0 : -1}
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
