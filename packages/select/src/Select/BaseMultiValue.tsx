/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import isArray from 'lodash/isArray';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MultiValueProps } from 'react-select';
import { Option } from './types';

const BaseMultiValue = <T extends boolean>({ selectProps: { value }, data, children }: MultiValueProps<Option, T>) => {
  const { t } = useTranslation();

  const count = isArray(value) ? value.length : 0;
  const isLastItem = isArray(value) && data === value[count - 1];

  if (count === 1) return <span>{children}</span>;
  if (isLastItem) return <span>{t('dropdown.selected', { count })}</span>;
  return null;
};

export default BaseMultiValue;
