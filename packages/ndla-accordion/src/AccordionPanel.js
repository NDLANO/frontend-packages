/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors, spacing } from 'ndla-core';

const StyledAccordionPanel = styled.section`
  display: flex;
  overflow-y: auto;
  transition: opacity 200ms ease;
  opacity: 1;
  margin-bottom: ${spacing.normal};
  background: #fff;
  padding-left: calc(${spacing.large} + ${spacing.small});
  padding-right: ${spacing.large};
  padding-bottom: ${spacing.large};
  max-height: auto;
  ${props =>
    !props.isOpen &&
    css`
      margin-bottom: ${spacing.xsmall};
      padding: 0;
      border: 0;
      max-height: 0;
      opacity: 0;
    `};
  ${props =>
    props.hasError &&
    props.isOpen &&
    css`
      border: 2px solid ${colors.support.redLight};
      border-top: 0;
      padding-left: calc(${spacing.large} + ${spacing.small} - 2px);
      padding-right: calc(${spacing.large} - 2px);
      padding-bottom: calc(${spacing.large} - 2px);
    `};
`;

export const AccordionPanel = ({ children, ...rest }) => (
  <StyledAccordionPanel {...rest}>{children}</StyledAccordionPanel>
);

AccordionPanel.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  hasError: PropTypes.bool,
  isOpen: PropTypes.bool,
};
