import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronLeft, ChevronRight } from 'ndla-icons/common';
import Slider from 'react-slick';

const classes = BEMHelper('c-carousel');

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

const getDefaultSettings = () => ({
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  swipeToScroll: false,
  draggable: false,
});

const Carousel = ({ children, settings }) => {
  let mergedSettings = null;
  if (!settings) {
    mergedSettings = getDefaultSettings();
  } else {
    mergedSettings = Object.assign({}, getDefaultSettings(), settings);
  }

  return (
    <Slider {...classes()} {...mergedSettings}>
      {children}
    </Slider>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object, // eslint-disable-line
};

Carousel.defaultProps = {
  settings: null,
};

export default Carousel;
