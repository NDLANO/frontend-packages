/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { spacing, colors, fonts, animations, misc, shadows } from '@ndla/core';
import Tooltip from '@ndla/tooltip';
import { DragHorizontal, DeleteForever } from '@ndla/icons/editor';

const MOVIE_HEIGHT = 69;
const MOVIE_MARGIN = 4;

const StyledMovieImage = styled.img`
  width: ${MOVIE_HEIGHT * 1.33}px;
  height: ${MOVIE_HEIGHT - spacing.spacingUnit / 2}px;
  object-fit: cover;
  margin-right: ${spacing.small};
`;

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
    &:first-child {
      flex-grow: 1;
      padding-left: ${spacing.xsmall};
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
  ${props =>
    props.delete &&
    css`
      ${animations.fadeOut()}
    `}
`;

const Wrapper = styled.div`
  margin: ${spacing.normal} 0;
`;

const ListWrapper = styled.ul`
  overflow: visible;
  margin: 0 0
    ${props =>
      props.draggingIndex > -1
        ? `${MOVIE_HEIGHT + spacing.spacingUnit * 0.75}px`
        : '0'};
  padding: 0;
  position: relative;
  list-style: none;
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
  ${props =>
    props.delete &&
    css`
      color: ${colors.support.red};
      &:hover,
      &:focus {
        background: ${colors.support.redLight};
      }
    `}
  ${props =>
    props.draggable &&
    css`
      cursor: grabbing;
    `};
`;

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggingIndex: -1,
      deleteIndex: -1,
    };
    this.wrapperRef = React.createRef();
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.executeDeleteFile = this.executeDeleteFile.bind(this);
  }

  deleteFile(deleteIndex) {
    this.setState({
      deleteIndex,
    });
  }

  executeDeleteFile() {
    const { movies, id } = this.props;
    movies.splice(this.state.deleteIndex, 1);
    this.setState(
      {
        deleteIndex: -1,
      },
      () => this.props.onUpdateMovies(movies, id),
    );
  }

  updateTransforms(dragIndex) {
    Array.from(this.wrapperRef.current.childNodes.values()).forEach(
      (node, index) => {
        if (index !== this.initialPosition) {
          const value = index >= dragIndex ? MOVIE_HEIGHT : 0;
          node.style.transform = `translateY(${value}px)`;
        }
      },
    );
  }

  onDragStart(e, dragIndex) {
    e.preventDefault();
    this.mouseMovement = -MOVIE_HEIGHT + dragIndex * MOVIE_HEIGHT;
    this.initialPosition = dragIndex;

    this.updateTransforms(dragIndex);

    this.DraggingFile = this.wrapperRef.current.childNodes[dragIndex];
    this.DraggingFile.style.width = `${
      this.DraggingFile.getBoundingClientRect().width
    }px`;
    this.DraggingFile.style.position = 'absolute';
    this.DraggingFile.style.top = 0;
    this.DraggingFile.style.zIndex = 9999;
    this.DraggingFile.style.boxShadow = shadows.levitate1;
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement +
      MOVIE_HEIGHT}px)`;

    this.setState(
      {
        draggingIndex: dragIndex,
      },
      () => {
        // Add transitions
        Array.from(this.wrapperRef.current.childNodes.values()).forEach(
          node => {
            node.style.transition = 'transform 100ms ease';
          },
        );
        this.DraggingFile.style.transition = 'box-shadow 100ms ease';
      },
    );

    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd);
  }

  onDragEnd() {
    window.removeEventListener('mousemove', this.onDragging);
    window.removeEventListener('mouseup', this.onDragEnd);
    const { movies, id } = this.props;
    // Rearrange movies
    const toIndex = this.state.draggingIndex;
    const moveFile = movies[this.initialPosition];
    movies.splice(this.initialPosition, 1);
    movies.splice(toIndex, 0, moveFile);
    this.props.onUpdateMovies(movies, id);

    this.setState({
      draggingIndex: -1,
    });

    Array.from(this.wrapperRef.current.childNodes.values()).forEach(
      (node, index) => {
        node.style.transition = 'none';
        node.style.transform = 'none';
      },
    );

    this.DraggingFile.style.width = 'auto';
    this.DraggingFile.style.position = 'static';
    this.DraggingFile.style.zIndex = 0;
    this.DraggingFile.style.boxShadow = 'none';
  }

  onDragging(e) {
    this.mouseMovement += e.movementY;
    const currentPosition = Math.max(
      Math.ceil((this.mouseMovement + MOVIE_HEIGHT / 2) / MOVIE_HEIGHT),
      0,
    );
    const addToPosition = this.initialPosition < currentPosition ? 1 : 0;
    const dragIndex = Math.min(
      this.props.movies.length,
      Math.max(currentPosition, 0),
    );
    this.DraggingFile.style.transform = `translateY(${this.mouseMovement +
      MOVIE_HEIGHT}px)`;
    this.updateTransforms(dragIndex + addToPosition);
    if (this.state.draggingIndex !== dragIndex) {
      this.setState({
        draggingIndex: dragIndex,
      });
    }
  }

  render() {
    const {
      movies,
      messages: { removeFilm, dragFilm },
    } = this.props;
    const { draggingIndex, deleteIndex } = this.state;

    return (
      <Wrapper>
        <ListWrapper innerRef={this.wrapperRef} draggingIndex={draggingIndex}>
          {movies.map((movie, index) => (
            <StyledMovieItem
              key={movie.id}
              delete={deleteIndex === index}
              onAnimationEnd={
                deleteIndex === index ? this.executeDeleteFile : undefined
              }>
              <div>
                <StyledMovieImage
                  src={movie.metaImage.url}
                  alt={movie.metaImage.alt}
                />
                {movie.title}
              </div>
              <div>
                {movies.length > 1 &&
                  (draggingIndex === -1 ? (
                    <Tooltip tooltip={dragFilm}>
                      <ButtonIcons
                        draggable
                        tabIndex={-1}
                        type="button"
                        onMouseDown={e => this.onDragStart(e, index)}
                        onMouseUp={this.onDragEnd}>
                        <DragHorizontal />
                      </ButtonIcons>
                    </Tooltip>
                  ) : (
                    <ButtonIcons
                      draggable
                      tabIndex={-1}
                      type="button"
                      onMouseDown={e => this.onDragStart(e, index)}
                      onMouseUp={this.onDragEnd}>
                      <DragHorizontal />
                    </ButtonIcons>
                  ))}
                <Tooltip tooltip={removeFilm}>
                  <ButtonIcons
                    tabIndex={-1}
                    type="button"
                    onClick={() => this.deleteFile(index)}
                    delete>
                    <DeleteForever />
                  </ButtonIcons>
                </Tooltip>
              </div>
            </StyledMovieItem>
          ))}
        </ListWrapper>
      </Wrapper>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
  id: PropTypes.string.isRequired,
  messages: PropTypes.shape({
    removeFilm: PropTypes.string.isRequired,
    dragFilm: PropTypes.string.isRequired,
  }).isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
