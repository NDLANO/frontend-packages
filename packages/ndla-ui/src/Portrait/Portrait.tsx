/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import React from 'react';

interface PortraitWrapperProps {
  size: string;
}
const PortraitWrapper = styled.div<PortraitWrapperProps>`
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  span {
    display: block;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.16);
    background-size: cover;
    background-position: center center;
    width: ${(p) => p.size};
    height: ${(p) => p.size};
  }
`;

interface Props {
  src: string;
  alt: string;
  className?: string;
  modifier?: 'small' | 'large';
}

const Portrait = ({ src, alt, modifier, className }: Props) => {
  const size = modifier === 'small' ? '4rem' : modifier === 'large' ? '10rem' : '7rem';
  return (
    <PortraitWrapper size={size} className={className}>
      <span role="img" aria-label={alt} style={{ backgroundImage: `url(${src})` }} />
    </PortraitWrapper>
  );
};

export default Portrait;
