/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, misc } from '@ndla/core';
import { TreeStructureType } from './types';

const TreeStructureWrapper = styled.div<{ type: TreeStructureType }>`
  ${({ type }) =>
    (type === 'normal' || type === 'picker') &&
    css`
      border: 1px solid ${colors.brand.neutral7};
      border-radius: ${misc.borderRadius};
      scroll-behavior: smooth;
    `}
  transition: ${misc.transition.default};
  &:focus-within {
    border-color: ${colors.brand.tertiary};
  }
`;

export default TreeStructureWrapper;
