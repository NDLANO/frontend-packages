/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

interface Props {
  description: ReactNode;
  icon?: ReactNode;
}

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
  p {
    margin: 0;
  }
`;

const LicenseDescription = ({ description, icon }: Props) => {
  return (
    <StyledFigCaption>
      {icon}
      <span>{description}</span>
    </StyledFigCaption>
  );
};

export default LicenseDescription;
