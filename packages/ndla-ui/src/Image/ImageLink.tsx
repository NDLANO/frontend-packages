/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { makeSrcQueryString } from './Image';
import { ImageCrop, ImageFocalPoint } from '.';

const StyledLink = styled.a`
  box-shadow: inset 0 0;
`;

interface Props {
  src: string;
  children: ReactNode;
  sizes?: string;
  crop?: ImageCrop;
  focalPoint?: ImageFocalPoint;
}

export function ImageLink({ src, crop, children, ...rest }: Props) {
  return (
    <StyledLink
      target="_blank"
      href={`${src}?${makeSrcQueryString(undefined, crop)}`}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </StyledLink>
  );
}
