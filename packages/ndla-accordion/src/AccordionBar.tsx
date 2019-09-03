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
// @ts-ignore
import { ChevronRight } from '@ndla/icons/common';
import { colors, spacing, fonts } from '@ndla/core';
import { openIndexesProps } from '../types';

type StyledAccordionBarProps = {
  hasError?: boolean;
  isOpen?: boolean;
  tiny?: boolean;
};

const StyledAccordionBar = styled.div<StyledAccordionBarProps>`
  background: ${colors.brand.light};
  ${props => props.tiny ? css`
    padding: ${spacing.xsmall} ${spacing.small} ${spacing.xsmall} 0);
  ` : css`
    padding: ${spacing.small} ${spacing.normal} ${spacing.small} calc(${spacing.xsmall} * 3);
  `}
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 0;
  transition: color 100ms ease, background 100ms ease;
  ${({ hasError }) => hasError && css`
      border: 2px solid ${colors.support.redLight};
      padding: calc(${spacing.small} - 2px) calc(${spacing.normal} - 2px)
        calc(${spacing.small} - 2px) calc((${spacing.xsmall} * 3) - 2px);
    `
  }
  ${({ hasError, isOpen }) => hasError && isOpen && css`
      border-bottom: 0;
      padding-bottom: ${spacing.normal};
    `
  }
  ${({ hasError, isOpen }) => hasError && isOpen && css`
      background: ${colors.support.redLight};
    `
  }
`;

type ButtonProps = {
  tiny?: boolean;
  isOpen?: boolean;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  background: none;
  cursor: pointer;
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  span {
    box-shadow: inset 0 -1px;
    font-weight: ${fonts.weight.semibold};
  }
  &:hover,
  &:focus {
    span {
      box-shadow: none;
    }
  }
  svg {
    transition: transform 100ms ease;
    transform: rotate(${props => props.isOpen ? '90' : '0'}deg);
  };
  ${props => props.tiny ? 
    css`
      height: ${spacing.medium};
      span {
        ${fonts.sizes(16, 1.1)};
      }
      svg {
        width: 16px;
        height: 16px;
        margin-right: ${spacing.xsmall};
      }
    ` : 
    css`
      height: ${spacing.large};
      span {
        ${fonts.sizes(spacing.normal, 1.1)};
      }
      svg {
        width: 22px;
        height: 22px;
        margin-right: ${spacing.small};
      }
    `
  } 
`;

type Props = {
  ariaLabel: string;
  panelId: openIndexesProps;
  onClick: () => void;
  hasError?: boolean;
  isOpen?: boolean;
  tiny?: boolean;
};


export const AccordionBar: React.FC<Props> = ({
  ariaLabel,
  children,
  panelId,
  hasError,
  isOpen,
  onClick,
  tiny,
}) => (
  <StyledAccordionBar isOpen={isOpen} hasError={hasError} tiny={tiny}>
    <StyledButton
      type="button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls={panelId.toString()}
      onClick={onClick}
      tiny={tiny}
      isOpen={isOpen}
    >
      <ChevronRight />
      <span>{children}</span>
    </StyledButton>
  </StyledAccordionBar>
);