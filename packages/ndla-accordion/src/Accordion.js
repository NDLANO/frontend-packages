/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import classNames from 'classnames';
import { ChevronRight } from 'ndla-icons/common';
import { colors, spacing, fonts } from 'ndla-core';

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.normal} 0;
`;

const AccordionChildWrapper = styled.section`
  display: flex;
  overflow-y: auto;
  transition: opacity 200ms ease;
  opacity: 1;
  margin-bottom: ${spacing.normal};
  background: #fff;
  padding-left: calc(${spacing.large} + ${spacing.small});
  padding-right: ${spacing.large};
  padding-bottom: ${spacing.large};
  ${props =>
    css`
      max-height: ${props.maxHeight ? `${props.maxHeight}px` : 'auto'};
    `};
  &.error {
    border: 2px solid ${colors.support.redLight};
    border-top: 0;
    padding-left: calc(${spacing.large} + ${spacing.small} - 2px);
    padding-right: calc(${spacing.large} - 2px);
    padding-bottom: calc(${spacing.large} - 2px);
  }
  &.closed {
    margin-bottom: ${spacing.xsmall};
    padding: 0;
    border: 0;
    > div {
      display: none;
      max-height: 0;
      opacity: 0;
      margin-bottom: ${spacing.xsmall};
    }
  }
`;

const AccordionTitleBar = styled.div`
  background: #fff;
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
    transform: rotate(90deg);
    margin-right: ${spacing.small};
  }
  &.error {
    border: 2px solid ${colors.support.redLight};
    padding: calc(${spacing.small} - 2px) calc(${spacing.normal} - 2px)
      calc(${spacing.small} - 2px) calc((${spacing.xsmall} * 3) - 2px);
    &:not(.closed) {
      border-bottom: 0;
      padding-bottom: ${spacing.normal};
    }
  }
  &.closed {
    .c-icon {
      transform: rotate(0deg);
    }
    background: ${colors.brand.light};
    &.error {
      background: ${colors.support.redLight};
    }
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

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelsOpen: props.panels
        .map((panel, index) => (panel.open ? index : null))
        .filter(isOpen => isOpen !== null),
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(index, e) {
    const { panelsOpen } = this.state;
    const { onlyOpenOne, controlledCallback } = this.props;

    if (controlledCallback) {
      this.props.controlledCallback(index, e);
    } else if (onlyOpenOne) {
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
    const { controlledCallback } = this.props;

    return (
      <AccordionWrapper>
        {this.props.panels.map((panel, index) => {
          const expanded = controlledCallback
            ? panel.open
            : this.state.panelsOpen.includes(index);
          const panelId = `${panel.title}-id`;
          const classes = classNames({
            closed: !expanded,
            error: panel.error,
          });
          return (
            <Fragment key={panel.title}>
              <AccordionTitleBar className={classes}>
                <button
                  type="button"
                  aria-label={panel.title}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={e => this.togglePanel(index, e)}
                  className={accordionButtonCss}>
                  <ChevronRight className="c-icon--medium" />
                  <span>{panel.title}</span>
                </button>
              </AccordionTitleBar>
              <AccordionChildWrapper
                maxHeight={this.props.maxHeight}
                className={classes}
                id={panelId}
                aria-hidden={expanded}>
                <div>{panel.children}</div>
              </AccordionChildWrapper>
            </Fragment>
          );
        })}
      </AccordionWrapper>
    );
  }
}

Accordion.propTypes = {
  controlledCallback: PropTypes.func,
  panels: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      open: (props, propName, componentName) => {
        if (
          typeof props.controlledCallback === 'function' &&
          typeof props[propName] !== 'boolean'
        ) {
          return new Error(
            `Invalid prop panels[].${propName} supplied to ${componentName}. Required if props.controlledCallback is function (controlled Accordion).`,
          );
        }
        return null;
      },
      error: PropTypes.bool,
    }),
  ).isRequired,
  onlyOpenOne: PropTypes.bool,
  maxHeight: PropTypes.number,
};

export default Accordion;
