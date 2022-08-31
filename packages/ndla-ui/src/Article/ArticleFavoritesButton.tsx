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
import { useTranslation } from 'react-i18next';

export interface Props {
  isFavorite?: boolean;
  onToggleAddToFavorites: (id: string, add: boolean) => void;
  articleId: string;
}

export const ArticleFavoritesButton = ({ isFavorite, onToggleAddToFavorites, articleId }: Props) => {
  const { t } = useTranslation();
  const removeFromFavoritesLabel = t('myNdla.resource.addToMyNdla');
  const addToFavoritesLabel = t('myNdla.resource.addedToMyNdla');
  return (
    <Tooltip tooltip={isFavorite ? addToFavoritesLabel : removeFromFavoritesLabel}>
      <IconButtonDualStates
        ariaLabelActive={t('myNdla.alreadyFavourited')}
        ariaLabelInActive={t('myNdla.addToFavourites')}
        activeIcon={<Heart />}
        inactiveIcon={<HeartOutline />}
        active={isFavorite}
        size="small"
        variant="ghost"
        shape="pill"
        onClick={() => onToggleAddToFavorites(articleId, !isFavorite)}
      />
    </Tooltip>
  );
};

export default ArticleFavoritesButton;
