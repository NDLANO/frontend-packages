import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, delay, timeout, exitDelay, ...rest }) => (
  <CSSTransition
    {...rest}
    timeout={timeout}
    classNames="u-fade"
    unmountOnExit
    onEnter={node => {
      const n = node;
      n.style.transitionDuration = `${timeout}ms`;

      if (delay) {
        n.style.transitionDelay = `${delay}ms`;
      }
    }}
    onExit={
      exitDelay
        ? node => {
            const n = node;
            n.style.transitionDelay = `${exitDelay}ms`;
          }
        : null
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
  timeout: 300,
  delay: null,
  exitDelay: null,
};

export default Fade;
