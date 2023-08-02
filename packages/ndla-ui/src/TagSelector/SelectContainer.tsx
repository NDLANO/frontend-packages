/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, misc } from '@ndla/core';
import { ContainerProps } from 'react-select';
import { TagType } from './types';

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  border: 1px solid ${colors.brand.neutral7};
  border-radius: ${misc.borderRadius};
  &:focus-within {
    border-color: ${colors.brand.tertiary};
  }
  ${fonts.sizes(16)};
`;

const SelectContainer = ({ innerProps, selectProps, children }: ContainerProps<TagType, true>) => {
  return <StyledContainer {...innerProps}>{children}</StyledContainer>;
};

export default SelectContainer;
