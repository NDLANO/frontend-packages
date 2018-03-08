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
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToScroll: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 3.25 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2.25 },
    },
    {
      breakpoint: 400,
      settings: { slidesToShow: 2.25 },
    },
  ],
};

const SubjectCarousel = ({ subjects, title }) => {
  const slides = subjects.map(subject => {
    const styleAttr = {};
    if (subject.image) {
      styleAttr.backgroundImage = `url(${subject.image})`;
    }
    return (
      <article {...classes('subject')} key={`slide-${subject.id}`}>
        <div {...classes('image')} style={styleAttr}>
          <span {...classes('type')}>{subject.type}</span>
          {subject.type === 'film' ? <Play /> : null}
        </div>
        <SafeLink to={subject.linkTo} {...classes('link')}>
          <h1 {...classes('title')}>{subject.title}</h1>
          <p {...classes('description')}>{subject.text}</p>
        </SafeLink>
      </article>
    );
  });
  return (
    <section {...classes()}>
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
};

SubjectCarousel.defaultProps = {
  subjects: [],
  title: '',
};

export default SubjectCarousel;
