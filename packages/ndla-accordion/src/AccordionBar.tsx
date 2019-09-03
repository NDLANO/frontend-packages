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
};

const StyledAccordionBar = styled.div<StyledAccordionBarProps>`
  background: ${colors.brand.light};
  padding: ${spacing.small} ${spacing.normal} ${spacing.small} calc(${spacing.xsmall} * 3);
  color: ${colors.brand.primary};
  display: flex;
  alignItems: center;
  justifyContent: flex-start;
  border: 0;
  transition: color 100ms ease, background 100ms ease;
  .c-icon {
    transition: transform 100ms ease;
    transform: rotate(0deg);
    margin-right: ${spacing.small};
  };
  ${({ isOpen }) => isOpen && css`
      .c-icon {
        transform: rotate(90deg);
      }
      background: #fff;
    `
  }
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

const accordionButtonCss = css`
  border: 0;
  background: none;
  cursor: pointer;
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  height: ${spacing.large};
  span {
    box-shadow: inset 0 -1px;
    font-weight: ${fonts.weight.semibold};
    ${fonts.sizes(spacing.normal, 1.1)};
  }
  &:hover,
  &:focus {
    span {
      box-shadow: none;
    }
  }
`;

type Props = {
  ariaLabel: string;
  panelId: openIndexesProps;
  onClick: () => void;
  hasError?: boolean;
  isOpen?: boolean;
};


export const AccordionBar: React.FC<Props> = ({
  ariaLabel,
  children,
  panelId,
  hasError,
  isOpen,
  onClick,
}) => (
  <StyledAccordionBar isOpen={isOpen} hasError={hasError}>
    <button
      type="button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls={panelId.toString()}
      onClick={onClick}
      css={accordionButtonCss}
    >
      <ChevronRight className="c-icon--medium" />
      <span>{children}</span>
    </button>
  </StyledAccordionBar>
);