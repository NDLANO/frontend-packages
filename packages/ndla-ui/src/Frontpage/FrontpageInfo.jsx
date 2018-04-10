import React from 'react';
import PropTypes from 'prop-types';

const FrontpageInfo = ({ children }) => (
  <div className="c-frontpage-info">{children}</div>
);

FrontpageInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FrontpageInfo;
