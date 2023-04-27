/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';

interface Props {
  description: string;
}

const StyledParagraph = styled.p`
  margin: 0;
  padding-bottom: ${spacing.xsmall};
  border-bottom: 1px solid ${colors.brand.tertiary};
`;

const LicenseDescription = ({ description }: Props) => {
  return <StyledParagraph>{description}</StyledParagraph>;
};

export default LicenseDescription;
