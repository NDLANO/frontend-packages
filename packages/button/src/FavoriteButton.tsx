/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, HeartOutline } from '@ndla/icons/action';
import Tooltip from '@ndla/tooltip';
import IconButtonV2, { IconButtonProps } from './IconButtonV2';

export interface Props extends Omit<IconButtonProps, 'aria-label'> {
  isFavorite?: boolean;
}

const FavoriteButton = forwardRef<HTMLButtonElement, Props>(({ isFavorite, onClick }, ref) => {
  const { t } = useTranslation();
  const labelModifier = isFavorite ? 'added' : 'add';
  const ariaLabel = isFavorite ? t('myNdla.alreadyFavourited') : t('myNdla.addToFavourites');
  const Icon = isFavorite ? Heart : HeartOutline;
  return (
    <Tooltip tooltip={t(`myNdla.resource.${labelModifier}ToMyNdla`)}>
      <IconButtonV2 colorTheme="light" variant="ghost" ref={ref} onClick={onClick} aria-label={ariaLabel}>
        <Icon />
      </IconButtonV2>
    </Tooltip>
  );
});

export default FavoriteButton;
