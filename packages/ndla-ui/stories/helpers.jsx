import React, { PropTypes } from 'react';

export const Center = ({ children, style }) =>
  <div style={{ margin: '0 auto', maxWidth: '900px', ...style }}>{ children }</div>;

Center.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export const InlineComponentsContainer = ({ children }) =>
  <div className="inline-components-container">{ children }</div>;

InlineComponentsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
