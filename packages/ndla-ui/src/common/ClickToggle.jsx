/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { noScroll } from 'ndla-util';
import elementType from 'react-prop-types/lib/elementType';
import createFocusTrap from 'focus-trap';

import Button from '../Button';

export default class ClickToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.containerRef = null;
    this.focusTrap = null;
  }

  componentDidMount() {
    this.focusTrap = createFocusTrap(this.containerRef, {
      onActivate: () => {
        if (!this.props.noScrollDisabled) {
          noScroll(true);
        }
      },
      onDeactivate: () => {
        if (!this.props.noScrollDisabled) {
          noScroll(false);
        }

        if (this.props.isOpen) {
          this.props.onToggle(false);
        }
      },
      clickOutsideDeactivates: true,
    });

    if (this.props.isOpen) {
      this.focusTrap.activate();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        this.focusTrap.activate();
      } else {
        this.focusTrap.deactivate();
      }
    }
  }

  componentWillUnmount() {
    this.focusTrap.deactivate();
  }

  handleClick() {
    const isOpen = !this.props.isOpen;
    this.props.onToggle(isOpen);
  }

  handleOnClose() {
    this.props.onToggle(false);
  }

  render() {
    const {
      title,
      openTitle,
      buttonClassName,
      noScrollDisabled,
      containerClass: Component,
      alwaysRenderChildren,
      isOpen,
      children,
      ...rest
    } = this.props;

    return (
      <Component {...rest}>
        {isOpen ? (
          <Button
            className={`active ${buttonClassName}`}
            onClick={this.handleClick}>
            {openTitle || title}
          </Button>
        ) : (
          <Button className={buttonClassName} onClick={this.handleClick}>
            {title}
          </Button>
        )}
        <div
          ref={ref => {
            this.containerRef = ref;
          }}>
          {alwaysRenderChildren && children(this.handleOnClose, isOpen)}
          {!alwaysRenderChildren && isOpen
            ? children(this.handleOnClose)
            : null}
        </div>
      </Component>
    );
  }
}

ClickToggle.propTypes = {
  containerClass: elementType,
  title: PropTypes.node.isRequired,
  openTitle: PropTypes.node,
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  noScrollDisabled: PropTypes.bool,
  alwaysRenderChildren: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

ClickToggle.defaultProps = {
  containerClass: 'div',
  alwaysRenderChildren: false,
};
