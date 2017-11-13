/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import defined from 'defined';
import PropTypes from 'prop-types';

const makeSrcQueryString = (width, crop, focalPoint) => {
  const cropParams = crop
    ? `&cropStartX=${crop.startX}&cropEndX=${crop.endX}&cropStartY=${crop.startY}&cropEndY=${crop.endY}`
    : '';
  const focalPointParams = focalPoint
    ? `&focalX=${focalPoint.x}&focalY=${focalPoint.y}`
    : '';

  return `width=${width}${cropParams}${focalPointParams}`;
};

const getSrcSet = (src, crop, focalPoint) => {
  const widths = [
    2720,
    2080,
    1760,
    1440,
    1120,
    1000,
    960,
    800,
    640,
    480,
    320,
    240,
    180,
  ];
  return widths
    .map(
      width =>
        `${src}?${makeSrcQueryString(width, crop, focalPoint)} ${width}w`,
    )
    .join(', ');
};

// lazyload images via lasysizes
const LazyLoadImage = ({ alt, src, srcSet, lazyLoadSrc, sizes, ...rest }) => [
  <noscript key="noscript">
    <img alt={alt} src={`${src}`} srcSet={srcSet} sizes={sizes} {...rest} />
  </noscript>,
  <img
    alt={alt}
    key="img"
    style={{ width: '100%' }}
    className="lazyload"
    src={lazyLoadSrc}
    data-src={src}
    data-src-set={srcSet}
    data-sizes={sizes}
    {...rest}
  />,
];

LazyLoadImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  contentType: PropTypes.string,
  srcSet: PropTypes.string,
  lazyLoadSrc: PropTypes.string.isRequired,
};

const Image = ({
  alt,
  src,
  lazyLoad,
  lazyLoadSrc,
  crop,
  focalPoint,
  contentType,
  ...rest
}) => {
  const srcSet = defined(rest.srcSet, getSrcSet(src, crop, focalPoint));
  const sizes = defined(rest.sizes, '(min-width: 1024px) 1024px, 100vw'); // min-width === inuit-wrapper-width
  const fallbackWidth = defined(rest.fallbackWidth, 1024);
  const queryString = makeSrcQueryString(fallbackWidth, crop, focalPoint);

  if (contentType && contentType === 'image/gif') {
    return <img alt={alt} src={`${src}`} {...rest} />;
  }

  if (lazyLoad) {
    return (
      <LazyLoadImage
        alt={alt}
        src={`${src}?${queryString}`}
        srcSet={srcSet}
        sizes={sizes}
        lazyLoadSrc={lazyLoadSrc}
      />
    );
  }

  return (
    <img
      alt={alt}
      srcSet={srcSet}
      sizes={sizes}
      src={`${src}?${queryString}`}
      {...rest}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  fallbackWidth: PropTypes.number,
  contentType: PropTypes.string,
  srcSet: PropTypes.string,
  lazyLoad: PropTypes.bool,
  lazyLoadSrc: PropTypes.string,
  crop: PropTypes.shape({
    startX: PropTypes.number.isRequired,
    startY: PropTypes.number.isRequired,
    endX: PropTypes.number.isRequired,
    endY: PropTypes.number.isRequired,
  }),
  focalPoint: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

export default Image;
