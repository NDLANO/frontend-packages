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

import Button from '../button/Button';

export default class ClickToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.expanded,
    };

    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.containerRef = null;
    this.focusTrap = null;
  }

  componentDidMount() {
    this.focusTrap = createFocusTrap(this.containerRef, {
      onActivate: () => {
        this.setState({
          isOpen: true,
        });

        if (!this.props.noScrollDisabled) {
          noScroll(true);
        }
      },
      onDeactivate: () => {
        if (this.state.isOpen) {
          this.setState({
            isOpen: false,
          });
        }

        if (!this.props.noScrollDisabled) {
          noScroll(false);
        }
      },
      clickOutsideDeactivates: true,
    });

    if (this.props.expanded) {
      this.focusTrap.activate();
    }
  }

  componentWillUnmount() {
    this.focusTrap.deactivate();
  }

  handleClick() {
    const isOpen = !this.state.isOpen;

    if (isOpen) {
      this.focusTrap.activate();
    } else {
      this.focusTrap.deactivate();
    }
  }

  close() {
    this.focusTrap.deactivate();
  }

  render() {
    const {
      title,
      openTitle,
      buttonClassName,
      noScrollDisabled,
      containerClass: Component,
      expanded,
      ...rest
    } = this.props;
    const { isOpen } = this.state;

    const children = React.cloneElement(this.props.children, {
      close: this.close,
    });
    return (
      <Component
        {...rest}
        ref={ref => {
          this.containerRef = ref;
        }}>
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
        {isOpen ? children : null}
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
  children: PropTypes.node,
  expanded: PropTypes.bool,
  noScrollDisabled: PropTypes.bool,
};

ClickToggle.defaultProps = {
  containerClass: 'div',
  expanded: false,
};
