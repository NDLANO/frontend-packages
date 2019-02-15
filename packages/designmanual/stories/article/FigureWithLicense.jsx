/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uuid } from '@ndla/util';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  addEventListenerForResize,
  updateIFrameDimensions,
  toggleLicenseInfoBox,
  addEventListenerForFigureZoomButton,
} from '@ndla/article-scripts';

import { Figure } from '@ndla/ui';
import { FigureCaptionExample } from './FigureCaptionExample';

class FigureWithLicense extends Component {
  constructor(props) {
    super(props);
    this.id = uuid();
  }

  componentDidMount() {
    if (this.props.runScripts) {
      addShowDialogClickListeners();
      addCloseDialogClickListeners();
      updateIFrameDimensions();
      addEventListenerForResize();
      toggleLicenseInfoBox();
      addEventListenerForFigureZoomButton();
    }
  }

  render() {
    const {
      hasHiddenCaption,
      messages,
      resizeIframe,
      caption,
      type,
    } = this.props;

    const figureId = `figure-${this.id}`;

    return (
      <Figure id={figureId} resizeIframe={resizeIframe} type={type}>
        {this.props.children}
        {!hasHiddenCaption && (
          <FigureCaptionExample
            id={this.id}
            figureId={figureId}
            caption={caption}
            messages={messages}
            hasHiddenCaption={hasHiddenCaption}
          />
        )}
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string,
  runScripts: PropTypes.bool,
  resizeIframe: PropTypes.bool,
  hasHiddenCaption: PropTypes.bool,
  messages: PropTypes.object,
  type: PropTypes.oneOf([
    'full',
    'full-column',
    'left',
    'small-left',
    'right',
    'small-right',
    'xsmall-right',
    'xsmall-left',
  ]),
};

FigureWithLicense.defaultProps = {
  caption: '',
  runScripts: false,
  noFigcaption: false,
  hasHiddenCaption: false,
};

export default FigureWithLicense;
