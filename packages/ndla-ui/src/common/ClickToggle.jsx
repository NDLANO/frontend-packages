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
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.containerRef = null;
    this.focusTrap = null;
  }

  componentDidMount() {
    this.focusTrap = createFocusTrap(this.containerRef, {
      onActivate: () => {
        this.props.onToggle(true);

        if (!this.props.noScrollDisabled) {
          noScroll(true);
        }
      },
      onDeactivate: () => {
        if (this.props.isOpen) {
          this.props.onToggle(false);
        }

        if (!this.props.noScrollDisabled) {
          noScroll(false);
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
      isOpen,
      ...rest
    } = this.props;

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
  noScrollDisabled: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

ClickToggle.defaultProps = {
  containerClass: 'div',
};
