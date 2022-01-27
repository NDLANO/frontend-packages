/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';

interface Props {
  slideIndexTarget: number;
  slideshowLength?: number;
  gotoSlide: Function;
  rightArrow?: boolean;
}

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

const NavigationArrow = ({ slideIndexTarget, gotoSlide, rightArrow }: Props) => {
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
};

export default NavigationArrow;
