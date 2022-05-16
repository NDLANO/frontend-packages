/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { MyNdlaFavoritesDialog } from '@ndla/ui';
import { IconButton, IconSize } from '@ndla/button/src/IconButton';
import { FavoriteHeart } from '@ndla/icons/action';
import { colors } from '@ndla/core';

const MyNdlaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <IconButton
        toolTip="Favoritter" //Har translation i en annen PR, fikser når det merges
        size="small"
        onClick={() => setIsOpen(!isOpen)}
        iconType="favorite">
        <FavoriteHeart />
      </IconButton>
      {isOpen && (
        <MyNdlaFavoritesDialog title="Hello dialog" isOpen={isOpen} closeCallback={() => setIsOpen(!isOpen)}>
          <p>content of dialog..</p>
        </MyNdlaFavoritesDialog>
      )}
    </div>
  );
};

export default MyNdlaDialogExample;
