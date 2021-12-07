import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { spacing, spacingUnit, colors, fonts, animations } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { DragHorizontal, DeleteForever } from '@ndla/icons/editor';

const MOVIE_HEIGHT = 69;
const MOVIE_MARGIN = 4;

const MovieListItem = ({
  movie,
  deleteIndex,
  messages: { removeFilm, dragFilm },
  index,
  showDragTooptil,
  executeDeleteFile,
  onDragEnd,
  onDragStart,
  deleteFile,
}) => {
  return (
    <StyledMovieItem
      key={movie.id}
      delete={deleteIndex === index}
      onAnimationEnd={deleteIndex === index ? executeDeleteFile : undefined}>
      <div>
        <StyledMovieImage src={movie.metaImage.url} alt={movie.metaImage.alt} />
        {movie.title}
      </div>
      <div>
        {showDragTooptil ? (
          <Tooltip tooltip={dragFilm}>
            <ButtonIcons
              draggable
              tabIndex={-1}
              type="button"
              onMouseDown={(e) => onDragStart(e, index)}
              onMouseUp={onDragEnd}>
              <DragHorizontal />
            </ButtonIcons>
          </Tooltip>
        ) : (
          <ButtonIcons
            draggable
            tabIndex={-1}
            type="button"
            onMouseDown={(e) => onDragStart(e, index)}
            onMouseUp={onDragEnd}>
            <DragHorizontal />
          </ButtonIcons>
        )}
        <Tooltip tooltip={removeFilm}>
          <ButtonIcons tabIndex={-1} type="button" onClick={() => deleteFile(index)} delete>
            <DeleteForever />
          </ButtonIcons>
        </Tooltip>
      </div>
    </StyledMovieItem>
  );
};

const StyledMovieItem = styled.li`
  margin: ${MOVIE_MARGIN}px 0 0;
  padding: 0;
  background: ${colors.brand.greyLighter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MOVIE_HEIGHT - MOVIE_MARGIN}px;
  max-width: 100%;
  box-sizing: border-box;
  ${fonts.sizes(18, 1.1)};
  font-weight: ${fonts.weight.semibold};
  font-family: ${fonts.sans};
  > div {
    display: flex;
    align-items: center;
    padding: 0 ${spacing.small} 0 calc(${spacing.small} + ${spacing.xsmall});
    &:first-of-type {
      flex-grow: 1;
      padding-left: ${spacing.xsmall};
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${(props) =>
    props.delete &&
    css`
      ${animations.fadeOut()}
    `}
`;

const StyledMovieImage = styled.img`
  width: ${MOVIE_HEIGHT * 1.33}px;
  height: ${MOVIE_HEIGHT - spacingUnit / 2}px;
  object-fit: cover;
  margin-right: ${spacing.small};
`;

const ButtonIcons = styled.button`
  border: 0;
  background: none;
  color: ${colors.brand.primary};
  width: ${spacing.medium};
  height: ${spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border-radius: 100%;
  transition: background 200ms ease;
  &:hover,
  &:focus {
    background: ${colors.brand.light};
  }
  ${(props) =>
    props.delete &&
    css`
      color: ${colors.support.red};
      &:hover,
      &:focus {
        background: ${colors.support.redLight};
      }
    `}
  ${(props) =>
    props.draggable &&
    css`
      cursor: grabbing;
    `};
`;

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  deleteIndex: PropTypes.number,
  removeFilm: PropTypes.string,
  dragFilm: PropTypes.string,
  index: PropTypes.number,
  showDragTooptil: PropTypes.bool,
  executeDeleteFile: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  deleteFile: PropTypes.func,
};

export default MovieListItem;
