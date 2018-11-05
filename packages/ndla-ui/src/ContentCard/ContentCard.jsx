import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { Play } from '@ndla/icons/common';

import SafeLink from '../common/SafeLink';

import BackgroundImage from '../BackgroundImage';

const classes = BEMHelper('c-content-card');

const ContentCard = ({
  heading,
  images,
  description,
  type,
  isFilm,
  toLinkProps,
}) => (
  <article {...classes()}>
    <SafeLink {...toLinkProps()} {...classes('link')}>
      <header>
        <div {...classes('image-wrapper')}>
          <BackgroundImage images={images} />
          {isFilm && (
            <div {...classes('play-background')}>
              <Play />
            </div>
          )}
          <p {...classes('type')}>{type}</p>
        </div>
        <h1 {...classes('heading')}>{heading}</h1>
      </header>
      <p {...classes('description')}>{description}</p>
    </SafeLink>
  </article>
);

ContentCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: BackgroundImage.propTypes.images,
  isFilm: PropTypes.bool,
  toLinkProps: PropTypes.func.isRequired,
};

ContentCard.defaultProps = {
  isFilm: false,
};

export default ContentCard;
