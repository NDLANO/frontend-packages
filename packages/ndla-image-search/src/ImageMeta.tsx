/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import prettyBytes from 'pretty-bytes';
import styled from '@emotion/styled';
import { fonts } from '@ndla/core';
import { IImageDimensions } from '@ndla/types-backend/image-api';

const StyledDiv = styled.div`
  ${fonts.sizes('16px', 1.3)}
`;

const StyledSpan = styled.span`
  text-align: center;
`;

interface Props {
  contentType: string;
  fileSize: number;
  imageDimensions?: IImageDimensions;
}

const ImageMeta = ({ contentType, fileSize, imageDimensions }: Props) => {
  const dimensions = imageDimensions ? ` - ${imageDimensions.width}x${imageDimensions.height} px` : '';
  return (
    <StyledDiv>
      <StyledSpan>{`${contentType} - ${prettyBytes(fileSize)}${dimensions}`}</StyledSpan>
    </StyledDiv>
  );
};

export default ImageMeta;
