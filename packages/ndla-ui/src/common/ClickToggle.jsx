/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { noScroll } from '@ndla/util';
import elementType from 'react-prop-types/lib/elementType';
import FocusTrap from 'focus-trap-react';
import Button from '@ndla/button';

import Dialog from '../Dialog';

export default class ClickToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.unmountTrap = this.unmountTrap.bind(this);
  }

  unmountTrap() {
    if (this.props.onToggle) {
      this.handleOnClose();
    } else {
      noScroll(false);
      this.setState({ isOpen: false });
    }
  }

  handleClick() {
    const useState = this.props.isOpen === null;
    const isOpen = useState ? !this.state.isOpen : !this.props.isOpen;
    if (this.props.onToggle) {
      this.props.onToggle(isOpen);
    } else {
      noScroll(this.props.noScrollDisabled ? false : isOpen);
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
        <FocusTrap
          active={showDialog}
          focusTrapOptions={{
            onDeactivate: this.unmountTrap,
            clickOutsideDeactivates: true, // Only works when click on scrollbar
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
        </FocusTrap>
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
