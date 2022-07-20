/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

const StyledBackdrop = styled('div')<Props>`
  position: fixed;
  z-index: 9000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1, 1, 1, 0.3);
  animation-name: ${(p) => (p.animateIn ? 'fadeIn' : 'fadeOut')};
  animation-duration: ${(props) => props.animationDuration};
`;

interface Props {
  animateIn?: boolean;
  animationDuration?: string;
}
export const Backdrop = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <StyledBackdrop
      ref={ref}
      role="button"
      tabIndex={-1}
      onTouchStart={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
      onTouchEnd={(e) => e.preventDefault()}
      {...props}
    />
  );
});

Backdrop.defaultProps = {
  animateIn: false,
  animationDuration: '400ms',
};
