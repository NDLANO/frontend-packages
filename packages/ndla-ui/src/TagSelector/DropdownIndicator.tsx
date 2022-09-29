/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownIndicatorProps } from 'react-select';
import { iconButtonStyle } from '@ndla/button';
import { TagType } from './types';

const DropdownIndicator = ({ innerProps, selectProps }: DropdownIndicatorProps<TagType, true>) => {
  const { t } = useTranslation();

  const { menuIsOpen } = selectProps;

  return (
    <div
      css={iconButtonStyle({ colorTheme: 'greyLighter', variant: 'ghost', shape: 'pill', size: 'small' })}
      {...innerProps}
      aria-label={menuIsOpen ? t('tagSelector.hideAllTags') : t('tagSelector.showAllTags')}>
      {menuIsOpen ? <ChevronUp /> : <ChevronDown />}
    </div>
  );
};

export default DropdownIndicator;
