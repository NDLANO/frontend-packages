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
  xxs?: number;
  xs?: number;
  mds?: number;
  md?: number;
  lg?: number;
  size?: number;
  offset?: number;
};

const setOffset = (offset: number) => (
  css`
    margin-left: ${(100 / 12) * offset}%;
  `
);

const StyledCol = styled.div<Props>`
  display: flex;
  align-item: center;
  padding: ${spacing.small};
  width: ${props => props.size ? (100 / 12) * props.size : '100'}%;
  padding: ${spacing.small};
  ${props => props.offset && setOffset(props.offset)};
  ${(props: Props) => props.xs && css`
    ${mq.range({ until: breakpoints.tablet })} {
      width: ${(100 / 12) * props.xs}%;
    }
  `}
  ${(props: Props) => props.md && css`
    ${mq.range({ from: breakpoints.tablet })} {
      width: ${(100 / 12) * props.md}%;
    }
  `}
  ${(props: Props) => props.lg && css`
    ${mq.range({ from: breakpoints.desktop })} {
      width: ${(100 / 12) * props.lg}%;
    }
  `}
`;

const Col: React.FunctionComponent<Props> = ({
  children, ...rest
}) => (
  <StyledCol {...rest}>
    {children}
  </StyledCol>
);

export default Col;
