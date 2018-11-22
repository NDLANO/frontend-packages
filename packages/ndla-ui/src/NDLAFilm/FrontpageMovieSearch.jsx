/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'film-frontpage',
  prefix: 'c-',
});

const FrontpageMovieSearch = ({
  contentSubTypes,
  topics,
  onSearch,
  searchText,
  topicSelected,
  contentTypeSelected,
}) => <div>helllo from search!</div>;

FrontpageMovieSearch.propTypes = {
  contentSubTypes: PropTypes.arrayOf(PropTypes.shape),
  topics: PropTypes.arrayOf(PropTypes.shape),
  onSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  topicSelected: PropTypes.string,
  contentTypeSelected: PropTypes.string,
};

export default FrontpageMovieSearch;
