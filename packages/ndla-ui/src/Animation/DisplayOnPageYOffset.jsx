/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

export default class DisplayOnPageYOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: props.yOffsetMin === 0,
      fadeIn: false,
      fadeOut: false,
    };
    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
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
    if (
      window.pageYOffset >= this.props.yOffsetMin &&
      (this.props.yOffsetMax === null ||
        window.pageYOffset <= this.props.yOffsetMax)
    ) {
      if (!this.state.display) {
        this.setState({ display: true, fadeIn: true, fadeOut: false });
      }
    } else if (this.state.display) {
      this.setState({ display: false, fadeOut: true, fadeIn: false });
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
  yOffsetMin: PropTypes.number.isRequired,
  yOffsetMax: PropTypes.number,
};

DisplayOnPageYOffset.defaultProps = {
  yOffsetMax: null,
};
