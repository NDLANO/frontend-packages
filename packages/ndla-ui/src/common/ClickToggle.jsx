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

export default class ClickToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.focusActive = null;
    this.containerRef = React.createRef();
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
    if (this.focusTrap !== null) {
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
  }

  componentWillUnmount() {
    if (this.focusTrap) {
      this.focusTrap.deactivate();
      this.focusTrap = null;
      this.focusActive = false;
    }
  }

  handleFocustrap(isActive) {
    const target =
      typeof this.props.children === 'function'
        ? this.containerRef.current
        : document.querySelector(`[data-dialog-id='${this.props.id}']`);
    if (target) {
      this.focusTrap = createFocusTrap(target, {
        onActivate: () => {
          if (!this.props.noScrollDisabled) {
            noScroll(true, target);
          }
          this.focusActive = true;
        },
        onDeactivate: () => {
          if (!this.props.noScrollDisabled) {
            noScroll(false, target);
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
      stripped,
      dialogModifier,
      isOpen,
      alwaysRenderChildren,
      disablePortal,
      children,
      ...rest
    } = this.props;
    const showDialog = isOpen === null ? this.state.isOpen : isOpen;
    const useDialog = typeof children !== 'function';
    return (
      <Component {...rest}>
        <Button
          stripped={stripped}
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
          {useDialog &&
            (alwaysRenderChildren || showDialog) && (
              <Dialog
                id={id}
                labelledby={labelledby}
                hidden={!showDialog}
                onClose={this.handleClick}
                disablePortal={disablePortal}
                messages={{ close: openTitle || 'lukk' }}
                modifier={
                  showDialog ? ['active', dialogModifier] : dialogModifier
                }>
                {children}
              </Dialog>
            )}
          {!useDialog &&
            (isOpen || alwaysRenderChildren) &&
            children(this.handleOnClose, isOpen)}
        </div>
      </Component>
    );
  }
}

ClickToggle.propTypes = {
  id: (props, propName, componentName) => {
    if (typeof props[propName] !== 'string' && props[propName] !== undefined) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Type must be a string.`,
      );
    }
    if (
      typeof props.children !== 'function' &&
      typeof props[propName] !== 'string'
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. When children prop is a node, id prop is isRequired.`,
      );
    }
    return null;
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
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Type must be a function.`,
      );
    }
    if (
      typeof props.children === 'function' &&
      typeof props[propName] !== 'function'
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. When children prop is a function, onToggle prop is isRequired.`,
      );
    }
    return null;
  },
  renderAsLink: PropTypes.bool,
  renderAsLightButton: PropTypes.bool,
  stripped: PropTypes.bool,
  dialogModifier: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alwaysRenderChildren: PropTypes.bool,
  disablePortal: PropTypes.bool,
};

ClickToggle.defaultProps = {
  containerClass: 'div',
  renderAsLink: false,
  renderAsLightButton: false,
  stripped: false,
  isOpen: null,
  onToggle: null,
  id: undefined,
  alwaysRenderChildren: false,
  disablePortal: true,
};
