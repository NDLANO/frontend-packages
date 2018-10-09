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
import { ChevronRight } from 'ndla-icons/common';
import { colors, spacing, fonts } from 'ndla-core';

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.normal} 0;
`;

export const StyledAccordionPanel = styled.section`
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

export const StyledAccordionBar = styled.div`
  background: ${colors.brand.light};
  padding: ${spacing.small} ${spacing.normal} ${spacing.small}
    calc(${spacing.xsmall} * 3);
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 0;
  transition: color 100ms ease, background 100ms ease;
  .c-icon {
    transition: transform 100ms ease;
    transform: rotate(0deg);
    margin-right: ${spacing.small};
  }

  ${props =>
    props.isOpen &&
    css`
      .c-icon {
        transform: rotate(90deg);
      }
      background: #fff;
    `};

  ${props =>
    props.hasError &&
    css`
      border: 2px solid ${colors.support.redLight};
      padding: calc(${spacing.small} - 2px) calc(${spacing.normal} - 2px)
        calc(${spacing.small} - 2px) calc((${spacing.xsmall} * 3) - 2px);
    `};

  ${props =>
    props.hasError &&
    props.isOpen &&
    css`
      border-bottom: 0;
      padding-bottom: ${spacing.normal};
    `};
  ${props =>
    props.hasError &&
    !props.isOpen &&
    `background: ${colors.support.redLight}`};
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
      className={accordionButtonCss}>
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

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelsOpen: props.openIndexes,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(index) {
    const { panelsOpen } = this.state;
    const { onlyOpenOne } = this.props;

    if (onlyOpenOne) {
      this.setState({
        panelsOpen: panelsOpen.includes(index) ? [] : [index],
      });
    } else if (panelsOpen.includes(index)) {
      panelsOpen.splice(panelsOpen.indexOf(index), 1);
      this.setState({
        panelsOpen,
      });
    } else {
      panelsOpen.push(index);
      this.setState({
        panelsOpen,
      });
    }
  }

  render() {
    return this.props.children({
      openIndexes: this.state.panelsOpen,
      handleItemClick: this.togglePanel,
    });
  }
}

Accordion.propTypes = {
  children: PropTypes.func.isRequired,
  onlyOpenOne: PropTypes.bool,
  openIndexes: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ),
};

Accordion.defaultProps = {
  openIndexes: [],
};

export default Accordion;
