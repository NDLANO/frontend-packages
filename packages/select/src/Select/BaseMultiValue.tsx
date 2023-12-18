/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { MultiValueProps } from 'react-select';
import { TextEllipsis } from './BaseSingleValue';
import { Option } from './types';

const BaseMultiValue = <T extends boolean>({ children }: MultiValueProps<Option, T>) => {
  return <TextEllipsis>{children}</TextEllipsis>;
};

export default BaseMultiValue;
