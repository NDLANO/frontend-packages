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
import Dialog from '../Dialog';

export default class ClickToggleWithDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.focusActive = null;
    this.containerRef = null;
    this.focusTrap = null;
  }

  componentDidMount() {
    if (this.props.isOpen !== null) {
      this.handleFocustrap(this.props.isOpen);
    }
  }

  componentDidUpdate(nextProps) {
    if (this.focusTrap === null) {
      this.handleFocustrap();
    }
    const useProps = nextProps.isOpen !== null;
    if (
      ((useProps && nextProps.isOpen !== this.props.isOpen) ||
        this.state.isOpen) &&
      !this.focusActive
    ) {
      this.focusTrap.activate();
    } else if (
      nextProps.isOpen !== this.props.isOpen ||
      (!this.state.isOpen && nextProps.isOpen === null && this.focusActive)
    ) {
      this.focusTrap.deactivate();
    }
  }

  componentWillUnmount() {
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = null;
      this.focusActive = false;
    }
  }

  handleFocustrap(isActive) {
    this.focusTrap = createFocusTrap(this.containerRef, {
      onActivate: () => {
        if (!this.props.noScrollDisabled) {
          noScroll(true);
        }
        this.focusActive = true;
      },
      onDeactivate: () => {
        if (!this.props.noScrollDisabled) {
          noScroll(false);
        }

        if (this.props.isOpen) {
          this.props.onToggle(false);
        } else if (this.state.isOpen) {
          this.setState({
            isOpen: false,
          });
        }
        this.focusActive = false;
      },
      clickOutsideDeactivates: true,
    });

    if (isActive) {
      this.focusTrap.activate();
    }
  }

  handleClick() {
    const useState = this.props.isOpen === null;
    const isOpen = useState ? !this.state.isOpen : !this.props.isOpen;
    if (this.props.onToggle) {
      this.props.onToggle(isOpen);
    }
    if (this.props.isOpen === null) {
      this.setState({
        isOpen,
      });
    }
  }

  handleOnClose() {
    this.props.onToggle(false);
  }

  render() {
    const {
      title,
      id,
      labelledby,
      openTitle,
      buttonClassName,
      noScrollDisabled,
      containerClass: Component,
      renderAsLink,
      renderAsLightButton,
      lighter,
      disablePortal,
      dialogModifier,
      isOpen,
      useDialog,
      ...rest
    } = this.props;
    const showDialog = isOpen === null ? this.state.isOpen : isOpen;
    return (
      <Component {...rest}>
        <Button
          link={renderAsLink}
          lighter={renderAsLightButton}
          className={`${showDialog ? 'active ' : ''}${buttonClassName}`}
          onClick={this.handleClick}>
          {title}
        </Button>
        <div
          ref={ref => {
            this.containerRef = ref;
          }}>
          {useDialog && (
            <Dialog
              id={id}
              labelledby={labelledby}
              hidden={!showDialog}
              onClose={this.handleClick}
              disablePortal
              messages={{ close: openTitle || 'lukk' }}
              modifier={
                showDialog ? ['active', dialogModifier] : dialogModifier
              }>
              {this.props.children}
            </Dialog>
          )}
          {!useDialog && isOpen && this.props.children(this.handleOnClose)}
        </div>
      </Component>
    );
  }
}

ClickToggleWithDialog.propTypes = {
  id: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string' && props[propName] !== undefined) {
      console.warn(`<${componentName} /> id prop type must be a string`);
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
    if (
      typeof props.children !== 'function' &&
      typeof props[propName] !== 'string'
    ) {
      console.warn(
        `<${componentName} /> When children prop is a node, id prop is isRequired`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  labelledby: PropTypes.string,
  containerClass: elementType,
  title: PropTypes.node.isRequired,
  openTitle: PropTypes.node,
  buttonClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  noScrollDisabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: (props, propName, componentName) => {
    if (typeof props[propName] !== 'function' && props[propName] !== null) {
      console.warn(
        `<${componentName} /> onToggle prop type must be a function`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
    if (
      typeof props.children === 'function' &&
      typeof props[propName] !== 'function'
    ) {
      console.warn(
        `<${componentName} /> When children prop is a function, onToggle prop is isRequired`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
  disablePortal: PropTypes.bool,
  renderAsLink: PropTypes.bool,
  renderAsLightButton: PropTypes.bool,
  dialogModifier: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  useDialog: (props, propName, componentName) => {
    if (typeof props[propName] !== 'boolean') {
      console.warn(
        `<${componentName} /> useDialog prop type must be a boolean`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
    if (typeof props.children === 'function' && props[propName]) {
      console.warn(
        `<${componentName} /> When children prop is a function, useDialog prop can not be true.`,
      );
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.',
      );
    }
  },
};

ClickToggleWithDialog.defaultProps = {
  containerClass: 'div',
  renderAsLink: false,
  renderAsLightButton: false,
  isOpen: null,
  onToggle: null,
  useDialog: false,
  id: undefined,
};
