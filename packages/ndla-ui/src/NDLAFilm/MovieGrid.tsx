import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { CalculatedCarouselProps } from '@ndla/carousel';
import { useTranslation } from 'react-i18next';
import FilmContentCard from './FilmContentCard';
import { MovieResourceType, MovieType } from './types';
import { setAnimations, StyledHeadingH1 } from './filmStyles';

interface MovieListingProps {
  marginLeft?: number;
}

const MovieListing = styled.div<MovieListingProps>`
  display: flex;
  flex-wrap: wrap;
  margin: ${spacing.small} 0;
  margin-left: ${(props) => props.marginLeft && `${props.marginLeft}px`};
  ${setAnimations()};
  > div {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeIn;
    animation-duration: 300ms;
  }
`;

interface LoadingPlaceholderProps {
  height?: string;
}

const LoadingPlaceholder = styled.div<LoadingPlaceholderProps>`
  height: ${(props) => props.height};
`;

interface Props {
  autoSizedProps: CalculatedCarouselProps;
  resourceTypeName?: MovieResourceType;
  fetchingMoviesByType: boolean;
  moviesByType: MovieType[];
  resourceTypes: MovieResourceType[];
  loadingPlaceholderHeight?: string;
  resizeThumbnailImages?: boolean;
}

const MovieGrid = ({
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  resourceTypes,
  loadingPlaceholderHeight,
  autoSizedProps,
  resizeThumbnailImages,
}: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledHeadingH1 marginLeft={autoSizedProps.margin}>
        {resourceTypeName && resourceTypeName.name}
        <small>
          {fetchingMoviesByType
            ? t('ndlaFilm.loadingMovies')
            : `${moviesByType.length} ${t('ndlaFilm.movieMatchInCategory')}`}
        </small>
      </StyledHeadingH1>
      <MovieListing marginLeft={autoSizedProps.margin}>
        {fetchingMoviesByType && <LoadingPlaceholder height={loadingPlaceholderHeight} />}
        {!fetchingMoviesByType &&
          moviesByType.map((movie, index) => (
            <FilmContentCard
              key={index}
              hideTags
              movie={movie}
              columnWidth={autoSizedProps.columnWidth}
              distanceBetweenItems={autoSizedProps.distanceBetweenItems}
              resourceTypes={resourceTypes}
              resizeThumbnailImages={resizeThumbnailImages}
            />
          ))}
      </MovieListing>
    </section>
  );
};

export default MovieGrid;
