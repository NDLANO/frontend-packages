/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ReactNode } from 'react';

interface Props {
  description: string;
  icon?: ReactNode;
}

const StyledParagraph = styled.p`
  margin: 0;
`;

const StyledFigCaption = styled.figcaption`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  background: unset;
  padding: unset;
  font-size: unset;
  color: unset;
  padding-bottom: ${spacing.xsmall};
  border-bottom: inherit;
`;

const LicenseDescription = ({ description, icon }: Props) => {
  return (
    <StyledFigCaption>
      {icon}
      <StyledParagraph>{description}</StyledParagraph>
    </StyledFigCaption>
  );
};

export default LicenseDescription;
