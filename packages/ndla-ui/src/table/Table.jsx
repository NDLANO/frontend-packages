import React, { PropTypes } from 'react';

require('./table.scss');

export const TableSimple = ({ ...rest }) => <table>{rest.children}</table>;

TableSimple.propTypes = {
  children: PropTypes.node,
};
