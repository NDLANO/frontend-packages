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
  align?: 'right' | 'center' | 'left';
};

const StyledRow = styled.div<Props>`
  display: flex;
  align-item: center;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  justify-content: ${props => {
    if (props.align === 'right') {
      return 'flex-end';
    } else if (props.align === 'center') {
      return 'center';
    } else {
      return 'flex-start';
    }
  }};
  margin: 0;
  width: 100%;
  flex-wrap: wrap;
  margin-top: ${spacing.small};
  margin-bottom: ${spacing.small};
  > div {
    ${props => props.padding !== undefined && css`
      padding-left: calc(${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} / 2);
      padding-right: calc(${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} / 2);
    `}
  }
  ${props => props.padding !== undefined && css`
    width: calc(100% + ${typeof props.padding === 'string' ? props.padding : `${props.padding}px`});
    margin-left: calc((-${typeof props.padding === 'string' ? props.padding : `${props.padding}px`} / 2));
  `}
`;

const Row: React.FunctionComponent<Props> = ({
  padding, align, children, ...rest
}) => (
  <StyledRow align={align || 'left'} padding={padding || spacing.normal} {...rest}>
    {children}
  </StyledRow>
);

export default Row;
