/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import colors from './colors';
import fonts from './fonts';
import spacing from './spacing';

const smallHeading = css`
  ${fonts.sizes(14, 1.1)};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
`;

const smallerHeadingUppercase = css`
  ${fonts.sizes('18px', '26px')};
  font-weight: ${fonts.weight.normal};
  color: ${colors.text.light};
  text-transform: uppercase;
  margin: 0 0 ${spacing.normal} 0;
`;

const mediumHeaderUppercase = css`
  color: ${colors.text.primary};
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  padding-right: ${spacing.small};
  margin: 0;
  ${fonts.sizes(20, 1.1)};
`;

const typography = {
  smallHeading,
  smallerHeadingUppercase,
  mediumHeaderUppercase,
};

export default typography;
