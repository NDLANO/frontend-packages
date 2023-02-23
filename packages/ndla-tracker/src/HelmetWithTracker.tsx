/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import warning from 'tiny-warning';
import withTracker from './withTracker';

interface Props {
  title: string;
}

/**
 * Convenience component for including Helmet and page view tracking to a component.
 *
 * Since we only can track a page once, changes to the title prop will trigger a warning.
 */
class HelmetWithTracker extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    warning(
      !(prevProps.title !== this.props.title),
      'N.B! Title changes are not supported because of page view tracking. \n\n Please use willTrackPageView provided by withTracker for more lowlevel control over which title to track.',
    );
  }

  static getDocumentTitle(props: Props) {
    return props.title;
  }

  render() {
    return <Helmet {...this.props} />;
  }
}

export default withTracker(HelmetWithTracker);
