import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { breakpoints } from 'ndla-util';

import ContentCard from '../ContentCard';
import { SubjectSectionTitle } from './Subject';
import Carousel from '../Carousel';

const classes = BEMHelper('c-subject-carousel');

const getSettings = (maxCol = null) => ({
  slidesToShow: 5.5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 3000,
      settings: { slidesToShow: maxCol || 7.5, slidesToScroll: 4 },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: maxCol && maxCol < 6 ? maxCol : 5.5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: maxCol && maxCol === 4 ? maxCol : 4.25,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: { slidesToShow: 3.25, slidesToScroll: 3 },
    },
    {
      breakpoint: 720,
      settings: { slidesToShow: 2.5, slidesToScroll: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 3.25, slidesToScroll: 2 },
    },
    {
      breakpoint: 400,
      settings: { slidesToShow: 2.25, slidesToScroll: 2 },
    },
  ],
});

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen }) => {
  const slides = subjects.map(subject => (
    <div key={`slide-${subject.id}`}>
      <ContentCard
        url={subject.linkTo}
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
  ));

  const modifiers = { narrowScreen, wideScreen };
  let settings = getSettings();

  if (wideScreen) {
    if (slides.length <= 4) {
      modifiers.center = true;
      settings = getSettings(4);
    } else if (slides.length === 5) {
      modifiers.center5Col = true;
      settings = getSettings(5);
    } else if (slides.length === 6) {
      settings = getSettings(6);
    }
  }

  return (
    <section {...classes('', modifiers)}>
      <SubjectSectionTitle>{title}</SubjectSectionTitle>
      <Carousel {...classes('slider')} settings={settings}>
        {slides}
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
      linkTo: PropTypes.string.isRequired,
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
