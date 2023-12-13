/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { spacing, spacingUnit, colors } from '@ndla/core';

export const FieldHeaderIconStyle = css`
  color: ${colors.brand.tertiary};
  width: ${spacing.normal};
  height: ${spacing.normal};
  padding: 0;
  margin: 0 ${spacingUnit / 8}px -5px;
  transform: translate(${spacingUnit / 8}px, -4px);
  border: 0;
  background: 0;

  &:hover,
  &:focus {
    color: ${colors.brand.primary};
  }
`;

interface StyledButtonWrapperProps {
  paddingLeft?: boolean;
}

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spacing.medium};

  > button {
    margin-right: ${spacing.small};
  }
  padding-left: ${(props) => (props.paddingLeft ? `${spacing.xxlarge}` : 0)};
`;
