/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipe from 'react-swipe-component';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, ChevronLeft } from '@ndla/icons/common';

import { movieShape } from './FilmFrontpage';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

class FilmMovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      swiped: 0,
      swiping: false,
    };
    this.swipeDistance = 0;
    this.slideshow = React.createRef();
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
  }

  onSwipeEnd() {
    const moved = Math.round(this.swipeDistance / this.props.columnWidth);
    this.swipeDistance = 0;
    if (moved !== 0) {
      this.setState(prevState => {
        let slideIndex = prevState.slideIndex + moved;
        if (slideIndex > 0) {
          slideIndex = 0;
        } else if (
          slideIndex < -(this.props.movies.length - this.props.columnsPrSlide)
        ) {
          slideIndex = -(this.props.movies.length - this.props.columnsPrSlide);
        }
        return {
          slideIndex,
          swiping: false,
        };
      });
    } else {
      this.setState({
        swiping: false,
      });
    }
  }

  onSwipe(e) {
    this.setState({
      swiping: true,
    });
    this.swipeDistance = e[0];
    this.slideshow.current.style.transform = `translateX(${this.swipeDistance +
      this.state.slideIndex * this.props.columnWidth}px)`;
  }

  slidePage(direction) {
    this.setState(prevState => {
      let slideIndex =
        prevState.slideIndex + this.props.columnsPrSlide * direction;
      if (slideIndex > 0) {
        slideIndex = 0;
      } else if (
        slideIndex < -(this.props.movies.length - this.props.columnsPrSlide)
      ) {
        slideIndex = -(this.props.movies.length - this.props.columnsPrSlide);
      }
      return {
        slideIndex,
      };
    });
  }

  render() {
    const { movies, title, columnWidth, columnsPrSlide, margin } = this.props;
    const { slideIndex, swiping } = this.state;
    const marginString = `${margin}px`;

    return (
      <section {...classes()}>
        <h1 {...classes('heading')} style={{ marginLeft: `${margin + 7}px` }}>
          {title}
        </h1>
        <Swipe
          nodeName="div"
          className="test"
          mouseSwipe={false}
          onSwipeEnd={this.onSwipeEnd}
          onSwipe={this.onSwipe}>
          <div {...classes('slide-wrapper')}>
            <button
              type="button"
              style={{ width: marginString }}
              {...classes('slide-navigation', {
                prev: true,
                hidden: slideIndex === 0,
              })}
              onClick={() => this.slidePage(1)}>
              <ChevronLeft />
            </button>
            <button
              type="button"
              style={{ width: marginString }}
              {...classes('slide-navigation', {
                next: true,
                hidden: slideIndex === -(movies.length - columnsPrSlide),
              })}
              onClick={() => this.slidePage(-1)}>
              <ChevronRight />
            </button>
            <div
              {...classes('slide-content', swiping ? 'swiping' : '')}
              ref={this.slideshow}
              style={{
                padding: `0 ${marginString}`,
                width: `${movies.length * columnWidth + margin * 2}px`,
                transform: `translateX(${this.swipeDistance +
                  slideIndex * columnWidth}px)`,
              }}>
              {movies.map(slide => (
                <a
                  href={slide.path}
                  key={slide.id}
                  {...classes('slide-item')}
                  style={{ width: `${columnWidth}px` }}>
                  <div
                    {...classes('slidecolumn-image')}
                    role="img"
                    aria-label={slide.metaData.image.alt}
                    style={{
                      backgroundImage: `url(${slide.metaData.image.img})`,
                    }}
                  />
                  <h2 {...classes('movie-title')}>{slide.name}</h2>
                </a>
              ))}
            </div>
          </div>
        </Swipe>
      </section>
    );
  }
}

FilmMovieList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  title: PropTypes.string.isRequired,
  columnsPrSlide: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
};

FilmMovieList.defaultProps = {
  movies: [],
};

export default FilmMovieList;
