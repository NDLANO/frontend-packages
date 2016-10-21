import React, { PropTypes } from 'react';

export const Center = ({ children, style }) =>
  <div style={{ margin: '0 auto', maxWidth: '900px', ...style }}>{ children }</div>;

Center.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export const InlineContainer = ({ children }) => <div className="inline-container">{ children }</div>;

InlineContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DottedContainer = ({ children }) => <div className="dotted-container">{children}</div>;

DottedContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
