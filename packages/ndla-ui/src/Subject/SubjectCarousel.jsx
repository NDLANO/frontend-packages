import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronLeft, ChevronRight, Play } from 'ndla-icons/common';
import Slider from 'react-slick';
import SafeLink from '../common/SafeLink';
import ContentCard from '../ContentCard';
import { breakpoints } from 'ndla-util';

import { SubjectSectionTitle } from './Subject';

const classes = BEMHelper('c-subject-carousel');

const arrow = direction => (
  { className, style, onClick }, // eslint-disable-line
) => (
  <button
    className={`${classes('arrow', [direction]).className} ${className}`}
    onClick={onClick}>
    {direction === 'prev' ? <ChevronLeft /> : <ChevronRight />}
  </button>
);

const NextArrow = arrow('next');
const PrevArrow = arrow('prev');

const getSettings = (maxCol = null) => ({
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: false,
  infinite: false,
  slidesToShow: 5.5,
  slidesToScroll: 4,
  swipeToScroll: false,
  draggable: false,
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
    <div>
      <ContentCard
        key={`slide-${subject.id}`}
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
      <Slider {...classes('slider')} {...settings}>
        {slides}
      </Slider>
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
