/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useState } from 'react';
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
    columnsPrSlide: 3,
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
    max-width: 90%;
    min-width: 90%;
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
  margin-top: -50px;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-top: -70px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin-top: -150px;
  }
`;

interface StyledFilmContentCardProps {
  current?: boolean;
}

const SlideshowButton = styled(IconButtonV2)`
  margin-top: ${spacing.normal};
`;

const shouldForwardProp = (p: string) => p !== 'current';

const StyledFilmContentCard = styled(FilmContentCard, { shouldForwardProp })<StyledFilmContentCardProps>`
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
                <FilmCard
                  key={movie.id}
                  current={movie.id === currentSlide.id}
                  movie={movie}
                  columnWidth={autoSizedProps.columnWidth}
                  setCurrentSlide={() => setCurrentSlide(movie)}
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

interface FilmCardProps {
  setCurrentSlide: () => void;
  movie: MovieType;
  current: boolean;
  columnWidth: number;
}

const FilmCard = ({ setCurrentSlide, movie, current, columnWidth }: FilmCardProps) => {
  const [hoverCallback, setHoverCallback] = useState<ReturnType<typeof setTimeout> | undefined>(undefined);

  const onHover = useCallback(() => {
    const timeout = setTimeout(() => setCurrentSlide(), 500);
    setHoverCallback(timeout);
  }, [setCurrentSlide]);

  return (
    <StyledFilmContentCard
      onMouseEnter={onHover}
      onMouseLeave={() => {
        if (hoverCallback) {
          clearTimeout(hoverCallback);
          setHoverCallback(undefined);
        }
      }}
      onFocus={() => setCurrentSlide()}
      current={current}
      aria-describedby={'currentMovieDescription'}
      key={movie.id}
      movie={movie}
      columnWidth={columnWidth}
      resourceTypes={[]}
    />
  );
};

export default FilmSlideshow;
