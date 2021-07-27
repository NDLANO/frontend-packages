import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import { breakpoints } from '@ndla/util';

import OneColumn from '../Layout/OneColumn';
import { FFHeroBadge } from '../../lib';

const classes = BEMHelper('c-subject-header');

const SubjectHeader = ({ images, heading, showFFBadge }) => (
  <header {...classes()}>
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
    <OneColumn noPadding>
      {showFFBadge && (
        <div {...classes('badge')}>
          <FFHeroBadge noMargin />
        </div>
      )}
      <h1 {...classes('heading')}>{heading}</h1>
    </OneColumn>
  </header>
);

SubjectHeader.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(breakpoints))).isRequired,
    }),
  ),
  heading: PropTypes.string.isRequired,
  showFFBadge: PropTypes.bool,
};

SubjectHeader.defaultProps = {
  images: null,
};

export default SubjectHeader;
