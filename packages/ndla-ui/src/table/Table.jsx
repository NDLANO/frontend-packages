import React, { PropTypes } from 'react';

require('./table.scss');

export const Table = ({ ...rest }) => <table>{rest.children}</table>;

Table.propTypes = {
  children: PropTypes.node,
};
