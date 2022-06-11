/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { IconButtonDualStates } from '@ndla/button';
import { Heart, HeartOutline } from '@ndla/icons/action';
import Tooltip from '@ndla/tooltip';

export interface Props {
  isFavorite?: boolean;
  onToggleAddToFavorites: (id: string, add: boolean) => void;
  addToFavoritesLabel: string;
  removeFromFavoritesLabel: string;
  articleId: string;
}

export const ArticleFavoritesButton = ({
  isFavorite,
  onToggleAddToFavorites,
  articleId,
  removeFromFavoritesLabel,
  addToFavoritesLabel,
}: Props) => (
  <Tooltip tooltip={isFavorite ? removeFromFavoritesLabel : addToFavoritesLabel}>
    <IconButtonDualStates
      ariaLabelActive={addToFavoritesLabel}
      ariaLabelInActive={removeFromFavoritesLabel}
      activeIcon={<Heart />}
      inactiveIcon={<HeartOutline />}
      active={!!isFavorite}
      size="small"
      ghostPill
      onClick={() => onToggleAddToFavorites(articleId, !isFavorite)}
    />
  </Tooltip>
);

export default ArticleFavoritesButton;
