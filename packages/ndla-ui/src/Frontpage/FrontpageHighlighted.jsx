import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = BEMHelper('c-frontpage-highlighted');

const FrontpageHighlighted = ({ heading, children }) => (
  <section {...classes()}>
    <h1 {...classes('heading')}>{heading}</h1>
    <div {...classes('wrapper')}>{children}</div>
  </section>
);

FrontpageHighlighted.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FrontpageHighlighted;
