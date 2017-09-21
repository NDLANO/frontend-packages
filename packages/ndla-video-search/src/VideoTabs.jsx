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
    this.state = {
      index: 0,
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.setIndexTab = this.setIndexTab.bind(this);
  }

  componentWillMount() {
    const { searchTypes } = this.props;
    this.setIndexTab(searchTypes);
  }

  componentWillReceiveProps(nextProps) {
    const { searchTypes } = nextProps;
    if (
      this.state.index !== 0 &&
      searchTypes === undefined &&
      this.props.searchTypes !== undefined
    ) {
      this.setIndexTab(searchTypes);
    }
  }

  setIndexTab(searchTypes) {
    switch (searchTypes) {
      case 'brightcove':
        this.setState({ index: 0 });
        break;
      case 'youtube':
        this.setState({ index: 1 });
        break;
      default:
        break;
    }
  }

  handleOnSelect(index, last) {
    const { onSearchTypeChange } = this.props;
    if (index !== last) {
      this.setState({ index });
      switch (index) {
        case 0:
          onSearchTypeChange('brightcove');
          break;
        case 1:
          onSearchTypeChange('youtube');
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { index } = this.state;
    const { content, enableYouTube } = this.props;

    const tabs = [
      {
        title: 'Brightcove',
        content,
      },
      enableYouTube
        ? {
            title: 'YouTube',
            content,
          }
        : '',
    ];

    return (
      <Tabs selectedIndex={index} onSelect={this.handleOnSelect} tabs={tabs} />
    );
  }
}

VideoTabs.propTypes = {
  searchTypes: PropTypes.string,
  enableYouTube: PropTypes.bool,
  onSearchTypeChange: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};

export default VideoTabs;
