/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, cx } from 'react-emotion';
import classNames from 'classnames';
import { ChevronRight } from 'ndla-icons/common';
import Button from 'ndla-button';
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
  padding-left: ${spacing.units.large + spacing.units.small}px;
  padding-right: ${spacing.large};
  padding-bottom: ${spacing.large};
  ${props =>
    css`
      max-height: ${props.maxHeight ? `${props.maxHeight}px` : 'auto'};
    `};
  &.error {
    border: 2px solid ${colors.support.redLight};
    border-top: 0;
    padding-left: ${spacing.units.large + spacing.units.small - 2}px;
    padding-right: ${spacing.units.large - 2}px;
    padding-bottom: ${spacing.units.large - 2}px;
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
  padding: ${spacing.normal};
  color: ${colors.brand.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 0;
  transition: color 100ms ease, background 100ms ease;
  > .c-icon {
    transition: transform 100ms ease;
    transform: rotate(90deg);
    margin-right: ${spacing.small};
  }
  &.error {
    border: 2px solid ${colors.support.redLight};
    padding: ${spacing.units.normal - 2}px;
    &:not(.closed) {
      border-bottom: 0;
      padding-bottom: ${spacing.normal};
    }
  }
  &.closed {
    > .c-icon {
      transform: rotate(0deg);
    }
    background: ${colors.brand.light};
    &.error {
      background: ${colors.support.redLight};
    }
  }
`;

const accordionButtonCss = css`
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes(spacing.normal, 1.1)};
`;

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsOpen: props.tabs
        .map((tab, index) => (tab.open ? index : null))
        .filter(isOpen => isOpen !== null),
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(index, e) {
    const { tabsOpen } = this.state;
    const { onlyOpenOne, controlledCallback } = this.props;

    if (controlledCallback) {
      this.props.controlledCallback(index, e);
    } else if (onlyOpenOne) {
      this.setState({
        tabsOpen: tabsOpen.includes(index) ? [] : [index],
      });
    } else if (tabsOpen.includes(index)) {
      tabsOpen.splice(tabsOpen.indexOf(index), 1);
      this.setState({
        tabsOpen,
      });
    } else {
      tabsOpen.push(index);
      this.setState({
        tabsOpen,
      });
    }
  }

  render() {
    const { controlledCallback } = this.props;

    return (
      <AccordionWrapper>
        {this.props.tabs.map((tab, index) => {
          const expanded = controlledCallback
            ? tab.open
            : this.state.tabsOpen.includes(index);
          const tabId = `${tab.title}-id`;
          const classes = classNames({
            closed: !expanded,
            error: tab.error,
          });
          return (
            <Fragment key={tab.title}>
              <AccordionTitleBar className={classes}>
                <ChevronRight className="c-icon--medium" />
                <Button
                  link
                  aria-label={tab.title}
                  aria-expanded={expanded}
                  aria-controls={tabId}
                  onClick={e => this.toggleTab(index, e)}
                  className={accordionButtonCss}>
                  {tab.title}
                </Button>
              </AccordionTitleBar>
              <AccordionChildWrapper
                maxHeight={this.props.maxHeight}
                className={classes}
                id={tabId}
                aria-hidden={expanded}>
                <div>{tab.children}</div>
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
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      open: (props, propName, componentName) => {
        if (
          typeof props.controlledCallback === 'function' &&
          typeof props[propName] !== 'boolean'
        ) {
          return new Error(
            `Invalid prop tabs[].${propName} supplied to ${componentName}. Required if props.controlledCallback is function (controlled Accordion).`,
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
