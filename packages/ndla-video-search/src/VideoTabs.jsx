/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'ndla-tabs';

class VideoTabs extends Component {
  constructor(props) {
    super(props);
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(index, last) {
    const { onSearchTypeChange, tabs } = this.props;
    if (index !== last) {
      onSearchTypeChange(tabs[index].title.toLowerCase());
    }
  }

  render() {
    const { tabs } = this.props;

    return <Tabs onSelect={this.handleOnSelect} tabs={tabs} />;
  }
}

VideoTabs.propTypes = {
  searchTypes: PropTypes.string,
  onSearchTypeChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.node,
    }),
  ).isRequired,
};

export default VideoTabs;
