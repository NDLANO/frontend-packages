/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing, utils } from '@ndla/core';
import { ControlProps } from 'react-select';
import { TagType } from './types';

const StyledTagSelectorControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: ${spacing.xxsmall};

  overflow: auto;
  overflow: overlay;
  ${utils.scrollbar}
`;

const Control = ({ innerProps, children, innerRef }: ControlProps<TagType, true>) => {
  return (
    <StyledTagSelectorControl ref={innerRef} {...innerProps}>
      {children}
    </StyledTagSelectorControl>
  );
};

export default Control;
