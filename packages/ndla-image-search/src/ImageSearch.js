/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { fonts, colors, spacing, mq, breakpoints } from 'ndla-core';
import Pager from 'ndla-pager';
import { FormInput } from 'ndla-forms';
import { Search as SearchIcon } from 'ndla-icons/common';
import BEMHelper from 'react-bem-helper';

/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const ImageSearchWrapper = styled.div`
  .border {
    margin: ${spacing.small} -${spacing.normal};
    height: 1px;
    border-bottom: 1px solid ${colors.brand.lighter};
  }

  .text {
    text-align: center;
  }

  .list-item {
    position: relative;
    float: left;
    height: 210px;
    width: 100%;
    ${mq.range({ from: breakpoints.tablet })} {
      width: 50%;
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      width: 33.3%;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      width: 25%;
    }
    ${mq.range({ from: breakpoints.wide })} {
      width: 20%;
    }
  }

  &__list-item {
    &--active {
      height: inherit;
    }
  }

  &__list {
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
    position: relative;
    margin-left: -0.5em;
    margin-right: -0.5em;
    margin-top: 26px;
  }

  &__list-item-inner {
    padding: 0.5em;
    text-align: center;
    height: 210px;

    .c-image-search__list-item-title {
      margin: 8px 0;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-height: 16px;
      max-height: 48px;
    }
  }

  &__list-item-inner img {
    max-height: 135px;
    max-width: 100%;
    border: 2px solid white;
  }

  &__list-item-inner:hover {
    img {
      border: 2px solid var(--brand-color);
    }
  }

  &__list-item-inner > &__list-item-inner img {
    border: 2px solid var(--brand-color);
  }

  &__list-item--active > &__list-item-inner::after {
    animation: fadeInSearchPreview 300ms ease;
    top: 190px;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-bottom-color: $brand-color--lighter;
    border-width: 20px;
    margin-left: -20px;
  }
}

.c-image-preview {
  animation: fadeInSearchPreview 300ms ease;
  position: relative;
  width: 100%;
  @include mq($from: tablet) {
    width: 200%;
  }
  @include mq($from: tabletWide) {
    width: 300%;
  }
  @include mq(desktop) {
    width: 400%;
  }
  @include mq(wide) {
    width: 500%;
  }
  background-color: $brand-color--lighter;
  border-radius: 2px;
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  &__image {
    width: 50%;
    padding: 1em;
  }

  &__license {
    font-size: 16px;
    line-height: 20px;
  }

  .button {
    padding: 0.7em 1em;
  }

  &__image img {
    max-width: 100%;
    max-height: 300px;
  }

  &__information {
    width: 50%;
    padding: 1em;
    word-break: initial;
  }

  &__information > * {
    margin-top: 1em;
  }

  &__title {
    padding-top: 0;
    margin: 0;
    line-height: 1.3;
  }
  &__text--left {
    width: 20%;
    display: inline-block;
  }

  &__text--right {
    width: 80%;
    display: inline-block;
  }
  &__tags > b {
    display: block;
    margin-bottom: 1em;
  }

  &__tags > .tag_item {
    font-weight: $font-weight-semibold;
    margin-right: 0.5em;
    margin-bottom: 0.4em;
    display: inline-block;
    font-size: 16px;
    line-height: 18px;
  }

  &__tags > .tag_item:hover {
    text-decoration: none;
  }

  .clear {
    clear: both;
  }

  width: 100%;
}

@include mq($from: tablet, $until: tabletWide) {
  .c-image-search {
    &__list-item .c-image-preview {
      width: 200%;
    }
    &__list-item:nth-of-type(2n) .c-image-preview {
      margin-left: -100%;
    }
  }
}
@include mq($from: tabletWide, $until: desktop) {
  .c-image-search {
    &__list-item .c-image-preview {
      width: 300%;
    }
    &__list-item:nth-of-type(3n - 1) .c-image-preview {
      margin-left: -100%;
    }
    &__list-item:nth-of-type(3n) .c-image-preview {
      margin-left: -200%;
    }
  }
}
@include mq($from: desktop, $until: wide) {
  .c-image-search {
    &__list-item .c-image-preview {
      width: 400%;
    }
    &__list-item:nth-of-type(4n - 2) .c-image-preview {
      margin-left: -100%;
    }
    &__list-item:nth-of-type(4n - 1) .c-image-preview {
      margin-left: -200%;
    }
    &__list-item:nth-of-type(4n) .c-image-preview {
      margin-left: -300%;
    }
  }
}
@include mq(wide) {
  .c-image-search {
    &__list-item .c-image-preview {
      width: 500%;
    }
    &__list-item:nth-of-type(5n - 3) .c-image-preview {
      margin-left: -100%;
    }
    &__list-item:nth-of-type(5n - 2) .c-image-preview {
      margin-left: -200%;
    }
    &__list-item:nth-of-type(5n - 1) .c-image-preview {
      margin-left: -300%;
    }
    &__list-item:nth-of-type(5n) .c-image-preview {
      margin-left: -400%;
    }
  }
}

@keyframes fadeInSearchPreview {
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    opacity: 0;
    display: flex;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
`;

import ImageSearchResult from './ImageSearchResult';

const classes = new BEMHelper({
  name: 'image-search',
  prefix: 'c-',
});

const searchIconClass = css`
  border: 0;
  background: transparent;
  margin: 0;
  padding: 0;
`;

class ImageSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      queryObject: {
        query: undefined,
        page: 1,
        pageSize: 16,
      },
      images: [],
      selectedImage: undefined,
      lastPage: 0,
      searching: false,
    };

    this.changeQueryPage = this.changeQueryPage.bind(this);
    this.searchImages = this.searchImages.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
    this.onSelectImage = this.onSelectImage.bind(this);
  }

  componentDidMount() {
    this.searchImages(this.state.queryObject);
  }

  onImageClick(image) {
    if (!this.state.selectedImage || image.id !== this.state.selectedImage.id) {
      this.props
        .fetchImage(image.id)
        .then(result => {
          this.setState({ selectedImage: result });
        })
        .catch(err => {
          this.props.onError(err);
        });
    }
  }

  onSelectImage(image) {
    this.setState({ selectedImage: undefined });
    this.props.onImageSelect(image);
  }

  changeQueryPage(queryObject) {
    this.searchImages(queryObject);
  }

  searchImages(queryObject) {
    this.setState({ searching: true });
    this.props
      .searchImages(queryObject.query, queryObject.page, this.props.locale)
      .then(result => {
        this.setState({
          queryObject: {
            query: queryObject.query,
            pageSize: result.pageSize,
            page: queryObject.page,
          },
          images: result.results,
          lastPage: Math.ceil(result.totalCount / result.pageSize),
          searching: false,
        });
      })
      .catch(err => {
        this.props.onError(err);
        this.setState({ searching: false });
      });
  }

  render() {
    const { searchPlaceholder, searchButtonTitle, useImageTitle } = this.props;

    const {
      queryObject,
      images,
      selectedImage,
      lastPage,
      searching,
    } = this.state;

    const { page } = queryObject;
    const noResultsFound = !searching && images.length === 0;

    return (
      <ImageSearchWrapper>
        <FormInput
          placeholder={searchPlaceholder}
          focusOnMount
          iconRight={
            <button
              className={searchIconClass}
              aria-label={searchButtonTitle}
              type="button"
              onClick={() => {
                this.searchImages({ query: this.state.queryString, page: 1 });
              }}>
              <SearchIcon />
            </button>
          }
          container="div"
          value={this.state.queryString}
          onChange={e => this.setState({ queryString: e.target.value })}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.searchImages({ query: this.state.queryString, page: 1 });
            }
          }}
        />
        {noResultsFound && this.props.noResults}
        <div {...classes('list')}>
          {images.map(image => (
            <ImageSearchResult
              key={image.id}
              image={image}
              onImageClick={this.onImageClick}
              selectedImage={selectedImage}
              onSelectImage={this.onSelectImage}
              useImageTitle={useImageTitle}
            />
          ))}
        </div>
        <Pager
          page={page ? parseInt(page, 10) : 1}
          pathname=""
          lastPage={lastPage}
          query={queryObject}
          onClick={this.searchImages}
          pageItemComponentClass="button"
        />
      </ImageSearchWrapper>
    );
  }
}

ImageSearch.propTypes = {
  onImageSelect: PropTypes.func.isRequired,
  searchImages: PropTypes.func.isRequired,
  fetchImage: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  useImageTitle: PropTypes.string.isRequired,
  noResults: PropTypes.node,
};

export default ImageSearch;
