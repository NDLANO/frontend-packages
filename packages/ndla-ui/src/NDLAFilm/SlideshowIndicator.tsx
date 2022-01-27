/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { NDLAMovie } from './interfaces';

interface Props {
  slideshow: Array<NDLAMovie>;
  activeSlide: number;
  gotoSlide: Function;
}

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const SlideshowIndicator = ({ slideshow, activeSlide, gotoSlide }: Props) => {
  return (
    <div {...classes('indicator-wrapper')}>
      {slideshow.map((slide, index) => (
        <button
          key={`indicator_${index}`}
          type="button"
          {...classes('indicator-dot', index === activeSlide ? 'active' : '')}
          onClick={() => gotoSlide(index, true)}>
          <span />
        </button>
      ))}
    </div>
  );
};

export default SlideshowIndicator;
