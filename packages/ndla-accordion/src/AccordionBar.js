/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ChevronRight } from '@ndla/icons/common';
import { colors, spacing, fonts } from '@ndla/core';

const StyledAccordionBar = styled.div(
  {
    background: colors.brand.light,
    padding: `${spacing.small} ${spacing.normal} ${spacing.small} calc(${
      spacing.xsmall
    } * 3)`,
    color: colors.brand.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: 0,
    transition: 'color 100ms ease, background 100ms ease,',
    '.c-icon': {
      transition: 'transform 100ms ease',
      transform: 'rotate(0deg)',
      marginRight: spacing.small,
    },
  },
  props =>
    props.isOpen && {
      '.c-icon': {
        transform: 'rotate(90deg)',
      },
      background: '#fff',
    },
  props =>
    props.hasError && {
      border: `2px solid ${colors.support.redLight}`,
      padding: `calc(${spacing.small} - 2px) calc(${spacing.normal} - 2px)
      calc(${spacing.small} - 2px) calc((${spacing.xsmall} * 3) - 2px)`,
    },
  props =>
    props.hasError &&
    props.isOpen && {
      borderBottom: 0,
      paddingBottom: spacing.normal,
    },
  props =>
    props.hasError &&
    !props.isOpen && {
      background: colors.support.redLight,
    },
);

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

export const AccordionBar = ({
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
      aria-controls={panelId}
      onClick={onClick}
      css={accordionButtonCss}>
      <ChevronRight className="c-icon--medium" />
      <span>{children}</span>
    </button>
  </StyledAccordionBar>
);

AccordionBar.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  panelId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  hasError: PropTypes.bool,
  isOpen: PropTypes.bool,
};
