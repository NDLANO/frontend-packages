import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronLeft, ChevronRight, Play } from 'ndla-icons/common';
import Slider from 'react-slick';
import SafeLink from '../common/SafeLink';

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

const settings = {
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
      settings: { slidesToShow: 7.5, slidesToScroll: 4 },
    },
    {
      breakpoint: 1800,
      settings: { slidesToShow: 5.5, slidesToScroll: 4 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4.25, slidesToScroll: 3 },
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
};

const SubjectCarousel = ({ subjects, title, narrowScreen, wideScreen }) => {
  const slides = subjects.map(subject => {
    const styleAttr = {};
    if (subject.image) {
      styleAttr.backgroundImage = `url(${subject.image})`;
    }
    return (
      <article {...classes('subject')} key={`slide-${subject.id}`}>
        <SafeLink to={subject.linkTo} {...classes('link')}>
          <div {...classes('image')} style={styleAttr}>
            <span {...classes('type')}>{subject.type}</span>
            {subject.type === 'film' && (
              <div {...classes('play-background')}>
                <Play />
              </div>
            )}
          </div>
          <h1 {...classes('title')}>{subject.title}</h1>
          <p {...classes('description')}>{subject.text}</p>
        </SafeLink>
      </article>
    );
  });
  return (
    <section {...classes('', { narrowScreen, wideScreen })}>
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
