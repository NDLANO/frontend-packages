/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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

import { Figure, Image, FigureExpandButton, ImageLink } from '@ndla/ui';
import { FigureCaptionExample } from './FigureCaptionExample';

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

export function FigureImage({ type, alt, src, caption, hasHiddenCaption }) {
  const idRef = useRef(uuid());

  useEffect(() => {
    mountedInstances.push(idRef.current);
    if (mountedInstances.length === 1) {
      addShowDialogClickListeners();
      addCloseDialogClickListeners();
      updateIFrameDimensions();
      addEventListenerForResize();
      toggleLicenseInfoBox();
      addEventListenerForFigureZoomButton();
    }

    return () => {
      const index = mountedInstances.indexOf(idRef.current);
      mountedInstances.splice(index, 1);
    };
  }, []);

  const id = idRef.current;
  const figureId = `figure-${id}`;

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
              <FigureCaptionExample
                id={id}
                figureId={figureId}
                caption={caption}
                hasHiddenCaption={hasHiddenCaption}
              />
            </>
          )}
        </Figure>
      )}
    </Trans>
  );
}

FigureImage.propTypes = {
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

FigureImage.defaultProps = {
  caption: '',
  hasHiddenCaption: false,
};
