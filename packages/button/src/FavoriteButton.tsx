/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, HeartOutline } from '@ndla/icons/action';
import IconButtonV2, { IconButtonProps } from './IconButtonV2';

export interface Props extends Omit<IconButtonProps, 'aria-label'> {
  isFavorite?: boolean;
}

const FavoriteButton = forwardRef<HTMLButtonElement, Props>(({ isFavorite, onClick }, ref) => {
  const { t } = useTranslation();
  const labelModifier = isFavorite ? 'added' : 'add';
  const Icon = isFavorite ? Heart : HeartOutline;
  return (
    <IconButtonV2
      colorTheme="light"
      variant="ghost"
      ref={ref}
      onClick={onClick}
      aria-label={t(`myNdla.resource.${labelModifier}ToMyNdla`)}
      title={t(`myNdla.resource.${labelModifier}ToMyNdla`)}
    >
      <Icon />
    </IconButtonV2>
  );
});

export default FavoriteButton;
