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
import { Trans } from '@ndla/i18n';
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
  Image,
  FigureExpandButton,
  ImageLink,
} from '@ndla/ui';
import Button from '@ndla/button';

const mountedInstances = [];

function ImageWrapper({ typeClass, src, hasHiddenCation, children, t }) {
  if (hasHiddenCation) {
    return (
      <>
        <FigureExpandButton
          typeClass={typeClass}
          messages={{
            zoomImageButtonLabel: t(
              'license.images.itemImage.zoomImageButtonLabel',
            ),
            zoomOutImageButtonLabel: t(
              'license.images.itemImage.zoomOutImageButtonLabel',
            ),
          }}
        />
        {children}
      </>
    );
  }

  return (
    <ImageLink src={src} aria-label="Åpne bilde i et nytt vindu">
      {children}
    </ImageLink>
  );
}
class FigureWithImage extends Component {
  constructor(props) {
    super(props);
    this.id = uuid();
  }

  componentDidMount() {
    mountedInstances.push(this.id);
    if (mountedInstances.length === 1) {
      addShowDialogClickListeners();
      addCloseDialogClickListeners();
      updateIFrameDimensions();
      addEventListenerForResize();
      toggleLicenseInfoBox();
      addEventListenerForFigureZoomButton();
    }
  }

  componentWillUnmount() {
    const index = mountedInstances.indexOf(this.id);
    mountedInstances.splice(index, 1);
  }

  render() {
    const license = getLicenseByAbbreviation('CC-BY-ND-4.0', 'nb');
    const { type, alt, src, hasHiddenCaption } = this.props;

    const authors = [{ type: 'Opphavsmann', name: 'Gary Waters' }];
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
    const figureId = `figure-${this.id}`;

    return (
      <Trans>
        {({ t }) => (
          <Figure id={figureId} type={type}>
            {({ typeClass }) => (
              <>
                <ImageWrapper
                  hasHiddenCation={hasHiddenCaption}
                  typeClass={typeClass}
                  t={t}
                  src={src}>
                  <Image alt={alt} src={src} />
                </ImageWrapper>
                <FigureCaption
                  hideFigcaption={hasHiddenCaption}
                  figureId={figureId}
                  id={this.id}
                  locale="nb"
                  caption={caption}
                  reuseLabel="Bruk bilde"
                  licenseRights={license.rights}
                  authors={authors}>
                  <FigureLicenseDialog
                    id={this.id}
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
              </>
            )}
          </Figure>
        )}
      </Trans>
    );
  }
}

FigureWithImage.propTypes = {
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hasHiddenCaption: PropTypes.bool,
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

FigureWithImage.defaultProps = {
  hasHiddenCaption: false,
};

export default FigureWithImage;
