/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChevronRight } from '@ndla/icons/common';
import { colors, spacing, spacingUnit, fonts } from '@ndla/core';
import { openIndexesProps } from '../types';

type StyledAccordionBarProps = {
  hasError?: boolean;
  isOpen?: boolean;
  tiny?: boolean;
};

const StyledAccordionBar = styled.div<StyledAccordionBarProps>`
  ${(props) =>
    props.tiny
      ? css`
          padding: ${spacing.xsmall} ${spacing.small} ${spacing.xsmall} 0;
        `
      : css`
          padding: ${spacing.small} ${spacing.normal} ${spacing.small} calc(${spacing.xsmall} * 3);
        `}
  background: ${colors.brand.light};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: color 100ms ease, background 100ms ease;
  border: 2px solid ${(props) => (props.hasError ? colors.support.redLight : 'transparent')};
  ${({ hasError, isOpen }) =>
    hasError &&
    isOpen &&
    css`
      background: ${colors.support.redLight};
      border-bottom-color: transparent;
    `}
`;

type ButtonProps = {
  tiny?: boolean;
  isOpen?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  color: ${colors.brand.primary};
  border: 0;
  background: none;
  cursor: pointer;
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  span {
    text-align: left;
    text-decoration: underline;
    font-weight: ${fonts.weight.semibold};
  }
  &:hover,
  &:focus {
    span {
      text-decoration: none;
    }
  }
  svg {
    transition: transform 100ms ease;
    transform: rotate(${(props) => (props.isOpen ? '90' : '0')}deg);
  }
  ${(props) =>
    props.tiny
      ? css`
          padding: ${spacing.xsmall} ${spacing.xsmall} ${spacing.xsmall} ${spacing.small};
          span {
            ${fonts.sizes(18, 1.1)};
          }
          svg {
            width: 16px;
            height: 16px;
            margin-right: ${spacingUnit / 8}px;
          }
        `
      : css`
          height: ${spacing.large};
          padding-right: ${spacing.small};
          span {
            ${fonts.sizes(spacing.normal, 1.1)};
          }
          svg {
            width: 22px;
            height: 22px;
            margin-right: ${spacing.xsmall};
          }
        `}
`;

const StyledChildrenWrapper = styled.div<{ tiny?: boolean }>`
  color: ${colors.text.primary};
  display: flex;
  flex: 1;
  ${(props) => (props.tiny ? fonts.sizes(14, 1.3) : fonts.sizes(18, 1.3))};
`;

type Props = {
  title: string;
  panelId: openIndexesProps;
  onClick: () => void;
  hasError?: boolean;
  isOpen?: boolean;
  tiny?: boolean;
  children?: ReactNode;
};

export const AccordionBar = ({ title, children, panelId, hasError, isOpen, onClick, tiny }: Props) => (
  <StyledAccordionBar isOpen={isOpen} hasError={hasError} tiny={tiny}>
    <StyledButton
      type="button"
      aria-label={title}
      aria-expanded={isOpen}
      aria-controls={panelId.toString()}
      onClick={onClick}
      tiny={tiny}
      isOpen={isOpen}
    >
      <ChevronRight aria-hidden="true" />
      <span>{title}</span>
    </StyledButton>
    <StyledChildrenWrapper tiny={tiny}>{children}</StyledChildrenWrapper>
  </StyledAccordionBar>
);
