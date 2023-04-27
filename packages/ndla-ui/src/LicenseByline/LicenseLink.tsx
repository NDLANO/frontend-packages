/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import SafeLink from '@ndla/safelink';
import { colors, fonts } from '@ndla/core';
import { LicenseType } from './EmbedByline';

interface Props {
  license: LicenseType;
}

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.bold};
  text-decoration: underline;
  box-shadow: none;
  &:hover,
  &:focus-within {
    text-decoration: none;
  }
`;

const LicenseLink = ({ license }: Props) => {
  return <StyledSafeLink to={license.url}>{license.abbreviation}</StyledSafeLink>;
};

export default LicenseLink;
