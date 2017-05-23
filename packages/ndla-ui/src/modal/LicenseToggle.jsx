/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getLicenseByAbbreviation } from 'ndla-licenses';

import Icon from '../icons/Icon';

import { ClickableLicenseByline } from '../';


class LicenseToggle extends Component {

  constructor() {
    super();
    this.state = {
      condition: false,
    };

    this.handleClick = this.handleClick.bind(this);
    return false;
  }

  handleClick() {
    this.setState({ condition: !this.state.condition });
    document.getElementById('figureExample').classList.toggle('c-figure--active');
    console.warn('test2');

    // Show/hide content
    if (this.state.condition === true) {
      document.getElementById('figmeta').classList.remove('u-hidden');
    } else {
      document.getElementById('figmeta').classList.add('u-hidden');
    }
  }

  render() {
    return (
      <figure className="c-figure" id="figureExample">
        <button onClick={this.handleClick} className="c-figure__close">X</button>
        <div className="c-figure__img">
          <a onClick={this.handleClick} href="">
            {this.props.children}
          </a>
        </div>
      </figure>
    );
  }
}

LicenseToggle.propTypes = {
  children: PropTypes.node,
};

export default LicenseToggle;
