/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { uuid } from '@ndla/util';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  addEventListenerForResize,
  updateIFrameDimensions,
  toggleLicenseInfoBox,
  addEventListenerForFigureZoomButton,
} from '@ndla/article-scripts';

import {
  Figure,
  FigureCaption,
  FigureLicenseDialog,
  makeSrcQueryString,
} from '@ndla/ui';
import Button from '@ndla/button';

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
      toggleLicenseInfoBox();
      addEventListenerForFigureZoomButton();
    }
  }

  render() {
    const license = getLicenseByAbbreviation('CC-BY-ND-4.0', 'nb');
    const { resizeIframe, type } = this.props;

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

    const figureId = `figure-${this.id}`;

    return (
      <Figure
        id={figureId}
        resizeIframe={resizeIframe}
        type={type}
        noFigcaption={this.props.noFigcaption}>
        {!this.props.noFigcaption ? (
          <a
            target="_blank"
            href={`${this.props.children.props.src}?${makeSrcQueryString(
              2720,
              this.props.children.props.crop,
              this.props.children.props.focalPoint,
            )}`}
            aria-label="Åpne bilde i et nytt vindu"
            rel="noopener noreferrer">
            {this.props.children}
          </a>
        ) : (
          this.props.children
        )}
        <FigureCaption
          hideFigcaption={this.props.noFigcaption}
          figureId={figureId}
          id={this.id}
          key="caption"
          locale="nb"
          caption={caption}
          reuseLabel={reuseLabel}
          licenseRights={license.rights}
          authors={authors}>
          <FigureLicenseDialog
            id={this.id}
            key="details"
            authors={authors}
            license={license}
            origin="https://www.wikimedia.com"
            title="Mann med lupe"
            locale="nb"
            messages={messages}>
            <Button outline>Kopier referanse</Button>
            <Button outline>Last ned bilde</Button>
          </FigureLicenseDialog>
        </FigureCaption>
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  reuseLabel: PropTypes.string,
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
