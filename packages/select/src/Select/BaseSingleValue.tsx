/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import styled from '@emotion/styled';
import React from 'react';
import { components, GroupBase, SingleValueProps } from 'react-select';
import { Option } from './types';

// Wrapper grid-component is needed to show ellipsis at overflow without fixed width
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const StyledSingleValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  prefix?: string;
  postfix?: string;
}

const BaseSingleValue = <T extends boolean>({
  innerProps,
  prefix,
  postfix,
  children,
}: SingleValueProps<Option, T, GroupBase<Option>> & Props) => {
  return (
    <Wrapper {...innerProps}>
      <StyledSingleValue>
        <span>{prefix}</span>
        {children}
        <span>{postfix}</span>
      </StyledSingleValue>
    </Wrapper>
  );
};

export default BaseSingleValue;
