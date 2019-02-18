/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeSrcQueryString } from './Image';
import { FocalPointShape, CropShape } from './shapes';

export function ImageLink({ src, crop, children, ...rest }) {
  return (
    <a
      target="_blank"
      href={`${src}?${makeSrcQueryString(10720, crop)}`}
      rel="noopener noreferrer"
      {...rest}>
      {children}
    </a>
  );
}

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sizes: PropTypes.string,
  crop: CropShape,
  focalPoint: FocalPointShape,
};
