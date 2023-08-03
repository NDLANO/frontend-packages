/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { colors, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  highlightCC?: boolean;
  horizontal?: boolean;
  color?: string;
  marginRight?: boolean;
  children: ReactNode;
}

export const StyledList = styled.ul<Props>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  ${(p) =>
    p.highlightCC
      ? css`
          & li:first-of-type {
            margin-bottom: ${spacing.small};
            border-bottom: 1px solid ${colors.brand.tertiary};
            padding-bottom: ${spacing.small};
            svg {
              fill: ${colors.brand.primary};
            }
          }
        `
      : ''};
  flex-direction: ${(p) => (p.horizontal ? 'row' : 'column')};
  color: ${(p) => p.color || 'black'};
  fill: ${(p) => p.color || 'black'};
  margin-right: ${(p) => (p.marginRight ? spacing.small : 0)};
`;

const StyledLicenseIconList = ({ highlightCC, horizontal = false, color, marginRight, children }: Props) => {
  return (
    <StyledList marginRight={marginRight} color={color} horizontal={horizontal} highlightCC={highlightCC}>
      {children}
    </StyledList>
  );
};

export default StyledLicenseIconList;
