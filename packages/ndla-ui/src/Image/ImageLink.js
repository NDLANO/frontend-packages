/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { makeSrcQueryString } from './Image';
import { FocalPointShape, CropShape } from './shapes';

const StyledLink = styled.a`
  box-shadow: inset 0 0;
`;

export function ImageLink({ src, crop, children, ...rest }) {
  return (
    <StyledLink
      target="_blank"
      href={`${src}?${makeSrcQueryString(10720, crop)}`}
      rel="noopener noreferrer"
      {...rest}>
      {children}
    </StyledLink>
  );
}

ImageLink.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sizes: PropTypes.string,
  crop: CropShape,
  focalPoint: FocalPointShape,
};
