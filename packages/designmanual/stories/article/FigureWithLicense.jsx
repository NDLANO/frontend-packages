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
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  addEventListenerForResize,
  updateIFrameDimensions,
  addEventListenersForZoom,
  toggleLicenseInfoBox,
} from 'ndla-article-scripts';

import { Figure, FigureCaption, FigureLicenseDialog, FigureFullscreenDialog, Button } from 'ndla-ui';

const authors = [{ type: 'Opphavsmann', name: 'Gary Waters' }];

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
      addEventListenersForZoom();
      toggleLicenseInfoBox();
    }
  }

  render() {
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av bildet',
      learnAboutLicenses: license.linkText,
      modelPremission:
        'Personen(e) på bildet har godkjent at det kan brukes videre.',
      source: 'Kilde',
      title: 'Tittel',
    };

    const caption = this.props.caption ? this.props.caption : ``;
    const reuseLabel = this.props.reuseLabel
      ? `Bruk ${this.props.reuseLabel}`
      : 'Bruk bildet';
    const typeLabel = this.props.typeLabel ? this.props.typeLabel : 'bilde';

    const fullscreenView =
          <FigureFullscreenDialog
            id={this.id}
            messages={messages}
            title="Mann med lupe"
            image={this.props.children}
            caption={this.props.caption}
            reuseLabel={reuseLabel}
            licenseRights={license.rights}
            authors={authors}
          >
          <Button outline>Kopier referanse</Button>
          <Button outline>Last ned {typeLabel}</Button>
          </FigureFullscreenDialog>;
          

    const captionAndDetails = !this.props.noCaption
      ? [
          !this.props.noFigcaption ? (
            <FigureCaption
              key={caption}
              caption={caption}
              reuseLabel={reuseLabel}
              licenseRights={license.rights}
              authors={authors}
            />
          ) : 
          
          // TODO: Add HiddenFigureCaption component with Fullscreen icon which expands caption on click
          // Comment: added as separate constant
          null
          
          , 
          <FigureLicenseDialog
            id={this.id}
            key="details"
            licenseRights={license.rights}
            authors={authors}
            licenseUrl={license.url}
            origin="https://www.wikimedia.com"
            title="Mann med lupe"
            messages={messages}>
            <Button outline>Kopier referanse</Button>
            <Button outline>Last ned {typeLabel}</Button>
          </FigureLicenseDialog>,
        ]
      : null;

    return (
      <Figure
        id={this.id}
        resizeIframe={this.props.resizeIframe}
        type={this.props.type}
        captionView={captionAndDetails}
        fullscreenView={fullscreenView}
        noFigcaption={this.props.noFigcaption}>
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
  noFigcaption: PropTypes.bool,
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
  runScripts: false,
  noCaption: false,
  noFigcaption: false,
};

export default FigureWithLicense;
