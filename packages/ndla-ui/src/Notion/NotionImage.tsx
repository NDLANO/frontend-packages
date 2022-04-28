/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import React from 'react';
import styled from '@emotion/styled';
import { animations } from '@ndla/core';
import { breakpoints, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Image, FigureExpandButton } from '..';
import { Copyright } from '../types';
import FigureNotion from './FigureNotion';

const StyledImageWrapper = styled.div`
  overflow: hidden;
  width: 260px;
  padding-top: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    margin: 0 auto;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  max-height: 162px;
  transition: transform ${animations.durations.fast};
  &:hover {
    transform: scale(1.1);
    opacity: 1.1;
    transition-duration: 0.5s;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    min-width: 260px;
  }
`;

interface Props {
  type: 'image' | 'video' | 'H5P' | 'iframe' | 'external';
  id: string;
  src: string;
  alt: string;
  imageCopyright?: Partial<Copyright>;
}
export const NotionImage = ({ id, src, alt, imageCopyright, type }: Props) => {
  const { t } = useTranslation();

  const imageId = `image-${id}`;
  const imageFigureId = `image-figure-${id}`;

  return (
    <FigureNotion
      hideFigCaption
      figureId={imageFigureId}
      id={imageId}
      title={alt}
      copyright={imageCopyright}
      licenseString={imageCopyright?.license?.license ?? ''}
      type={'image'}>
      {({ typeClass }) => (
        <StyledImageWrapper>
          <StyledImage
            alt={alt}
            src={src}
            expandButton={
              <FigureExpandButton
                type={type}
                typeClass={typeClass}
                messages={{
                  zoomImageButtonLabel: t('license.images.itemImage.zoomImageButtonLabel'),
                  zoomOutImageButtonLabel: t('license.image.itemImage.zoomOutImageButtonLabel'),
                }}
              />
            }
          />
        </StyledImageWrapper>
      )}
    </FigureNotion>
  );
};
