/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from 'react-emotion';
import { spacing, colors } from '@ndla/core';

export const FormHeaderIconClass = css`
  color: ${colors.brand.tertiary};
  width: ${spacing.normal};
  height: ${spacing.normal};
  padding: 0;
  margin: 0 ${spacing.spacingUnit / 8}px -5px;
  transform: translate(${spacing.spacingUnit / 8}px, -4px);

  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;