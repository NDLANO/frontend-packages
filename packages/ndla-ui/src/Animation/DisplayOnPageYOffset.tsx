/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, ReactNode } from 'react';
import throttle from 'lodash/throttle';
import Fade from './Fade';

interface Props {
  yOffsetMin: number;
  yOffsetMax?: number | null;
  children: ReactNode;
}

interface State {
  show: boolean;
}

export default class DisplayOnPageYOffset extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: props.yOffsetMin === 0,
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
      (this.props.yOffsetMax === null || window.pageYOffset <= (this.props.yOffsetMax ?? 0))
    ) {
      if (!this.state.show) {
        this.setState({ show: true });
      }
    } else if (this.state.show) {
      this.setState({ show: false });
    }
  }

  render() {
    const { children } = this.props;
    return <Fade show={this.state.show}>{children}</Fade>;
  }

  static defaultProps = {
    yOffsetMax: null,
  };
}
