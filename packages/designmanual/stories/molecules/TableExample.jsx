import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table } from 'ndla-ui';
import { uuid } from 'ndla-util';

import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  removeShowDialogClickListeners,
  initTableScript,
  removeTableEventListeners,
} from 'ndla-article-scripts';

class TableExample extends Component {
  constructor(props) {
    super(props);

    this.tableId = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      initTableScript();
      addCloseDialogClickListeners();
      addShowDialogClickListeners();
    }
  }

  componentWillUnmount() {
    if (this.props.runScripts) {
      removeTableEventListeners();
      removeShowDialogClickListeners();
    }
  }

  render() {
    return (
      <Table
        id={this.tableId}
        messages={{
          dialogCloseButton: 'Lukk',
          expandButtonLabel: 'Vis stor versjon',
        }}>
        {this.props.children}
      </Table>
    );
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
