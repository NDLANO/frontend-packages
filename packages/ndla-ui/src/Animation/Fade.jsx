import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, show }) => (
  <CSSTransition in={show} timeout={300} classNames="u-fade" unmountOnExit>
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Fade;
