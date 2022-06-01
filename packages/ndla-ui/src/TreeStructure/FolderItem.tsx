/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ArrowDropDown } from '@ndla/icons/common';

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
    <ArrowDropDown />
    <button disabled={loading} onClick={() => onToggleOpen(id)}>
      {isOpen ? 'close' : 'open'}
    </button>
    <button disabled={loading} onClick={() => onMarkFolder(id)}>
      {name} {marked ? 'y' : ''}
    </button>
  </div>
);

export default FolderItem;
