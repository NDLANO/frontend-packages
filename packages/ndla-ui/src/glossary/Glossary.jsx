/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component, PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';


const classes = new BEMHelper({
  name: 'glossary-word',
  prefix: 'c-',
});

class Glossary extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
  }

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
        <a href="#test" {...classes('link')} onClick={this.handleClick}>
          {children}
        </a>
        {
          isOpen ?
            <div {...classes('popup')}>
              <button {...classes('close')} onClick={this.handleClick}>Lukk</button>
              <h3 {...classes('title')}>Ord</h3>
              <p {...classes('description')}>Forklaring</p>
              <div {...classes('footer')}>
                Kilde
              </div>
            </div>
          : null
        }
      </div>
    );
  }
}

Glossary.propTypes = {
  children: PropTypes.string,
};

export default Glossary;
