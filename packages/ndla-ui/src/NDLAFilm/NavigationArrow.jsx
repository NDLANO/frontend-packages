/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

class NavigationArrow extends Component {
  render() {
    const { slideIndexTarget, gotoSlide, rightArrow } = this.props;
    const Chevron = rightArrow ? ChevronRight : ChevronLeft;

    return (
      <div {...classes('navigation-arrows', rightArrow ? 'right' : '')}>
        <button
          type="button"
          tabIndex={-1}
          onClick={() => {
            gotoSlide(slideIndexTarget, true);
          }}>
          <Chevron />
        </button>
      </div>
    );
  }
}

NavigationArrow.propTypes = {
  slideIndexTarget: PropTypes.number,
  slideshowLength: PropTypes.number,
  gotoSlide: PropTypes.func,
  rightArrow: PropTypes.bool,
};

export default NavigationArrow;
