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
import { fonts, colors, spacing, mq, breakpoints } from '@ndla/core';

type Props = {
  reversed?: boolean;
  padding?: string | number;
};

const StyledRow = styled.div<Props>`
  display: flex;
  align-item: center;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
  background: red;
  > div {
    padding: ${spacing.small};
    ${props => props.padding && css`
      padding: ${spacing.small} calc(${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} / 2);
    `}
  }
  ${props => props.padding && css`
    width: calc(100% + ${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} - ${spacing.normal});
    margin-left: calc((-${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} / 2) + ${spacing.small});
  `}
`;

const Row: React.FunctionComponent<Props> = ({
  children, ...rest
}) => (
  <StyledRow {...rest}>
    {children}
  </StyledRow>
);

export default Row;
