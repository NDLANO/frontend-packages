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
import { colors, spacing, misc } from '@ndla/core';

const OpenButton = styled.button<{isOpen: boolean}>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => isOpen ? '0' : '-90'}deg);
  padding: ${spacing.xsmall} ${spacing.small};
  margin: -${spacing.xxsmall};
`;

const Wrapper = styled.div<{marked: boolean}>`
  display: flex;
  align-items: center;
`;

const FolderNameButton = styled.button<{marked: boolean}>`
  background: ${({ marked }) => marked ? colors.brand.lighter : 'transparent'};
  &:hover {
    background: ${({ marked }) => marked ? colors.brand.light : colors.brand.lighter};
  }
  border: 0;
  border-radius: ${misc.borderRadius}
  padding: ${spacing.small};
  display: flex;
  gap: ${spacing.xxsmall};
  align-items: center;
  cursor: pointer;
  padding: ${spacing.xsmall};
  margin: -${spacing.xxsmall};
`;

interface Props {
  name: string;
  id: string;
  onToggleOpen: (id: string) => void;
  onMarkFolder: (id: string) => void;
  isOpen: boolean;
  marked: boolean;
  loading?: boolean;
  openOnFolderClick?: boolean;
}

const FolderItem = ({ loading, name, id, onToggleOpen, onMarkFolder, isOpen, marked, openOnFolderClick }: Props) => (
  <Wrapper marked={marked}>
    <OpenButton tabIndex={-1} isOpen={isOpen} disabled={loading} onClick={() => onToggleOpen(id)}>
      <ArrowDropDown />
    </OpenButton>
    <FolderNameButton tabIndex={-1} marked={marked} disabled={loading} onClick={() => {
      onMarkFolder(id);
      if (openOnFolderClick) {
        onToggleOpen(id);
      }
    }}>
      <FolderOutlined />{name}
    </FolderNameButton>
  </Wrapper>
);

export default FolderItem;
