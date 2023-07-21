/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, HeartOutline } from '@ndla/icons/action';
import IconButtonV2, { IconButtonProps } from './IconButtonV2';

export interface Props extends Omit<IconButtonProps, 'aria-label'> {
  isFavorite?: boolean;
}

const FavoriteButton = ({ isFavorite, onClick }: Props) => {
  const { t } = useTranslation();

  const tooltip = useMemo(() => {
    return isFavorite ? t('myNdla.resource.addedToMyNdla') : t('myNdla.resource.addToMyNdla');
  }, [t, isFavorite]);

  const ariaLabel = useMemo(() => {
    return isFavorite ? t('myNdla.alreadyFavourited') : t('myNdla.addToFavourites');
  }, [t, isFavorite]);

  const Icon = useMemo(() => (isFavorite ? Heart : HeartOutline), [isFavorite]);

  return (
    <IconButtonV2 colorTheme="light" variant="ghost" title={tooltip} onClick={onClick} aria-label={ariaLabel}>
      <Icon />
    </IconButtonV2>
  );
};

export default FavoriteButton;
