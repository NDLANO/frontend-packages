/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { KeyboardEvent, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@ndla/icons/common';
import { FolderOutlined } from '@ndla/icons/contentType';
import { colors, spacing, misc, animations } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { SetFocusedFolderId, FolderChildFuncType } from './TreeStructure.types';
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

const WrapperForFolderChild = styled.div<{ marked: boolean }>`
  position: absolute;
  right: ${spacing.xsmall};
  opacity: ${({ marked }) => (marked ? 1 : 0.25)};
  &:hover,
  &:focus,
  &:focus-within {
    opacity: 1;
  }
`;

const FolderName = styled.button<{ marked: boolean; noArrow?: boolean }>`
  line-height: 1;
  background: ${({ marked }) => (marked ? colors.brand.lighter : 'transparent')};
  color: ${colors.text.primary};
  &:hover,
  &:focus {
    background: ${({ marked }) => (marked ? colors.brand.light : colors.brand.lightest)};
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

interface Props {
  name: string;
  id: string;
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  onMarkFolder: (id: string) => void;
  onSelectFolder?: (id: string) => void;
  isOpen: boolean;
  markedFolderId?: string;
  focusedFolderId?: string;
  visibleFolders: string[];
  loading?: boolean;
  openOnFolderClick?: boolean;
  hideArrow?: boolean;
  setFocusedFolderId: SetFocusedFolderId;
  icon?: React.ReactNode;
  noPaddingWhenArrowIsHidden?: boolean;
  folderChild?: FolderChildFuncType;
}

const FolderItem = ({
  hideArrow,
  loading,
  name,
  id,
  visibleFolders,
  onCloseFolder,
  onOpenFolder,
  onMarkFolder,
  onSelectFolder,
  isOpen,
  markedFolderId,
  focusedFolderId,
  openOnFolderClick,
  setFocusedFolderId,
  icon,
  noPaddingWhenArrowIsHidden,
  folderChild,
}: Props) => {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const marked = markedFolderId === id;

  const handleMarkFolder = () => {
    onMarkFolder(id);
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
      if (ref.current) {
        ref.current.focus();
      }
    }
  }, [focusedFolderId, ref, id]);
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
            onKeyDown={(e) => arrowNavigation(e, id, visibleFolders, setFocusedFolderId, onOpenFolder, onCloseFolder)}
            noArrow={hideArrow && !noPaddingWhenArrowIsHidden}
            tabIndex={marked ? 0 : -1}
            marked={marked}
            disabled={loading}
            onFocus={() => {
              setFocusedFolderId(id);
            }}
            onClick={() => {
              handleMarkFolder();
              onSelectFolder(id);
            }}>
            {icon || <FolderOutlined />}
            {name}
          </FolderName>
          {folderChild && (
            <WrapperForFolderChild marked={marked}>
              {folderChild(id, marked || id === focusedFolderId ? 0 : -1)}
            </WrapperForFolderChild>
          )}
        </>
      ) : (
        <FolderNameLink
          ref={ref}
          onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
            arrowNavigation(e, id, visibleFolders, setFocusedFolderId, onOpenFolder, onCloseFolder)
          }
          noArrow={hideArrow}
          to={loading ? '' : `/${id}`}
          tabIndex={marked ? 0 : -1}
          marked={marked}
          onFocus={() => {
            setFocusedFolderId(id);
          }}
          onClick={() => {
            handleMarkFolder();
          }}>
          {icon || <FolderOutlined />}
          {name}
        </FolderNameLink>
      )}
    </FolderItemWrapper>
  );
};

export default FolderItem;
