/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DisplayOnPageYOffset extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false, fadeIn: false, fadeOut: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll() {
    if (window.pageYOffset > this.props.yOffset) {
      if (!this.state.display) {
        this.setState({ display: true, fadeIn: true, fadeOut: false });
      }
    } else if (
      this.state.display &&
      window.pageYOffset < this.props.yOffset &&
      window.pageYOffset > 0
    ) {
      this.setState({ display: false, fadeOut: true, fadeIn: false });
    } else if (window.pageYOffset === 0) {
      // Don't fade out on route changes (typically when pageYOffset === 0)
      this.setState({ display: false, fadeOut: false, fadeIn: false });
    }
  }

  render() {
    return React.cloneElement(this.props.children, {
      display: this.state.display,
      fadeIn: this.state.fadeIn,
      fadeOut: this.state.fadeOut,
    });
  }
}

DisplayOnPageYOffset.propTypes = {
  children: PropTypes.node.isRequired,
  yOffset: PropTypes.number.isRequired,
};
