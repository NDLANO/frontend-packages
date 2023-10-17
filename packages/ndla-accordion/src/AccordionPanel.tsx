/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors, spacing } from '@ndla/core';

export const StyledAccordionsPanelItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: ${spacing.xsmall};
  > div {
    display: flex;
    align-items: center;
  }
`;

export const StyledAccordionsPanelIconButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  outline: none;
  color: ${colors.brand.primary};
  height: ${spacing.normal};
  width: ${spacing.normal};
  transition: background 200ms ease;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  &:hover,
  &:focus {
    background: ${colors.brand.tertiary};
  }
`;

type Props = {
  id: string;
  isOpen?: boolean;
  tiny?: boolean;
  hasError?: boolean;
  children?: ReactNode;
};

const StyledAccordionPanel = styled.section<Props>`
  display: flex;
  transition: opacity 200ms ease;
  opacity: 1;
  margin-bottom: ${(props) => (props.tiny ? spacing.small : spacing.normal)};
  background: #fff;
  max-height: auto;
  border: 2px solid transparent;
  padding: ${spacing.small} calc(${spacing.large}) ${spacing.large};

  ${(props) =>
    !props.isOpen &&
    css`
      margin-bottom: 0;
      padding: 0 !important;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      visibility: collapse;
    `};

  ${(props) =>
    props.hasError &&
    props.isOpen &&
    css`
      border: 2px solid ${colors.support.redLight};
      border-top-color: transparent;
      padding-left: calc(${spacing.large} + ${spacing.small} - 2px);
      padding-right: calc(${spacing.large} - 2px);
      padding-bottom: calc(${spacing.large} - 2px);
    `};
`;

export const AccordionPanel = ({ children, ...rest }: Props) => (
  <StyledAccordionPanel {...rest}>{children}</StyledAccordionPanel>
);
