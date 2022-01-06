/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, ReactNode, MouseEvent } from 'react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
  copyNode: ReactNode;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  showCopyTimer: number;
}

interface State {
  showCopyState: boolean;
}

class CopyButton extends Component<Props, State> {
  static defaultProps = {
    showCopyTimer: 4000,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      showCopyState: false,
    };
    this.timer = null;
    this.handleCopy = this.handleCopy.bind(this);
    this.exitCopyState = this.exitCopyState.bind(this);
  }

  timer: NodeJS.Timeout | null;

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  exitCopyState() {
    this.setState({
      showCopyState: false,
    });
  }

  handleCopy(e?: MouseEvent<HTMLButtonElement>) {
    this.props.onClick(e);
    if (!this.state.showCopyState) {
      this.setState(
        {
          showCopyState: true,
        },
        () => {
          this.timer = setTimeout(this.exitCopyState, this.props.showCopyTimer);
        },
      );
    }
  }

  render() {
    const { children, onClick, copyNode, showCopyTimer, ...rest } = this.props;

    return (
      <Button onClick={this.handleCopy} {...rest}>
        {this.state.showCopyState ? copyNode : children}
      </Button>
    );
  }
}

export default CopyButton;
