import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { breakpoints } from 'ndla-util';

const classes = BEMHelper('c-background-image');

const BackgroundImage = ({ images, showOverlay }) => (
  <div {...classes('', showOverlay)}>
    {images &&
      images.map(image =>
        image.types.map(type => (
          <div
            key={`${image.url}${type}`}
            {...classes('background', type)}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        )),
      )}
  </div>
);

BackgroundImage.propTypes = {
  showOverlay: PropTypes.bool,
  className: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(breakpoints)))
        .isRequired,
    }),
  ).isRequired,
};

BackgroundImage.defaultProps = {
  showOverlay: false,
};

export default BackgroundImage;
