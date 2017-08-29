/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { BY, NC, ND } from 'ndla-licenses';
import { LicenseIconList } from '../index';

const classes = new BEMHelper({
  name: 'glossary-word',
  prefix: 'c-',
});
const sourceClasses = new BEMHelper({
  name: 'source-list',
  prefix: 'c-',
});

class Glossary extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {}

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    return (
      <div {...classes('item')}>
        <button
          aria-haspopup
          href="#test"
          {...classes('link')}
          onClick={this.handleClick}>
          {children}
        </button>
        {isOpen
          ? <div {...classes('popup')}>
              <button
                {...classes('close', '', 'u-close')}
                onClick={this.handleClick}>
                Lukk
              </button>
              <h3 {...classes('title')}>
                {children}
              </h3>
              <p {...classes('description')}>
                {this.props.definition}
              </p>
              <div {...sourceClasses()}>
                <LicenseIconList className="c-source-list__item" noText licenseRights={[BY, NC, ND]} />
                <span {...sourceClasses('item')}>{this.props.author}</span>
                <span {...sourceClasses('item')}>{this.props.source}</span>
              </div>
            </div>
          : null}
      </div>
    );
  }
}

Glossary.propTypes = {
  children: PropTypes.string,
  definition: PropTypes.string,
  source: PropTypes.string,
  author: PropTypes.string,
};

export default Glossary;
