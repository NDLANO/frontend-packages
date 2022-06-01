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
import { colors, spacing } from '@ndla/core';

const OpenButton = styled.button<{isOpen: boolean}>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => isOpen ? '0' : '-90'}deg);
`;

const Wrapper = styled.div<{marked: boolean}>`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
`;

const FolderNameButton = styled.button<{marked: boolean}>`
  background: ${({ marked }) => marked ? colors.brand.lighter : 'transparent'};
  border: 0;
  padding: ${spacing.small};
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  cursor: pointer;
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
    <OpenButton isOpen={isOpen} disabled={loading} onClick={() => onToggleOpen(id)}>
      <ArrowDropDown />
    </OpenButton>
    <FolderNameButton marked={marked} disabled={loading} onClick={() => {
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
