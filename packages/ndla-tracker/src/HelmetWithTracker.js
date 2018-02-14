/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import warning from 'warning';
import withTracker from './withTracker';

/**
 * Convenience component for including Helmet and page view tracking to a component.
 *
 * Since we only can track a page once, changes to the title prop will trigger a warning.
 */
class HelmetWithTracker extends Component {
  static getDocumentTitle(props) {
    return props.title;
  }

  componentWillReceiveProps(nextProps) {
    warning(
      !(nextProps.title !== this.props.title),
      'N.B! Title changes are not supported because of page view tracking. \n\n Please use willTrackPageView provided by withTracker for more lowlevel control over which title to track.',
    );
  }

  render() {
    return <Helmet {...this.props} />;
  }
}

HelmetWithTracker.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withTracker(HelmetWithTracker);
