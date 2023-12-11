/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { GroupHeadingProps } from 'react-select';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { Option } from './types';

const StyledGroupHeader = styled.div`
  padding: ${spacing.xsmall};
  color: ${colors.brand.grey};
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('18px', '24px')};
  &[data-bold='true'] {
    font-weight: ${fonts.weight.bold};
  }
  &[data-small='true'] {
    ${fonts.sizes('16px', '18px')};
  }
`;

const BaseGroupHeading = <T extends boolean>({
  children,
  selectProps: { small, bold },
}: GroupHeadingProps<Option, T>) => {
  return (
    <StyledGroupHeader data-small={small} data-bold={bold}>
      {children}
    </StyledGroupHeader>
  );
};

export default BaseGroupHeading;
