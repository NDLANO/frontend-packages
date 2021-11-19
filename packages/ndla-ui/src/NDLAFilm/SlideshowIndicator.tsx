/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { IMovie } from './shapes';

interface Props {
  slideshow: Array<IMovie>;
  activeSlide: number;
  gotoSlide: Function;
}

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const SlideshowIndicator: React.FC<Props> = ({ slideshow, activeSlide, gotoSlide }) => {
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
};

export default SlideshowIndicator;
