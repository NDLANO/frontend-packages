/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import AudioSearch from 'ndla-audio-search';
import { headerWithAccessToken, getToken } from '../apiFunctions';

const fetchAudios = (queryObject) => {
  const { query, page, pageSize, locale } = queryObject;
  const queryString = `${ query ? `query=${ query }&` : ''}page=${ page }&page-size=${ pageSize }&language=${ locale }`;
  return new Promise((resolve, reject) => {
    getToken()
      .then(token => {
        fetch(
          `https://test.api.ndla.no/audio-api/v1/audio/?${ queryString }`,
          {
            method: 'GET',
            headers: headerWithAccessToken(token)
          }
        )
      .then(res => {
        if (res.ok)
          return resolve(res.json());
        else
          return res.json().then(json => reject.json());
      })
    })
  });
};

const fetchAudio = id => {
  return new Promise((resolve, reject) => {
    getToken()
      .then(token =>{
        fetch(
          `https://test.api.ndla.no/audio-api/v1/audio/${ id }`,
          {
            method: 'GET',
            headers: headerWithAccessToken(token)
          }
        )
        .then(res => {
          if (res.ok)
            return resolve(res.json());
          else
            return res.json().then(json => reject(json));
        })
      })
  });
};

export const AudioSearcher = () => {
  const audioSelect = audio => {
    console.log(audio);
  };

  const onError = err => {
    console.error(err);
  };

  const defaultQueryObject = {
    query: "",
    page: 1,
    pageSize: 16,
    locale: "nb"
  };

  return (
    <AudioSearch
      searchLanguagePlaceholder="Søkespråk"
      searchPlaceholder="Søk i lydfiler"
      searchButtonTitle="Søk"
      fetchAudio={ fetchAudio }
      searchAudios={ fetchAudios }
      onAudioSelect={ audioSelect }
      onError={ onError }
      queryObject={ defaultQueryObject }
    />
  );
};

export default AudioSearcher;
