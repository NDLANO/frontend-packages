/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CalculatedCarouselProps, Carousel } from '@ndla/carousel';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { IconButtonV2 } from '@ndla/button';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';
import FilmContentCard from './FilmContentCard';
import { MovieType } from './types';

interface Props {
  slideshow: MovieType[];
  autoSizedProps: CalculatedCarouselProps;
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

const StyledFigure = styled.figure`
  max-height: 550px;
  width: 100%;
  ${mq.range({ until: breakpoints.tablet })} {
    min-height: 440px;
    max-height: 440px;
  }
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselContainer = styled.div`
  transform: translateY(-30%);
`;

interface StyledFilmContentCardProps {
  current?: boolean;
}

const shouldForwardProp = (p: string) => p !== 'current';

const StyledFilmContentCard = styled(FilmContentCard, { shouldForwardProp })<StyledFilmContentCardProps>`
  min-height: 240px;
  max-height: 240px;
  margin-bottom: 2%;
  transform: ${(p) => (p.current ? 'translateY(0%)' : 'translateY(10%)')};
  transition: all 200ms;
`;

const Slideshow = ({ slideshow, autoSizedProps }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(slideshow[0]);

  return (
    <section>
      <StyledSafeLink to={currentSlide.path} tabIndex={-1} aria-hidden>
        <StyledFigure>
          <StyledImg src={currentSlide.metaImage?.url ?? ''} alt={currentSlide.metaImage?.alt ?? ''} />
        </StyledFigure>
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
            <IconButtonV2 aria-label={''}>
              <ChevronLeft />
            </IconButtonV2>
          }
          rightButton={
            <IconButtonV2 aria-label={''}>
              <ChevronRight />
            </IconButtonV2>
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
  );
};

export default Slideshow;
