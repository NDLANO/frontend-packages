/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { ArrowDropDown } from '@ndla/icons/common';
import { FolderOutlined } from '@ndla/icons/contentType';
import { colors, spacing, misc, animations } from '@ndla/core';
import { SetKeyNavigationId } from './TreeStructure.types';

const OpenButton = styled.button<{ isOpen: boolean }>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => (isOpen ? '0' : '-90')}deg);
  padding: ${spacing.xsmall};
  margin-right: -${spacing.small};
  display: flex;
  align-items: center;
  margin: 0;
  color: ${colors.brand.secondary};
  cursor: pointer;
  &:hover {
    color: ${colors.brand.primary};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FolderName = styled.button<{ marked: boolean; noArrow?: boolean }>`
  line-height: 1;
  background: ${({ marked }) => (marked ? colors.brand.lighter : 'transparent')};
  color: ${colors.text.primary};
  &:hover,
  &:focus {
    background: ${({ marked }) => (marked ? colors.brand.light : colors.brand.lighter)};
    color: ${colors.brand.primary};
  }
  transition: ${animations.durations.superFast};
  border: 0;
  border-radius: ${misc.borderRadius};
  padding: ${spacing.small};
  display: flex;
  gap: ${spacing.xxsmall};
  align-items: center;
  cursor: pointer;
  padding: ${spacing.xsmall};
  margin: 0;
  margin-left: ${({ noArrow }) => (noArrow ? '-1px' : `-${spacing.xxsmall}`)};
  box-shadow: none;
`;

const FolderNameLink = FolderName.withComponent('a');

interface Props {
  name: string;
  id: string;
  onToggleOpen: (id: string) => void;
  onMarkFolder: (id: string) => void;
  isOpen: boolean;
  marked: boolean;
  loading?: boolean;
  openOnFolderClick?: boolean;
  hideArrow?: boolean;
  highlightedByKeyBoardNavigation: boolean;
  setKeyNavigationId: SetKeyNavigationId;
  url?: string;
  icon?: React.ReactNode;
}

const FolderItem = ({
  hideArrow,
  loading,
  name,
  id,
  onToggleOpen,
  onMarkFolder,
  isOpen,
  marked,
  openOnFolderClick,
  highlightedByKeyBoardNavigation,
  setKeyNavigationId,
  icon,
  url,
}: Props) => {
  return (
    <Wrapper>
      {!hideArrow && (
        <OpenButton tabIndex={-1} isOpen={isOpen} disabled={loading} onClick={() => onToggleOpen(id)}>
          <ArrowDropDown />
        </OpenButton>
      )}
      {url ? (
        <FolderNameLink
          noArrow={hideArrow}
          tabIndex={highlightedByKeyBoardNavigation ? 0 : -1}
          marked={marked}
          href={loading ? undefined : url}
          onFocus={() => {
            setKeyNavigationId({ id, isFolder: false });
          }}
          data-tree-structure-id={id}
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
        <FolderName
          noArrow={hideArrow}
          tabIndex={highlightedByKeyBoardNavigation ? 0 : -1}
          marked={marked}
          disabled={loading}
          onFocus={() => {
            setKeyNavigationId({ id, isFolder: false });
          }}
          data-tree-structure-id={id}
          onClick={() => {
            onMarkFolder(id);
            if (openOnFolderClick) {
              onToggleOpen(id);
            }
          }}>
          {icon || <FolderOutlined />}
          {name}
        </FolderName>
      )}
    </Wrapper>
  );
};

export default FolderItem;
