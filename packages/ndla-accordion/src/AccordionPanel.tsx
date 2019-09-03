/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing } from '@ndla/core';

type Props = {
  id: string;
  isOpen?: boolean;
  hasError?: boolean;
  sidePadding?: number;
};

const StyledAccordionPanel = styled.section<Props>`
  display: flex;
  transition: opacity 200ms ease;
  opacity: 1;
  margin-bottom: ${spacing.normal};
  background: #fff;
  padding: ${({ sidePadding }) => `0 ${sidePadding ? `${sidePadding}px` : `calc(${spacing.large} + ${spacing.small})`} ${spacing.large}`};
  max-height: auto;
  ${props => !props.isOpen &&
    css`
      margin-bottom: ${spacing.xsmall};
      padding: 0;
      border: 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
    `};
  ${props => props.hasError && props.isOpen &&
    css`
      border: 2px solid ${colors.support.redLight};
      border-top: 0;
      padding-left: calc(${spacing.large} + ${spacing.small} - 2px);
      padding-right: calc(${spacing.large} - 2px);
      padding-bottom: calc(${spacing.large} - 2px);
    `};
`;

export const AccordionPanel: React.FC<Props> = ({ children, ...rest }) => (
  <StyledAccordionPanel {...rest}>{children}</StyledAccordionPanel>
);
