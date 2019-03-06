import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { Play } from '@ndla/icons/common';

import SafeLink from '../common/SafeLink';

const classes = BEMHelper('c-content-card');

const ContentCard = ({
  title,
  text,
  image,
  type,
  isFilm,
  toLinkProps,
  columnWidth,
}) => (
  <article {...classes()} style={{ width: `${columnWidth}px`}}>
    <SafeLink
      {...toLinkProps()}
      title={title}
      {...classes('link')}>
      <header>
        <div {...classes('image-wrapper')}>
          <div
            {...classes('background-image')}
            role="img"
            aria-label={title}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          {isFilm && (
            <div {...classes('play-background')}>
              <Play />
            </div>
          )}
          <p {...classes('type')}>{type}</p>
        </div>
        <h1 {...classes('heading')}>{title}</h1>
      </header>
      <p {...classes('description')}>{text}</p>
    </SafeLink>
  </article>
);

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFilm: PropTypes.bool,
  toLinkProps: PropTypes.func.isRequired,
};

ContentCard.defaultProps = {
  isFilm: false,
};

export default ContentCard;
