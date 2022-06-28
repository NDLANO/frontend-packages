/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@ndla/icons/common';
import { FolderOutlined } from '@ndla/icons/contentType';
import { colors, spacing, misc, animations } from '@ndla/core';
import { SetFocusedFolderId, FolderChildTypeProp } from './TreeStructure.types';

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
  &:focus {
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

const FolderNameLink = FolderName.withComponent('a');

interface Props {
  name: string;
  id: string;
  onToggleOpen: (id: string) => void;
  onMarkFolder: (id: string) => void;
  isOpen: boolean;
  markedFolderId?: string;
  focusedFolderId?: string;
  loading?: boolean;
  openOnFolderClick?: boolean;
  hideArrow?: boolean;
  setFocusedFolderId: SetFocusedFolderId;
  url?: string;
  icon?: React.ReactNode;
  noPaddingWhenArrowIsHidden?: boolean;
  folderChild?: FolderChildTypeProp;
}

const FolderItem = ({
  hideArrow,
  loading,
  name,
  id,
  onToggleOpen,
  onMarkFolder,
  isOpen,
  markedFolderId,
  focusedFolderId,
  openOnFolderClick,
  setFocusedFolderId,
  icon,
  url,
  noPaddingWhenArrowIsHidden,
  folderChild,
}: Props) => {
  const folderNameLinkRef = useRef<HTMLAnchorElement | null>(null);
  const folderNameButtonRef = useRef<HTMLButtonElement | null>(null);
  console.log('folderChild', folderChild);
  useEffect(() => {
    if (focusedFolderId === id) {
      if (url && folderNameLinkRef.current) {
        folderNameLinkRef.current.focus();
      } else if (folderNameButtonRef.current) {
        folderNameButtonRef.current.focus();
      }
    }
  }, [focusedFolderId, folderNameLinkRef, folderNameButtonRef, url, id]);
  const marked = markedFolderId === id;
  return (
    <FolderItemWrapper>
      {!hideArrow && (
        <OpenButton tabIndex={-1} isOpen={isOpen} disabled={loading} onClick={() => onToggleOpen(id)}>
          <ArrowDropDown />
        </OpenButton>
      )}
      {url ? (
        <FolderNameLink
          ref={folderNameLinkRef}
          noArrow={hideArrow}
          tabIndex={marked ? 0 : -1}
          marked={marked}
          href={loading ? undefined : url}
          onFocus={() => {
            setFocusedFolderId(id);
          }}
          onClick={() => {
            onMarkFolder(id);
            if (openOnFolderClick) {
              onToggleOpen(id);
            }
          }}>
          {icon || <FolderOutlined />}
          {name}
        </FolderNameLink>
      ) : (
        <>
          <FolderName
            ref={folderNameButtonRef}
            noArrow={hideArrow && !noPaddingWhenArrowIsHidden}
            tabIndex={marked ? 0 : -1}
            marked={marked}
            disabled={loading}
            onFocus={() => {
              setFocusedFolderId(id);
            }}
            onClick={() => {
              onMarkFolder(id);
              if (openOnFolderClick) {
                onToggleOpen(id);
              }
            }}>
            {icon || <FolderOutlined />}
            {name}
          </FolderName>
          {folderChild && (
            <WrapperForFolderChild marked={marked}>{folderChild(id, marked ? 0 : -1)}</WrapperForFolderChild>
          )}
        </>
      )}
    </FolderItemWrapper>
  );
};

export default FolderItem;
