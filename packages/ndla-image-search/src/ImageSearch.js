/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'ndla-ui';
import BEMHelper from 'react-bem-helper';

import ImageSearchForm from './ImageSearchForm';
import ImageSearchResult from './ImageSearchResult';

const classes = new BEMHelper({
  name: 'image-search',
  prefix: 'c-',
});

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
      totalCount: 0,
      searching: false,
    };

    this.submitImageSearchQuery = this.submitImageSearchQuery.bind(this);
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

  submitImageSearchQuery(query) {
    this.searchImages({ query, page: 1 });
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
          totalCount: result.totalCount,
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
      totalCount,
      searching,
    } = this.state;

    const { query, page } = queryObject;
    const noResultsFound = !searching && images.length === 0;

    return (
      <div {...classes()}>
        <ImageSearchForm
          onSearchQuerySubmit={this.submitImageSearchQuery}
          query={query}
          searching={searching}
          totalCount={totalCount}
          searchPlaceholder={searchPlaceholder}
          searchButtonTitle={searchButtonTitle}
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
      </div>
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
