/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import ImageSearch from 'ndla-image-search';
import { headerWithAccessToken, getToken } from '../apiFunctions';

const fetchImages = (query, page) => {
  const queryString = query
    ? `query=${query}&page=${page}&page-size=16`
    : `page=${page}&page-size=16`;
  return new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://test.api.ndla.no/image-api/v2/images/?${queryString}`, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });
};

const fetchImage = id =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://test.api.ndla.no/image-api/v2/images/${id}`, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return resolve(res.json());
        }
        return res.json().then(json => reject(json));
      });
    });
  });

export const ImageSearcher = () => {
  const imageSelect = image => {
    console.log(image); // eslint-disable-line no-console
  };

  const onError = err => {
    console.error(err); // eslint-disable-line no-console
  };

  return (
    <ImageSearch
      searchPlaceholder="Søk i bilder"
      searchButtonTitle="Søk"
      useImageTitle="Bruk bildet"
      fetchImage={fetchImage}
      searchImages={fetchImages}
      locale="nb"
      onImageSelect={imageSelect}
      onError={onError}
      noResults={<div>Søket gav ingen treff</div>}
    />
  );
};

export default ImageSearcher;
