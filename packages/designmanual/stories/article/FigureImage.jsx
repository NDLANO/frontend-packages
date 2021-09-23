/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from '@ndla/util';
import { useTranslation } from 'react-i18next';
import { initArticleScripts } from '@ndla/article-scripts';

import { Figure, Image, FigureExpandButton, ImageLink } from '@ndla/ui';
import FigureCaptionExample from './FigureCaptionExample';
import { useRunOnlyOnce } from './useRunOnlyOnce';

function ImageWrapper({ src, hasHiddenCaption, children }) {
  if (hasHiddenCaption) {
    return <>{children}</>;
  }

  return (
    <ImageLink src={src} aria-label="Åpne bilde i et nytt vindu">
      {children}
    </ImageLink>
  );
}

const calculateSizesFromType = (type) => {
  switch (type) {
    case 'left':
    case 'right':
      return '470px';
    case 'small-left':
    case 'small-right':
      return '320px';
    case 'xsmall-right':
    case 'xsmall-left':
      return '200px';
    default:
      return '(min-width: 1024px) 1024px, 100vw';
  }
};

function FigureImage({ type, alt, src, caption, hasHiddenCaption, link }) {
  const { t } = useTranslation();
  const id = useRunOnlyOnce(uuid(), () => {
    initArticleScripts();
  });
  const figureId = `figure-${id}`;
  const sizes = calculateSizesFromType(type);
  const messages = {
    rulesForUse: t('license.images.rules'),
    zoomImageButtonLabel: t('license.images.itemImage.zoomImageButtonLabel'),
    reuse: t('image.reuse'),
    download: t('image.download'),
    modelPermission: 'Personen(e) på bildet har godkjent at det kan brukes videre.',
  };

  return (
    <Figure id={figureId} type={type}>
      {({ typeClass }) => (
        <>
          <ImageWrapper hasHiddenCaption={hasHiddenCaption} typeClass={typeClass} src={src}>
            <Image
              alt={alt}
              src={src}
              sizes={sizes}
              expandButton={
                hasHiddenCaption && (
                  <FigureExpandButton
                    typeClass={typeClass}
                    messages={{
                      zoomImageButtonLabel: t('license.images.itemImage.zoomImageButtonLabel'),
                      zoomOutImageButtonLabel: t('license.images.itemImage.zoomOutImageButtonLabel'),
                    }}
                  />
                )
              }
            />
          </ImageWrapper>
          <FigureCaptionExample
            id={id}
            figureId={figureId}
            caption={caption}
            hasHiddenCaption={hasHiddenCaption}
            link={link}
            messages={messages}
          />
        </>
      )}
    </Figure>
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

export default FigureImage;
