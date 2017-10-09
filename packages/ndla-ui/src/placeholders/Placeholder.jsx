import React from 'react';
import PropTypes from 'prop-types';

const Placeholder = ({ children, ...rest }) => <div {...rest}>{children}</div>;

Placeholder.propTypes = {
  children: PropTypes.node,
};

export default Placeholder;
