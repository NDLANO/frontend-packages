/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, misc, spacing } from '@ndla/core';

const TreeStructureWrapper = styled.div<{ framed?: boolean }>`
  padding: ${spacing.xsmall};
  ${({ framed }) =>
    framed
      ? css`
          border: 1px solid ${colors.brand.greyLighter};
          border-radius: ${misc.borderRadius};
          max-height: 400px;
          overflow-y: scroll;
          scroll-behavior: smooth;
          padding: ${spacing.small};
        `
      : ''}
  transition: ${misc.transition.default};
  &:focus-within {
    border-color: ${colors.brand.primary};
  }
`;

export default TreeStructureWrapper;
