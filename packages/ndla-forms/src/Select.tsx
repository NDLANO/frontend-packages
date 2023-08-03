/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLProps, ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, fonts, misc } from '@ndla/core';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-right: 15px;

  &:after {
    position: absolute;
    content: '';
    top: 17px;
    right: 15px;
    border-bottom: 2px solid ${colors.brand.dark};
    border-right: 2px solid ${colors.brand.dark};
    height: 10px;
    width: 10px;
    transform: rotate(45deg);
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  font-weight: ${fonts.weight.normal};
  color: ${colors.brand.dark};
  font-weight: ${fonts.weight.semibold};
  border: 0;
  ${fonts.sizes(18, 1.25)};
  height: ${spacing.large};
  width: 100%;
  padding-left: ${spacing.small};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 40px;

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }
`;

interface Props extends Omit<HTMLProps<HTMLSelectElement>, 'as'> {
  children?: ReactNode;
}

const Select = ({ children, ...rest }: Props) => (
  <StyledWrapper>
    <StyledSelect {...rest}>{children}</StyledSelect>
  </StyledWrapper>
);

export default Select;
