/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MultiValueProps } from 'react-select';
import { Option } from './types';

const BaseMultiValue = <T extends boolean>({ ...props }: MultiValueProps<Option, T>) => {
  const { t } = useTranslation();

  const ValueCasted: Option[] = (props.selectProps.value as Option[]) ?? [];
  const count = ValueCasted.length;
  const isLastItem = props.data === ValueCasted[count - 1];

  if (count === 1) return <span>{props.children}</span>;
  if (isLastItem)
    return (
      <span>
        {count} {t('dropdown.selected')}
      </span>
    );
  return null;
};

export default BaseMultiValue;
