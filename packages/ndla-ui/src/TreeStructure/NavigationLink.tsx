/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import SafeLink from '../../../safelink/src';
import { arrowNavigation } from './arrowNavigation';
import { CommonFolderItemsProps, FolderType } from './types';

interface StyledProps {
  selected?: boolean;
}

const StyledSafeLink = styled(SafeLink)<StyledProps>``;

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: FolderType;
}

const NavigationLink = ({
  loading,
  folder,
  selectedFolder,
  focusedFolderId,
  setSelectedFolder,
  setFocusedId,
  visibleFolders,
  onOpenFolder,
  onCloseFolder,
}: Props) => {
  const { id, icon, name } = folder;
  const selected = selectedFolder && selectedFolder.id === id;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const focused = focusedFolderId === id;

  const handleClick = () => {
    if (!selected) {
      setSelectedFolder(folder);
      setFocusedId(id);
    }
  };

  useEffect(() => {
    if (focusedFolderId === id) {
      ref.current?.focus();
    }
  }, [focusedFolderId, ref, id]);

  return (
    <StyledSafeLink
      ref={ref}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) =>
        arrowNavigation(e, id, visibleFolders, setFocusedId, onOpenFolder, onCloseFolder)
      }
      tabIndex={selected || focused ? 0 : -1}
      selected={selected}
      onFocus={() => setFocusedId(id)}
      onClick={handleClick}
      to={loading ? '' : `/minndla/${id}`}>
      {icon}
      {name}
    </StyledSafeLink>
  );
};

export default NavigationLink;
