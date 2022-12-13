import React from 'react';
import styled from '@emotion/styled';
import { GroupBase, ValueContainerProps } from 'react-select';
import { Option } from './types';

const StyledBaseValueContainer = styled.div`
  display: flex;
`;

const BaseValueContainer = <T extends boolean>({
  children,
  innerProps,
}: ValueContainerProps<unknown, T & boolean, GroupBase<Option>>) => {
  return <StyledBaseValueContainer {...innerProps}>{children}</StyledBaseValueContainer>;
};

export default BaseValueContainer;
