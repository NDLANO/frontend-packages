/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, breakpoints, mq } from '@ndla/core';

const StyledWrapper = styled.section(`
  max-width: ${1402 + spacing.spacingUnit}px;
  padding: 0 ${spacing.normal};
  margin: 0 auto;
  .o-wrapper {
    padding-right: 0;
    padding-left: ${spacing.small};
  }
  .c-hero__content {
    display: none;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    .c-hero__content {
      display: flex;
    }
  }
`);

interface Props {
  children: React.ReactNode;
}

export const LearningPathWrapper: React.FunctionComponent<Props> = ({
  children,
}) => (
  <StyledWrapper>{children}</StyledWrapper>
);