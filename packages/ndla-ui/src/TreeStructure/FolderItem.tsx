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

const OpenButton = styled.button<{isOpen: boolean}>`
  background: transparent;
  border: 0;
  transform: rotate(${({ isOpen }) => isOpen ? '0' : '-90'}deg);
`;

interface Props {
  name: string;
  id: string;
  onToggleOpen: (id: string) => void;
  onMarkFolder: (id: string) => void;
  isOpen: boolean;
  marked: boolean;
  loading?: boolean;
}

const FolderItem = ({ loading, name, id, onToggleOpen, onMarkFolder, isOpen, marked }: Props) => (
  <div>
    <OpenButton isOpen={isOpen} disabled={loading} onClick={() => onToggleOpen(id)}>
      <ArrowDropDown />
    </OpenButton>
    <button disabled={loading} onClick={() => onMarkFolder(id)}>
      {name} {marked ? 'y' : ''}
    </button>
  </div>
);

export default FolderItem;
