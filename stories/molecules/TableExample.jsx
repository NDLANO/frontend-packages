import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table } from '@ndla/ui';
import { uuid } from '@ndla/util';
import { initTableScript, removeTableEventListeners } from '@ndla/article-scripts';

class TableExample extends Component {
  constructor(props) {
    super(props);

    this.tableId = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      initTableScript();
    }
  }

  componentWillUnmount() {
    if (this.props.runScripts) {
      removeTableEventListeners();
    }
  }

  render() {
    return <Table id={this.tableId}>{this.props.children}</Table>;
  }
}

TableExample.propTypes = {
  runScripts: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TableExample.defaultProps = {
  runScripts: false,
};

export default TableExample;
