import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { breakpoints } from '@ndla/util';
import Carousel from '@ndla/carousel';

import ContentCard from '../ContentCard';
import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-carousel');

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen }) => {
  const modifiers = { narrowScreen, wideScreen };

  if (wideScreen) {
    if (subjects.length <= 4) {
      modifiers.center = true;
    } else if (subjects.length === 5) {
      modifiers.center5Col = true;
    } else if (subjects.length === 6) {
    }
  }
  const itemWidth = 260 * 0.8;
  return (
    <section {...classes('', modifiers)}>
      <SubjectSectionTitle>{title}</SubjectSectionTitle>
      <Carousel startingWidth={itemWidth} distanceBetweenItems={13}>
        {subjects.map(subject => (
          <div
            style={{ width: `${itemWidth}px`, paddingRight: '26px' }}
            key={`slide-${subject.id}`}>
            <ContentCard
              toLinkProps={subject.toLinkProps}
              heading={subject.title}
              description={subject.text}
              isFilm={subject.isFilm}
              type={subject.type}
              images={[
                {
                  url: subject.image,
                  types: Object.keys(breakpoints),
                },
              ]}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

SubjectCarousel.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string,
      toLinkProps: PropTypes.func.isRequired,
    }),
  ),
  title: PropTypes.string,
  narrowScreen: PropTypes.bool,
  wideScreen: PropTypes.bool,
};

SubjectCarousel.defaultProps = {
  subjects: [],
  title: '',
  narrowScreen: false,
  wideScreen: false,
};

export default SubjectCarousel;
