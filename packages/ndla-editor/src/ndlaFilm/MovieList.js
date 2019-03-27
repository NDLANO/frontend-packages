/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { spacing, shadows } from '@ndla/core';

import MovieListItem from './MovieListItem';

const MOVIE_HEIGHT = 69;

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

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggingIndex: -1,
      deleteIndex: -1,
    };
    this.wrapperRef = React.createRef();
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.deleteFile = this.deleteFile.bind(this);
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
    const { movies, messages } = this.props;
    const { draggingIndex } = this.state;

    return (
      <Wrapper>
        <ListWrapper ref={this.wrapperRef} draggingIndex={draggingIndex}>
          {movies.map((movie, index) => (
            <MovieListItem
              movie={movie}
              messages={messages}
              index={index}
              executeDeleteFile={this.executeDeleteFile}
              showDragTooltip={movies.length > 1 && draggingIndex === -1}
              onDragEnd={this.onDragEnd}
              onDragStart={this.onDragStart}
              deleteFile={this.deleteFile}
              {...this.state}
            />
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
