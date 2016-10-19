import React, { PropTypes } from 'react';

export const Center = ({ children }) =>
  <div style={{ margin: '0 auto', maxWidth: '900px' }}>{ children }</div>;

Center.propTypes = {
  children: PropTypes.node.isRequired,
};
