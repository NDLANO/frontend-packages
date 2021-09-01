import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

interface Props {
  children: ReactNode;
  delay?: number | undefined | null;
  timeout?: number;
  exitDelay?: number | undefined | null;
}

const defaultTimeout = 300;

const Fade = ({
  children,
  delay = null,
  timeout = defaultTimeout,
  exitDelay = null,
  ...rest
}: Props & Omit<CSSTransitionProps, 'timeout' | 'unmountOnExit' | 'onEnter' | 'onExit'>) => (
  <CSSTransition
    classNames="u-fade"
    {...rest}
    timeout={timeout}
    unmountOnExit
    onEnter={(node: HTMLElement) => {
      const n = node;
      n.style.transitionDuration = `${timeout}ms`;

      if (delay) {
        n.style.transitionDelay = `${delay}ms`;
      }
    }}
    onExit={
      exitDelay
        ? (node: HTMLElement) => {
            const n = node;
            n.style.transitionDelay = `${exitDelay}ms`;
          }
        : undefined
    }>
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
  delay: PropTypes.number,
  exitDelay: PropTypes.number,
};

Fade.defaultProps = {
  timeout: defaultTimeout,
  delay: null,
  exitDelay: null,
};

export default Fade;
