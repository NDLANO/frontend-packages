/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, misc } from '@ndla/core';

const StyledImage = styled.img`
  border-radius: ${misc.borderRadius};
  width: ${spacing.large};
  height: ${spacing.large};
  min-width: ${spacing.large};
  object-fit: cover;
`;

const StyledImageContainer = styled.div`
  margin-right: ${spacing.small};
`;

export function DropdownMenuImage({ image, alt }) {
  if (!image) {
    return null;
  }
  return (
    <StyledImageContainer>
      {typeof image === 'string' ? <StyledImage src={image} alt={alt} /> : image}
    </StyledImageContainer>
  );
}
