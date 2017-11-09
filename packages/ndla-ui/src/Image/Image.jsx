import React from 'react';
import defined from 'defined';
import PropTypes from 'prop-types';

export const getSrcSets = src =>
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
  ].join(', ');

const Image = ({ alt, src, ...rest }) => {
  const srcSets = defined(rest.srcSets, getSrcSets(src));
  const sizes = defined(rest.sizes, '(min-width: 1000px) 1000px, 100vw');
  const width = defined(rest.width, 1024);
  return (
    <img
      alt={alt}
      src={`${src}?width=${width}`}
      srcSet={srcSets}
      sizes={sizes}
      {...rest}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  width: PropTypes.string,
  srcSets: PropTypes.string,
};

export default Image;
