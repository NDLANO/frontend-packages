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
import { uuid } from 'ndla-util';
import {
  addCloseFigureDetailsClickListeners,
  addShowFigureDetailsClickListeners,
  addEventListenerForResize,
  updateIFrameDimensions,
  addEventListenersForZoom,
} from 'ndla-article-scripts';

import { Figure, FigureCaption, FigureDetails } from 'ndla-ui';

const authors = [{ type: 'Opphavsmann', name: 'Gary Waters' }];

class FigureWithLicense extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    if (this.props.runScripts) {
      addShowFigureDetailsClickListeners();
      addCloseFigureDetailsClickListeners();
      updateIFrameDimensions();
      addEventListenerForResize();
      addEventListenersForZoom();
    }
  }

  update() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av bildet',
      learnAboutLicenses: license.linkText,
      source: 'Kilde',
      title: 'Tittel',
    };

    const caption = this.props.caption ? this.props.caption : ``;
    const reuseLabel = this.props.reuseLabel
      ? `Bruk ${this.props.reuseLabel}`
      : 'Bruk bildet';
    const typeLabel = this.props.typeLabel ? this.props.typeLabel : 'bilde';

    const captionAndDetails = !this.props.noCaption
      ? [
          <FigureCaption
            key={caption}
            caption={caption}
            reuseLabel={reuseLabel}
            licenseRights={license.rights}
            authors={authors}
          />,
          <FigureDetails
            id={uuid()}
            key="details"
            licenseRights={license.rights}
            authors={authors}
            licenseUrl={license.url}
            origin="https://www.wikimedia.com"
            title="Mann med lupe"
            messages={messages}>
            <button
              className="c-button c-button--outline c-figure-license__button"
              type="button">
              Kopier referanse
            </button>
            <button
              className="c-button c-button--outline c-figure-license__button"
              type="button">
              Last ned {typeLabel}
            </button>
          </FigureDetails>,
        ]
      : null;

    return (
      <Figure
        resizeIframe={this.props.resizeIframe}
        supportFloating={this.props.supportFloating}
        type={this.props.type}
        captionView={captionAndDetails}>
        {this.props.children}
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string,
  typeLabel: PropTypes.string,
  runScripts: PropTypes.bool,
  noCaption: PropTypes.bool,
  resizeIframe: PropTypes.bool,
  type: PropTypes.oneOf(['full', 'left', 'small-left', 'right', 'small-right']),
  supportFloating: PropTypes.bool,
};

FigureWithLicense.defaultProps = {
  runScripts: false,
  noCaption: false,
};

export default FigureWithLicense;
