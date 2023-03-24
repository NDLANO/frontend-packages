/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Carousel, CarouselAutosize } from '@ndla/carousel';
import { breakpoints, colors, misc, mq, spacing, spacingUnit } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { IconButtonV2 } from '@ndla/button';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';
import FilmContentCard from './FilmContentCard';
import { MovieType } from './types';

export const slideshowBreakpoints: {
  until?: keyof typeof breakpoints;
  columnsPrSlide: number;
  distanceBetweenItems: number;
  arrowOffset: number;
  margin?: number;
  maxColumnWidth?: number;
}[] = [
  {
    until: 'mobileWide',
    columnsPrSlide: 2,
    distanceBetweenItems: spacingUnit / 2,
    margin: spacingUnit,
    arrowOffset: 13,
  },
  {
    until: 'tabletWide',
    columnsPrSlide: 3,
    distanceBetweenItems: spacingUnit / 2,
    margin: spacingUnit,
    arrowOffset: 13,
  },
  {
    until: 'desktop',
    columnsPrSlide: 3,
    distanceBetweenItems: spacingUnit,
    margin: spacingUnit * 2,
    arrowOffset: 0,
  },
  {
    until: 'wide',
    columnsPrSlide: 3,
    distanceBetweenItems: spacingUnit,
    margin: spacingUnit * 2,
    arrowOffset: 0,
  },
  {
    until: 'ultraWide',
    columnsPrSlide: 3,
    distanceBetweenItems: spacingUnit,
    margin: spacingUnit * 3.5,
    arrowOffset: 0,
  },
  {
    columnsPrSlide: 4,
    distanceBetweenItems: spacingUnit,
    margin: spacingUnit * 3.5,
    arrowOffset: 0,
  },
];

interface Props {
  slideshow: MovieType[];
}

const SlideInfoWrapper = styled.div`
  position: absolute;
  color: ${colors.white};
  max-width: 40%;
  min-width: 40%;
  top: 40%;
  right: 5%;
  ${mq.range({ until: breakpoints.desktop })} {
    top: 30%;
    max-width: 60%;
    min-width: 60%;
  }
  ${mq.range({ until: breakpoints.tablet })} {
    max-width: 100%;
    min-width: 100%;
    left: 5%;
  }
`;

const StyledSafeLink = styled(SafeLink)`
  position: relative;
  display: block;
  box-shadow: none;
`;

const InfoWrapper = styled.div`
  padding: ${spacing.normal};
  border-radius: ${misc.borderRadius};
  border: 0.5px solid ${colors.brand.primary};
  background-color: rgba(11, 29, 45, 0.8);
  h3 {
    margin: 0px;
  }
`;

const StyledImg = styled.img`
  max-height: 600px;
  object-position: top;
  width: 100%;
  aspect-ratio: 16/9;
  ${mq.range({ until: breakpoints.tablet })} {
    min-height: 440px;
    max-height: 440px;
  }
  object-fit: cover;
`;

const CarouselContainer = styled.div`
  transform: translateY(-30%);
`;

interface StyledFilmContentCardProps {
  current?: boolean;
}

const SlideshowButton = styled(IconButtonV2)`
  margin-top: ${spacing.normal};
`;

const shouldForwardProp = (p: string) => p !== 'current';

const StyledFilmContentCard = styled(FilmContentCard, { shouldForwardProp })<StyledFilmContentCardProps>`
  min-height: 252px;
  max-height: 252px;
  margin-bottom: 2%;
  transform: ${(p) => (p.current ? 'translateY(0%)' : 'translateY(10%)')};
  transition: all 200ms;
`;

const FilmSlideshow = ({ slideshow }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(slideshow[0]);

  return (
    <CarouselAutosize breakpoints={slideshowBreakpoints} itemsLength={slideshow.length}>
      {(autoSizedProps) => (
        <section>
          <StyledSafeLink to={currentSlide.path} tabIndex={-1} aria-hidden>
            <StyledImg src={currentSlide.metaImage?.url ?? ''} alt={currentSlide.metaImage?.alt ?? ''} />
            <SlideInfoWrapper>
              <InfoWrapper>
                <h3>{currentSlide.title}</h3>
                <span id="currentMovieDescription">{currentSlide.metaDescription}</span>
              </InfoWrapper>
            </SlideInfoWrapper>
          </StyledSafeLink>
          <CarouselContainer>
            <Carousel
              leftButton={
                <SlideshowButton aria-label={''}>
                  <ChevronLeft />
                </SlideshowButton>
              }
              rightButton={
                <SlideshowButton aria-label={''}>
                  <ChevronRight />
                </SlideshowButton>
              }
              items={slideshow.map((movie) => (
                <StyledFilmContentCard
                  onFocus={() => setCurrentSlide(movie)}
                  current={movie.id === currentSlide.id}
                  aria-describedby={'currentMovieDescription'}
                  key={movie.id}
                  movie={movie}
                  columnWidth={autoSizedProps.columnWidth}
                  resourceTypes={[]}
                />
              ))}
              {...autoSizedProps}
            />
          </CarouselContainer>
        </section>
      )}
    </CarouselAutosize>
  );
};

export default FilmSlideshow;
