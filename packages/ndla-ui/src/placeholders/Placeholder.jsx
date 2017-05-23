import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = ({ children, ...rest }) => (
  <div {...rest}>
    {children}
  </div>
);

Placeholder.PropTypes = {
  children: PropTypes.node,
};

export default Placeholder;

