import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  addEventListenerForResize,
  removeEventListenerForResize,
  updateIFrameDimensions,
} from 'ndla-article-scripts';

class Embedded extends Component {
  componentDidMount() {
    if (this.props.runScripts) {
      updateIFrameDimensions();
      addEventListenerForResize();
    }
  }

  componentWillUnmount() {
    if (this.props.runScripts) {
      removeEventListenerForResize();
    }
  }

  render() {
    const classes = classNames({
      'c-embedded': true,
      'c-embedded--resize': this.props.resize,
    });

    return <figure className={classes}>{this.props.children}</figure>;
  }
}

Embedded.propTypes = {
  children: PropTypes.node.isRequired,
  resize: PropTypes.bool,
  runScripts: PropTypes.bool,
};

export default Embedded;
