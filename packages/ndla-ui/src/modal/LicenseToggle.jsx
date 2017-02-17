/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component, PropTypes } from 'react';

import Icon from '../../src/icons/Icon';


class LicenseToggle extends Component {

  constructor() {
    super();
    this.state = {
      condition: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ condition: !this.state.condition });
    document.getElementById('figureExample').classList.toggle('c-figure--active');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} data-show-id="1" className="c-button--transparent u-float-right u-z-top"><Icon.OpenWindow /> Gjenbruk</button>
        <div className={this.state.condition ? '' : 'u-toggle'} id="figmeta">
          {this.props.children}
        </div>
      </div>
    );
  }
}

LicenseToggle.propTypes = {
  children: PropTypes.node,
};

export default LicenseToggle;
