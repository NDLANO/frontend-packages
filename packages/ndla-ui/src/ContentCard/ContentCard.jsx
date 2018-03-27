import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';

import BackgroundImage from '../BackgroundImage';

const classes = BEMHelper('c-content-card');


const ContentCard = ({ heading, images, description, type }) => (
  <article {...classes()}>
    <header>
      <div {...classes('image-wrapper')}>
        {images}
        <p {...classes('type')}>{type}</p>
      </div>
      <h1 {...classes('heading')}>{heading}</h1>
    </header>
    <p {...classes('description')}>{description}</p>
  </article>
);

ContentCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: BackgroundImage.propTypes.images,
}

export default ContentCard;
