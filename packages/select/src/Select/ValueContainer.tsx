/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { ValueContainerProps } from 'react-select';
import isArray from 'lodash/isArray';
import { useTranslation } from 'react-i18next';
import { Option } from './types';
import { TextEllipsis } from './BaseSingleValue';

const StyledValueContainer = styled.div`
  display: grid;
  min-width: 0;
  align-items: center;
`;

const ValueContainer = <T extends boolean>({
  selectProps: { postfix },
  innerProps,
  children,
}: ValueContainerProps<Option, T>) => {
  const { t } = useTranslation();

  if (isArray(children)) {
    const [values, input] = children;
    const isTyping = input?.props.value;

    if (values && values.length > 1) {
      return (
        <StyledValueContainer>
          {!isTyping && (
            <TextEllipsis>
              {t('dropdown.selected', { count: values.length })} <span>{postfix}</span>
            </TextEllipsis>
          )}
          {input}
        </StyledValueContainer>
      );
    }
  }
  return <StyledValueContainer {...innerProps}>{children}</StyledValueContainer>;
};
export default ValueContainer;
