/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import isArray from 'lodash/isArray';
import { useTranslation } from 'react-i18next';
import { MultiValueProps } from 'react-select';
import { Option } from './types';
import { TextEllipsis } from './BasePlaceholder';

interface Props {
  postfix?: string;
}

const BaseMultiValue = <T extends boolean>({
  selectProps: { value },
  data,
  children,
  postfix,
}: Props & MultiValueProps<Option, T>) => {
  const { t } = useTranslation();

  const count = isArray(value) ? value.length : 0;
  const isLastItem = isArray(value) && data === value[count - 1];

  if (count === 1) return <TextEllipsis>{children}</TextEllipsis>;
  if (isLastItem)
    return (
      <TextEllipsis>
        {t('dropdown.selected', { count })} <span>{postfix}</span>
      </TextEllipsis>
    );
  return null;
};

export default BaseMultiValue;
