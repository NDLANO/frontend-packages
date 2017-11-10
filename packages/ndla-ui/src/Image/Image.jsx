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

const getSrcSet = src =>
  [
    `${src}?width=2720 2720w`,
    `${src}?width=2080 2080w`,
    `${src}?width=1760 1760w`,
    `${src}?width=1440 1440w`,
    `${src}?width=1120 1120w`,
    `${src}?width=1000 1000w`,
    `${src}?width=960 960w`,
    `${src}?width=800 800w`,
    `${src}?width=640 640w`,
    `${src}?width=480 480w`,
    `${src}?width=320 320w`,
    `${src}?width=240 240w`,
    `${src}?width=180 180w`,
  ].join(', ');

// lazyload images via lasysizes
const LazyLoadImage = ({ src, srcSet, lazyLoadSrc, sizes, ...rest }) => {
  return [
    <noscript>
      <img src={`${src}`} srcSet={srcSet} sizes={sizes} {...rest} />
    </noscript>,
    <img
      style={{ width: '100%' }}
      className="lazyload"
      src={lazyLoadSrc}
      data-src={src}
      data-src-set={srcSet}
      data-sizes={sizes}
      {...rest}
    />,
  ];
};

LazyLoadImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  contentType: PropTypes.string,
  srcSet: PropTypes.string,
  lazyLoadSrc: PropTypes.string.isRequired,
};

const Image = ({ alt, src, lazyLoad, lazyLoadSrc, contentType, ...rest }) => {
  const srcSet = defined(rest.srcSet, getSrcSet(src));
  const sizes = defined(rest.sizes, '(min-width: 1024px) 1024px, 100vw'); // min-width === inuit-wrapper-width
  const fallbackWidth = defined(rest.fallbackWidth, 1024);

  if (contentType && contentType === 'image/gif') {
    return <img alt={alt} src={`${src}`} {...rest} />;
  }

  if (lazyLoad) {
    return (
      <LazyLoadImage
        src={`${src}?width=${fallbackWidth}`}
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
      src={`${src}?width=${fallbackWidth}`}
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
};

export default Image;
