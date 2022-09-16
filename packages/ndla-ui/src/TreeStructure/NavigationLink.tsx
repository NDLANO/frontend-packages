/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import SafeLink from '@ndla/safelink';
import { arrowNavigation } from './arrowNavigation';
import { CommonFolderItemsProps, FolderType } from './types';

interface StyledProps {
  selected?: boolean;
}

const StyledSafeLink = styled(SafeLink)<StyledProps>`
  display: grid;
  grid-template-columns: ${spacing.medium} 1fr;
  align-items: center;
  padding: ${spacing.xxsmall};
  margin: ${spacing.xsmall} 0;
  gap: ${spacing.xxsmall};
  box-shadow: none;

  color: ${({ selected }) => (selected ? colors.brand.primary : colors.text.primary)};
  font-weight: ${({ selected }) => (selected ? fonts.weight.semibold : fonts.weight.normal)};
  ${fonts.sizes('16px')};

  :hover,
  :focus {
    color: ${colors.brand.primary};
  }
  svg {
    height: 26px;
    width: 26px;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props extends CommonFolderItemsProps {
  isOpen: boolean;
  folder: FolderType;
}

const NavigationLink = ({
  loading,
  folder,
  selectedFolder,
  focusedFolder,
  setSelectedFolder,
  setFocusedFolder,
  visibleFolders,
  onOpenFolder,
  onCloseFolder,
}: Props) => {
  const { id, icon, name } = folder;
  const selected = selectedFolder && selectedFolder.id === id;
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const focused = focusedFolder?.id === id;

  const handleClick = () => {
    if (!selected) {
      setSelectedFolder(folder);
      setFocusedFolder(folder);
    }
  };

  useEffect(() => {
    if (focusedFolder?.id === id) {
      ref.current?.focus();
    }
  }, [focusedFolder, ref, id]);

  return (
    <StyledSafeLink
      ref={ref}
      onKeyDown={(e: KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
          setSelectedFolder(folder);
          setFocusedFolder(folder);
          return;
        }
        arrowNavigation(e, id, visibleFolders, setFocusedFolder, onOpenFolder, onCloseFolder);
      }}
      aria-current={selected ? 'page' : undefined}
      tabIndex={selected || focused ? 0 : -1}
      selected={selected}
      onFocus={() => setFocusedFolder(folder)}
      onClick={handleClick}
      to={loading ? '' : `/minndla/${id}`}>
      <IconWrapper>{icon}</IconWrapper>
      {name}
    </StyledSafeLink>
  );
};

export default NavigationLink;
