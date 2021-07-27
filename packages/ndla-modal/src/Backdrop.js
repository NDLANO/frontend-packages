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
import { css } from '@emotion/core';

const StyledBackdrop = styled('div')`
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.3);
  animation-name: fadeOut;
  ${props =>
    props.animateIn &&
    css`
      animation-name: fadeIn;
    `}
  animation-duration: ${props => props.animationDuration};
`;

export const Backdrop = React.forwardRef((props, ref) => {
  return (
    <StyledBackdrop
      ref={ref}
      role="button"
      tabIndex={-1}
      onTouchStart={e => e.preventDefault()}
      onTouchMove={e => e.preventDefault()}
      onTouchEnd={e => e.preventDefault()}
      {...props}
    />
  );
});

Backdrop.propTypes = {
  animateIn: PropTypes.bool,
};

Backdrop.defaultProp = {
  animateIn: false,
  animationDuration: '400ms',
};
