/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, breakpoints, mq } from '@ndla/core';

type PropStyledWrapper = {
  invertedStyle?: boolean;
};

const StyledWrapper = styled.section<PropStyledWrapper>`
  max-width: ${1402 + spacing.spacingUnit}px;
  padding: 0 ${spacing.normal};
  margin: 0 auto;
  .o-wrapper {
    padding-right: 0;
    padding-left: 0;
  }
  .c-hero__content {
    display: none;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    .c-hero__content {
      display: flex;
    }
  }
  ${props =>
    props.invertedStyle &&
    css`
      ${mq.range({ until: breakpoints.mobileWide })} {
        background: #fff;
      }
    `}
`;

interface Props {
  children: React.ReactNode;
  invertedStyle?: boolean;
}

export const LearningPathWrapper: React.FunctionComponent<Props> = ({
  children,
  invertedStyle,
}) => <StyledWrapper invertedStyle={invertedStyle}>{children}</StyledWrapper>;
