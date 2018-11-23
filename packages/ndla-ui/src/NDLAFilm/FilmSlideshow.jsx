/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import BEMHelper from 'react-bem-helper';

import { movieShape } from './FilmFrontpage';
import { OneColumn } from '../Layout';

const classes = new BEMHelper({
  name: 'film-slideshow',
  prefix: 'c-',
});

class FilmSlideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      hideText: false,
    };
    this.slideshow = React.createRef();
  }

  render() {
    const { slideshow } = this.props;
    const { slideIndex: onSlide, hideText } = this.state;
    return (
      <section>
        <ReactSwipe
          ref={this.slideshow}
          {...classes()}
          swipeOptions={{
            continuous: true,
            startSlide: 0,
            speed: 1000,
            auto: 8000,
            disableScroll: true,
            stopPropagation: false,
            callback: () => {
              this.setState({
                hideText: true,
              });
            },
            transitionEnd: slideIndex => {
              this.setState({
                hideText: false,
                slideIndex,
              });
            },
          }}>
          {slideshow.map((slide, index) => (
            <div
              {...classes('item')}
              key={slide.id}
              role="img"
              aria-label={slide.metaData.image.alt}
              style={{ backgroundImage: `url(${slide.metaData.image.img})` }}>
              <div
                {...classes(
                  'text',
                  !hideText && onSlide === index ? 'visible' : '',
                )}>
                <div>
                  <OneColumn>
                    <a href={slide.path}>
                      <h1>{slide.name}</h1>
                    </a>
                    <p>{slide.metaData.description}</p>
                  </OneColumn>
                </div>
              </div>
            </div>
          ))}
        </ReactSwipe>
        <div {...classes('indicator-wrapper')}>
          {slideshow.map((slide, index) => (
            <button
              type="button"
              {...classes(
                'indicator-dot',
                !hideText && index === onSlide ? 'active' : '',
              )}
              onClick={() => this.slideshow.current.slide(index)}
            />
          ))}
        </div>
      </section>
    );
  }
}

FilmSlideshow.propTypes = {
  slideshow: PropTypes.arrayOf(movieShape),
};

FilmSlideshow.defaultProps = {
  slideshow: [],
};

export default FilmSlideshow;
