import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper('c-table');

export const Table = ({ ...rest }) => <table {...classes({ extra: ['o-table'] })}>{rest.children}</table>;

Table.propTypes = {
  children: PropTypes.node,
};
