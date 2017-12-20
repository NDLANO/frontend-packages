/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// N.B This helper is intended to be used in https://github.com/ndlano/article-converter. It is not a general soultion for using portals in SSR applications.

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement &&
    !window.document.hidden
  ); // window.document.hidden === jsdom check
}

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const root = document.querySelector(this.props.selector);
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    const root = document.querySelector(this.props.selector);
    root.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string.isRequired,
};

export function createUniversalPortal(children, selector) {
  if (!canUseDOM()) {
    return <div data-react-universal-portal>{children}</div>;
  }
  return <Portal selector={selector}>{children}</Portal>;
}
