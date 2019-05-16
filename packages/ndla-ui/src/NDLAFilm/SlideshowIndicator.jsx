/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { movieShape } from './shapes';

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

class SlideshowIndicator extends Component {
  render() {
    const { slideshow, activeSlide, gotoSlide } = this.props;
    return (
      <div {...classes('indicator-wrapper')}>
        {slideshow.map((slide, index) => (
          <button
            key={`indicator_${index}`} // eslint-disable-line react/no-array-index-key
            type="button"
            {...classes('indicator-dot', index === activeSlide ? 'active' : '')}
            onClick={() => gotoSlide(index, true)}>
            <span />
          </button>
        ))}
      </div>
    );
  }
}

SlideshowIndicator.propTypes = {
  slideshow: PropTypes.arrayOf(movieShape),
  activeSlide: PropTypes.number,
};

export default SlideshowIndicator;
