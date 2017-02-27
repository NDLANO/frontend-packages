/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from 'react-tabs';
import isFunction from 'lodash/isFunction';
import BEMHelper from 'react-bem-helper';

/* Disable default styles for tabs */
ReactTabs.setUseDefaultStyles(false);

const classes = new BEMHelper({
  name: 'tabs',
  prefix: 'c-',
});

class Tabs extends Component {
  constructor(props) {
    super();
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: props.selectedIndex || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { index } = this.state;

    if (nextProps.selectedIndex !== undefined && nextProps.selectedIndex !== index) {
      this.setState({ index: nextProps.selectedIndex });
    }
  }

  handleSelect(index, last) {
    this.setState({
      index,
    });

    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(index, last);
    }
  }

  render() {
    const { tabs } = this.props;
    const { index } = this.state;

    return (
      <ReactTabs {...classes()} onSelect={this.handleSelect} selectedIndex={this.state.index} >
        <TabList {...classes('list')}>
          { tabs.map((tab, i) => <Tab {...classes('tab', (i === index ? 'selected' : ''))} key={tab.key}>{tab.displayName}</Tab>) }
        </TabList>
        { tabs.map(tab => <TabPanel {...classes('panel')} key={tab.key}>{ isFunction(tab.content) ? tab.content() : tab.content }</TabPanel>) }
      </ReactTabs>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.node,
    ]).isRequired,
  })),
  onSelect: PropTypes.func,
  selectedIndex: PropTypes.number,
};


export default Tabs;
