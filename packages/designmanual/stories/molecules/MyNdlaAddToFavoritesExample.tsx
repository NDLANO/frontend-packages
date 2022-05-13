/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MyNdlaFavoritesDialog } from '@ndla/ui';
import { IconButton } from '@ndla/button';
import { FavoriteHeart } from '@ndla/icons/action';

const StyledFavoriteHeart = styled(FavoriteHeart)`
  transform: scale(1.5);
`;
const MyNdlaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <IconButton ariaLabel="Legg i favoritter" onClick={() => setIsOpen(!isOpen)}>
        <StyledFavoriteHeart />
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
