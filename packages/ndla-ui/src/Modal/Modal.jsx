/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { noScroll, uuid } from 'ndla-util';
import FocusTrapReact from 'focus-trap-react';
import { createUniversalPortal } from '../utils/createUniversalPortal';

import Button from '../Button';

const classes = new BEMHelper({
  name: 'modal',
  prefix: 'c-',
});

const uuidList = [];

const Portal = ({
  animationDuration,
  animateIn,
  animation,
  size,
  backgroundColor,
  noBackdrop,
  closeOnBackdrop,
  children,
  closeModal,
  onAnimationEnd,
  className,
  uuidData,
  narrow,
  onScroll,
}) => {
  const content = (
    <FocusTrapReact>
      <div className={`${classes('', { narrow }).className} ${className}`}>
        <div
          onScroll={onScroll}
          data-modal={uuidData}
          style={{ animationDuration: `${animationDuration}ms` }}
          onAnimationEnd={onAnimationEnd}
          {...classes('animation-container', {
            [animation]: true,
            animateIn,
            [size]: true,
            [backgroundColor]: true,
          })}>
          {children(closeModal)}
        </div>
        {!noBackdrop && (
          <div
            role="button"
            tabIndex={-1}
            onKeyDown={() => {}}
            onTouchStart={e => e.preventDefault()}
            onTouchMove={e => e.preventDefault()}
            onTouchEnd={e => e.preventDefault()}
            onClick={closeOnBackdrop && closeModal}
            style={{ animationDuration: `${animationDuration}ms` }}
            {...classes('backdrop', { in: animateIn })}
          />
        )}
      </div>
    </FocusTrapReact>
  );
  return createUniversalPortal(content, 'body');
};

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      animateIn: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.onKeypressed = this.onKeypressed.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.containerRef = React.createRef();
    this.scrollPosition = null;
    this.el = null;
    this.uuid = uuid();
  }

  componentDidUpdate() {
    if (this.scrollPosition && this.el) {
      this.el.scrollTop = this.scrollPosition;
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      this.removedModal();
    }
  }

  onAnimationEnd() {
    if (!this.state.animateIn && this.state.isOpen) {
      this.setState(
        {
          isOpen: false,
        },
        this.removedModal,
      );
    } else if (this.state.animateIn && this.state.isOpen) {
      this.el = document.body.querySelector(`[data-modal='${this.uuid}']`);
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }

  onKeypressed(e) {
    if (e.key === 'Escape' && uuidList[uuidList.length - 1] === this.uuid) {
      this.closeModal();
    }
  }

  onScroll(e) {
    this.scrollPosition = e.target.scrollTop;
  }

  closeModal() {
    if (this.state.isOpen) {
      this.setState({
        animateIn: false,
      });
    }
  }

  openModal() {
    if (!this.state.isOpen) {
      if (uuidList.indexOf(this.uuid) === -1) {
        noScroll(true, this.uuid);
        uuidList.push(this.uuid);
        window.addEventListener('keyup', this.onKeypressed, true);
      }
      this.setState({
        isOpen: true,
        animateIn: true,
      });
    }
  }

  removedModal() {
    this.scrollPosition = 0;
    if (uuidList.indexOf(this.uuid) !== -1) {
      noScroll(false, this.uuid);
      uuidList.splice(uuidList.indexOf(this.uuid), 1);
      window.removeEventListener('keyup', this.onKeypressed, true);
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }

  render() {
    const {
      activateButton,
      wrapperFunctionForButton,
      onClose,
      onOpen,
      containerClass: Component,
      onClick: onClickEvent,
      noBackdrop,
      closeOnBackdrop,
      animationDuration,
      animation,
      size,
      backgroundColor,
      className,
      children,
      narrow,
      ...rest
    } = this.props;

    const { isOpen, animateIn } = this.state;

    const clonedComponent =
      typeof activateButton === 'string' ? (
        <Button
          outline
          onClick={() => {
            this.openModal();
            if (onClickEvent) {
              onClickEvent();
            }
          }}>
          {activateButton}
        </Button>
      ) : (
        React.cloneElement(activateButton, {
          onClick: () => {
            this.openModal();
            if (onClickEvent) {
              onClickEvent();
            }
          },
        })
      );

    return (
      <Component {...rest}>
        {wrapperFunctionForButton
          ? wrapperFunctionForButton(clonedComponent)
          : clonedComponent}
        <div ref={this.containerRef}>
          {isOpen && (
            <Portal
              size={size}
              backgroundColor={backgroundColor}
              animationDuration={animationDuration}
              animateIn={animateIn}
              animation={animation}
              noBackdrop={noBackdrop}
              closeOnBackdrop={closeOnBackdrop}
              closeModal={this.closeModal}
              onAnimationEnd={this.onAnimationEnd}
              onScroll={this.onScroll}
              className={className}
              uuidData={this.uuid}
              narrow={narrow}>
              {children}
            </Portal>
          )}
        </div>
      </Component>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  containerClass: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  animation: PropTypes.oneOf(['slide-up', 'slide-down', 'zoom-in', 'subtle']),
  size: PropTypes.oneOf([
    'regular',
    'medium',
    'large',
    'fullscreen',
    'full-width',
  ]),
  backgroundColor: PropTypes.oneOf(['white', 'grey', 'grey-dark', 'blue']),
  animationDuration: PropTypes.number,
  activateButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapperFunctionForButton: PropTypes.func,
  noBackdrop: PropTypes.bool,
  closeOnBackdrop: PropTypes.bool,
  className: PropTypes.string,
  onOpen: PropTypes.func,
  narrow: PropTypes.bool,
};

Modal.defaultProps = {
  containerClass: 'div',
  animation: 'zoom-in',
  size: 'regular',
  backgroundColor: 'blue',
  animationDuration: 300,
  closeOnBackdrop: true,
  className: '',
  narrow: false,
};
