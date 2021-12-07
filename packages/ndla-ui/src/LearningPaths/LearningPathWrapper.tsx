/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { spacing, spacingUnit, breakpoints, mq } from '@ndla/core';

type PropStyledWrapper = {
  invertedStyle?: boolean;
};

const StyledWrapper = styled.section<PropStyledWrapper>`
  max-width: ${1402 + spacingUnit}px;
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
  ${(props) =>
    props.invertedStyle &&
    css`
      ${mq.range({ until: breakpoints.tablet })} {
        background: #fff;
      }
    `}
`;

interface Props {
  children: ReactNode;
  invertedStyle?: boolean;
}

export const LearningPathWrapper = ({ children, invertedStyle }: Props) => (
  <StyledWrapper invertedStyle={invertedStyle}>{children}</StyledWrapper>
);
