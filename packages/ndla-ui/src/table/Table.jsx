import React, { PropTypes, Component } from 'react';
import BEMHelper from 'react-bem-helper';
// import { enableResponsiveTables } from './tables-collapse';

const classes = new BEMHelper('c-table');

class Table extends Component {
  componentDidMount() {
    // enableResponsiveTables();
  }

  render() {
    const { children, ...rest } = this.props;
    return <table {...classes({ extra: ['o-table'] })} {...rest}>{children}</table>;
  }
}

Table.propTypes = {
  children: PropTypes.node,
};

export default Table;
