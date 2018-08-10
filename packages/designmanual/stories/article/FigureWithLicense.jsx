/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getLicenseByAbbreviation } from 'ndla-licenses';
import { uuid } from 'ndla-util';
import {
  addCloseDialogClickListeners,
  addShowDialogClickListeners,
  addEventListenerForResize,
  updateIFrameDimensions,
  toggleLicenseInfoBox,
  addZoomImageListeners,
} from 'ndla-article-scripts';

import {
  Figure,
  FigureCaption,
  FigureLicenseDialog,
  FigureFullscreenDialog,
  Button,
  CopyButton,
} from 'ndla-ui';

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
      addZoomImageListeners();
    }
  }

  render() {
    const license = getLicenseByAbbreviation('by-nc-nd', 'nb');
    const { resizeIframe, type, figureCaptionLink } = this.props;

    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av bildet',
      learnAboutLicenses: license.linkText,
      modelPremission:
        'Personen(e) på bildet har godkjent at det kan brukes videre.',
      source: 'Kilde',
      title: 'Tittel',
      zoomImageButtonLabel: 'Forstørr bilde',
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
        {!resizeIframe ? ( // Probably image
          <Fragment>
            <Button
              key="button"
              data-dialog-trigger-id={`fs-${this.id}`}
              data-dialog-source-id={figureId}
              stripped
              aria-label="Se stor utgave av bilde"
              className="u-fullw">
              {this.props.children}
            </Button>
            <FigureFullscreenDialog
              key="dialog"
              id={`fs-${this.id}`}
              messages={messages}
              title="Mann med lupe"
              caption={caption}
              reuseLabel={reuseLabel}
              license={license}
              actionButtons={[
                <Button key="copy" outline>
                  Kopier referanse
                </Button>,
                <Button key="download" outline>
                  Last ned bilde
                </Button>,
              ]}
              authors={authors}>
              <img
                className="c-figure-license__img"
                src={this.props.children.props.src}
                alt={this.props.children.props.alt}
              />
            </FigureFullscreenDialog>
          </Fragment>
        ) : (
          this.props.children
        )}

        {!this.props.noFigcaption ? (
          <FigureCaption
            figureId={figureId}
            id={this.id}
            key="caption"
            caption={caption}
            reuseLabel={reuseLabel}
            licenseRights={license.rights}
            link={figureCaptionLink}
            authors={authors}>
            <FigureLicenseDialog
              id={this.id}
              key="details"
              authors={authors}
              license={license}
              origin="https://www.wikimedia.com"
              title="Mann med lupe"
              messages={messages}>
              <CopyButton outline copyNode="Kopiert!">
                Kopier referanse
              </CopyButton>
              <Button outline>Last ned bilde</Button>
            </FigureLicenseDialog>
          </FigureCaption>
        ) : null}
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
  figureCaptionLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    external: PropTypes.bool,
  }),
};

FigureWithLicense.defaultProps = {
  runScripts: false,
  noCaption: false,
  noFigcaption: false,
};

export default FigureWithLicense;
