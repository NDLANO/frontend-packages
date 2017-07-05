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

import ImageSearchForm from './ImageSearchForm';
import ImageSearchResult from './ImageSearchResult';
import * as api from './util/imageApi';

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
    this.submitImageSearchQuery(this.state.queryObject);
  }

  onImageClick(image) {
    if (!this.state.selectedImage || image.id !== this.state.selectedImage.id) {
      api.fetchImage(image.id, this.props.ndlaClient).then((result) => {
        this.setState({ selectedImage: result });
      });
    }
  }

  onSelectImage(image) {
    this.setState({ selectedImage: undefined });
    this.props.onImageSelect(image);
  }
  submitImageSearchQuery(queryObject) {
    this.searchImages({ ...queryObject, page: 1 });
  }

  changeQueryPage(queryObject) {
    this.searchImages(queryObject);
  }

  searchImages(queryObject) {
    this.setState({ searching: true });
    api.search(queryObject.query, queryObject.page, this.props.locale, this.props.ndlaClient).then((result) => {
      this.setState({
        queryObject: {
          query: queryObject.query,
          pageSize: result.pageSize,
          page: queryObject.page,
        },
        images: result.results,
        totalCount: result.totalCount,
        lastPage: result.totalCount / result.pageSize,
        searching: false,
      });
    }).catch(() => {
      this.setState({ searching: false });
    });
  }

  render() {
    const {
      searchPlaceholder,
      searchButtonTitle,
      locale,
    } = this.props;

    const {
      queryObject,
      images,
      selectedImage,
      lastPage,
      totalCount,
      searching,
    } = this.state;

    const { query, page } = queryObject;

    return (
      <div>
        <ImageSearchForm
          onSearchQuerySubmit={this.submitImageSearchQuery}
          query={query}
          searching={searching}
          totalCount={totalCount}
          searchPlaceholder={searchPlaceholder}
          searchButtonTitle={searchButtonTitle}
        />
        <div className="image-search_list">
          {images.map(image =>
            <ImageSearchResult
              key={image.id}
              image={image}
              onImageClick={this.onImageClick}
              selectedImage={selectedImage}
              onSelectImage={this.onSelectImage}
              locale={locale}
            />,
        )}
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
  ndlaClient: PropTypes.shape({
    token: PropTypes.string.isRequired,
    apiUrl: PropTypes.string.isRequired,
  }),
  searchPlaceholder: PropTypes.string.isRequired,
  searchButtonTitle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default ImageSearch;
