/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// Lazyload image with lacysizes (https://github.com/aFarkas/lazysizes)
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

export default LazyLoadImage;
