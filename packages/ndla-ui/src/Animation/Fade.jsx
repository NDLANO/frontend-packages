import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, timeout, ...rest }) => (
  <CSSTransition unmountOnExit classNames="u-fade" timeout={timeout} {...rest}>
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
};

Fade.defaultProps = {
  timeout: 300,
};

export default Fade;
