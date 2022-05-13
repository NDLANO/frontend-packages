/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { MyNdlaFavoritesDialog } from '@ndla/ui';
import { IconButton } from '@ndla/button';
import { FavoriteHeart } from '@ndla/icons/action';
import { colors } from '@ndla/core';

const MyNdlaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <IconButton
        toolTip="Favoritter" //Har translation i en annen PR, fikser når det merges
        size="1.5em"
        onClick={() => setIsOpen(!isOpen)}
        button={{ border: 'none', backgroundColor: 'transparent' }}
        svg={{
          stroke: colors.brand.primary,
          fill: 'white',
          hoverFill: colors.brand.primary,
          strokeWidth: '1.5',
        }}>
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
