/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, useEffect, useState } from 'react';
import { isIE, browserVersion } from 'react-device-detect';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import throttle from 'lodash/throttle';
import {
  breakpoints,
  mq,
  spacing,
  colors,
  fonts,
  animations,
} from '@ndla/core';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { makeSrcQueryString } from '../Image';
import { movieType } from './types';
import { isLetter } from './isLetter';
const IMAGE_WIDTH = 143;

const StyledNewLetter = styled.h2`
  color: #fff;
  margin: ${spacing.large} 0 ${spacing.spacingUnit * 0.75}px;
  ${fonts.sizes(26, 1.1)};
  ${mq.range({ from: breakpoints.tablet })} {
    text-indent: ${spacing.spacingUnit * 0.75}px;
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: ${colors.brand.greyDark};
    margin-top: ${spacing.small};
  }
`;

const StyledWrapper = styled.section`
  width: 652px;
  max-width: 100%;
  margin: ${spacing.large} auto;
  padding: 0 ${spacing.normal};
  display: flex;
  flex-direction: column;
`;

type MovieItemProps = {
  inView: boolean | null;
};

const MovieItem = styled.div<MovieItemProps>`
  margin: 0 0 ${spacing.spacingUnit * 0.75}px;
  display: inline-flex;
  &:last-child {
    margin-bottom: ${spacing.large};
  }
  opacity: 0;
  transform: translateY(${spacing.xsmall});
  transition: all ${animations.durations.slow} ease;
  ${(props: MovieItemProps) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`;

const MovieTextWrapper = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.xsmall} ${spacing.xsmall} 0 0;
  }
  flex: 1;
`;

type movieImageType = {
  backgroundImage?: string | null;
};

const MovieImage = styled.div<movieImageType>`
  width: 104px;
  height: 80px;
  background-color: ${colors.ndlaFilm.filmColorLight};
  ${(props: movieImageType) =>
    props.backgroundImage !== null &&
    css`
      background-image: url(${props.backgroundImage});
    `}
  background-size: cover;
  background-position: center center;
  margin: 0 ${spacing.spacingUnit * 0.75}px 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-left: ${spacing.spacingUnit * 0.75}px;
    width: ${IMAGE_WIDTH}px;
    height: 90px;
  }
  position: relative;
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    background: ${colors.ndlaFilm.filmColor};
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

const MovieTitle = styled.h3`
  color: #fff;
  margin: 0 0 2px;
  ${fonts.sizes(18, 1.3)};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(20, 1.3)};
  }
`;

const MovieDescription = styled.p`
  color: ${colors.brand.greyLighter};
  margin: 0;
  ${fonts.sizes(14, 1.5)};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(16, 1.5)};
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

type isIEProps = {
  isIE11: boolean;
};

const StyledSafeLink = styled(SafeLink)<isIEProps>`
  box-shadow: none;
  display: flex;
  ${props =>
    props.isIE11 &&
    css`
      flex: 1;
    `}
  &:hover,
  &:focus {
    ${MovieTitle} {
      text-decoration: underline;
    }
    ${MovieImage} {
      &:after {
        transition: opacity 200ms ease;
        display: block;
        opacity: 0.3;
      }
    }
  }
`;

interface Props {
  movies: movieType[];
  locale: string;
}

type visibleImagesProps = {
  [key: string]: boolean | null;
};

const hasForEachPolyfill = () => {
  // Polyfill for ie11
  if ('NodeList' in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
};

const AllMoviesAlphabetically: React.FunctionComponent<Props> = ({
  movies,
  locale,
}) => {
  const isIE11 = isIE && parseInt(browserVersion) < 12;
  // Split into Letters.
  let previousLetter = '';
  const wrapperRef: React.RefObject<HTMLElement> = React.useRef(null);
  const [visibleImages, setVisibleImages] = useState<visibleImagesProps>({});

  const scrollEvent = () => {
    hasForEachPolyfill();
    const updates: visibleImagesProps = {};
    const allChildren: NodeListOf<HTMLElement> | null =
      wrapperRef.current && wrapperRef.current.querySelectorAll('[role=img]');
    const windowInnerHeight = window.innerHeight;
    if (allChildren) {
      let started: boolean = false;
      let ended: boolean = false;
      allChildren.forEach((el: HTMLElement, index: number) => {
        if (!ended) {
          const rect: ClientRect = el.getBoundingClientRect();
          if (!started) {
            if (rect.top > -20) {
              updates[index] = true;
              started = true;
            }
          } else {
            updates[index] = true;
            if (rect.top > windowInnerHeight + 20) {
              ended = true;
            }
          }
        }
      });
    }
    setVisibleImages(visibleImages => ({ ...visibleImages, ...updates }));
  };

  useEffect(() => {
    const throttledScrollEvent = throttle(() => {
      scrollEvent();
    }, 100);
    window.addEventListener('scroll', throttledScrollEvent);
    scrollEvent();
    return () => {
      window.removeEventListener('scroll', throttledScrollEvent);
    };
  }, []);

  useEffect(() => {
    scrollEvent();
  }, [movies]);

  return (
    <StyledWrapper ref={wrapperRef}>
      {movies.map((movie: movieType, index: number) => {
        const currentLetter = movie.title.substr(0, 1);
        const isNewLetter =
          currentLetter.localeCompare(previousLetter, locale) === 1 &&
          isLetter(movie.title);
        previousLetter = currentLetter;
        const inView: boolean | null = visibleImages
          ? visibleImages[index]
          : null;
        return (
          <Fragment key={movie.id}>
            {isNewLetter && (
              <StyledNewLetter>{movie.title.substr(0, 1)}</StyledNewLetter>
            )}
            <MovieItem inView={inView}>
              <StyledSafeLink isIE11={isIE11} to={movie.path}>
                <MovieImage
                  role="img"
                  backgroundImage={
                    inView && movie.metaImage && movie.metaImage.url
                      ? `${movie.metaImage.url}?${makeSrcQueryString(
                          IMAGE_WIDTH * 2,
                        )}`
                      : null
                  }
                  aria-label={movie.metaImage && movie.metaImage.alt}
                  title={movie.title}
                />
                <MovieTextWrapper>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieDescription>{movie.metaDescription}</MovieDescription>
                </MovieTextWrapper>
              </StyledSafeLink>
            </MovieItem>
          </Fragment>
        );
      })}
    </StyledWrapper>
  );
};

export default AllMoviesAlphabetically;
