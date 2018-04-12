import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

import Carousel from '../Carousel';

const classes = BEMHelper('c-frontpage-highlighted');

const FrontpageHighlighted = ({ heading, children }) => (
  <section {...classes()}>
    <h1 {...classes('heading')}>{heading}</h1>
    <Carousel
      settings={{
        responsive: [
          {
            breakpoint: 1000,
            settings: { slidesToShow: 3.25, slidesToScroll: 3 },
          },
          {
            breakpoint: 400,
            settings: { slidesToShow: 2.25, slidesToScroll: 2 },
          },
        ],
      }}>
      {children}
    </Carousel>
  </section>
);

FrontpageHighlighted.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FrontpageHighlighted;
