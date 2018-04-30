import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table } from 'ndla-ui';
import {
  initTableScript,
  removeTableEventListeners,
} from 'ndla-article-scripts';

class TableExample extends Component {
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
    return <Table>{this.props.children}</Table>;
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
